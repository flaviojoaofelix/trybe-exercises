// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//     Bonus: use somente um if .

const numeros = [31, 21, 11];
let resultado = numeros[0] % 2 === 0 || numeros[1] % 2 === 0 || numeros[2] % 2 === 0;
console.log(resultado);
