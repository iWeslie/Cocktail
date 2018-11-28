# Control Flow
# x = int(input("Please enter a integer: "))
x = 1
if x < 0:
    x = 0
    print('Negative changes to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')

words = ['cat', 'window', 'defenstrate']
for w in words:
    print(w, len(w))

for w in words[:]:
    if len(w) > 6:
        words.insert(0, w)

#  range(start, stop, step)
for i in range(5, 10, 2):
    print(i)

a = ['Mary', 'had', 'a', 'little', 'lamb']
for i in range(len(a)):
    print(i, a[i])

print(range(10))

print(list(range(5)))

for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n // x)
            break
        else:
            # loop fell through without finding a factor
            print(n, 'is a prime number')

for num in range(2, 10):
    if num % 2 == 0:
        print('Found a even number', num)
        continue
    print('Found a number', num)

# pass
# Busy-wait for keyboard interrupt (Ctrl+C)

# while True:
#     pass # Busy-wait for keyboard interrupt (Ctrl+C)

# This is commonly used for creating minimal classes:
class MyEmptyClass:
    pass

def initLog(*args):
    """Another place pass can be used is as a place-holder for a function or
    conditional body when you are working on new code,
    allowing you to keep thinking at a more abstract level.
    The pass is silently ignored:
    """
    pass # Remember to implement this!

# Defining Functions
def fib(n): # write Fibonacci series up to n
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()
fib(2000)

print(fib)
f = fib
f(100)
print('fib(0) =', fib(0))

def fib2(n): # return a Fibonacci series up to n
    """Retuan a list containing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a+b
    return result

f100 = fib2(100)
print(f100)

# Default Argument Values
def ask_ok(prompt, retries=4, reminder='Please try again!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)
# ask_ok('Do you really want to quit(y/n)? ', 2)

# Important warning: The default value is evaluated only once.
def f(a, L=[]):
    L.append(a)
    return L

print(f(1)) # [1]
print(f(2)) # [1, 2]
print(f(3)) # [1, 2, 3]

# If you don’t want the default to be shared between subsequent calls,
# you can write the function like this instead:
def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L

# Keyword Arguments
def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.")
    print("-- Lovely plumage, the", type)
    print("-- It's", state, "!")

parrot(1000)
parrot(voltage=1000)
parrot(action='VOOOOM', voltage=1000000)
parrot('a million', 'bereft', 'jump')
parrot('a thousand', state='pushing up the daisies')

# parrot(voltage=5.0, 'dead')  # non-keyword argument after a keyword argument

def cheeseshop(kind, *arguments, **keywords):
    print("-- Do you have any", kind, "?")
    print("-- I'm sorry, we're all out of", kind)
    for arg in arguments:
        print(arg)
    print("-" * 40)
    for kw in keywords:
        print(kw, ":", keywords[kw])

cheeseshop("Limburger", "It's very runny, sir.",
           "It's really very, VERY runny, sir.",
           shopkeeper="Michael Palin",
           client="John Cleese",
           sketch="Cheese Shop Sketch")

# Arbitrary Argument Lists
def write_multiple_items(file, seperator, *args):
    file.write(seperator.join(args))

def concat(*args, sep="."):
    return sep.join(args)

print(concat("Mercury", "Venus", "Erath", "Mars", "Jupiter", sep="-->"))

# Unpacking Argument Lists
list(range(3, 6))
args = [3, 6]
print(list(range(*args)))

d = {"voltage": "four million", "state": "bleedin' demised", "action": "VOOM"}
parrot(**d)

# Lambda Expressions
def make_incrementor(n):
    return lambda x: x + n

f = make_incrementor(42)
f(1) # 43

pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda pair: pair[1])
print(pairs)

# multi-line docstring
def my_function():
    """Do nothing, but document it.

    No, really, it doesn't do antthing.
    """
    pass

print(my_function.__doc__)

# Function Annotations
def f(ham: str, eggs: str = 'eggs') -> str:
    print("Annotations:", f.__annotations__)
    print("Arguments:", ham, eggs)
    return ham + ' and ' + eggs

f('spam')
