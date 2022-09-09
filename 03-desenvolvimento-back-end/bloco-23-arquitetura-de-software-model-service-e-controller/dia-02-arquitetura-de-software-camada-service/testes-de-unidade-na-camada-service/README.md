# Testes de Unidade na Camada Service

Teste na camada de _Services_ são fundamentais, pois ali que estão as regra de negócio.

Vamos criar uma pasta _services_, dentro da pasta _tests/unit_ e ali criar um arquivo __passenger.service.test.js__, ficando com a seguinte estrutura de diretórios:
```
.
└── src/
    ├── models/
    │   ├── connection.js
    │   └── travel.js
    ├── services/
    │   └── passenger.service.js
    ├── tests/
    │   ├── integration
    │   └── unit/
    │       └── services/
    │           └── passenger.service.test.js
    ├── app.js
    └── server.js
```

Neste arquivos vamos definir alguns testes, baseados no padrão [Triple A](https://medium.com/@pablodarde/o-padr%C3%A3o-triple-a-arrange-act-assert-741e2a94cf88):
```
// tests/unit/services/passenger.service.test.js

const { expect } = require('chai');
const { requestTravel } = require('../../../src/services/passenger.service');

describe('Verificando service pessoa passageira', function () {
    describe('solicitação de viagem', function () {
        it('sem pontos de parada é realizada com sucesso', async function () {
            // arrange
            const WAITING_DRIVER = 1;
            const passenger = {
                id: 1,
                startingAddress: 'Rua X',
                endingAddress: 'Rua Y',
            };
            // act
            const travel = await requestTravel(
                passenger.id,
                passenger.startingAddress,
                passenger.endingAddress,
            );
            // assert
            expect(travel.message).to.deep.equal({
                id: 1,
                passengerId: 1,
                driverId: null,
                travelStatusId: WAITING_DRIVER,
                startingAddress: 'Rua X',
                endingAddress: 'Rua Y',
                requestDate: '2022-08-24T03:04:04.374Z',
            });
        });
        it('com pontos de parada é realizada com sucesso', async function () {

            // arrange
            const WAITING_DRIVER = 1;
            const passenger = {
                id: 1,
                startingAddress: 'Rua X',
                endingAddress: 'Rua Y',
                waypoints: [{
                    address: 'Rua Z',
                    stopOrder: 1,
                }],
            };

            // act
            const travel = await requestTravel(
                passenger.id,
                passenger.startingAddress,
                passenger.endingAddress,
                passenger.waypoints,
            );

            // assert
            expect(travel.message).to.deep.equal({
                id: 1,
                passengerId: 1,
                driverId: null,
                travelStatusId: WAITING_DRIVER,
                startingAddress: 'Rua X',
                endingAddress: 'Rua Y',
                requestDate: '2022-08-24T03:04:04.374Z',
            });
        });
        it('com mesmo local de origem e destino é rejeitada', async function () {

            // arrange
            const passenger = {
                id: 1,
                startingAddress: 'Rua X',
                endingAddress: 'Rua X',
            };

            // act
            const error = await requestTravel(
                passenger.id,
                passenger.startingAddress,
                passenger.endingAddress,
            );

            // assert
            expect(error.type).to.equal('INVALID_VALUE');
            expect(error.message).to.equal('"endingAddress" contains an invalid value');
        });
    });
});
```