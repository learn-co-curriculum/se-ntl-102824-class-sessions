class MySet:

    def __init__(self, list=[]):
        self.dictionary = {}
        for value in list:
            self.dictionary[value] = True

    def add(self, value):
        self.dictionary[value] = True
