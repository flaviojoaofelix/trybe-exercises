// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo.
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let primeiro = 0;
let ultimo = 50;
let maiorPrimo;

for(let i = primeiro; i <= ultimo; i += 1) {
    divisor = 0;
    for (let index = 1; index <= i ; index += 1) {
        if (i % index == 0) {
            divisor += 1;
        }
    }
    if (divisor == 2) {
        maiorPrimo = i;
    }
}

console.log('O maior número primo entre ' + primeiro + ' e ' + ultimo + ' é: ' + maiorPrimo);