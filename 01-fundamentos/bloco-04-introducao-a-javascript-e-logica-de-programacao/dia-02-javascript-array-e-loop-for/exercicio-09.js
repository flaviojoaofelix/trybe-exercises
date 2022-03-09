let contar = new Array();
let divisor = 2;

for (let i = 1; contar.length < 25; i += 1) {
    contar.push(i);
    let resultado = i / divisor;
    console.log(i + ' divididor por ' + divisor + ' é igual a ' + resultado);
}