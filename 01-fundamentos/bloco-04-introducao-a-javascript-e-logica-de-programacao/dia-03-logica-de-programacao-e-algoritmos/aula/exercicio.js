// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.

let soma = 0;

for (let i  = 50; i <= 100; i += 1) {
    soma += i;
}

console.log(soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.

let divisiveis = 0;

for (let i = 1; i <= 125; i += 1) {
    if (i % 3 == 0) {
        divisiveis += 1;
    }
}

if (divisiveis == 50) {
    console.log('Mensagem Secreta');
} else {
    console.log(divisiveis);
}

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let jogo = ['Pedra', 'Papel', 'Tesoura'];

let jogador1 = jogo[0];
let jogador2 = jogo[2];

if (jogador1 === 'Pedra' && jogador2 === 'Tesoura') {
    console.log('Jogador 1 Venceu');
} else if (jogador1 === 'Papel' && jogador2 === 'Pedra') {
    console.log('Jogador 1 Venceu');
} else if (jogador1 === 'Tesoura' && jogador2 === 'Papel') {
    console.log('Jogador 1 Venceu');
} else if (jogador1 === jogador2) {
    console.log('Houve um empate');
} else {
    console.log('Jogador 2 Venceu');
}

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.

let idadePessoa = 18;

if (idadePessoa < 18) {
    console.log('A pessoa é menor de idade');
} else {
    console.log('A pessoa é maior de idade');
}

// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

let nomes = ['Marcella', 'Carlos', 'Camila'];
let idades = [32, 45, 33];
let maisNovo = 200;
let index = 0;

for (let i = 0; i < idades.length; i += 1) {
    if (idades[i] < maisNovo) {
      maisNovo = idades[i];
      index = i;
    }
}

console.log(nomes[index] + " é a pessoa mais nova");


// Participantes:
// Lucas Morais
// Aron Adams
// Junior Britto
//