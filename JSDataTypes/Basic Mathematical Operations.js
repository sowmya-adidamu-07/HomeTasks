//Basic Mathematical Operations
//https://www.codewars.com/kata/basic-mathematical-operations
function basicOp(operation, value1, value2) {
    if (operation === '+')
        return value1 + value2;
    else if (operation === '-')
        return value1 - value2;
    else if (operation === '*')
        return value1 * value2;
    else if (operation === '/')
        return value1 / value2;
}
//Output
//describe("Tests", () => {
    // it("test", () => {
    //     console.log("Basic tests\n");
    //     Test.assertSimilar(basicOp('+', 4, 7), 11);
    //     Test.assertSimilar(basicOp('-', 15, 18), -3);
    //     Test.assertSimilar(basicOp('*', 5, 5), 25);
    //     Test.assertSimilar(basicOp('/', 49, 7), 7);
    //       });
    //     });
