// A function within a function
// https://www.codewars.com/kata/a-function-within-a-function

function always(n) {
     return  function()  {
       return n;
     };
   
      
}

//Output:
// describe("Tests", () => {
//   it("test", () => {

// Test.expect(always(true)(), 'A function that is always true will return true')
//   });
// });