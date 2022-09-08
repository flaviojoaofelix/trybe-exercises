# Criando o endpoint de listagem de pessoas

Iniciando pelo testes de integração, vamos adicionar as seguintes linhas no arquivo __src/tests/integration/people.test.js__
```
// const chai = require('chai');

...
...
...

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];

// describe('Testando os endpoints de people', function () {
  
  ...
  ...
  ...

  it('Testando a listagem de todas as pessoas', async function () {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai
      .request(app)
      .get('/people');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('Testando a listagem da pessoa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);
    const response = await chai
      .request(app)
      .get('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList[0]);
  });

  // afterEach(sinon.restore);
// });
```

Se executar os testes agora, eles vão falhar, retornando um status 404. Isso ocorreu por que ainda não foi implementado os endpoints.

Com isso, vamos adicionar o seguinte código ao arquivo __src/routes/peopleRoutes.js__:
```
// const express = require('express');
// const peopleDB = require('../db/peopleDB');

...
...
...

router.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await peopleDB.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

// module.exports = router;
```

Se rodarmos o teste neste momento ele ainda vai falhar pois não foram implementadas as funções _findAll_ e _findById_
Então vamos adiciona-las no arquivo __src/db/peopleDB.js__
```
// const conn = require('./connection');

// const insert = (person) => conn.execute(
//     `INSERT INTO people 
//       (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
//     [person.firstName, person.lastName, person.email, person.phone],
//   );

const findAll = () => conn.execute('SELECT * FROM people');

const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]);

// module.exports = {
//   insert,
  findAll,
  findById,
// };
```

A partir daqui os testes passam a funcionar e com isso, implementamos dois endpoints capazes de buscar as pessoas cadastradas no Banco de Dados da API.