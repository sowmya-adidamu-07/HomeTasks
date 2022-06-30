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


