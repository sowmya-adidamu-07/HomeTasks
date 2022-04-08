//A Chain adding function
//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

function add(n) {
    var fn = function (x) { return add(n + x); }
    fn.toString = function () { return n; }
    return fn;
}

//Output
//const equal = require('chai').assert.equal;

// describe("Sample Tests", () => {
// 	it("A single call should return the number passed in", () => {
// 		equal(add(1), 1);
// 	});
// 	it("several calls", () => {
// 		equal(add(1)(2), 3);
// 		equal(add(1)(2)(3), 6);
// 		equal(add(1)(2)(3)(4), 10);
// 		equal(add(1)(2)(3)(4)(5), 15);
// 	});
// 	it("should be able to be mixed with numbers", () => {
// 		equal(add(1)(2) + 3, 6);
// 	});
// 	it("Must be able to store values", () => {
// 		const a = add(1)(2);
// 		const b = add(3)(4);
// 		equal(a, 3);
// 		equal(b, 7);
// 	});
// 	it("Must be able to store curried functions", () => {
// 		const a = add(1)(2);
// 		equal(a, 3);
// 		equal(a(3), 6);
// 		equal(a, 3);
// 	});
// 	it("Must be callable with a curried function", () => {
// 		const a = add(1)(2);
// 		const b = add(3)(4);
// 		equal(a(b), 10);
// 		equal(b(a), 10);
// 		equal(a, 3);
// 		equal(b, 7);
// 	});
// });