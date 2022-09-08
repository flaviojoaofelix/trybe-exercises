# Escrevendo teste de unidade

Vamos criar um Mock que será utilizado em nosso teste:
__tests/unit/models/mocks/travel.model.mock.js__
```

const travelsFromDB = [
  {
    
    id: 1,
    driver_id: 3,
    passenger_id: 4,
    travel_status_id: 1,
    starting_address: 'Rua XYZ',
    ending_address: 'Rua ABC',
    request_date: '20202',
  },
  {
    
    id: 2,
    driver_id: 1,
    passenger_id: 2,
    travel_status_id: 2,
    starting_address: 'Rua Alfa',
    ending_address: 'Rua Omega',
    request_date: '20202',
  },
];

const travels = [
  {
    
    id: 1,
    driverId: 3,
    passengerId: 4,
    travelStatusId: 1,
    startingAddress: 'Rua XYZ',
    endingAddress: 'Rua ABC',
    requestDate: '20202',
  },
  {
    
    id: 2,
    driverId: 1,
    passengerId: 2,
    travelStatusId: 2,
    startingAddress: 'Rua Alfa',
    endingAddress: 'Rua Omega',
    requestDate: '20202',
  },
];

module.exports = {
  travels,
  travelsFromDB,
};
```
- travelsFromDB
  - Simula uma resposta do banco de dados (em _snake case_)
- travels
  - Simula a resposta da camada Model (em _camel case_)

Com o _mock_ criado, vamos para o arquivo de teste:
__tests/unit/models/travel.model.test.js__
```

const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const travelModel = require('../../../src/models/travel.model');

const { travels } = require('./mocks/travel.model.mock');

describe('Testes de unidade do model de viagens', function () {
  it('Realizando uma operação INSERT com o model travel', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const result = await travelModel.insert(travels[0]);

    expect(result).to.equal(42);
  });

  afterEach(sinon.restore);
});
```

Agora vamos criar o arquivo __travel.model.js__ e coloca-lo na pasta __src/moels__ e mover o arquivo __connection.js__ para esta pasta.

Ficando assim com a seguinte estrutura de diretórios:
```
.
├── src/
│   ├── models/
│   │   ├── connection.js
│   │   └── travel.model.js
│   ├── app.js
│   └── server.js
├── test/
│   ├── integration
│   └── unit/
│       └── models/
│           ├── mocks/
│           │   └── travel.model.mock.js
│           └── travel.model.test.js
├── env-example
├── docker-compose.yml
├── script.sql
├── thunder-trybecar.json
└── package.json
```

Se executar o teste aqui, ele irá falhar, já que não esxiste a função de insert dentro do nosso _travel.model.js_.

Vamos resolver o problema com o seguinte código, e depois voltamos para a implementaçõa da função:
__src/models/travel.model.js__
```
const insert = (travel) => travel;

module.exports = {
  insert,
};
```

O teste continua a falhar, mas o problema agora é outro. O teste aguarda como resultado a o número 42, mas está recebendo um objeto. Assim, vamos refatorar a função insert para resolver este problema!