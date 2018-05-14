// our first interface 
function printLabel(labelledObj: { label: string }) {
    console.log("printLabel(labelledObj:) -> " + labelledObj.label)
}

let myObj = { size: 10, label: "Size 10 Object"}
printLabel(myObj)

// interface is only the shape of matters
interface LabelledValue {
    label: string
}

function printLabel2(labelledObj: LabelledValue) {
    console.log("printLabel2(labelledObj:) -> " + labelledObj.label)
}

// If the object we pass to the function meets the requirements listed, then it’s allowed.
let myObj2 = { size: 10, label: "Size 10 Object" }
printLabel2(myObj2)

// Optional Properties
interface SquareConfig {
    // with each optional property denoted by a ? at the end of the property name in the declaration.
    color?: string
    width?: number
    // could also have any number of other properties
    [propName: string]: any
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" })

// Readonly properties
interface Point {
    readonly x: number
    readonly y: number
}

// You can construct a Point by assigning an object literal.
// After the assignment, x and y can’t be changed.
let p1: Point = { x: 10, y: 20 }
// p1.x = 5 // Error!

// a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, 
// so you can make sure you don’t change your arrays after creation:
let a0: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a0
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a0 = ro; // error!
// assigning the entire ReadonlyArray back to a normal array is illegal
// You can still override it with a type assertion, though:
a0 = ro as number[]

// readonly vs const
// Variables use const whereas properties use readonly.

let mySquare2 = createSquare({ color: "red", width: 100 })
let mySquare3 = createSquare({ width: 100, opacty: 0.5 } as SquareConfig)

// assign the object to another variable won’t undergo excess property checks
let squareOptions = { colour: "red", width: 100 }
let mySquare4 = createSquare(squareOptions)

// Function Types
// To describe a function type with an interface, we give the interface a call signature. 
// This is like a function declaration with only the parameter list and return type given.
// Each parameter in the parameter list requires both name and type.
interface SearchFunc {
    (source: string, subString: string): boolean
}

//  you can create a variable of a function type and assign it a function value of the same type.
let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
    let result = source.search(subString)
    return result > -1
}

// For function types to correctly type-check, the names of the parameters do not need to match.
let mySearch2: SearchFunc
mySearch2 = function(src: string, sub: string): boolean {
    let result = src.search(sub)
    return result > -1
}

let mySearch3: SearchFunc
mySearch3 = function(src, sub) {
    let result = src.search(sub)
    return result > -1
}

// Indexable Types
interface StringArray {
    [index: number]: string
}

let myArray: StringArray
myArray = ["Bob", "Fred"]
let myStr: string = myArray[0]
console.log("myArray[0]: " + myArray[0])

// There are two types of supported index signatures: string and number. 
// when indexing with a number, JavaScript will actually convert that to a string before indexing into an object.
// That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string)

class Animal {
    name: string
}
class Dog extends Animal {
    breed: string
}
// // Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
    [x: number]: Animal
    [x: string]: Animal
}

// a string index declares that obj.property is also available as obj["property"]

// In the following example, name’s type does not match the string index’s type, and the type-checker gives an error:
interface NumberDictionary {
    [index: string]: number
    length: number
    // Property 'name' of type 'string' is not assignable to string index type 'number'.
    // error, the type of 'name' is not a subtype of the indexer
    // name: string
}

// Finally, you can make index signatures readonly in order to prevent assignment to their indices:
interface ReadonlyStringArray {
    readonly [index: number]: string
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"]
// myArray2[2] = "Mallory" // error! You can’t set myArray[2] because the index signature is readonly.

// Class Types
// Implementing an interface
// like the features in Java and C#
// You can also describe methods in an interface that are implemented in the class

interface ClockInterface0 {
    currentTime: Date
    setTime(d: Date)
}

class Clock0 implements ClockInterface0 {
    currentTime: Date
    setTime(d: Date) {
        this.currentTime = d
    }
    constructor(h: number, m: number) { 

    }
}

// Difference between the static and instance sides of classes

// if you create an interface with a construct signature and try to create a class 
// that implements this interface you get an error:
interface ClockConstructor1 {
    new (hour: number, minute: number)
}
// class Clock1 implements ClockConstructor1 {
//     currentTime: Date
//     // Class 'Clock1' incorrectly implements interface 'ClockConstructor1'.
//     // Type 'Clock1' provides no match for the signature 'new (hour: number, minute: number): any'.

//     // This is because when a class implements an interface, only the instance side of the class is checked.
//     // Since the constructor sits in the static side, it is not included in this check.
//     constructor(h: number, m: number) {

//     }
// }

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
    tick()
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log("beep beep")
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log("tick tock")
    }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)
console.log("digital.tick()")
digital.tick() 
console.log("analog.tick()")
analog.tick()

// Extending Interfaces
// This allows you to copy the members of one interface into another
// which gives you more flexibility in how you separate your interfaces into reusable components.

interface Shape {
    color: string
}

interface Square1 extends Shape {
    sideLength: number
}

let square1 = <Square1>{}
square1.color = "blue"
square1.sideLength = 10

console.log("square1 = <Square1>{}")
console.log("square1.color = " + square1.color + ", square1.sideLength = " + square1.sideLength)

// An interface can extend multiple interfaces, creating a combination of all of the interfaces.

interface PenStroke {
    penWidth: number
}

interface Square2 extends Shape, PenStroke {
    sideLength: number
}

let square2 = <Square2>{}
square2.color = "blue"
square2.sideLength = 10
square2.penWidth = 5.0

console.log("square2 = <Square2>{}")
console.log("square2.color = " + square2.color + ", square1.sideLength = " + square2.sideLength + ", square2.penWidth = " + square2.penWidth)

// Hybrid Types
interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = <Counter>function (start, number) { }
    counter.interval = 123
    counter.reset = function() { }
    return counter
}

let counter = getCounter()
counter(10)
counter.reset()
counter.interval = 5.0

// Interfaces Extending Classes
// it inherits the members of the class but not their implementations
// Interfaces inherit even the private and protected members of a base class. 

// This means that when you create an interface that extends a class with private or protected members,
// that interface type can only be implemented by that class or a subclass of it.

class Control {
    private state: any
}

interface SelectableControl extends Control {
    select(): void
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//     select() { }
// }

