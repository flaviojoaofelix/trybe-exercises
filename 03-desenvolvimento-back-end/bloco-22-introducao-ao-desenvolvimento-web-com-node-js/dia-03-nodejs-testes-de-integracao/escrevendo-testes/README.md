# Escrevendo Testes
## Ambiente de Desenvolvimento: Cacao Trybe

```
mkdir cacao-trybe
cd cacao-trybe
npm init -y
npm install -D mocha@10.0.0 chai@4.3.6
```

Organizando Pastas:
```
.
├── src
├── tests/
│   └── integration/
│       └── chocolates.test.js
└── package.json
```

Configurando o script de teste no __package.json__
```
  "scripts": {
    "test": "mocha ./tests/integration --exit"
  },
```
💡 A tag _--exit_ vai impedir que os testes fiquem executando indefinidamente quando houver erros em funções assíncronas. [(+)](https://github.com/mochajs/mocha/issues/2879)

__tests/integration/chocolates.test.js__
```
const chai = require('chai');

const { expect } = chai;

describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
        response = await minhaRequisicao();
        expect(response.status).to.be.equal(200);
    });
});
```
💡 _minhaRequisicao()_ é um placeholder sem funcionalidade.

Vamos utilizar o plugin [Chai HTTP](https://www.chaijs.com/plugins/chai-http/)
  - Com esse plugin podemos simular requests na API, sem inicializá-la
```
npm install -D chai-http@4.3.0
```

Adicionando o plugin ao teste
__tests/integration/chocolates.test.js__
```
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
```
💡 O chai-http vai criar seu próprio listen(), escolher uma porta automaticamente, fazer a requisição ao endpoint e retornar o resultado dessa request.
__tests/integration/chocolates.test.js__
```
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
        const response = await chai
            .request(app)
            .get('/chocolates');
    });
});
```

1. GET __/chocolates__
  - Objetivo: Retornar uma lista com todos os chocolates cadastrados.
  - Código HTTP: 200 - OK;
  - Body (exemplo):
```
  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]
```

__tests/integration/chocolates.test.js__
```
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando a API Cacao Trybe', function () {
  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });
});
```

Se rodar os testes, eles iram falhar. Mas é o que precisamos para começar a construção da API. O erro foi devido a falta da definição de _app_ (A API ainda não foi construída).