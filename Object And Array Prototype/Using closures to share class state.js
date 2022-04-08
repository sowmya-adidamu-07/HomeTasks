//Using closures to share class state
//https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript
var Cat = (function () {
    const cats = []

    const constructor = function (name, weight) {
        if (!name || !weight) throw Error('invalid parameters')
        Object.defineProperty(this, 'name', { get: () => name })
        Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
        cats.push(this)
    }

    constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length

    return constructor
}())
//Output
// describe("Tests", () => {
//     it("test", () => {
//   fluffy = new Cat('fluffy', 15);
//   garfield = new Cat('garfield', 25);
  
  
//   Test.assertEquals(fluffy.weight, 15);
//   Test.assertEquals(fluffy instanceof Cat, true);
//   Test.assertEquals(fluffy.averageWeight, undefined);
//   Test.assertEquals(typeof Cat.averageWeight, "function");
//   Test.assertEquals(Cat.averageWeight(), 20);
  
//     });
//   });
  
