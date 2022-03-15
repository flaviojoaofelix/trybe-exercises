// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const numero = 0;
const resposta = 'O número é ';

if (numero > 0) {
    console.log(resposta + 'positivo');
} else if (numero < 0) {
    console.log(resposta + 'negativo');
} else {
    console.log(resposta + 'zero');
}