var f = function () {
    return "Hello";
}

console.log(f());

var func = function (x, y) {
    return x * y;
}
function product() {
    var result;
    result = func(10, 20)
    console.log("product: " + result);
}
product()

// function constructor
var func = new Function("x", "y", "return x * y;")
function product() {
    var result;
    result = func(10, 20)
    console.log("product: " + result);
}
product()

// Recursion and JavaScript Functions
function factorial(num) {
    if (num <= 0) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}
console.log(factorial(6));

// Anonymous Recursive Function
(function () {
    var msg = "Hello world"
    console.log(msg);
})()

// Lambda Expression
var foo = (x) => 10 + x
console.log(foo(10));

// Lambda Statement
var msg = () => {
    console.log("function invoked");
}
msg()

// Syntactic Variations
var msg = x => {
    console.log(x);
}
msg("Hello world")

// Function Hoisting
hoist_function()
function hoist_function() {
    console.log("foo");
}

var hoist_function() = function () { // TypeError: hoist_function() is not a function
    console.log("foo");
}

// Immediately Invoked Function Expression
// IIFE
var main = function () {
    var loop = function () {
        for (var x = 0; x < 5; x++) {
            console.log(x);
        }
    }()
    console.log("x can not be accessed outside the block scope x value is :" + x);
}
main()

var main = function() {
   (function() {
       for (var x = 0; x < 5; x++) {
           console.log(x);
       }
   })();
   console.log("x can not be accessed outside the block scope x value is :" + x);
}
main();

// 0
// 1
// 2
// 3
// 4
// Uncaught ReferenceError: x is not define


// Generator Functions
'use strict';
function* rainbow() {
    // the asterisk marks this as a generator
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

for (let color of rainbow()) {
    console.log(color);
}

function* ask() {
    const name = yield "What is your name?"
    const sport = yield "What is yoru favourite color?"
    return `${name}'s favourite sport is ${sport}`;
}
const it = ask()
console.log(it.next());
console.log(it.next("Weslie"));
console.log(it.next('Cricket'));
