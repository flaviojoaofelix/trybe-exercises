# Dublês de Teste

Vamos utilizar a ferramenta [Sinon](https://sinonjs.org/) para os _Test Doubles_.

Nesse primeiro momento vamos focar em um tipo de teste, o _stub_.

💡 Stubs são objetos que podemos utilizar para simular interações com dependências externas.

Instalando o Sinon
```
npm install -D sinon@14.0.0
```

Vamos ver como podemos criar um _stub_ para a função _readFile()_ do _fs_:

__tests/integration/chocolates.test.js__
```
//const chai = require('chai');
//const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

//const app = require('../../src/app');

//const { expect } = chai;

//chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ]});

//describe('Testando a API Cacao Trybe', function () {
      sinon.stub(fs.promises, 'readFile')
        .resolves(mockFile);
//describe('Usando o método GET em /chocolates', function () {
  //it('Retorna a lista completa de chocolates!', async function () {

//...
```

💡 O mocha fornece as funções beforeEach e afterEach, que podem ser usadas casos como ter mais de um arquivo de mock.

__tests/integration/chocolates.test.js__
```
const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ]});

describe('Testando a API Cacao Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });
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

💡 A função restore() usada no afterEach vai garantir que o stub de um teste não seja replicado para o teste seguinte!