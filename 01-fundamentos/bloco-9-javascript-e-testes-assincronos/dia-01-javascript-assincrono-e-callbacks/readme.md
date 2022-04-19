# Trybe - Exercícios
## Bloco 09 - dia 01
### JavaScript e Testes Assíncronos
### JavaScript Assíncrono e Callbacks

### Exemplos

#### Exemplo 01
_callbacks-exemplo-01.js_

1. Adicione uma callback como parâmetro da funcão getUser .

No código abaixo você tem a função getUser , que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
  - Insira o retorno da função getUser ;
  - Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
  - Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".

```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Insira o retorno da função `getUser`
};

console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"
```
#### Exemplo 02
_callbacks-exemplo-02.js_

2. Passe, como parâmetro e como retorno, uma callback para a função getUser .
No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:
  - Insira uma callback como parâmetro da função getUser ;
  - Retorne a callback passada como parâmetro na função getUser ;

```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
```