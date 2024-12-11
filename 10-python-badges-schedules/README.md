# Badges and Schedules Lab

## Learning Goals

- Practice iterating through lists
- Practice using list comprehension

***

## Key Vocab

- **Interpreter**: a program that executes other programs. Python programs
require the Python interpreter to be installed on your computer so that they
can be run.
- **Python Shell**: an interactive interpreter that can be accessed from the
command line.
- **Data Type**: a specific kind of data. The Python interpreter uses these
types to determine which actions can be performed on different data items.
- **Exception**: a type of error that can be predicted and handled without
causing a program to crash.
- **Code Block**: a collection of code that is interpreted together. Python
groups code blocks by indentation level.
- **Function**: a named code block that performs a sequence of actions when it
is called.
- **Scope**: the area in your program where a specific variable can be called.

***

## Instructions

This is a **test-driven lab**. Run `pipenv install` to create your virtual
environment and `pipenv shell` to enter the virtual environment. Then run
`pytest -x` to run your tests. Use these instructions and `pytest`'s error
messages to complete your work in the `lib/` folder.

In this lab you'll be learning how to iterate over the elements in a list and
output the results in different ways.

**Note**: some of the functions for this lab can be written using either a `for`
loop or list comprehension. We recommend that for those functions, you start by
coding the solution using a `for` loop then, once you have the tests passing,
refactor your code to use list comprehension. This will give you practice with
two techniques you'll use frequently as a Python developer. Furthermore, list
comprehension can take a little time to get comfortable with. If you make sure
you fully understand the logic of what the function needs to do by writing the
`for` loop version first, it will be easier for you to get it working with list
comprehension.

### `badge_maker()`

You're hosting a conference and need to print badges for the speakers. Each
badge should read: `"Hello, my name is _____."` Write a `badge_maker()` function
that, when provided a person's name, will create and return the message, e.g.:

```py
badge_maker("Arel")
# => "Hello, my name is Arel."
```

### `batch_badge_creator()`

Once the list of speakers for your conference has been finalized, you'll want to
get the badges printed for all of your speakers.

Write a `batch_badge_creator()` function that takes a list of names as an argument
and **returns a list** of badge messages.

```py
batch_badge_creator(["Arel", "Carol"])
# => ["Hello, my name is Arel.", "Hello, my name is Carol."]
```

### `assign_rooms()`

You just realized that you also need to give each speaker a room assignment.
Write a function called `assign_rooms()` that takes the list of speakers and
assigns each speaker to a room. Make sure that each room only has one speaker.

You have rooms 1-8.

**Return a _new_ list of strings** representing room assignments in the form of:
"Hello, \_\_\_\_\_! You'll be assigned to room \_\_\_\_\_!"

```py
assign_rooms(["Arel", "Carol"])
# => ["Hello, Arel! You'll be assigned to room 1!", "Hello, Carol! You'll be assigned to room 2!"]
```

_Hint_: Think about how you will assign a room number to each person. List items
are indexed, meaning that you can access each element by its index number. [This
tutorial](https://www.techieheap.com/how-to-iterate-a-python-list-with-index/)
provides several approaches you might use to access the index of each item in
the list so you can use it in your message.

_Hint_: Be sure to return a _new_ list that contains the messages and leave the
original list as is.

### `printer()`

Now you have to tell the printer what to print. Create a function called
`printer()` that will output first the results of the `batch_badge_creator()`
function, and then the output of the `assign_rooms()` function, to the screen.

```py
printer(["Arel", "Carol"])
# Hello, my name is Arel.
# Hello, my name is Carol.
# Hello, Arel! You'll be assigned to room 1!
# Hello, Carol! You'll be assigned to room 2!
```

_Hint_: remember you can call one function from inside another function. If the
return value of `assign_rooms()` is a list of room assignments, how can you
print out each assignment? You'll need to iterate over your list of room
assignments in order to `print` out each individual assignment.

***

## Resources

- [5. Data Structures - Python][data-structures]
- [Python For Loops - W3schools][for]
- [Python List Comprehension - W3schools][list-comprehension]

[data-structures]: https://docs.python.org/3/tutorial/datastructures.html
[for]: https://www.w3schools.com/python/python_for_loops.asp
[list-comprehension]: https://www.w3schools.com/python/python_lists_comprehension.asp
