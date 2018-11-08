var house = new Array(10, 20, 30, 40, 50);

var house1 = new Array(5);

var home = new Array("1BKH");

var houses = [12, true, "2233"];

console.log(houses);

// alert(house1);

var length = house.length;
for (var i = 0; i < length; i++) {
    console.log(house[i]);
}

var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
    return num / 2;
});
console.log(new_arr);
console.log(arr.map(Math.sqrt));


function isOdd(element, index, array) {
  return (element % 2 == 1);
}

function finding_index(element) {
    return element > 25;
}

console.log([4, 6, 8, 12].findIndex(isOdd));
console.log([ 10, 20, 30, 110, 60 ].findIndex(finding_index));

// function isPrime is used to find which
// number is prime or not prime.
function isPrime(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x ++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
// Printing -1 because prime number is not found.
console.log([ 4, 6, 8, 12 ].findIndex(isPrime));

// Printing 2 the index of prime number (7) found.
console.log([ 4, 6, 7, 12 ].findIndex(isPrime));

var array = ['geeksforgeeks', 'gfg', 'Jhon'];
var iterator = array.entries();
console.log(iterator.next().value);

for (let e of iterator) {
    console.log(e);

}
array = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(array.copyWithin(0, 3, 6));
console.log(array.copyWithin(0, 4));
console.log(array.copyWithin(3));

function isGreaterThan5(element, index, array) {
    return element > 5;
}
console.log([2, 5, 8, 1, 4].some(isGreaterThan5));

arr = [2, 5, 8, 1, 4]
function checkAvailability(arr, val) {
    return arr.some(
        function (arrVal) {
            return val === arrVal;
        }
    );
}

console.log(checkAvailability(arr, 2));
console.log(checkAvailability(arr, 87));

var person = {
    firstname: "Weslie",
    lastname: "Chen"
};

console.log(person.firstname);
console.log(person["lastname"]);

var cars
console.log(cars);
var cars = new String;
console.log(cars);
var x = new Number;
console.log(x);
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
console.log(y);
console.log(cars);
console.log(person);

person = new Object();
person.firstname = "Weslie";
person.lastname = "Chen";
person.age = 19;
person.eyecolor = "brown";
console.log(person);

console.log("Hello World!".toUpperCase());

function welcome(name, job) {
    console.log("Welcome, " + name + ", the new " + job);
}

welcome("Weslie", "iOS Developer")

function judgeGreater(a, b) {
    if (a > b) {
        return ;
    }
    x = a + b;
}

// ===	全等（值和类型）
// switch 中请使用 break 来阻止代码自动地向下一个 case 运行。
var day = new Date().getDate();
switch (day) {
    case 0:
        x="Today is Sunday";
        break;
    case 1:
        x="Today is Monday";
        break;
    case 2:
        x="Today is Tuesday";
        break;
    case 3:
        x="Today is Wednesday";
        break;
    case 4:
        x="Today is Thursday";
        break;
    case 5:
        x="Today is Friday";
        break;
    case 6:
        x="Today is Saturday";
        break;
    default:
        x="Looking forward to the Weekend";
}
console.log(x);


var i = 2, len = cars.length;
for (; i < len;) {
    i++;
}

for (var i = 0; i < 10; i++) {
    if (i == 3) break;
}

function possibleError() {
    try {
        var x = document.getElementById("demo").value;
        if (x == "")    throw "empty";
        if (isNaN(x))   throw "not a number";
        if (x > 10)     throw "too high";
        if (x < 5)      throw "too low";
    } catch (err) {

    } finally {

    }
}

/*
function validate_required(field, alerttxt) {
    with(field) {
        if (value == null || value == "") {
            alert(alerttxt; return false;)
        } else {
            return true;
        }
    }
}
*/


function validate_email(field, alerttxt) {
    {
        apos = value.indexOf("@");
        dotpos = value.lastIndexOf(".");
        if (apos < 1 || dotpos - apos < 2) {
            return false;
        } else {
            return true;
        }
    }
}



// 通过 id 找到 HTML 元素
var x = document.getElementById("intro");
// 通过标签名找到 HTML 元素
var x = document.getElementById("main");
var y = x.getElementByTagName("p");
// 通过类名找到 HTML 元素

// 改变 HTML 内容
// 修改 HTML 内容的最简单的方法时使用 innerHTML 属性。
document.getElementById("p1").innerHTML = "New text!";

var element = document.getElementById("header");
element.innerHTML = "New Header";

// chaneg html attributes
document.getElementById("image").src = "landscape.jpg";

// change html element style
document.getElementById("p2").style.color = "blue";

// dispatch onclick action to button
document.getElementById("myBtn").onclick = function () { displayDate() }

// events :
// onchang, onmouseover, onmouseout
// onmousedown, onmouseup, onclick

// create new html element

var para = document.createElement("p");
var node = document.createTextNode("This is a new paragraph");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);

// delete exisited html element
var parent = document.getElementById("div1");
var child = parent.getElementById("p1");
parent.removeChild(child);


/*
一些常用的 HTML DOM 方法：
getElementById(id) - 获取带有指定 id 的节点（元素）
appendChild(node) - 插入新的子节点（元素）
removeChild(node) - 删除子节点（元素）
一些常用的 HTML DOM 属性：
innerHTML - 节点（元素）的文本值
parentNode - 节点（元素）的父节点
childNodes - 节点（元素）的子节点
attributes - 节点（元素）的属性节点
*/

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var firstname
var lastname
var age
var eyecolor
var changeName

function person(firstnamem, lastname, age, eyecolor) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.eyecolor = eyecolor

    this.changeName = changeName
    function changeName(name) {
        this.lastname = name
    }
}

var steve = new person("Steve", "Jobs", 48, "brown");
console.log(steve);
steve.changeName("Ballmer");
console.log(steve);
