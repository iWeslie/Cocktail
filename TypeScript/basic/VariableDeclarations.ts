// var declarations
var a = 10

function f() {
    var messgae = "Hello World"
    return function g() {
        var b = a + 1
        return b
    }
}

var g = f()
g()
console.log("f() -> " + f())
console.log("g() -> " + g())

function f2() {
    var a = 1
    a = 2
    var b = g()
    a = 3

    return b

    function g() {
        return a
    }
}

console.log("f2() -> " + f2())
function f3(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10
    }
    return x
}
// var declarations are accessible anywhere within their containing 
// function, module, namespace, or global scope
// var x = 1 // Error for redeclaring block-scoped variable 'x'.
console.log("f3(true) -> " + f3(true))
console.log("f3(false) -> " + f3(false))

function sumMartix(martix: number[][]) {
    var sum = 0
    for (var i = 0; i < martix.length; i++) {
        var currentRow = martix[i]
        // the inner for-loop will accidentally overwrite the variable i 
        // because i refers to the same function-scoped variable
        for (var i = 0; i< currentRow.length; i++) {
            sum += currentRow[i]
        }
    }
    return sum
}

for (var i = 0; i < 10; i++) {
    // setTimeout will try to execute a function after a certain number of milliseconds
    // Every function expression we pass to setTimeout actually refers to the same i from the same scope.

    // setTimeout(function() { console.log(i) }, 100 * i)
}
// the output:
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

// setTimeout will run a function after some number of milliseconds,
//  but only after the for loop has stopped executing; 
// By the time the for loop has stopped executing, the value of i is 10. 
// So each time the given function gets called, it will print out 10!

for (var i = 0; i < 10; i++) {
    // capture the current state of i
    // by invkoing a function with its current value 
    (function(i) {
        setTimeout(function () { console.log(i) }, 100 * i)
    })(i)
}

// let declarations
let hello = "Hello!"

function f4(input: boolean) {
    // Here, we have two local variables a and b.
    // a’s scope is limited to the body of f 
    // while b’s scope is limited to the containing if statement’s block.
    let a = 100
    if (input) {
        // Still okay to reference 'a'
        let b = a + 1
        return b
    }
    // Error: b doesn't exist here
    // return b
}

// Variables declared in a catch clause also have similar scoping rules.
try {
    throw "oh no!"
}
catch (e) {
    console.log("Oh well.")
}
// Error: 'e' doesn't exist here
// console.log(e)
