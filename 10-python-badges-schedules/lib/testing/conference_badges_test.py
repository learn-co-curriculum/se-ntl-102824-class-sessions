from conference_badges import (
    badge_maker, batch_badge_creator,
    assign_rooms, printer
)

import io
import sys

class TestConferenceBadges:
    '''Module conference_badges.py'''

    NAMES = ["Guido", "Edsger", "Ada", "Charles", "Alan", "Grace", "Linus", "Matz"]
    
    BADGES = [
        "Hello, my name is Guido.",
        "Hello, my name is Edsger.",
        "Hello, my name is Ada.",
        "Hello, my name is Charles.",
        "Hello, my name is Alan.",
        "Hello, my name is Grace.",
        "Hello, my name is Linus.",
        "Hello, my name is Matz."
      ]

    MESSAGES = [
        "Hello, Guido! You'll be assigned to room 1!", 
        "Hello, Edsger! You'll be assigned to room 2!", 
        "Hello, Ada! You'll be assigned to room 3!", 
        "Hello, Charles! You'll be assigned to room 4!", 
        "Hello, Alan! You'll be assigned to room 5!", 
        "Hello, Grace! You'll be assigned to room 6!", 
        "Hello, Linus! You'll be assigned to room 7!", 
        "Hello, Matz! You'll be assigned to room 8!"
    ]

    PRINTED = '''Hello, my name is Guido.\nHello, my name is Edsger.\nHello, my name is Ada.\nHello, my name is Charles.\nHello, my name is Alan.\nHello, my name is Grace.\nHello, my name is Linus.\nHello, my name is Matz.\nHello, Guido! You'll be assigned to room 1!\nHello, Edsger! You'll be assigned to room 2!\nHello, Ada! You'll be assigned to room 3!\nHello, Charles! You'll be assigned to room 4!\nHello, Alan! You'll be assigned to room 5!\nHello, Grace! You'll be assigned to room 6!\nHello, Linus! You'll be assigned to room 7!\nHello, Matz! You'll be assigned to room 8!\n'''

    def test_makes_badge(self):
        '''contains a function "badge_maker()" that creates and returns a badge.'''
        assert(badge_maker("Guido van Rossum") == "Hello, my name is Guido van Rossum.")

    def test_batch_badge_creator(self):
      '''contains a function "batch_badge_creator()" that creates and returns a list of badges.'''
      assert(type(batch_badge_creator(TestConferenceBadges.NAMES)) == list)
      assert(batch_badge_creator(TestConferenceBadges.NAMES) == TestConferenceBadges.BADGES)

    def test_assign_rooms(self):
        '''contains a function "assign_rooms" that returns a list of welcome messages and room assignments.'''
        assert(type(assign_rooms(TestConferenceBadges.NAMES)) == list)
        assert(assign_rooms(TestConferenceBadges.NAMES) == TestConferenceBadges.MESSAGES)

    def test_printer(self):
        '''contains a function "printer" that outputs the list of badges and room assignments.'''
        captured_out = io.StringIO()
        sys.stdout = captured_out
        printer(TestConferenceBadges.NAMES)
        sys.stdout = sys.__stdout__
        assert(captured_out.getvalue() == TestConferenceBadges.PRINTED)
