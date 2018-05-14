class Greeter {
    greeting: string
    constructor(messgae: string) {
        this.greeting = messgae
    }
    greet() {
        return "Hello, " + this.greeting
    }
}

let greeter = new Greeter("world")

class Animal1 {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`)
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log('Woof! Woof!')
    }
}

const dog = new Dog1()
dog.bark()
dog.move(10)
dog.bark()

class Animal2 {
    name: string
    constructor(theName: string) { this.name = theName }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}
// before we ever access a property on this in a constructor body, we have to call super()
class Snake2 extends Animal2 {
    constructor(name: string) { super(name) } 
    move(distanceInMeters = 5) {
        console.log("Slithering...")
        super.move(distanceInMeters)
    }
}

class Horse2 extends Animal2 {
    constructor(name: string) { super(name) }
    move(distanceInMeters = 45) {
        console.log("Galloping...")
        super.move(distanceInMeters)
    }
}

let sam = new Snake2("Sammy the Python")
let tom: Animal2 = new Horse2("Tommy the Palomino")

sam.move()
tom.move(34)

// each member is public by default
// private members cannot be accessed from outside of its containing class
// members declared protected can also be accessed within deriving classes

// You can make properties readonly by using the readonly keyword. 
// Readonly properties must be initialized at their declaration or in the constructor.
class Octopus {
    readonly name: string
    readonly numbersOfLegs: number = 8
    constructor(theName: string) {
        this.name = theName
    }
}
let dad = new Octopus("Man with the 8 strong legs")
// dad.name = "Man with the 3-piece suit." // error! name is readonly.

let passcode = "secret passcode"

class Employee {
    private _fullName: string

    get fullNameGet(): string {
        return this._fullName
    }

    set fullNameSet(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName
        }
        else {
            console.log("Error: Unauthorized update of employee!")
        }
    }
}

let employee = new Employee()
employee.fullNameSet = "Bob Smith"
if (employee.fullNameGet) {
    console.log("employee.fullName = " + employee.fullNameGet)
}

// Static Properties are visible on the class itself rather than on the instances
class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log("grid1.calculateDistanceFromOrigin(point:) -> ")
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }))
console.log("grid2.calculateDistanceFromOrigin(point:) -> ")
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }))

// Abstract Classes
// Abstract classes are base classes from which other classes may be derived.
// Unlike an interface, an abstract class may contain implementation details for its members.
abstract class Anima3 {
    abstract makeSound(): void
    move(): void {
        console.log("roaming the earth...")
    }
}

abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log("Department name: " + this.name)
    }

    // must be implemented in derived classes
    abstract printMeeting(): void 
}

class AccountingDepartment extends Department {

    constructor() {
        // // constructors in derived classes must call super()
        super("Accounting and Auditing")
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.")
    }

    generateReports(): void {
        console.log("Generating accounting reports...")
    }
}

let department: Department
// cannot create an instance of an abstract class
// department = new Department() 
department = new AccountingDepartment()
department.printName()
department.printMeeting()
// method doesn't exist on declared abstract type
// department.generateReports()

// Constructor functions
// create multiple declarations at the same time
class Greeter0 {
    greeting: string
    constructor(messgae: string) {
        this.greeting = messgae
    }
    greet() {
        return "Hello, " + this.greeting
    }
}

let greeter0: Greeter0
greeter0 = new Greeter0("world")
console.log(greeter0.greet())

class Greeter1 {
    static standardGreeting = "Hello, there"
    greeting: string
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting
        }
        else {
            return Greeter1.standardGreeting
        }
    }
}

let greeter1: Greeter1
greeter1 = new Greeter1()
console.log(greeter1.greet())

// This variable will hold the class itself, or said another way its constructor function.
let greetMaker: typeof Greeter1 = Greeter1
// “give me the type of the symbol called Greeter,” which is the type of the constructor function.
// This type will contain all of the static members of Greeter along with the constructor
// that creates instances of the Greeter class. 
greetMaker.standardGreeting = "Hey there!"

let greeter2: Greeter1 = new greetMaker()
console.log(greeter2.greet())

// Using a class as an interface
// Because classes create types, you can use them in the same places you would be able to use interfaces.
class Point1 {
    x0: number;
    y0: number;
}

interface Point3d extends Point1 {
    z0: number;
}

let point3d: Point3d = { x0: 1, y0: 2, z0: 3 };