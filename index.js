const { multiply, divide, sum, modulo } = require("./src/utils/calc.js");


const resultMultiply = multiply(10,5);
const resultDivide = divide(10,2);


console.log(resultMultiply);
console.log(resultDivide);
console.log(sum(5,6));

console.log(modulo(6,9));