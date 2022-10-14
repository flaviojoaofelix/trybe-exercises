# Relacionamentos 1:1

Banco de dados que utilizaremos no exemplo:
![Representação BD Com relação 1:1](./Representa%C3%A7%C3%A3o%20de%20um%20banco%201_1.webp)

Vamos criar um projeto para esse exemplo:
```
npm init -y

npm i express nodemon sequelize mysql2 dotenv

npm i -D sequelize-cli

mkdir src && cd src

npx sequelize-cli init
```

Iniciado o projeto, configurtamos o arquivo __src/config/config.json__, alterando os valores das chaves.
- _Username_
  - Usuário do MySQL
- _Senha_
  - Senha do MySQL
- _Database_
  - Nome do banco de dados que vamos trabalhar
- _Host_
  - O hosto do servidor MySQL
- _Dialect_
  - O tipo de banco de dados, no nosso caso MySQL.

Como utilizamos a pasta __src__, vamos criar o arquivo _.sequelizerc_ na __raiz da aplicação__ para que os comandos do _Sequelize_ funcionem em qualquer diretório da aplicação:
__.sequelizerc__
```
const path = require('path');

module.exports = {
  'config': path.resolve('src', 'config', 'config.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations'),
};
```

Agora vamos criar o _Schema_ com as nossas tabelas:
```
npx sequelize db:create
```

Criado o _Schema_, partimos para a criação do _migrtation_ responsável pela tabela __Employees__:
```
npx sequelize migration:generate --name create-employees
```

Agora vamos a _migration_ criada e substituir o código:
__src/migrations/*[timestamp]*-create-employee.js__
```
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('employees');
  },
};
```

Com a _migration_ da tabela __Employees__ criada, vamos criar a da tabela __Addresses__:
```
npx sequelize migration:generate --name create-addresses
```

Criamos e editamos:
__src/migrations/*[timestamp]*-create-addresses.js__
```
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'employees',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('addresses');
  },
};
```

Podemos reparar novas informações sendo utilizadas nessa _migration_, na coluna __employeeId__. Essas informações indicam ao _Sequelize_ que esse campo é uma __Foreign Key__.
- __references.model__
  - indica qual tabela nossa _FK_ está referenciando
- __references.key__
  - indica qual coluna da tabela estrangeira é utilizada na _FK_
- __onUpdate__ e __onDelete__
  - define o que vai acontecer ao atualizar ou excluir um _Employee_ que nesse caso todos os endereços serão alterados ou excluídos.

Resumindo, essa _migration_ cria uma _foreign key_ na tabela __addresses__, relacionando o campo *empoloyee_id* ao campo *id* da tabela __employees__.

Agora vamos executar essas _migrations_:
```
npx sequelize db:migrate
```

Criadas e executadas as _migrations_, vamos definir essas relações nos _models_ da nossa aplicação.

Vamos criar o arquivo __src/models/employee.model.js__ com a seguinte estrutura:
```
// src/models/employee.model.js

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' });
  };

  return Employee;
};
```
A função __Employee.associate = (models) => {}__ é onde fica declarada as associações nesse _model_.

O _Sequelize_ disponibiliza alguns métodos para criar associações:
- hasOne
- belongsTo
- hasMany
- belongsToMany

No nosso caso, um relacionamento 1:1, utilzamos os métodos _hasOne_ e _belongsTo_.

Por sua vez, no _model_ __Address__, fazemos o caminho inverso:
__src/models/address.model.js__
```
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'addresses',
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee,
      { foreignKey: 'employeeId', as: 'employees' });
  };

  return Address;
};
```

Para validar os relacionamentos, precisamos criar _seeders_ para inserir dados na tabela:
```
npx sequelize seed:generate --name employees
npx sequelize seed:generate --name addresses
```

Vamos editar o código no arquivo __src/seeders/[timestamp]-employees.js__:
```
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('employees',
      [
        {
          first_name: 'Marcos',
          last_name: 'Zuck',
          age: 49,
        },
        {
          first_name: 'Fred',
          last_name: 'Mercurio',
          age: 19,
        },
        {
          first_name: 'Ayrton',
          last_name: 'Keno',
          age: 51,
        },
        {
          first_name: 'Robin',
          last_name: 'Mathias',
          age: 63,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {});
  },
};
```
E também o arquivo __src/seeders/[timestamp]-addresses.js__
```
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('addresses',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Flórida',
          number: 1080,
          employee_id: 1,
        },
        {
          city: 'São Paulo',
          street: 'Avenida Paulista',
          number: 1980,
          employee_id: 2,
        },
        {
          city: 'Fortaleza',
          street: 'Rua das Enseadas',
          number: 95,
          employee_id: 3,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Andaluzita',
          number: 131,
          employee_id: 4,
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          employee_id: 4,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('addresses', null, {});
  },
};
```

Agora vamos executar esses _seeders_:
```
npx sequelize db:seed:all
```
⚠️ O erro __'cannot add or update a child row: a foreign key constraint fails'__ se deve ao fato de termos criados as duas seeds ao mesmo tempo, ficando com o mesmo timestamp e o _Sequelize_ priorizando a execução por ordem alfabética.

💡 Nesse caso, como precisamos rodar primeiro a seed _employees_ e depois a _addressed_, devido ao relacionamento entre as tabelas, renomeamos o timestamp da _employess_ para um número um pouco menor que o de _addresses_

E por último vamos criar nossas _associatons_. A diferença quando fazemos uma requisição que necessita de _association_, é o campo _include_.

Então vamos criar nossos _services_ e _controllers_:
__src/services/employee.service.js__
```
const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

module.exports = { getAll };
```
__src/controllers/employee.controller.js__
```
const EmployeeService = require('../services/employee.service');

const getAll = async (_req, res) => {
  try {
    const employees = await EmployeeService.getAll();
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

module.exports = {
  getAll,
};
```

Criamos também os arquivos básicos para fazer nossa _API Express_ funcionar:
__src/app.js__
```
const express = require('express');

const employee = require('./controllers/employee.controller');

const app = express();

app.use(express.json());

app.get('/employees', employee.getAll);

module.exports = app;
```
__src/server.js__
```
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
```

E para concluir, aquela alterada no __package.json__:
```
{
// ...
"main": "src/server.js",
  "scripts": {
    "dev": "nodemon src/server.js"
  },
// ...
}
```

Para iniciar o servidor, basta rodar o comando:
```
npm run dev
```

E para testar, fazer uma requisição __GET__ _/employees_. A resposta deve ter cada um dos empregados com seu respectivo endereço!