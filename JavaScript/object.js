var myCar = new Object()
myCar.make = "Lamborghini"
myCar.model = "Aventador"
myCar.year = 2018

console.log(myCar.make);
console.log(myCar["model"]);

// Constructor Function

var make
var model
function Car() {
    this.make = "Lamborghini"
    this.model = "Aventador"
}
var car = new Car()
console.log(car.make);
console.log(car.model);

// The Object.create Method

var roles = {
    type: "Admin",
    displayType: function () {
        console.log(this.type);
    }
}
var super_role = Object.create(roles)
super_role.displayType()

var guest_role = Object.create(roles)
guest_role.type = "Guest"
guest_role.displayType()

// The Object.assign() Function

'use strict';
var det = { name: "Tom", ID: "E1001" }
var copy = Object.assign({}, det)
console.log(copy);
for (let val in copy) {
    console.log(copy[val]);
}

// merging Objects
// Unlike copying objects, when objects are merged,
// the larger object doesn’t maintain a new copy of the properties.
// Rather it holds the reference to the properties contained in the original objects.
// The following example explains this concept.
var o1 = { a: 10 }
var o2 = { b: 20 }
var o3 = { c: 30 }
var obj = Object.assign(o1, o2, o3)
console.log(obj);
console.log(o1);

// Deleting Properties
var myobj = new Object
myobj.a = 5
myobj.b = 12

delete myobj.a
console.log("a" in myobj); // false

// Comparing Objects
var val1 = { name: "Tom" }
var val2 = { name: "Tom" }
// val1 and val2 are two distinct objects that refer to two different memory addresses.
// Hence on comparison for equality, the operator will return false.
console.log(val1 == val2); // false
console.log(val1 === val2); // false

// Single Object Reference
var val1 = { name: "Tom" }
var val2 = val1
// the reference of the properties in val1 are shared with val2.
console.log(val1 == val2); // true
console.log(val1 === val2); // true
