//Transportation on vacation
//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
function rentalCarCost(days) {
    var total =  40 * days;
    if(days >= 7)
        total -= 50;
    else if(days >= 3)
        total -= 20;
   
    return total;
    
  }
  //Output
// describe("Regular Tests:", function() {
//   it("Should work for under 3 days:", function() {
//     assert.strictEqual(rentalCarCost(1), 40);
//     assert.strictEqual(rentalCarCost(2), 80);
//   });
  
//   it("Should work for under 7 days:", function() {
//     assert.strictEqual(rentalCarCost(3), 100);
//     assert.strictEqual(rentalCarCost(4), 140);
//     assert.strictEqual(rentalCarCost(5), 180);
//     assert.strictEqual(rentalCarCost(6), 220);
//   });
  
//   it("Should work for 7 or more days:", function() {
//     assert.strictEqual(rentalCarCost(7), 230);
//     assert.strictEqual(rentalCarCost(8), 270);
//     assert.strictEqual(rentalCarCost(9), 310);
//     assert.strictEqual(rentalCarCost(10), 350);    
//   });
// });