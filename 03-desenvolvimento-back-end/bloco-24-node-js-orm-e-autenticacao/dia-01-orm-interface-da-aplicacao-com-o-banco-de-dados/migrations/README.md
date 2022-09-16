# Migrations

Migration é uma forma de versiona o schma do _BD_. Cada _migration_ possui um pedaço do código com o histórico de alterações feitas ao _BD_.

Em resumo, ao criar o banco de dados, criamos um arquivo _Migration_ e para cada alteração na estrutura do banco, é criado um novo arquivo _migration_ contendo apenas aquela alteração e com uma estampa _datetime_ em seu nome para manter essa linha do tempo, um histórico de mudanças e evoluções.

Para gerar um 'esqueleto' de uma _migration_, executamos o seguinte comando:
```
npx sequelize migration:generate --name create-user
```
- Dessa forma é criado um novo arquivo _[timestamp]-create-user.js_, que, no nosso caso, vai para a pasta __src/migrations__, com o seguinte código:
__src/migrations/[timestamp]-create-user.js__
```
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
```

Vamos criar uma tabela _users_ com os seguintes campos:
- id
  - primary key
  - not null
  - auto-increment
  - _integer_
- fullName: Nome completo do usuário
  - _string_
- email: Email do usuário
  - _string_
- createdAt: data de criação/cadastro do usuário
  - not null
  - _date_
- updatedAt: data da última atualização
  - not null
  - _date_

Podemos criar a tabela _Users_ pelo _queryInterface_ com a função _createTable_ que possue dois parâmetros:
  1. Recebe uma string com o nome da tabela;
  2. Recebe um objeto com os campos e condições da tabela.

__src/migrations/[timestamp]-create-user.js__
```
// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
       await queryInterface.createTable('Users', {
         id: {
           allowNull: false,
           autoIncrement: true,
           primaryKey: true,
           type: Sequelize.INTEGER
         },
         fullName: {
           type: Sequelize.STRING
         },
         email: {
           type: Sequelize.STRING
         },
         createdAt: {
           allowNull: false,
           type: Sequelize.DATE
         },
         updatedAt: {
           allowNull: false,
           type: Sequelize.DATE
         }
       });
//   },

//   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Users');
//   }
// };
```
⚠️ O código da _migration_ não pode conter erros, caso contrário podem não executar o processo corretamente. __CUIDADO__ ao mexer no código de uma _migration_.

Agora que criamos a _migration_, usamos o seguinte comando:
```
npx sequelize db:migrate
```

Para reverter a mudança, basta executar o seguinte comando:
```
npx sequelize db:migrate:undo
```

Agora vamos criar uma nova coluna na tabela _Users_, chamada _phoneNum_ e para isso vamos criar um novo _migration_, com o seguinte comando:
```
npx sequelize migration:generate --name add-column-phone-table-users
```
- Criamos então um novo arquivo migration __[timestamp]-add-column-phone-table-users.js__

Assim, inserimos a função _queryInterface.addColumn()_ no escopo _Up_ para adicionar essa nova coluna e a função _queryInterface.removeColumn()_ no escopo _Down_ para remover esta coluna da tabela _Users_ caso a gente queira reverter essa mudança.

__src/migrations/[timestamp]-add-column-phone-table-users.js__
```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'phoneNum', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phoneNum');
  }
};
```

Rodamos o comando para executar a _migration_:
```
npx sequelize db:migrate
```

E alteramos o __src/models/user.model.js__ para incluir esta coluna _phoneNum_:
__src/models/user.model.js__
```
// const User = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     fullName: DataTypes.STRING,
//     email: DataTypes.STRING,
       // aqui inserimos o datatype da coluna criada
       phoneNum: DataTypes.STRING,
//   });
// 
//   return User;
// };

// module.exports = User;
```

Pronto, criamos uma tabela através de uma _Migration_ e depois alteramos essa tabela, adicionado uma nova coluna, com uma nova/outra _Migration_.

💡 Mais informações sobre as possibilidade do _queryInterface_ podem ser encontradas na [Documentação do Sequelize](https://sequelize.org/master/manual/query-interface.html)