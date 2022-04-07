# Trybe - Exercícios
## Bloco 08 - dia 01
### Higher Order Functions do JavaScript ES6
### JavaScript ES6 - Introdução a Higher Order Functions

### Exemplos

#### Exemplo 01
Para fixar
Vamos praticar com os seguintes exercícios:

1. Crie uma função que retorne a string 'Acordando!!' ;
2. Crie outra função que retorne a string 'Bora tomar café!!' ;
3. Crie mais uma função que retorne a string 'Partiu dormir!!' ;
4. Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

### Exercícios

#### Exercício 01
1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

#### Exercício 02
2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").