//A Chain adding function
//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
function add(n){
    var fun = function(x){ return add(n+x); }
    fun.toString = function(){ return n; }
    return fun;
  }
  