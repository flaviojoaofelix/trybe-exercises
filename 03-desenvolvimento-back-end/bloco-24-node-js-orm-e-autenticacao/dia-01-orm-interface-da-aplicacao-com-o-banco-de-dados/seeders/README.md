# Seeders

É usado para alimentar o _BD_ com informações necessárias para o funcionamento da aplicação ou simplesmente evitar de iniciar um banco de dados vazio.

Vamos executar a criação de uma seed:
```
npx sequelize seed:generate --name users
```

Utilizamos o código abaixo para adicionar alguns usuários ao banco de dados através do arquivo de _seed_ criado na pasta __src/seeders__:
```
// src/seeders/[timestamp]-users.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Leonardo',
        email: 'leo@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
```
💡 A função _bulkInsert_ ajuda e inserir vários dados de uma única vez, sem a necessidade de vários inserts.

Perceba que a _seed_ segue o mesmo conceito da _migration_, com _Up_ and _Down_, na intenção de reverter a inserção dos dados, caso necessário.

Para executar a _seed_, utilizamos o seguinte comando:
```
npx sequelize db:seed:all
```
Para reverter:
```
npx sequelize db:seed:undo:all
```