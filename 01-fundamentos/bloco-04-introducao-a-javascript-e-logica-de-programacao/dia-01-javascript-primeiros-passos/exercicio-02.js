// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const a = 10;
const b = 2;
const resposta = 'O maior número é ';

if (a > b) {
    console.log(resposta + a);
} else if (b > a) {
    console.log(resposta + b);
} else {
    console.log('Impossível determinar o maior número');
}