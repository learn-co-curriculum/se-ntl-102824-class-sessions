class Coffee:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if isinstance(value, str) and len(value) >= 3 and not hasattr(self, "name"):
            self._name = value
        else:
            raise Exception("name already exists")

    def orders(self):  # returns the one-to-many relationship
        return [order for order in Order.all if order.coffee == self]

    def customers(self):  # returns the many-to-many relationship
        return list(set([order.customer for order in self.orders()]))

    def num_orders(self):
        return len(self.orders())

    def average_price(self):
        pass


class Customer:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if type(value) == str and 1 <= len(value) <= 15:
            self._name = value
        else:
            raise Exception("Name must be string between 1 and 15 characters")

    def orders(self):
        return [order for order in Order.all if order.customer == self]

    def coffees(self):
        return [*set([order.coffee for order in self.orders()])]

    def create_order(self, coffee, price):
        return Order(self, coffee, price)


class Order:

    all = []  # single-source of truth

    def __init__(self, customer, coffee, price):
        self.customer = customer
        self.coffee = coffee
        self.price = price
        self.__class__.all.append(self)

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, value):
        if (
            isinstance(value, float)
            and 1.0 <= value <= 10.0
            and not hasattr(self, "price")
        ):
            self._price = value
        else:
            raise Exception

    @property
    def customer(self):
        return self._customer

    @customer.setter
    def customer(self, value):
        if isinstance(value, Customer):
            self._customer = value
        else:
            raise Exception

    @property
    def coffee(self):
        return self._coffee

    @coffee.setter
    def coffee(self, value):
        if isinstance(value, Coffee):
            self._coffee = value
        else:
            raise Exception
