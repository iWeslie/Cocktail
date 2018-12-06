// variables
var name = 'Bob';
// If an object isn’t restricted to a single type, specify the Object or dynamic type
dynamic dyName = 'Bob';
String strName = 'Bob';

// Default value
int lineCount;
assert(lineCount == null);

final finalName = 'Bob';
final String nickName = 'Boddy';

const bar = 1000000; // Unit of pressure (dynes/cm2)
const double atm = 1.01325 * bar; // Standard atmosphere

// Numbers 
var x = 1;
var hex = 0xDEADBEEF;
var y = 1.1;
var exponents = 1.42e5;
double z = 1; // Equivalent to double z = 1.0.

var oen = int.parse('1');
assert(one == 1);

var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);

String oneAsSring = 1.toString();
assert(oneAsString == '1');

String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');

assert((3 << 1) == 6); // 0011 << 1 == 0110
assert((3 >> 1) == 1); // 0011 >> 1 == 0001
assert((3 | 4) == 7); // 0011 | 0100 == 0111

const msPerSecond = 1000;
const secondsUntilRetry = 5;
const msUntilRetry = secondsUntilRetry * msPerSecond;

// You can create a “raw” string by prefixing it with r:
var s = r'In a raw string, not even \n gets special treatment.';

// Check for an empty string.
var fullName = '';
assert(fullName.isEmpty);

// Check for zero.
var hitPoints = 0;
assert(hitPoints <= 0);

// Check for null.
var unicorn;
assert(unicorn == null);

// Check for NaN.
var iMeantToDoThis = 0 / 0;
assert(iMeantToDoThis.isNaN);

// Maps
var gifts = {
  // Key:    Value
  'first': 'partridge',
  'second': 'turtledoves',
  'fifth': 'golden rings'
};

var nobleGases = {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};

var gifts2 = Map();
gifts2['first'] = 'partridge';
gifts2['second'] = 'turtledoves';
gifts2['fifth'] = 'golden rings';

var nobleGases2 = Map();
nobleGases2[2] = 'helium';
nobleGases2[10] = 'neon';
nobleGases2[18] = 'argon';

var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds';
assert(gifts.length == 2);

// To create a map that’s a compile-time constant, add const before the map literal:
final constantMap = const {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};

// constantMap[2] = 'Helium'; // Uncommenting this causes an error.