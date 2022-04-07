
//Prefill an Array
// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)) 
      throw new TypeError(`${n} is invalid`);
   else if(n==0)
       return [];
   else
     return Array(n).fill(v);
   
   
 }
 //Output
//  describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(prefill(3,1), [1,1,1]);
// Test.assertSimilar(prefill(2,'abc'), ['abc','abc']);
// Test.assertSimilar(prefill('1',1), [1]);
// Test.assertSimilar(prefill(3, prefill(2,'2d')), [['2d','2d'],['2d','2d'],['2d','2d']]);
// var errorThrown = false;

