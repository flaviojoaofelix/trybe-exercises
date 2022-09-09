# Mockando a Camada Model

Vamos mockar os testes da nossa camada _Services_ assim como mockamos a camada _Models_.
Para isso, vamos criar um arquivo __tests/unit/services/mocks/passenger.service.mock.js__, além do arquivo de teste _passenger.service.test.js_, ficando com a seguinte estrutura de diretórios:
```
.
└── src/
    ├── models/
    ├── services/
    │   ├── validations/
    │   │   ├── schemas.js    
    │   │   └── validationsInputValues.js
    │   └── passenger.service.js
    ├── tests/
    │   ├── integration
    │   └── unit/
    │       └── services/
    │           ├── mocks/
    │           │   └── passenger.service.mock.js
    │           └── passenger.service.test.js
    ├── app.js
    └── server.js
```

Vamos definir quais funções da camada _Model_ serão utilizadas na camada _Service_ e definir os retornos esperados.
__tests/unit/services/mock/passenger.service.mock.js__
```
const WAITING_DRIVER = 1;

const travelResponse = ({
  id: 1,
  passengerId: 1,
  driverId: null,
  travelStatusId: WAITING_DRIVER,
  startingAddress: 'Rua X',
  endingAddress: 'Rua Y',
  requestDate: '2022-08-24T03:04:04.374Z'
});

module.exports = {
  travelResponse,
};
```

Agora, com os retornos esperados, podemos adicionar os stubs.
__tests/unit/services/passenger.service.test.js__
```
// tests/unit/services/passenger.service.test.js

// const { expect } = require('chai');
const sinon = require('sinon');
// const { requestTravel } = require('../../../src/services/passenger.service');
 const travelModel = require('../../../src/models/travel.model');
 const waypointModel = require('../../../src/models/waypoint.model');
 const passengerModel = require('../../../src/models/passenger.model');

const { travelResponse } = require('./mocks/passenger.service.mock');

// describe('Verificando service pessoa passageira', function () {
//   describe('solicitação de viagem', function () {
//     it('sem pontos de parada é realizada com sucesso', async function () {
//       // arrange
       sinon.stub(passengerModel, 'findById').resolves(true); // retorna verdadeiro sinalizando que o passageiro existe 
       sinon.stub(travelModel, 'insert').resolves(1); // retorna travel com ID 1
       sinon.stub(travelModel, 'findById').resolves(travelResponse);
//       const WAITING_DRIVER = 1;
//       const passenger = {
//         id: 1,
//         startingAddress: 'Rua X',
//         endingAddress: 'Rua Y',
//       };
//       // act
//       const travel = await requestTravel(
//         passenger.id,
//         passenger.startingAddress,
//         passenger.endingAddress,
//       );
//       // assert
//       expect(travel.message).to.deep.equal({
//         id: 1,
//         passengerId: 1,
//         driverId: null,
//         travelStatusId: WAITING_DRIVER,
//         startingAddress: 'Rua X',
//         endingAddress: 'Rua Y',
//         requestDate: '2022-08-24T03:04:04.374Z',
//       });
//     });

//     it('com pontos de parada é realizada com sucesso', async function () {
//       // arrange
       sinon.stub(passengerModel, 'findById').resolves(true); // retorna verdadeiro sinalizando que o passageiro existe 
       sinon.stub(travelModel, 'insert').resolves(1); // retorna travel com ID 1
       sinon.stub(travelModel, 'findById').resolves(travelResponse);
       sinon.stub(waypointModel, 'insert').resolves(1); // retorna waypoint com ID 1

//       const WAITING_DRIVER = 1;
//       const passenger = {
//         id: 1,
//         startingAddress: 'Rua X',
//         endingAddress: 'Rua Y',
//       };

//       // act
//       const travel = await requestTravel(
//         passenger.id,
//         passenger.startingAddress,
//         passenger.endingAddress,
//         passenger.waypoints,
//       );

//       // assert
//       expect(travel.message).to.deep.equal({
//         id: 1,
//         passengerId: 1,
//         driverId: null,
//         travelStatusId: WAITING_DRIVER,
//         startingAddress: 'Rua X',
//         endingAddress: 'Rua Y',
//         requestDate: '2022-08-24T03:04:04.374Z',
//       });
//     });

//     it('com mesmo local de origem e destino é rejeitada', async function () {
//       // arrange
//       const passenger = {
//         id: 1,
//         startingAddress: 'Rua X',
//         endingAddress: 'Rua X',
//       };

//       // act
//       const error = await requestTravel(
//         passenger.id,
//         passenger.startingAddress,
//         passenger.endingAddress,
//       );

//       // assert
//       expect(error.type).to.equal('INVALID_VALUE');
//       expect(error.message).to.equal('"endingAddress" contains an invalid value');
//     });
//   });
   afterEach(function () {
     sinon.restore();
   });
// });
```
⚠️ Perceba que só foram criados stubs nos cenários em que será retornado algum objeto de _Model_.

Para ter uma ideia melhor da cobertura dos testes, podemos utilizar a biblioteca [nyc](https://www.npmjs.com/package/nyc), que fornece um relatório de cobertura de teste do código após a execução dos testes.
```
npm install -D nyc@15.1
```
Feito a instalação, basta executar os teste e verificar a cobertura de código.
```
npm run test:coverage
```