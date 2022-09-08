# Criando os endpoints de atualização e exclusão de pessoas

Vamos implementas mais 2 endpoints para finalizar a API
  - Um para alterar os dados de uma pessoa cadastrada no BD
  - Outro para excluir pessoas cadastradas

Iniciamos pelos testes!
Adicione as seguintes linhas ao arquivo __src/tests/integration/people.test.js__:
```
// const chai = require('chai');
// const chaiHttp = require('chai-http');

...
...
...

// describe('Testando os endpoints de people', function () {
  
  ...
  ...
  ...

  it('Testando a alteração de uma pessoa com o id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .put('/people/1')
      .send(
        {
          firstName: 'Lucão',
          lastName: 'Andarilho dos céus',
          email: 'lucao.andarilho@trybe.com',
          phone: '851 678 4453',
        },
      );

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 atualizada com sucesso' });
  });

  it('Testando a exclusão da pessoa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .delete('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 excluída com sucesso' });
  });

  // afterEach(sinon.restore);
// });
```

Executando os testes nesse momento, estes últimos casos adicionados irão falhar (TDD 😎)

Então vamos adicionar os endpoints no arquivo de rotas __src/routes/peopleRoutes.js__
```
const express = require('express');

...
...
...

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await peopleDB.update(person, id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await peopleDB.remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

// module.exports = router;
```

Executando os testes aqui, vai falhar pois a implementação dos métodos _update_ e _remove_ ainda não foram realizadas.
Com isso, vamos ao arquivo __src/db/peopleDB.js__ para adicionar estes métodos:
```
// const conn = require('./connection');

...
...
...

const update = (person, id) => conn.execute(
    `UPDATE people 
      SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
    [person.firstName, person.lastName, person.email, person.phone, id],
  );

const remove = (id) => conn.execute('DELETE FROM people WHERE id = ?', [id]);

// module.exports = {
//   insert,
//   findAll,
//   findById,
  update,
  remove,
// };
```

E a partir desse ponto, ao executar os testes, eles irão passar! 🥳

Podemos iniciar a aplicação com _npm start_ e utilizar o _Thunder_ para fazer a requisição em __PUT__ _/people/1_ com o seguinte JSON no corpo:
```
{
  "firstName": "Lucão",
  "lastName": "Andarilho das estrelas",
  "email": "lucao.andarilho@trybe.com",
  "phone": "851 678 4453"
}
```
Com essa requisição, os dados da pessoa com __ID 1__, foram alterados.

Podemos também fazer uma requisição __DELETE__ _/people/1_ para excluir a pessoa com ID igual a 1. E basta fazer uma requisição __GET__ _/people_ para recuperar os dados e confirmar as alterações.