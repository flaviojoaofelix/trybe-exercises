// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e
// uma função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkBid = (bid, drawnNumber) => bid === drawnNumber;

const raffle = (bid, callback) => {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const drawnNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const drawn = `O número sorteado foi ${drawnNumber}.`;

  return callback(bid, drawnNumber) ? `${drawn} Parabéns, você foi sorteado!` : `${drawn} Tente novamente!`
};

console.log(raffle(5, checkBid));