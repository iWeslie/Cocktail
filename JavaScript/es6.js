{
    let a = 10
    var b = 1
}
var a = []
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
// a[6](): 10

let [x = 1, y = x] = [1, 2] // x = 1, y = 2

let { foo: baz } = { foo: "aaa", bar: "bbb" } // baz = "aaa"

let arr = [1, 2, 3]
let {0: first, [arr.length - 1]: last } = arr
// first = 1, last = 3

let { length: len } = 'Hello'
// len = 5

// let { prop: x } = undefined; // TypeError

function move({x, y} = { x: 0, y: 0}) {
    return [x, y];
}

move({x: 3, y: 8}) // [3, 8]
move({x: 3}) // [3, undefined]
move({}) // [undefined, undefined]
move() // [0, 0]

// [[1, 2], [3, 4]].map(([a, b]) => a + b) // [3, 7]

// Destructing
// 1. swap values
let x = 1
let y = 2
[x, y] = [y, x]

// 2. multiple return values from function
let [a, b, c] = function example() {
    return [1, 2, 3];
}()

function example() {
    return {
        foo: 1,
        bar: 2
    };
}
let { foo, bar } = example()

// 3. pass value tp function
function f([x, y, z]) { }

f([1, 2, 3])
f({z: 3, y: 2, x: 1})

// 4. extact JSON data
let jsonData = {
    id: 42,
    status: "OK",
    data: [765, 2345]
}
let {id, status, data: number} = jsonData
console.log(id, status, number);

// 5. default value for functions
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};

// 6. map
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}

// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}

// 7. input modules designated functions
const { SourceMapConsumer, SourceNode } = require("source-map");
