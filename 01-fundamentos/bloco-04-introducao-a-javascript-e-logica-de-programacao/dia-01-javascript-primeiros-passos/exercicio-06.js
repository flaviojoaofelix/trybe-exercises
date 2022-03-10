// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas
// sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = 'Torre';

if (peca.toLowerCase() === 'bispo' || peca.toLowerCase() === 'bishop') {
    console.log('A peça ' + peca.toUpperCase() + ' se movimenta em DIAGONAIS.');
} else if (peca.toLowerCase() === 'cavalo' || peca.toLowerCase() === 'horse') {
    console.log('A peça ' + peca.toUpperCase() + ' se movimenta em L.');
} else if (peca.toLowerCase() === 'torre' || peca.toLowerCase() === 'tower') {
    console.log('A peça ' + peca.toUpperCase() + ' se movimenta em LINHA.');
} else {
    console.log('Insira um nome válido de peça para determinar seu movimento.');
}