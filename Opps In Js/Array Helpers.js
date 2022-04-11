//Array Helpers
//https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
Array.prototype.square=function(){
    return this.map(value=>value*value)
}
Array.prototype.cube=function(){
    return this.map(value=>value*value*value)
}
Array.prototype.sum=function(){
    return this.reduce((value1,value2)=>value1+value2,0)
}
Array.prototype.average=function(){
    return this.reduce((value1,value2)=>value1+value2,0)/this.length
}
Array.prototype.even=function(){
    return this.filter(value=>value%2==0)
}
Array.prototype.odd=function(){
    return this.filter(value=>value%2!==0)
}
