class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class Tree:
    def __init__(self, root=None):
        self.root = root

    def print_in_order(self, node):
        if node:
            # Traverse left subtreee
            self.print_in_order(node.left)
            # Visit node
            print(node.value, end=" ")
            # if node.right:
            # Traverse right subtreee
            self.print_in_order(node.right)

    def print_preorder(self, node):
        if node is None:
            return
        # Visit node
        print(node.value, end=" ")

        # Traverse left subtree
        self.print_preorder(node.left)
        # Traverse right subtree
        self.print_preorder(node.right)

    def print_postorder(self, node):
        if node is None:
            return

        self.print_postorder(node.left)
        self.print_postorder(node.right)
        print(node.value, end=" ")


if __name__ == "__main__":
    tree = Tree(Node(100))
    tree.root.left = Node(20)
    tree.root.right = Node(200)
    tree.root.left.left = Node(10)
    tree.root.left.right = Node(30)
    tree.root.right.left = Node(150)
    tree.root.right.right = Node(300)
    print("InOrder Traversal:", end=" ")
    tree.print_in_order(tree.root)
    print("")
    print("Preorder Traversal:", end=" ")
    tree.print_preorder(tree.root)
    print("")
    print("Postorder Traversal:", end=" ")
    tree.print_postorder(tree.root)
