// Questão 02
let result = 0;
const sum = (...numbers) => numbers.reduce((a,b) => a + b, 0);

console.log(sum(2, 4, 8, 16));