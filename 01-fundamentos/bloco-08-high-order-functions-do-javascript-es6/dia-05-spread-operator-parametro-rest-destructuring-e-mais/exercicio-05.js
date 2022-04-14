// Questão 05
// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados.
// Detalhe: você precisa fazer essa função gastando 1 linha só:
const myList = [1, 2, 3];

// escreva swap abaixo
//const swap = () => myList.reverse();

// Solução Gabarito:
const swap = ([a, b, c]) => [c, b, a];

console.log(swap(myList));