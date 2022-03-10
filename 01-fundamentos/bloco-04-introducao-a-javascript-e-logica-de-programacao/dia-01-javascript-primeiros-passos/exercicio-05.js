// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//     Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//     Um ângulo será considerado inválido se não tiver um valor positivo.

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

if (angulo1 >= 0 && angulo2 >= 0 && angulo3 >= 0) {
    if (angulo1 + angulo2 + angulo3 == 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Você não pode usar um número negativo para um ângulo');
}