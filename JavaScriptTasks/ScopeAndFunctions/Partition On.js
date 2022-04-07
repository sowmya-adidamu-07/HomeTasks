//Partition On
// https://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {

    var falseVal = items.filter(function (e) { return !pred(e); });

    var trueVal = items.filter(pred);

    items.length = 0;

    for (var i = 0; i < falseVal.length; i++) {

        items.push(falseVal[i]);

    }

    for (var i = 0; i < trueVal.length; i++) {

        items.push(trueVal[i]);

    }

    return falseVal.length;

}

//Output 
// describe("Tests", () => {
//     it("test", () => {
//   var items = [1, 2, 3, 4, 5, 6];
//   function isEven(n) {return n % 2 == 0}
//   var i = partitionOn(isEven, items);
//   Test.assertEquals( i, 3, 'partioned at 3' );
//   Test.assertSimilar( items.slice(0, i), [1, 3, 5] );
//   Test.assertSimilar( items.slice(i),    [2, 4, 6] );
//     });
//   });
  