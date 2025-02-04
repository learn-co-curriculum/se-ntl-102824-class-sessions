class Tree:
    def __init__(self, root=None):
        self.root = root

    # def get_element_by_id(self, id): # dft (depth-first traversal)
    #     nodes_to_visit = [self.root]
    #     while len(nodes_to_visit) > 0:
    #         current = nodes_to_visit.pop(0)
    #         if current["id"] == id:
    #             return current
    #         nodes_to_visit = current["children"] + nodes_to_visit
    #     return None
    def get_element_by_id(self, id):  # bft (breadth-first traversal)
        nodes_to_visit = [self.root]
        while len(nodes_to_visit) > 0:
            current = nodes_to_visit.pop(0)
            if current["id"] == id:
                return current
            nodes_to_visit = nodes_to_visit + current["children"]
        return None
