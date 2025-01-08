class LinkedList:
    def __init__(self, head=None):
        self.head = head
        self.length = 0

    def append(self, new_node):
        self.length += 1
        if not self.head:
            self.head = new_node
            return self
        current_node = self.head
        while current_node.next:
            current_node = current_node.next
        current_node.next = new_node

        return self

    def prepend(self, new_node):
        self.length += 1
        if not self.head:
            self.head = new_node
            return self
        new_node.next = self.head
        self.head = new_node
        return self

    def insert_after(self, index, new_node):
        if index > self.length:
            return "index is out of range"
        current = self.head
        for _ in range(index - 1):
            current = current.next
        new_node.next = current.next
        current.next = new_node
        return self

    def print(self):
        if not self.head:
            print("The list is empty")
            return
        output = ""
        current_node = self.head
        while current_node.next:
            output += f"{current_node.value} -> "
            current_node = current_node.next
        output += f"{current_node.value} -> None"
        print(output)
