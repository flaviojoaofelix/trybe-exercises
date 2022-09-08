# Criando o endpoint de cadastro de pessoa

Afim de deixar o projeto mais organizado, vamos criar um subdiretório para armazenar as rotas:
```
mkdir -p src/routes
```

E assim criar o arquivo __src/routes/peopleRoutes.js__
```
const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const person = req.body;
  res.status(201).json(person);
});

module.exports = router;
```

E adicionar o seguinte código ao __src/app.js__
```
// const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes');

// const app = express();

// app.use(express.json());

app.use('/people', peopleRoutes);

// module.exports = app;
```

E ficamos com a seguinte estrutura de diretórios:
```
.
└── trybecash-api/
    ├── src/
    │   ├── db/
    │   │   └── connection.js
    │   ├── routes/
    │   │   └── peopleRoutes.js
    │   ├── app.js
    │   └── server.js
    ├── tests/
    │   └── integration/
    │       └── people.test.js
    ├── docker-compose.yaml
    └── package.json
```

Vamos integrar o Express ao MySQL criando o arquivo __src/db/peopleDB.js__
```
const conn = require('./connection');

const insert = (person) => conn.execute(
    `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
  );

module.exports = {
  insert,
};
```

E refatorar o endpoint __GET__ _/_ no arquivo __src/routes/peopleRoutes.js__
```
// const express = require('express');
const peopleDB = require('../db/peopleDB');

// const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});
// module.exports = router;
```

Agora é iniciar a aplicação com _npm start_ e realizar a requisição do tipo POST com para a API passando o seguinte JSON:
```
{
  "firstName": "Luke",
  "lastName": "Skywalker",
  "email": "luke.skywalker@trybe.com",
  "phone": "851 678 4453"
}
```

E assim ficamos com a seguinte estrutura de arquivos e pastas:
```
.
└── trybecash-api/
    ├── src/
    │   ├── db/
    │   │   ├── connection.js
    │   │   └── peopleDB.js
    │   ├── routes/
    │   │   └── peopleRoutes.js
    │   ├── app.js
    │   └── server.js
    ├── tests/
    │   └── integration/
    │       └── people.test.js
    ├── docker-compose.yaml
    └── package.json
```