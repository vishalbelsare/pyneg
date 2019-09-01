from atomic_constraint import AtomicConstraint
from offer import Offer
from typing import Optional
from enum import Enum, auto


class MessageType(Enum):
    empty = auto(),
    terminate = auto(),
    offer = auto(),
    accept = auto()


class Message():
    def __init__(self, sender_name: str,
                 recipient_name: str,
                 type_: MessageType,
                 offer: Optional[Offer],
                 constraint: Optional[AtomicConstraint] = None):

        self.sender_name: str = sender_name
        self.recipient_name: str = recipient_name
        if type_ == MessageType.empty:
            if offer:
                raise ValueError("empty message cannot have an offer")
            self.type_: MessageType = MessageType.empty
            self.offer: Optional[Offer] = None
            self.constraint: Optional[AtomicConstraint] = None
            return

        if not offer and type_ != MessageType.terminate:
            raise ValueError("Non empty message must have an offer")
        self.type_ = type_
        self.offer = offer
        self.constraint = constraint
        return

    def is_empty(self) -> bool:
        return self.type_ == MessageType.empty

    def is_acceptance(self) -> bool:
        return self.type_ == MessageType.accept

    def is_termination(self) -> bool:
        return self.type_ == MessageType.terminate

    def has_constraint(self) -> bool:
        return self.constraint is not None

    def is_offer(self) -> bool:
        return self.type_ == MessageType.offer

    def get_constraint(self) -> Optional[AtomicConstraint]:
        return self.constraint

    def __hash__(self):
        return hash([self.sender_name, self.recipient_name, self.type_, self.offer, self.constraint])

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Message):
            # print("unequal class")
            return False

        if other.type_ != self.type_:
            # print("unequal kind")
            return False

        if other.offer != self.offer:
            # print(self.offer)
            # print(other.offer)
            # print("unequal offer")
            return False

        if other.constraint != self.constraint:
            # print("unequal constraint")
            return False

        return True

    def __repr__(self) -> str:

        if not self.offer:
            return "Message({sender}, {recip}, {type_})".format(
                sender=self.sender_name,
                recip=self.recipient_name,
                type_=self.type_)

        if self.constraint:
            return "Message({sender}, {recip}, {type_}, \n{offer}, \n{constraint}\n)".format(
                sender=self.sender_name,
                recip=self.recipient_name,
                type_=self.type_,
                offer=self.offer,
                constraint=self.constraint)
        else:
            return "Message({sender}, {recip}, {type_}, \n{offer}\n)".format(
                sender=self.sender_name,
                recip=self.recipient_name,
                type_=self.type_,
                offer=self.offer)