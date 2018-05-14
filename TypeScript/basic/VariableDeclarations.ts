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

function sumMartix2(martix: number[][]) {
    var sum = 0
    // using let in the loop will be ok 
    for (let i = 0; i < martix.length; i++) {
        var currentRow = martix[i]
        // This version of the loop will actually perform the summation correctly 
        // because the inner loop’s i shadows i from the outer loop.
        for (let i = 0; i< currentRow.length; i++) {
            sum += currentRow[i]
        }
    }
    return sum
}

var martix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(martix)
console.log("sumMartix(martix) -> " + sumMartix(martix))
console.log("sumMartix2(martix) -> " + sumMartix2(martix))

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

// illegal to use 'a' before it's declared;
// a++ 
// let a

function foo() {
    // okay to capture a
    return a1
} 
// illegal call 'foo' before 'a1' is decleared 
// runtime should throw an error here 
foo()

let a1

// Re-declarations and Shadowing
// With var declarations, we mentioned that it didn’t matter
// how many times you declared your variables; you just got one.
function f5() {
    var x
    var x
    if (true) {
        var x
    }
}

// function g() {
//     let x = 100;
//     var x = 100; // error: can't have both declarations of 'x'
// }

function f6(condition, x) {
    if (condition) {
        let x = 100
        return x
    }
    return x
}

console.log("f6(false, 0) -> " + f6(false, 0))
console.log("f6(true, 0) -> " + f6(true, 0))

// Block-scoped variable capturing
function theCityThatAlwaysSleeps() {
    let getCity

    if (true) {
        let city = "Seattle"
        getCity = function() {
            return city
        }
    }
    // Because we’ve captured city from within its environment,
    // we’re still able to access it despite the fact that the if block finished executing.
    return getCity()
}

// let declarations have drastically different behavior when declared as part of a loop
// these declarations sort of create a new scope per iteration

// for(let i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i) }, 100 * i)
// } 

// const declarations
// const declarations are another way of declaring variables.
const numLivesForCat = 9
// their value cannot be changed once they are bound
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat
}

// Error
// Cannot assign to 'kitty' because it is a constant or a read-only property.
// kitty = {
//     name : "Danielle"
//     numLivesForCat: numLivesForCat
// }

// all okay
kitty.name = "Rory"
kitty.name = "Kitty"
kitty.name = "Cat"
kitty.numLives--

// let vs. const
// 1. All declarations other than those you plan to modify should use `const`
// 2. Using const also makes code more predictable when reasoning about flow of data.

// Destructuring
let input = [1, 2]
let [first, second] = input
console.log("first -> " + first)
console.log("second -> " + second)

// first = input[0]
// second = input[1]

// swap variables
// [first, second] = [second, first]

function f7([first, second]: [number, number]) {
    console.log("f7 first -> " + first)
    console.log("f7 second -> " + second)
}

f7([1, 2])

// You can create a variable for the remaining items in a list using the syntax ...
let [first1, ...rest] = [1, 2, 3, 4]
console.log("first1: " + first1)
console.log("rest: " + rest)

// you can just ignore trailing elements you don’t care about
let [first2] = [1, 2, 3, 4]
console.log("first2: " + first2)

// let [, second1, , forth1] = [1, 2, 3, 4]

// Object destructuring
let o = {
    a2: "foo",
    b: 12,
    c: "bar"
};
// Notice that you can skip c if you don’t need it.
// let { a, b } = o

// Like array destructuring, you can have assignment without declaration:
// ({ a, b } = { a: "baz", b: 101 })

let { a2, ...passthrough } = o
let total = passthrough.b + passthrough.c.length

// Property renaming
// You can also give different names to properties:

let o3 = {
    a3: "foo",
    b3: 12,
    c3: "bar"
}
// You can also give different names to properties:
let { a3: newName1, b3: newName2 } = o3
// You can read a: newName1 as “a as newName1”.
// The direction is left-to-right, as if you had written:
// let newName2 = o3.b3
// let newName1 = o3.a3

// default values 
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject
}

// function declarations 
type C = { a: string, b?: number }
function f8({ a, b }: C): void {
    // ...
}

function f9({ a, b } = { a: "", b: 0 }): void {
    // ...
}
f9() // ok, default to { a: "", b: 0 }

function f10({ a, b = 0 } = { a: "" }): void {
    // ...
}
f10({ a: "yes" }) // ok, defautl b = 0
f10() // ok, default to { a: "" }, which then defaults b = 0
// f10({}) // error, 'a' is required if you supply an argument

// spread 
// The spread operator is the opposite of destructuring. 
// It allows you to spread an array into another array, or an object into another object. 
let first3 = [1, 2]
let second3 = [3, 4]
let bothPlus = [0, ...first3, ...second3, 5]
console.log("bothPlus: " + bothPlus)

let defaults1 = { food: "spicy", price: "$$", ambiance: "noisy" }
let search = { ...defaults1, food: "rich" }
console.log("search: " + search.food + " " + search.price + " " + search.ambiance)

class C1 {
    p = 12
    m() {

    }
}

let c = new C1()
let clone = { ...c }
console.log("clone.p:" + clone.p)
// clone.m() // error  Property 'm' does not exist on type '{ p: number; }'.
 