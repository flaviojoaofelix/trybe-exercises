# Escrevendo nosso primeiro teste

Instalando dependências:
```
npm i mocha@10.0.0 chai@4.3.6 sinon@14.0.0 chai-http@4.3.0 -D
```

Criando um fluxo inicial para inserir uma pessoa no banco de dados:

1. Requisição para o endpoint __POST__ _/people_
  - O corpo da requisição terá o JSON:
```
{
  "firstName": "Luke",
  "lastName": "Skywalker",
  "email": "luke.skywalker@trybe.com",
  "phone": "851 678 4453"
}
```
2. Criar um componente de software para declarar o SQL INSERT no MySQL
3. Receber a resposta da inserção da pessoa
4. Envia a resposta com o código 201 se cadastrado com sucesso ou 500 se houver algum erro

Com o fluxo em mente, vamos criar o diretório dos testes:
```
mkdir -p tests/integration
```

Assim nossa estrutura de diretórios vai ficar da seguinte maneira:
```
.
└── trybecash-api/
    ├── src/
    │   ├── db/
    │   │   └── connection.js
    │   ├── app.js
    │   └── server.js
    ├── tests/
    │   └── integration/
    │       └── _
    ├── docker-compose.yaml
    └── package.json
```

💡 No caso de testes de integração é uma boa prática deixa-los no diretório _tests/integration_ e nos testes unitários, no diretório _testes/unit_

Agora o teste:
__src/tests/integration/people.test.js__
```
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('Testando os endpoints de people', function () {
  it('Testando o cadastro de uma pessoa ', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai
      .request(app)
      .post('/people')
      .send(
        {
          firstName: 'Luke',
          lastName: 'Skywalker',
          email: 'luke.skywalker@trybe.com',
          phone: '851 678 4453',
        },
      );

    expect(response.status).to.equal(201);
    expect(response.body).to.
      deep.equal({ message: 'Pessoa cadastrada com sucesso com o id 42' });
  });

  afterEach(sinon.restore);
});
```

Adicionar o seguinte valor ao _package.json_
```
{
  ...
  ...
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "mocha tests/**/*$NAME*.test.js --exit"
  },
  "keywords": [],
  ...
  ...
}
```

E rodar o teste que irá falhar
```
npm test
```
