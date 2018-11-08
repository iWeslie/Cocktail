console.log([
    Number.EPSILON,
    Number.MAX_SAFE_INTEGER,
    Number.MAX_VALUE,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_VALUE,
    Number.Nan,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.prototype
]);

// Method & Description
Number.isNaN()
// Determines whether the passed value is NaN.

Number.isFinite()
// Determines whether the passed value is a finite number.

Number.isInteger()
// Determines whether the passed value is an integer.

Number.isSafeInteger()
// Determines whether the passed value is a safe integer (number between -(253 - 1) and 253- 1)

Number.parseFloat()
// The value is the same as parseFloat() of the global object

Number.parseInt()
// The value is the same as parseInt() of the global object

// Instance Method & Description
toExponential()
// Returns a string representing the number in exponential notation

toFixed()
// Returns a string representing the number in fixed-point notation

toLocaleString()
// Returns a string with a language sensitive representation of this number

toPrecision()
// Returns a string representing the number to a specified precision in fixed-point or exponential notation

toString()
// Returns a string representing the specified object in the specified radix (base)

valueOf()
// Returns the primitive value of the specified object.
