from typing import List, Tuple, cast, Dict, Union, Set
from copy import deepcopy
from problog.program import PrologString
from problog import get_evaluatable
from problog.tasks.dtproblog import dtproblog
from pyneg.comms import Offer
from pyneg.types import NegSpace, NestedDict, AtomicDict
from pyneg.utils import nested_dict_from_atom_dict, atom_from_issue_value, atom_dict_from_nested_dict
from .evaluators import Evaluator
from .strategy import Strategy
from numpy.random import choice
from re import search
from queue import Queue
from numpy import isclose


class Generator():
    '''
    Generator empty class that is used soley for type annotations

    :raises NotImplementedError
    :raises NotImplementedError
    '''

    def __init__(self):
        raise NotImplementedError()

    def generate_offer(self) -> Offer:
        raise NotImplementedError()

    def add_utilities(self, new_utils: AtomicDict) -> None:
        raise NotImplementedError()

    def set_utilities(self, new_utils: AtomicDict) -> None:
        raise NotImplementedError()


class EnumGenerator(Generator):
    def __init__(self, neg_space: NegSpace,
                 utilities: AtomicDict,
                 evaluator: Evaluator,
                 acceptability_prec: float) -> None:
        self.neg_space = neg_space
        self.utilities = utilities
        self.evaluator = evaluator
        self.acceptability_prec = acceptability_prec
        self.generator_ready = False
        self.last_offer_util = 2**32

        # convert to strings for callers' convinience
        for issue in self.neg_space.keys():
            self.neg_space[issue] = list(map(str, self.neg_space[issue]))

    def add_utilities(self, new_utils: AtomicDict) -> None:
        self.utilities = {
            **self.utilities,
            **new_utils
        }

    def init_generator(self) -> None:
        nested_utils: NestedDict = nested_dict_from_atom_dict(self.utilities)

        # function to sort a list of tuples according to the second tuple field
        # in decreasing order so we can quickly identify candidates for the next offer
        def sorter(issue: str) -> List[Tuple[str, int]]:
            return cast(List[Tuple[str, int]],
                        sorted(
                            nested_utils[issue].items(),
                            reverse=True,
                            key=lambda tup: tup[1]))

        # Create dictionary of lists of value assignements by issue sorted
        # by utility in dec order
        # example: {"boolean_True":10,"boolean_False":100} => {"boolean": ["False","True"]}
        self.sorted_utils: Dict[str, List[str]] = {issue:
                                                   list(
                                                       map(lambda tup: tup[0], sorter(issue)))
                                                   for issue in self.neg_space.keys()}

        self.current_assignement_indices = {
            issue: 0 for issue in self.neg_space.keys()}

        # offer counter is only really used to tell if have made an offer before
        # otherwise it's just an interesting stat
        self.offer_counter = 0
        self.generator_ready = True

    def generate_fisrt_offer(self) -> Offer:
        first_offer = self.offer_from_index_dict(
            self.current_assignement_indices)
        self.max_util = self.evaluator.calc_offer_utility(first_offer)
        self.acceptability_threshold = self.max_util * self.acceptability_prec
        if self.evaluator.calc_offer_utility(first_offer) < self.acceptability_threshold:
            raise StopIteration()
        self.offer_counter += 1
        self.last_offer_util = self.max_util
        return first_offer

    def generate_offer(self) -> Offer:
        if not self.generator_ready:
            self.init_generator()
            return self.generate_fisrt_offer()

        # if we have not yet generated any offers, simply return the first one
        # we have generted offers so we have to pick from the list
        # N potential offers we can obtain by picking the next best
        # for every issue we store the utility we would get
        # if we were to choose the next best value assignement for that issue
        # that way we can choose the next best offer, and also know which issue
        # we incremented so we cna update our current state
        util_by_issue_to_incr = {}

        # make a potential offer by choosing a different value for each issue
        # then we can choose the best from those
        for issue_to_incr in self.neg_space.keys():

            potential_offer_indeces = deepcopy(
                self.current_assignement_indices)
            potential_offer_indeces[issue_to_incr] = (
                potential_offer_indeces[issue_to_incr] + 1) % len(self.sorted_utils[issue_to_incr])
            potential_offer = self.offer_from_index_dict(
                potential_offer_indeces)
            util_by_issue_to_incr[issue_to_incr] = self.evaluator.calc_offer_utility(
                potential_offer)

        issue_to_incr = ""
        max_util = -(2.0 ** 32)
        for issue, util in util_by_issue_to_incr.items():
            if util > max_util and util >= self.acceptability_threshold:
                issue_to_incr = issue
                max_util = util

        if issue_to_incr == "":
                # we weren't able to find anything that is still acceptable
            raise StopIteration()

        self.current_assignement_indices[issue_to_incr] += 1
        self.offer_counter += 1
        self.last_offer_util = max_util

        return self.offer_from_index_dict(self.current_assignement_indices)

    def offer_from_index_dict(self, index_dict: Dict[str, int]) -> Offer:
        offer: NestedDict = {}
        for issue in index_dict.keys():
            offer[issue] = {}
            chosen_value: str = self.sorted_utils[issue][index_dict[issue]]
            for value in self.neg_space[issue]:
                if value == chosen_value:
                    offer[issue][value] = 1
                else:
                    offer[issue][value] = 0

        return Offer(offer)


