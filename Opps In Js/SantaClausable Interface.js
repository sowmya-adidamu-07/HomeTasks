// SantaClausable Interface
// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function (methodName) {
        return typeof obj[methodName] == 'function';
    });
}