var num = 10
function test() {
    var num = 100
    console.log(num);
}
console.log(num); // 10
test() // 100

'use strict';
function test() {
    var num = 100
    console.log("value of num in test() is: " + num)
    {
        console.log("---> Inner block begins");
        let num = 200
        console.log("value of num: "+ num);
    }
}
test()
