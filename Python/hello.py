the_world_is_flat = True
if the_world_is_flat:
    print("Be careful not to fall of")

# -*- coding: utf-8 -*-


# Calculator
17 // 3  # floor division discards the fractional part
2 ** 7  # 2 to the power of 7

width = 20
height = 5 * 9
width * height

# the last printed expression is assigned to the variable _

'doesn\'t'  # use \' to escape the single quote...
"doesn't"  # ...or use double quotes instead
print('"Isn\'t," they said.') # "Isn't," they said.

s = 'First line.\nSecond line.'
print(s)  # with print(), \n produces a new line

# using triple-quotes: """...""" or '''...'''
print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")

# 3 times 'un', followed by 'ium'
3 * 'un' + 'ium'
'Py' 'thon'

word = 'Python'
word[5]  # character in position 5
word[-2] # second last character
word[-6] # P
word[2:5]  # characters from position 2 (included) to 5 (excluded)
word[:2] + word[2:] # Python
word[:2]   # character from the beginning to position 2 (excluded)
word[4:]   # characters from position 4 (included) to the end
word[4:42]  # out of range indexes will be sliced

# Python strings cannot be changed, they are immutable
s = 'dgviejrbvhekagbkilrgvheabvg'
len(s) # length of a string
# Lists (mutable type)
squares = [1, 4, 9, 16, 25]
squares[-3:] # [9, 16, 25]
squares[:] # [1, 4, 9, 16, 25]
squares + [36, 49, 64, 81, 100]

cubes = [1, 8, 27, 65, 81, 100]
# replace the wrong value
cubes[3] = 64
print(cubes)

cubes.append(216)
cubes.append(7 ** 3)
print(cubes)

a = ['a', 'b', 'c']
n = [1, 2, 3]
x = [a, n]
print(x)

# Fibonacci series:
# the sum of two elements defines the next
a, b = 0, 1
while a < 10:
    print(a)
    a, b = b, a + b

i = 256 * 256
print('The value of i is', i)

a, b = 0, 1
while a < 1000:
    print(a, end=',')
    a, b = b, a+b
