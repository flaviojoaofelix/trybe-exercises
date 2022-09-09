# Implementando o model de viagens

Vamos iniciar o processo de refatoração do arquivo __src/models/travel.model.js__
Basicamente tudo que iremos necessitar, já existe no arquivo __src/app.js__.

Iniciamos escrevendo nosso código do arquivo __src/models/travel.model.js__ e depois refatoramos o arquivo __src/app.js__.

__src/models/travel.model.js__
```
const snakeize = require('snakeize');
const connection = require('./connection');

const insert = async (travel) => {
  const columns = Object.keys(snakeize(travel))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(travel)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO travels (${columns}) VALUE (${placeholders})`,
    [...Object.values(travel)],
  );

  return insertId;
};

module.exports = {
  insert,
};
```

E assim podemos refatorar nosso __src/app.js__
```
const snakeize = require('snakeize');
const connection = require('./connection');

const insert = async (travel) => {
  const columns = Object.keys(snakeize(travel))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(travel)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO travels (${columns}) VALUE (${placeholders})`,
    [...Object.values(travel)],
  );

  return insertId;
};

module.exports = {
  insert,
};
```

Vamos usar o endpoint __POST__ _passengers/3/request/travel_ para criar uma viagem com o seguinte JSON de corpo da requisição:
```
{
  "startingAddress": "Rua ABC",
  "endingAddress": "Rua ZYZ",
  "waypoints": [
    {
      "address": "Ponto 01",
      "stopOrder": 1
    },
    {
      "address": "Ponto 02",
      "stopOrder": 2
    },
    {
      "address": "Ponto 03",
      "stopOrder": 3
    }
  ]
}
```
Após essa requisição, teremos uma nova viagem cadastrada.

Vamos então começar a escrever um teste de unidade qque busca uma viagem a partir do seu id.
__tests/unit/models/travel.model.js__
```
...
...
...

// Aqui estamos adicionando a importação do travelsFromDB
const { travels, travelsFromDB } = require('./mocks/travel.model.mock');

// describe('Testes de unidade do model de viagens', function () {
  ...
  ...
  ...

  it('Recuperando uma travel a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[travelsFromDB[0]]]);
    const result = await travelModel.findById(1);
    expect(result).to.be.deep.equal(travels[0]);
  });

//   afterEach(sinon.restore);
// });
```

Se rodar o teste neste momento, vamos ter um erro, por ainda não ter sido implementada a função findById. Com isso, vamos ao arquivo __src/models/travel.model.js__ fazer esta implementação:
```
const camelize = require('camelize');
// const snakeize = require('snakeize');
// const connection = require('./connection');
...
...
...

const findById = async (travelId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM travels WHERE id = ?',
    [travelId],
  );
  return camelize(result);
};

// module.exports = {
//   insert,
  findById,
// };
```

Com isso podemos refatorar nosso arquivo __src/app.js__
```
...
...
...

// app.post('/passengers/:passengerId/request/travel', async (req, res) => {
//   const { passengerId } = req.params;
//   const {
//     startingAddress,
//     endingAddress,
//     waypoints,
//   } = req.body;

//   if (isPassengerExists(passengerId)) {

//     const travelId = await travelModel.insert({ passengerId, startingAddress, endingAddress });

//     await Promise.all(saveWaypoints(waypoints, travelId));

    // Aqui substituímos a consulta SQL pela nossa função findById
    const travel = await travelModel.findById(travelId);
    return res.status(201).json(travel);
//   }

//   res.status(500).json({ message: 'Ocorreu um erro' });
});

...
...
...
```
Assim, temos nosso endpoint __POST__ _/passengers/:passengerId/request/travel_ refatorado, passando todo o código refente as entidades para a camada _Model_.

Vamos agora refatorar nosso endpoint __GET__ _drivers/open/travels_ afim de passar o código do BD para a camada _Model_ também.

Primeiro, adicionamos mais um caso de teste no arquivo __tests/unit/models/travel.model.test.js__
```
...
...
...

// describe('Testes de unidade do model de viagens', function () {
  ...
  ...
  ...

  it('Recuperando as travels a partir do seu travel_status_id', async function () {
    sinon.stub(connection, 'execute').resolves([travelsFromDB]);
    const result = await travelModel.findByTravelStatusId(1);
    expect(result).to.be.deep.equal(travels);
  });

//   afterEach(sinon.restore);
//});
```

E após isso, para evitar a falha do teste, vamos implementar a função _findByTravelStatusId_ no arquivo __src/models/travel.model.js__:
```
...
const camelize = require('camelize');
...

const findByTravelStatusId = async (travelStatusId) => {
  const [result] = await connection.execute(
    'SELECT * FROM travels WHERE travel_status_id = ?',
    [travelStatusId],
  );
  return camelize(result);
};

// module.exports = {
//   insert,
//   findById,
  findByTravelStatusId,
// };
```

Aqui os testes já estão funcionando e com isso podemos refatorar nosso endpoint __GET__ _/drivers/open/travels_:
```
...
...
...

app.get('/drivers/open/travels', async (_req, res) => {
  const result = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  res.status(200).json(result);
});

...
...
...
```

Já podemos notar que o código do arquivo __src/app.js__ vai ficar mais objetivo e semântico. Essa é uma grande vantagem de separar o código em camadas.