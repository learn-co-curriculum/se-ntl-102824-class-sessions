import ipdb


def badge_maker(name):
    return f"Hello, my name is {name}."


def batch_badge_creator(names):
    return [badge_maker(name) for name in names]


def assign_rooms(names):
    # assignments = []
    # for i, name in enumerate(names, start=1):
    #     ipdb.set_trace()
    #     assignments.append(f"Hello, {name}! You'll be assigned to room {i}!")
    # return assignments
    return [
        f"Hello, {name}! You'll be assigned to room {i}!"
        for i, name in enumerate(names, start=1)
    ]


assign_rooms(["Arel", "Carol"])


def printer(names):
    badges = batch_badge_creator(names)
    assignments = assign_rooms(names)
    for badge in badges:
        print(badge)
    for assignment in assignments:
        print(assignment)
