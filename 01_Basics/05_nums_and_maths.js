const score = 100
const balance = new Number(400)

console.log(balance.toFixed(2));

const otherNumber = 123.8976

console.log(otherNumber.toPrecision(4));

const hundreds = 100000

console.log(hundreds.toLocaleString('en-IN'));


//----------------------- Maths ----------------

console.log(Math.abs(-3));
console.log(Math.round(3.5));
console.log(Math.ceil(3.5));
console.log(Math.floor(3.5));
console.log(Math.random()); // always between 0-1

const min =1
const max =6
console.log(Math.floor(Math.random()* (max-min +1))+min);



