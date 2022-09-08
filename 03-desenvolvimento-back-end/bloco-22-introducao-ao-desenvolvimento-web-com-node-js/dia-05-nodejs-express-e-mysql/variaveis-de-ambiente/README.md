# Variáveis de Ambiente

Por questões de segurança, precisamos tirar os dados para acesso ao banco de dados do arquivo __src/db/connection.js__ e informar estes dados de uma maneira mais segura para a aplicação. Para isso, vamos utilizar _variáveis de ambiente_.

Para conseguir acesso a essas variáveis através do Node, vamos precisar da biblioteca _dotenv_:
```
npm i dotenv@16.0.1
```

Em seguida, vamos criar um arquivo __.env__ na raiz do projeto:
```
MYSQL_HOST=localhost
MYSQL_PORT=33060
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE_NAME=trybecashdb
MYSQL_WAIT_FOR_CONNECTIONS=true
MYSQL_CONNECTION_LIMIT=10
MYSQL_QUEUE_LIMIT=0
```

E a partir dai, podemos refatorar nosso arquivo __src/db/connection.js__ para utilizar as variáveis de ambiente:
```
//const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTIONS,
  connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
  queueLimit: process.env.MYSQL_QUEUE_LIMIT,
// });

// module.exports = connection;
```

Precisamos carregar as variáveis de ambiente definidas no arquivo _.env_, inicializando o _dotenv_:
```
require('dotenv').config();
// const app = require('./app');

// const port = 3001;

// app.listen(port, async () => {
//   console.log(`API TrybeCash está sendo executada na porta ${port}`);
// });
```

Para que a segurança seja completa, obviamente não podemos enviar este arquivo ao repositório Git. Com isso, vamos adicionar o _.env_ ao arquivo _.gitignore_ da raiz do projeto.
```
node_modules
.env
```

E para ajudar, vamos criar um arquivo _.env_ de exemplo no repositório com o nome __.env-example__
```
MYSQL_HOST=<ENDEREÇO DO BANCO>
MYSQL_USER=<NOME DE USUÁRIO DO BANCO>
MYSQL_USER=<PORTA DE CONEXÃO DO BANCO>
MYSQL_PASSWORD=<SENHA DE ACESSO DO BANCO>
MYSQL_DATABASE_NAME=<NOME DO BANCO DE DADOS>
MYSQL_WAIT_FOR_CONNECTIONS=true
MYSQL_CONNECTION_LIMIT=10
MYSQL_QUEUE_LIMIT=0
```

⚠️ Com isso, é ideal informar no Readme do projeto, a necessidade de renomar o arquivo e completar as informações necessárias.