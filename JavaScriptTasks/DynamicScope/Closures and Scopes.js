
//Closures and Scopes
//https://www.codewars.com/kata/closures-and-scopes/train/javascript

function createFunctions(n) {
    var callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
  }
  var callbacks = createFunctions(5);
console.log(callbacks[0]());
//Output
// describe('example tests', function() {
//   it('functions must return correct number', function() {
//     var callbacks = createFunctions(5);

//     for (var i=0; i<callbacks.length; i++) {
//       Test.assertEquals(callbacks[i](), i, 'Function with index ' + i);
//     }
//   });
// });