# Lists
list1 = [1, 2, 3, 4, 5]
list1.append(6)
list1.extend([7, 8, 9])
list1.insert(0, 0)
list1.remove(1)
list1.pop()
list1.pop(1)
list1.count(3)
list1.reverse()
# Return a shallow copy of the list1. Equivalent to a[:]
list1.copy()
list1.clear()

print(list1)

# Using Lists as Stacks
stack = [3, 4, 5]
stack.append(6)
stack.append(7)
print(stack)
print(stack.pop())
print(stack)
stack.pop()
print(stack)

# Using Lists as Queues
from collections import deque
queue = deque(["weslie", "chen", "yk"])
queue.append("John")
queue.append("Jobs")
print(queue)

print(queue.popleft())
print(queue)


# List Comprehensions
squares = []
for x in range(10):
    squares.append(x**2)

print(squares)

squares = list(map(lambda x: x**2, range(10)))
print(squares)

squares = [x**2 for x in range(10)]
print(squares)

list2 = [(x, y) for x in [1, 2, 3] for y in [3, 1, 4] if x != y]
print(list2)

# it’s equivalent to:
combs = []
for x in [1, 2, 3]:
    for y in [3, 1, 4]:
        if x != y:
            combs.append((x, y))
print(combs)

vec = [-4, -2, 0, 2, 4]
# create a new list with the value doubled
doubled_vec = [x * 2 for x in vec]
print(doubled_vec)

# filter the list tho exclude negative numbers
posit_vec = [x for x in vec if x >= 0]
print(posit_vec)

# apply a function to all the elements
mod_vec = [abs(x) for x in vec]
print(mod_vec)

# call a method on each element
freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']
freshfruit_striped = [weapon.strip() for weapon in freshfruit]
print(freshfruit_striped)

# create a list of 2-tuples like (number, square)
# the tuple must be parenthesized
tuple_list = [(x, x ** 2) for x in range(6)]
print(tuple_list)

# flatten a list using a listcomp with two 'for'
vec = [[1,2,3], [4,5,6], [7,8,9]]
flat_vec = [num for elem in vec for num in elem]
print(flat_vec)

from math import pi
pis = [str(round(pi, i)) for i in range(1, 6)]
print(pis)

# Nested List
martix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]
# transpose rows and columns
martix_transpose = [[row[i] for row in martix] for i in range(4)]
print(martix_transpose)

zip_martix = list(zip(*martix))
print(zip_martix)

# del
# remove an item from a list given its index instead of its value
a = [-1, 1, 66.25, 333, 333, 1234.5]
del a[0]
print(a)
del a[:]
print(a)

# Tuples and Sequences
t = 12345, 54321, 'hello!'
print(t[0])
print(t)

u = t, (1, 2, 3, 4, 5)
print(u)

# tuples are immutable
# t[0] = 8888
# they can contain multiple objects
v = ([1, 2, 3], [3, 2, 1])
print(v)

empty = ()
singleton = 'hello',
print(len(empty))
print(singleton)
print(len(singleton))

x, y, z = t
print(x, y, z)

# Sets
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)
print('orange' in basket)
print('crabgrass' in basket)
a = set('abracadabra')
b = set('alacazam')
print(a)
print(b)
print(a - b) # letters in a but not in b
print(a | b) # letters in a or b or both
print(a & b) # letters in both a and b
print(a ^ b) # letters in a or b but not both

a = {x for x in 'abracadabra' if x not in 'abc'}
print(a)

# Dictionaries
tel = {'jack': 4098, 'sape': 4139}
tel['guido'] = 4127
print(tel)
del tel['sape']
tel['irv'] = 4127
print(tel)
print(sorted(tel))
print('guido' in tel)
print('jack' not in tel)

dict1 = dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])
print(dict1)

dict2 = {x: x**2 for x in (2, 4, 6)}
print(dict2)

# Looping Techniques
knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for k, v in knights.items():
    print(k, v)

for i, v in enumerate(['tic', 'tac', 'toe']):
    print(i, v)

questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
for q, a in zip(questions, answers):
    print('What is your {0}? It is {1}.'.format(q, a))

for i in reversed(range(1, 10, 2)):
    print(i)

basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
for f in sorted(set(basket)):
    print(f)

import math
raw_data = [56.2, float('NaN'), 51.7, 55.3, 52.5, float('NaN'), 47.8]
filtered_data = []
for value in raw_data:
    if not math.isnan(value):
        filtered_data.append(value)

print(filtered_data)

# More on Conditions
string1, string2, string3 = '', 'Trondheim', 'Hammer Dance'
non_null = string1 or string2 or string3
print(non_null)
