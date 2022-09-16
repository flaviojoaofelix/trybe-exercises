# Model

O _model_ pode ser definido de duas formas:

1. Chamando pela função sequelize.define(modelName, attributes, options): essa será a forma utilizada aqui;
2. Estendendo Model como uma classe e chamando init(attributes, options).

Vamos praticar!
Queremos criar uma tabela users, com dados de várias pessoas usuárias.

- Precisamos criar um model qrepresentando a pessoa em nossa aplicação/linha na tabela _users_. Para isso, vamos criar uma arquivo __src/models/user.model.js__ com o seguinte conteúdo:
__src/models/user.model.js__
```
const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;
```
💡 Por convenção, o arquivo model é nomeado no singular e nomes de tabelas são no plural. Como não foi determinado o nome da tabela no arquivo model, o _Sequelize_ busca dar a tabela, o nome do arquivo, só que no plural. Como nosso arquivo se chama _user_, nossa tabela será _Users_. Para explicitar o nome da tabela, basta adicionar o parâmetro [tableName](https://sequelize.org/docs/v6/core-concepts/model-basics/#providing-the-table-name-directly) na função do model.

Para gerar um model a partir de um comando, utilizamos o seguinte comando:
```
npx sequelize model:generate --name User.model --attributes fullName:string
```