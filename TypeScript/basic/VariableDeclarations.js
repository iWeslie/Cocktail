var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// var declarations
var a = 10;
function f() {
    var messgae = "Hello World";
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
g();
console.log("f() -> " + f());
console.log("g() -> " + g());
function f2() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
console.log("f2() -> " + f2());
function f3(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
// var declarations are accessible anywhere within their containing 
// function, module, namespace, or global scope
// var x = 1 // Error for redeclaring block-scoped variable 'x'.
console.log("f3(true) -> " + f3(true));
console.log("f3(false) -> " + f3(false));
function sumMartix(martix) {
    var sum = 0;
    for (var i = 0; i < martix.length; i++) {
        var currentRow = martix[i];
        // the inner for-loop will accidentally overwrite the variable i 
        // because i refers to the same function-scoped variable
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
function sumMartix2(martix) {
    var sum = 0;
    // using let in the loop will be ok 
    for (var i_1 = 0; i_1 < martix.length; i_1++) {
        var currentRow = martix[i_1];
        // This version of the loop will actually perform the summation correctly 
        // because the inner loop’s i shadows i from the outer loop.
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
var martix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(martix);
console.log("sumMartix(martix) -> " + sumMartix(martix));
console.log("sumMartix2(martix) -> " + sumMartix2(martix));
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
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}
// let declarations
var hello = "Hello!";
function f4(input) {
    // Here, we have two local variables a and b.
    // a’s scope is limited to the body of f 
    // while b’s scope is limited to the containing if statement’s block.
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
        return b;
    }
    // Error: b doesn't exist here
    // return b
}
// Variables declared in a catch clause also have similar scoping rules.
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}
// Error: 'e' doesn't exist here
// console.log(e)
// illegal to use 'a' before it's declared;
// a++ 
// let a
function foo() {
    // okay to capture a
    return a1;
}
// illegal call 'foo' before 'a1' is decleared 
// runtime should throw an error here 
foo();
var a1;
// Re-declarations and Shadowing
// With var declarations, we mentioned that it didn’t matter
// how many times you declared your variables; you just got one.
function f5() {
    var x;
    var x;
    if (true) {
        var x;
    }
}
// function g() {
//     let x = 100;
//     var x = 100; // error: can't have both declarations of 'x'
// }
function f6(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log("f6(false, 0) -> " + f6(false, 0));
console.log("f6(true, 0) -> " + f6(true, 0));
// Block-scoped variable capturing
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    // Because we’ve captured city from within its environment,
    // we’re still able to access it despite the fact that the if block finished executing.
    return getCity();
}
// let declarations have drastically different behavior when declared as part of a loop
// these declarations sort of create a new scope per iteration
// for(let i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i) }, 100 * i)
// } 
// const declarations
// const declarations are another way of declaring variables.
var numLivesForCat = 9;
// their value cannot be changed once they are bound
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
// Error
// Cannot assign to 'kitty' because it is a constant or a read-only property.
// kitty = {
//     name : "Danielle"
//     numLivesForCat: numLivesForCat
// }
// all okay
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
// let vs. const
// 1. All declarations other than those you plan to modify should use `const`
// 2. Using const also makes code more predictable when reasoning about flow of data.
// Destructuring
var input = [1, 2];
var first = input[0], second = input[1];
console.log("first -> " + first);
console.log("second -> " + second);
// first = input[0]
// second = input[1]
// swap variables
// [first, second] = [second, first]
function f7(_a) {
    var first = _a[0], second = _a[1];
    console.log("f7 first -> " + first);
    console.log("f7 second -> " + second);
}
f7([1, 2]);
// You can create a variable for the remaining items in a list using the syntax ...
var _a = [1, 2, 3, 4], first1 = _a[0], rest = _a.slice(1);
console.log("first1: " + first1);
console.log("rest: " + rest);
// you can just ignore trailing elements you don’t care about
var first2 = [1, 2, 3, 4][0];
console.log("first2: " + first2);
// let [, second1, , forth1] = [1, 2, 3, 4]
// Object destructuring
var o = {
    a2: "foo",
    b: 12,
    c: "bar"
};
// Notice that you can skip c if you don’t need it.
// let { a, b } = o
// Like array destructuring, you can have assignment without declaration:
// ({ a, b } = { a: "baz", b: 101 })
var a2 = o.a2, passthrough = __rest(o, ["a2"]);
var total = passthrough.b + passthrough.c.length;
// Property renaming
// You can also give different names to properties:
var o3 = {
    a3: "foo",
    b3: 12,
    c3: "bar"
};
// You can also give different names to properties:
var newName1 = o3.a3, newName2 = o3.b3;
// You can read a: newName1 as “a as newName1”.
// The direction is left-to-right, as if you had written:
// let newName2 = o3.b3
// let newName1 = o3.a3
// default values 
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function f8(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
function f9(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
    // ...
}
f9(); // ok, default to { a: "", b: 0 }
function f10(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f10({ a: "yes" }); // ok, defautl b = 0
f10(); // ok, default to { a: "" }, which then defaults b = 0
// f10({}) // error, 'a' is required if you supply an argument
// spread 
// The spread operator is the opposite of destructuring. 
// It allows you to spread an array into another array, or an object into another object. 
var first3 = [1, 2];
var second3 = [3, 4];
var bothPlus = [0].concat(first3, second3, [5]);
console.log("bothPlus: " + bothPlus);
var defaults1 = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults1, { food: "rich" });
console.log("search: " + search.food + " " + search.price + " " + search.ambiance);
var C1 = /** @class */ (function () {
    function C1() {
        this.p = 12;
    }
    C1.prototype.m = function () {
    };
    return C1;
}());
var c = new C1();
var clone = __assign({}, c);
console.log("clone.p:" + clone.p);
// clone.m() // error  Property 'm' does not exist on type '{ p: number; }'.
//# sourceMappingURL=VariableDeclarations.js.map