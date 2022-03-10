// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
// let word = 'tryber';

let word = 'tryber';
let caracteres = word.length;
let invertido;

for (let i = caracteres; i >= 0; i -= 1) {
    if (invertido == null) {
        invertido = word[i]
    } else {
        invertido += word[i];
    }
}

console.log(invertido);