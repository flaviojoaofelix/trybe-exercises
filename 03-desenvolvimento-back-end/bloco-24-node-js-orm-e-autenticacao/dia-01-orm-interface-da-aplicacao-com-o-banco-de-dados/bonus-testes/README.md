# Bônus - Testes

Vamos testar os _models_ com _Sequelize_, seguindo os conceitos vistos anteriormente: isolamos as operações.
Para isso, utilizamos as bibliotecas com _stubs_ e _asserções_:
```
npm i mocha chai sinon chai-http -D
```

Com essas bibliotecas instaladas, vamos editar nosso _package.json_:
```
"scripts": {
  ...
  "test": "mocha tests/**/*$NAME*.test.js --exit"
},
```

E para testas _models_ com _Sequelize_, utilizamos uma biblioteca específica para ajudar na tarefa. A mais comum é a [Sequelize Teste Helpers](https://www.npmjs.com/package/sequelize-test-helpers):
```
npm i sequelize-test-helpers -D
```

Criamos agora o arquivo de teste:
__tests/unit/models/user.test.js__
```
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../src/models/user.model');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('possui as propriedades "fullName" e "email"', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});
```