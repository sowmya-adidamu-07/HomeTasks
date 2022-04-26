//Extract Nested Object Reference
//https://www.codewars.com/kata/extract-nested-object-reference

Object.prototype.hash = function(string) {
    try {
    return eval(`this.${string}`)
    }
    catch(exception){
    return undefined
    }
  
}