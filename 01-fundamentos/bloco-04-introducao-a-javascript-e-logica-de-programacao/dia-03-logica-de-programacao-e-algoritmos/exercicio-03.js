// 3- Considere o array de strings abaixo:
//     let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra;
let menorPalavra;
let contadorMaiorPalavra = 0;
let contadorMenorPalavra = 100;


for (let palavra of array) {
    if (palavra.length > contadorMaiorPalavra) {
        maiorPalavra = palavra;
        contadorMaiorPalavra = palavra.length;
    }
    if (palavra.length < contadorMenorPalavra) {
        menorPalavra = palavra;
        contadorMenorPalavra = palavra.length;
    }
}

console.log('Maior Palavra: ' + maiorPalavra + ' com ' + contadorMaiorPalavra + ' caracteres.');
console.log('Menor Palavra: ' + menorPalavra + ' com ' + contadorMenorPalavra + ' caracteres.');