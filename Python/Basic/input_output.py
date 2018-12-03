year = 2018
event = 'Referendum'
print(f'Results od the {year} {event}')

yes_votes = 42_572_654
no_votes = 43_132_495
percentage = yes_votes / (yes_votes + no_votes)
print('{:-9} YES votes {:2.2%}'.format(yes_votes, percentage))

s = 'Hello, world.'
print(str(s))
print(repr(s))
print(str(1/7))
x = 10 * 3.25
y = 200 * 200
s = 'The value of x is ' + repr(x) + ', and y is ' + repr(y) + '...'
print(s)

hello = 'hello, world\n'
hellos = repr(hello)
print(hellos)
print(repr((x, y ,('spam', 'eggs'))))


# Formatted String Literals
import math
print(f'The value of pi is approximately {math.pi:.3f}.')

table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}
for name, phone in table.items():
    print(f'{name:10} ==> {phone:10d}')

animals = 'eels'
# '!a' applies ascii(), '!s' applies str(), and '!r' applies repr():
print(f'My hovercraft is full of {animals}.')
print(f'My hovercraft is full of {animals!r}')

# The String format() Method
print('We are the {} who say "{}!"'.format('knights', 'Ni'))
print('{0} and {1}'.format('spam', 'eggs'))
print('{1} and {0}'.format('spam', 'eggs'))
print('This {food} is {adjective}.'.format(
      food='spam', adjective='absolutely horrible'))
print('The story of {0}, {1}, and {other}.'.format(
      'Bill', 'Manfred', other='Georg'))
print('Jack: {0[Jack]:d}; Sjoerd: {0[Sjoerd]:d}; Dcab: {0[Dcab]:d}'.format(table))
table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
print('Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table))

for x in range(1, 11):
    print('{0:2d} {1:3d} {2:4d}'.format(x, x*x, x*x*x))

# Manual String Formatting
# The str.rjust() method of string objects right-justifies a string in a field
# of a given width by padding it with spaces on the left.
for x in range(1, 11):
    print(repr(x).rjust(2), repr(x*x).rjust(3), end=' ')
    print(repr(x*x*x).rjust(4))

print('12'.zfill(5))
print('-3.14'.zfill(7))
print('3.14159265359'.zfill(5))

# Old string formatting
print('The value of pi is approximately %5.3f.' % math.pi)

# Reading and Writing Files
f = open('workfile', 'r')

with open('workfile') as f:
    read_data = f.read()
    f.close()

# Methods of File Objects
f = open('workfile', 'rb+')
f.write(b'0123456789abcdef')

print(f.seek(5)) # Go to the 6th byte in the file
print(f.read(1))
print(f.seek(-3, 2)) # Go to the 3rd byte before the end

# Saving structured data with json
import json
simple_list = json.dumps([1, 'simple', 'list'])
print(simple_list)
json.dump(x, f)
x = json.load(f)
