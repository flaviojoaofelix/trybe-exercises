let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let number of numbers) {
    if (number % 2 > 0) {
        impar += 1;
    }
}

if (impar == 0) {
    console.log('Nenhum valor ímpar encontrado');
} else if (impar == 1) {
    console.log('Foi encontrado ' + impar + ' valor ímpar');
} else {
    console.log('Foram encontrados ' + impar + ' valores ímpares');
}