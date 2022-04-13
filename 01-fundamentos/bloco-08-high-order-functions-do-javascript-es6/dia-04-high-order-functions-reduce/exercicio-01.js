// Exercício 01
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((acc, arr) => acc.concat(arr),[]);

// function flatten() {
//   // escreva seu código aqui
//   return arrays.reduce((acc, arr) => {
//     acc.concat(arr);
//     console.log(`${acc} ${arr}`);
//   }, []);
// }

console.log(flatten());