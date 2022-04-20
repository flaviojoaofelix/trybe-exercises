# Trybe - Exercícios
## Bloco 09 - dia 01
### JavaScript e Testes Assíncronos
### JavaScript Assíncrono e Callbacks

### Exemplos

#### Callbacks - Exemplo 01
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
#### Callbacks - Exemplo 02
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

#### Lidando com erros em operações assíncronas - Exemplo 01
_lceeoa-exemplo-01.js_

1. Adicione uma callback e trate o erro retornado.
A função getCountry abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado.
  - Adicione um segundo parâmetro, que deve ser uma callback , na função getCountry ;
  - Retorne essa callback na função getCountry de forma que trate a mensagem de erro.

```
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);
```

#### Testes Assíncronos com Callbacks - Exemplo 01
_tacc-exemplo-01.test.js_

```
test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});
```

```
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
});
```

```
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done();
    }
  }, 500);
});
```

```
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
});
```
#### Testes Assíncronos com Callbacks - Exemplo 02
_tacc-exemplo-02.test.js_

Quando estiver realizando testes, é muito importante verificar se os resultados exibidos não são falso-positivos. No exemplo acima, em que o teste está passando, experimente mudar a implementação da função asyncSum para que retorne valores incorretos e verifique se o teste irá falhar. Por exemplo, se mudarmos os resultado para ser a + b + 1 o teste falha dizendo que esperava 15 , mas recebeu 16 .

```
const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});
```

#### Setup e Teardown - Exemplo 01

Agora, se você tem um bloco de describe agrupando os testes, e o beforeEach ou afterEach estiverem dentro desse describe , ele rodará apenas dentro dos testes que estão nesse describe .
Ou seja, se criarmos um segundo describe , aquele beforeEach e afterEach que estão no primeiro describe não serão rodados antes e/ou depois dos testes do segundo.
Para visualizar melhor, veja outro exemplo dentro do mesmo contexto.

```
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

describe('Agrupa o primeiro bloco de testes', () => {
  beforeEach(() => {
    cities = ['Pindamonhangaba'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity dentro do primeiro bloco de testes', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
  });
  
  test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});

describe('Agrupa o segundo bloco de testes', () => {
  beforeEach(() => {
    cities = ['Tangamandapio'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity dentro do segundo bloco de testes', () => {
    expect.assertions(3);
    expect(cities).toHaveLength(1);
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toContain('Tangamandapio');
  });
  
  test('Testa a função removeCity dentro do segundo bloco de testes', () => {
    expect.assertions(2);
    removeCity('Tangamandapio');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});
```

#### Exercício 01
_exercicio-01.js_

1. Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
```

#### Exercício 02
_exercicio-02.js_

2. Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
```

#### Exercício 03
_exercicio-03.js_

3. A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

```
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos
```

#### Exercício 04
_exercicio-04.js_

4. Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
```

#### Exercício 05
_exercicio-05.js_

5. Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature uma callback que contenha as ações a serem tomadas em cima da temperatura.

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
```

#### Exercício 06
_exercicio-06.js_

6. Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
```

#### Exercício 07
_exercicio-07.test.js_

7. Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

```
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
```