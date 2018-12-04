# Syntax errors
while True print('Hello world')

# Exceptions
1 / 0
# ZeroDivisionError: division by zero
4 + spam * 3
# NameError: name 'spam' is not defined
'2' + 2
# TypeError: Can't convert 'int' object to str implicitly


#  Handling Exceptions¶
while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")

import sys

try:
    f = open('myfile.txt')
    s = f.readlines()
    i = int(s.strip())
except OSError as err:
    print("OS error: {0}".format(err))
except ValueError:
    print("Could not convert data to an integer.")
except:
    print("Unexpected error:", sys.exc_info()[0])
    raise


for arg in sys.argv[1:]:
    try:
        f = open(arg, 'r')
    except OSError:
        print('cannot open', arg)
    else:
        print(arg, 'has', len(f.readlines()), 'lines')
        f.close()

def this_fails():
    x = 1 / 0
try:
    this_fails()
except ZeroDivisionError as err:
    print('Handling run-time error:', err)


# Raising Exceptions
raise NameError('HiThere')
raise ValueError

try:
    raise NameError('HiThere')
except NameError:
    print('An exception flew by!')
    raise


# User-defined Exceptions
class Error(Exception):
    """Base class for exceptions in this module."""
    pass

class InputError(Error):
    """Exception raised for errors in the input.

    Attributes:
        expression -- input expression in which the error occurred
        message -- explanation of the error
    """

    def __init__(self, expression, message):
        self.expression = expression
        self.message = message

class TransitionError(Error):
    """Raised when an operation attempts a state transition that's not
    allowed.

    Attributes:
        previous -- state at beginning of transition
        next -- attempted new state
        message -- explanation of why the specific transition is not allowed
    """

    def __init__(self, previous, next, message):
        self.previous = previous
        self.next = next
        self.message = message


# Defining Clean-up Actions
try:
    raise KeyboardInterrupt
finally:
    print('Goodbye, world!')

def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("division by zero!")
    else:
        print("result is", result)
    finally:
        print("executing finally clause")

# Predefined Clean-up Actions
for line in open("myfile.txt"):
    print(line, end="")
