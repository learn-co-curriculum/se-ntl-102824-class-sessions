#!/usr/bin/env python3
import ipdb
from classes.many_to_many import Coffee, Customer, Order

if __name__ == "__main__":
    print("HELLO! :) let's debug")

    coffee_1 = Coffee("Mocha")
    coffee_2 = Coffee("Vanilla Latte")

    customer = Customer("Steve")
    customer_2 = Customer("Dima")

    customer.create_order(coffee_1, 5.95)
    customer.create_order(coffee_2, 4.99)
    customer_2.create_order(coffee_1, 4.85)
    customer_2.create_order(coffee_2, 5.55)

    ipdb.set_trace()
