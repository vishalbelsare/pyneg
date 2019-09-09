from copy import deepcopy
from queue import PriorityQueue
from typing import List, Tuple, cast, Dict

from pyneg.comms import Offer
from pyneg.types import NegSpace, NestedDict, AtomicDict
from pyneg.utils import nested_dict_from_atom_dict
from .evaluator import Evaluator
from .generator import Generator


class EnumGenerator(Generator):
    def __init__(self, neg_space: NegSpace,
                 utilities: AtomicDict,
                 evaluator: Evaluator,
                 acceptability_threshold: float) -> None:
        self.neg_space = {issue: list(map(str, values))
                          for issue, values in neg_space.items()}
        self.utilities = utilities
        self.evaluator = evaluator
        self.acceptability_threshold = acceptability_threshold
        self.assignement_frontier: PriorityQueue = PriorityQueue()
        self.init_generator()
        # self.last_offer_util = 2**32

    def add_utilities(self, new_utils: AtomicDict) -> None:
        self.utilities = {
            **self.utilities,
            **new_utils
        }

    def init_generator(self) -> None:
        self.assignement_frontier = PriorityQueue()
        nested_utils = nested_dict_from_atom_dict(self.utilities)
        for issue in self.neg_space.keys():
            if issue not in nested_utils.keys():
                nested_utils[issue] = {value:0.0 for value in self.neg_space[issue]}
                continue
            for value in self.neg_space[issue]:
                if value not in nested_utils[issue].keys():
                    nested_utils[issue][value] = 0.0



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
            for issue in nested_utils.keys()}
        # for issue in self.neg_space.keys():
        #     if issue not in self.sorted_utils.keys():
        #         self.sorted_utils[issue] = self.neg_space[issue]
        #     for value in self.neg_space[issue]:
        #         if not value in self.sorted_utils[issue]:
        #             self.sorted_utils[issue].append(value)

        best_offer_indices = {issue: 0 for issue in self.neg_space.keys()}
        self.offer_counter = 0
        self.generated_offers = set()

        offer = self.offer_from_index_dict(best_offer_indices)
        if self.accepts(offer):
            util = self.evaluator.calc_offer_utility(offer)
            # index by -util to get a max priority queue instead of the standard min
            # use offer_counter to break ties
            self.assignement_frontier.put(
                (-util, self.offer_counter, best_offer_indices))
            self.generated_offers.add(
                self.offer_from_index_dict(best_offer_indices))

    def accepts(self, offer: Offer) -> bool:
        util = self.evaluator.calc_offer_utility(offer)
        return util >= self.acceptability_threshold

    def expland_assignment(self, sorted_offer_indices):
        for issue in self.neg_space.keys():
            copied_offer_indices = deepcopy(sorted_offer_indices)
            if copied_offer_indices[issue] + 1 >= len(self.sorted_utils[issue]):
                continue
            copied_offer_indices[issue] += 1
            offer = self.offer_from_index_dict(copied_offer_indices)
            util = self.evaluator.calc_offer_utility(offer)
            if util >= self.acceptability_threshold and self.offer_from_index_dict(
                    copied_offer_indices) not in self.generated_offers:
                self.assignement_frontier.put(
                    (-util, self.offer_counter, copied_offer_indices))
                self.generated_offers.add(
                    self.offer_from_index_dict(copied_offer_indices))

    def generate_offer(self) -> Offer:
        if self.assignement_frontier.empty():
            raise StopIteration()

        self.offer_counter += 1
        negative_util, offer_counter, indices = self.assignement_frontier.get()
        self.expland_assignment(indices)
        return self.offer_from_index_dict(indices)

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
