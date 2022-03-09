let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let number of numbers) {
    soma = soma + number;
}

let media = soma / numbers.length;
if (media > 20){
    console.log('O valor é maior que 20');
} else if (media <= 20) {
    console.log('O valor é menor ou igual a 20');
} else {
    console.log('O valor é: ' + media);
}
console.log(media);