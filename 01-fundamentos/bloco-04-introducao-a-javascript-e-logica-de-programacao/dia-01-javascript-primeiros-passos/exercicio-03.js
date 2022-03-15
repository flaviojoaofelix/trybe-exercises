// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 30;
const b = 20;
const c = 40;
const resposta = 'O maior número é: '

if (a > b && a > c) {
    console.log(resposta + a);
} else if (b > a && b > c) {
    console.log(resposta + b);
} else if (c > a && c > b) {
    console.log(resposta + c);
} else {
    console.log('Não foi possível determinar o maior número');
}