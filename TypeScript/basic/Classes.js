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
var Greeter = /** @class */ (function () {
    function Greeter(messgae) {
        this.greeting = messgae;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog1;
}(Animal1));
var dog = new Dog1();
dog.bark();
dog.move(10);
dog.bark();
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
// before we ever access a property on this in a constructor body, we have to call super()
var Snake2 = /** @class */ (function (_super) {
    __extends(Snake2, _super);
    function Snake2(name) {
        return _super.call(this, name) || this;
    }
    Snake2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake2;
}(Animal2));
var Horse2 = /** @class */ (function (_super) {
    __extends(Horse2, _super);
    function Horse2(name) {
        return _super.call(this, name) || this;
    }
    Horse2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse2;
}(Animal2));
var sam = new Snake2("Sammy the Python");
var tom = new Horse2("Tommy the Palomino");
sam.move();
tom.move(34);
// each member is public by default
// private members cannot be accessed from outside of its containing class
// members declared protected can also be accessed within deriving classes
// You can make properties readonly by using the readonly keyword. 
// Readonly properties must be initialized at their declaration or in the constructor.
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numbersOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit." // error! name is readonly.
var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullNameGet", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "fullNameSet", {
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullNameSet = "Bob Smith";
if (employee.fullNameGet) {
    console.log("employee.fullName = " + employee.fullNameGet);
}
// Static Properties are visible on the class itself rather than on the instances
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log("grid1.calculateDistanceFromOrigin(point:) -> ");
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log("grid2.calculateDistanceFromOrigin(point:) -> ");
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// Abstract Classes
// Abstract classes are base classes from which other classes may be derived.
// Unlike an interface, an abstract class may contain implementation details for its members.
var Anima3 = /** @class */ (function () {
    function Anima3() {
    }
    Anima3.prototype.move = function () {
        console.log("roaming the earth...");
    };
    return Anima3;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        // // constructors in derived classes must call super()
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department;
// cannot create an instance of an abstract class
// department = new Department() 
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// method doesn't exist on declared abstract type
// department.generateReports()
// Constructor functions
// create multiple declarations at the same time
var Greeter0 = /** @class */ (function () {
    function Greeter0(messgae) {
        this.greeting = messgae;
    }
    Greeter0.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter0;
}());
var greeter0;
greeter0 = new Greeter0("world");
console.log(greeter0.greet());
var Greeter1 = /** @class */ (function () {
    function Greeter1() {
    }
    Greeter1.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    };
    Greeter1.standardGreeting = "Hello, there";
    return Greeter1;
}());
var greeter1;
greeter1 = new Greeter1();
console.log(greeter1.greet());
// This variable will hold the class itself, or said another way its constructor function.
var greetMaker = Greeter1;
// “give me the type of the symbol called Greeter,” which is the type of the constructor function.
// This type will contain all of the static members of Greeter along with the constructor
// that creates instances of the Greeter class. 
greetMaker.standardGreeting = "Hey there!";
var greeter2 = new greetMaker();
console.log(greeter2.greet());
// Using a class as an interface
// Because classes create types, you can use them in the same places you would be able to use interfaces.
var Point1 = /** @class */ (function () {
    function Point1() {
    }
    return Point1;
}());
var point3d = { x0: 1, y0: 2, z0: 3 };
//# sourceMappingURL=Classes.js.map