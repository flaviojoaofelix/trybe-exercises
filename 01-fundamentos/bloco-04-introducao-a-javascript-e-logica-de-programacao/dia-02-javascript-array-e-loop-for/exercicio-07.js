let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;
for (let number of numbers) {
    if (number > maior) {
        maior = number;
    }
}

let menor = maior;
for (let number of numbers) {
    if (number < menor) {
        menor = number;
    }
}

console.log(menor);