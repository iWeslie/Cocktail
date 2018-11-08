// function extension

function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(method);
}
fetch("http://example.com", {})
fetch("http://example.com") // error

function f(x, y = 5, z) {
    return [x, y, z];
}
f(1, undefined, 2) // [1, 5, 2]
f(1, , 2) // error

// function length -> number of parameters without default value
// length will not conatin the parameters after the last one with default value
(function (a, b, c = 5) {}).length // 2
(function (a, b = 5, c, d) {}).length // 1