class RandomGenerator(Generator):
    def __init__(self,
                 neg_space: NegSpace,
                 utilities: AtomicDict,
                 evaluator: Evaluator,
                 non_agreement_cost: float,
                 kb: List[str],
                 acceptability_prec: float,
                 max_generation_tries: int = 500):

        self.utilities = utilities
        self.kb = kb
        self.neg_space = neg_space
        self.non_agreement_cost = non_agreement_cost
        self.evaluator = evaluator
        self.init_uniform_strategy(neg_space)
        self.max_generation_tries = max_generation_tries

        # we need something like DTP to find the max possible utility
        # so we sneakily use that and then delete it again
        temp_gen = DTPGenerator(
            neg_space, utilities, non_agreement_cost, kb, acceptability_prec)
        self.acceptability_threshold = temp_gen.acceptability_threshold
        del temp_gen

    def init_uniform_strategy(self, neg_space: NegSpace) -> None:
        strat_dict: Dict[str, Dict[str, float]] = {}
        for issue in neg_space.keys():
            if issue not in strat_dict.keys():
                strat_dict[issue] = {}
            for val in neg_space[issue]:
                strat_dict[issue][str(val)] = 1 / len(neg_space[issue])

        self.strategy = Strategy(strat_dict)

    def generate_offer(self) -> Offer:
        for _ in range(self.max_generation_tries):

            offer: Dict[str, Dict[str, float]] = {}
            for issue in self.neg_space.keys():
                # convert to two lists so we can use numpy's choice
                values, probs = zip(
                    *self.strategy.get_value_dist(issue).items())
                chosen_value = choice(values, p=probs)

                offer[issue] = {
                    key: 0 for key in self.strategy.get_value_dist(issue).keys()}
                offer[issue][chosen_value] = 1
            possible_offer = Offer(offer)
            if self.evaluator.accepts(possible_offer):
                return possible_offer


