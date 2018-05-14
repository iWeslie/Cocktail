var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// our first interface 
function printLabel(labelledObj) {
    console.log("printLabel(labelledObj:) -> " + labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log("printLabel2(labelledObj:) -> " + labelledObj.label);
}
// If the object we pass to the function meets the requirements listed, then it’s allowed.
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
// You can construct a Point by assigning an object literal.
// After the assignment, x and y can’t be changed.
var p1 = { x: 10, y: 20 };
// p1.x = 5 // Error!
// a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, 
// so you can make sure you don’t change your arrays after creation:
var a0 = [1, 2, 3, 4];
var ro = a0;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a0 = ro; // error!
// assigning the entire ReadonlyArray back to a normal array is illegal
// You can still override it with a type assertion, though:
a0 = ro;
// readonly vs const
// Variables use const whereas properties use readonly.
var mySquare2 = createSquare({ color: "red", width: 100 });
var mySquare3 = createSquare({ width: 100, opacty: 0.5 });
// assign the object to another variable won’t undergo excess property checks
var squareOptions = { colour: "red", width: 100 };
var mySquare4 = createSquare(squareOptions);
//  you can create a variable of a function type and assign it a function value of the same type.
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// For function types to correctly type-check, the names of the parameters do not need to match.
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var mySearch3;
mySearch3 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log("myArray[0]: " + myArray[0]);
// There are two types of supported index signatures: string and number. 
// when indexing with a number, JavaScript will actually convert that to a string before indexing into an object.
// That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string)
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArray2 = ["Alice", "Bob"];
var Clock0 = /** @class */ (function () {
    function Clock0(h, m) {
    }
    Clock0.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock0;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
console.log("digital.tick()");
digital.tick();
console.log("analog.tick()");
analog.tick();
var square1 = {};
square1.color = "blue";
square1.sideLength = 10;
console.log("square1 = <Square1>{}");
console.log("square1.color = " + square1.color + ", square1.sideLength = " + square1.sideLength);
var square2 = {};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
console.log("square2 = <Square2>{}");
console.log("square2.color = " + square2.color + ", square1.sideLength = " + square2.sideLength + ", square2.penWidth = " + square2.penWidth);
function getCounter() {
    var counter = function (start, number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;
// Interfaces Extending Classes
// it inherits the members of the class but not their implementations
// Interfaces inherit even the private and protected members of a base class. 
// This means that when you create an interface that extends a class with private or protected members,
// that interface type can only be implemented by that class or a subclass of it.
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//     select() { }
// }
//# sourceMappingURL=Interfaces.js.map