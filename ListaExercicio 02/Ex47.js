function transformObject(obj, fn) {
    const newObj = {};
    for (let key in obj) {
      newObj[key] = fn(obj[key]);
    }
    return newObj;
 }

function double(x) {
    return x * 2;
 }   
  
const obj = {
    a: 1,
    b: 2,
    c: 3
 };

const newObj = transformObject(obj, double);
console.log(newObj); 