class DTPGenerator(Generator):

    def __init__(self,
                 neg_space: NegSpace,
                 utilities: AtomicDict,
                 non_agreement_cost: float,
                 acceptability_threshold: float,
                 kb: List[str]):

        self.utilities = utilities
        self.kb = kb
        self.neg_space = {issue: list(map(str, values))
                          for issue, values in neg_space.items()}
        self.non_agreement_cost = non_agreement_cost
        self.acceptability_threshold = acceptability_threshold
        self.reset_generator()

    def reset_generator(self):
        self.generated_offers = {}
        self.offer_queue = []

    def add_utilities(self, new_utils: AtomicDict) -> None:
        self.utilities = {
            **self.utilities,
            **new_utils
        }

    def compile_dtproblog_model(self):
        dtp_decision_vars = ""
        for issue in self.neg_space.keys():
            atom_list = []
            for value in self.neg_space[issue]:
                atom_list.append("?::{atom}".format(
                    atom=atom_from_issue_value(issue, value)))
            dtp_decision_vars += ";".join(
                atom_list) + ".\n"

        utility_string = ""
        for u, r in self.utilities.items():
            utility_string += "utility({},{}).\n".format(u, r)

        # we have to make sure we offset the utility of previously generated
        # offers so dtproblog won't generate them again
        offer_count = 0
        for sparse_offer, util in self.generated_offers.items():
            config_string = ",".join(
                list(map(lambda x: atom_from_issue_value(x[0], x[1]), sparse_offer))) + "."
            utility_string += "offer{} :- {}\n".format(
                offer_count, config_string)
            utility_string += "utility(offer{},{}).\n".format(
                offer_count, -util + self.non_agreement_cost)
            offer_count += 1

        kb_string = "\n".join(self.kb) + "\n"
        return dtp_decision_vars + kb_string + utility_string

    def extend_partial_offer(self, partial_offer) -> Set[Offer]:
        partial_offer_queue = []
        partial_offer_queue.append(partial_offer)
        full_offers = set()
        while len(partial_offer_queue) > 0:
            partial_offer = nested_dict_from_atom_dict(
                partial_offer_queue.pop())
            # make sure we cover all of the issues
            for issue in self.neg_space.keys():
                if issue not in partial_offer.keys():
                    partial_offer[issue] = {
                        value: 0.0 for value in self.neg_space[issue]}

            # make sure the issues cover all values
            for issue in self.neg_space.keys():
                for value in self.neg_space[issue]:
                    if value not in partial_offer[issue].keys():
                        partial_offer[issue][value] = 0.0

            # if an issue didn't have any utilities we can use that
            # to make lateral moves for free.
            for issue in self.neg_space.keys():
                if isclose(sum(partial_offer[issue].values()), 0):
                    for value in self.neg_space[issue]:
                        partial_offer_copy = deepcopy(partial_offer)
                        partial_offer_copy[issue][value] = 1.0
                        partial_atom_dict = atom_dict_from_nested_dict(
                            partial_offer_copy)
                        partial_offer_queue.append(partial_atom_dict)

            try:
                # is the partial offer valid? (Offer will raise valueerror if not)
                full_offer = Offer(partial_offer)
                full_offers.add(full_offer)
            except ValueError:
                continue

        return full_offers

    def clean_query_output(self, query_output: Dict) -> Dict:
        return_dict = {}
        for atom, prob in query_output.items():
            # sometimes dtproblog can return things like "choice(0,0,boolean_true)" so we need to filter that out
            s = search(r"(\'?[A-z0-9|\.]+\_[A-z0-9|\.]+\'?)", str(atom))
            clean_atom = s.group(0)
            return_dict[clean_atom] = prob

        return return_dict

    def generate_offer(self) -> Offer:
        if len(self.offer_queue) == 0:
            program = PrologString(self.compile_dtproblog_model())
            query_output, score, _ = dtproblog(program)

            # score of offers are now below acceptability threshold
            # so we should terminate
            if score < self.acceptability_threshold:
                raise StopIteration()
            cleaned_query_output = self.clean_query_output(query_output)
            extended_offers = self.extend_partial_offer(cleaned_query_output)

            for offer in extended_offers:
                if offer not in self.generated_offers.keys():
                    self.generated_offers[offer.get_sparse_repr()] = score
                    self.offer_queue.append(offer)

        if len(self.offer_queue) == 0:
            raise RuntimeError()

        return self.offer_queue.pop()
