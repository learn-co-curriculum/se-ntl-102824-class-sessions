class MySet:

    def __init__(self, list=[]):
        self.dictionary = {}
        for value in list:
            self.dictionary[value] = True

    def add(self, value):
        self.dictionary[value] = True

    def has(self, value):
        return value in self.dictionary

    def delete(self, value):
        del self.dictionary[value]

    def size(self):
        return len(self.dictionary)
