import ipdb
from list import LinkedList
from node import Node

my_list = LinkedList()
stuart = Node("Stuart")
jacq = Node("Jacqueline")
kelsey = Node("Kelsey")
nem = Node("Nem")
my_list.append(stuart)
my_list.append(jacq)
my_list.prepend(kelsey)
my_list.print()
my_list.insert_after(2, nem)
my_list.print()
print(my_list.search("Kelsey"))
print(my_list.search("Baxter"))
my_list.insert_after_target("Nem", Node("Elchonon"))
my_list.print()
my_list.remove_tail()
my_list.print()

ipdb.set_trace()
