//Function Cache
//https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript
function cache(func) {
    const cachedResult = {};
    return (...args) => {
      const key = JSON.stringify(args);
  
      if (!(key in cachedResult)) {
        const result = func.apply(null, args);
        cachedResult[key] = result;
      }
  
      return cachedResult[key];

    }
}
