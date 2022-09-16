# Operações

E no caso de uma API Express, como aplicaríamos esse _model_ que implementamos?

Para isso, basta criar os _Services_ e _Controllers_ da nossa aplicação:

__src/services/user.service.js__
```
const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  getAll,
};
```
__src/controllers/user.controller.js__
```
const UserService = require('../services/user.service');

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};
```

⚠️ Perceba que estamos importando o arquivo __src/models/index.js__ da nossa aplicação e não o __src/models/user.model.js__.

Esse arquivo _index.js_ é responsável por:
  - Realizar a conexão com o _BD_ através do arquivo _config.json_ ou _config.js_;
  - Coletar todos os modelos definidos dentro de __src/models__;
  - Associar um modelo a outro, caso necessário.

Então criamos o __src/app.js__ e __src/server.js__, para poder testar a aplicação utilizando o _Sequelize_.
__src/app.js__
```
const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);

module.exports = app;
```

__src/server.js__
```
// src/server.js

require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
```
__package.json__
```
//  {
//  ...
  "main": "src/server.js",
//  ...
//  }
```

Lembrando que temos que instalar o _express_ no projeto para que tudo funcione corretamente:
```
npm install express
```
Vamos instalar algumas outras dependências:
```
npm install dotenv --save
npm install -d nodemon
```
Adicionamos o nodemon ao _package.json_:
```
//  {
//  ...
//  "main": "src/server.js",
    "dev": "nodemon src/server.js",
//  ...
//  }
```

E rodamos o servidor com o comando:
```
node src/server.js
```

Agora podemos expandir nossos _services_ e _controllers_

__src/services/user.service.js__
```
// const { User } = require('../models/');

// const getAll = async () => {
//   const users = await User.findAll();

//   return users;
// };

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
const getById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });

  return user;
};

const createUser = async (fullName, email) => {
  const newUser = await User.create({ fullName, email });

  return newUser;
};

const updateUser = async (id, fullName, email) => {
  const [updatedUser] = await User.update(
    { fullName, email },
    { where: { id } },
  );

  console.log(updatedUser); // confira o que é retornado quando o user com o id é ou não encontrado;  
  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );

  console.log(user); // confira o que é retornado quando o user com o id é ou não encontrado;
  return user;
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};

```

__src/controllers/user.controller.js__
```
// const UserService = require('../services/user.service');

const error500Message = 'Algo deu errado';

// const getAll = async (_req, res) => {
//   try {
//     const users = await UserService.getAll();
//     return res.status(200).json(users);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   }
// };

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);
  
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getByIdAndEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await UserService.getByIdAndEmail(id, email);
  
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const createUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await UserService.createUser(fullName, email);

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;
    const updatedUser = await UserService.updateUser(id, fullName, email);

    if (!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });    
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await UserService.deleteUser(id);

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};
```
E as novas rotas no _app.js_:
__src/app.js__
```
// const express = require('express');

// const User = require('./controllers/user.controller');

// const app = express();

// app.use(express.json());

// app.get('/user', User.getAll);

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
app.get('/user/:id', User.getById);

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo "http://localhost:3001/user/search/1?email=leo@test.com"
app.get('/user/search/:id', User.getByIdAndEmail);

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/user', User.createUser);

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/user/:id', User.updateUser);

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/user/:id', User.deleteUser);

// module.exports = app;
```