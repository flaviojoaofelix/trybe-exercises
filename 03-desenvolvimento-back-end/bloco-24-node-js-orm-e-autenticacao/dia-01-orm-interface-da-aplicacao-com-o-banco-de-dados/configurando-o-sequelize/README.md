# Configurando o Sequelize

1. Instalação do Sequelize
- Para usar o _Sequelize_, precisamos inicniar uma aplicação Node.js e instalar a biblioteca ORM:
```
mkdir app-with-sequelize && cd app-with-sequelize

npm init -y

npm install sequelize
```

- Agora precisamos instalar um _CLI_, responsável por gerar e executar operações. Precisamos também ionstalar o _mysql2_ para usar o MySQL com o _Sequelize_:
```
npm install sequelize-cli

npm install mysql2

mkdir src
```

2. Após instalar estas dependências, iniciamos um projeto com o _Sequelize_:
```
cd src

npx sequelize-cli init
```

> Esse comando cria as seguintes pastas:
> - config: arquivos de configuração para o _CLI_
> - models: modelos da aplicação
> - migrations: arquivos de migração da aplicação
> - seeders: arquivos usados para popular os bancos

3. Conexão com o Banco de Dados
- Vamos configurar o arquivo __src/config/config.json__ gerado pela inicialização do _Sequelize CLI_ para definir os dados necessários para o acesso ao _BD_.

- É indicado o uso de _variáveis de ambiente_ para definir estas credenciais de acesso, já que em um arquivo config.json, essas informações acabam ficando expostas em nosso código.

- Com isso, vamos fazer do jeito certo, primeiro instalando a biblioteca necessária para o uso do arquivo _.env_ que vai guardar nossas variáveis de ambiente.
```
npm install dotenv
```

- E assim, vamos mudar o nome do nosso arquivo __src/config/config.json__ para __src/config/config.js__, retirando todo o conteúdo e substituindo pelo código abaixo:
__src/config/config.js__
```
require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
```

- No arquivo __src/models_index.js__ precisamos modificar a _linha *_ para apontar para o nosso novo arquivo __config.js__.

4. Arquivo __.sequelizerc__

- O _Sequelize_ procura os arquivos das pastas _migrations_, _models_ e _config_ apenas no diretório onde executamos o comando. Como configuramos essas pastas dentro do diretório _src/_, vamos utilizar as configurações do arquivo _.sequelize_ para aumentar essa cobertura, algo indicado em aplicações de maior complexidade.

- Vamos a configuração deste arquivo:
__.sequelizerc__
```
const path = require('path');

module.exports = {
  'config': path.resolve('src', 'config', 'config.js'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations'),
};
```

5. Criando o Banco de Dados usando o _CLI_ do _Sequelize_
- Agora que estamos com a aplicação iniciada e configurada, podemos criar um bando de dados _orm_example_ (nomeado no arquivo .env), com o seguinte comando:
```
npx sequelize db:create
```
- O _Sequelize_ irá notificar no terminal que o _BD_ foi criado.

Podemos perceber que conseguimos criar um banco de dados sem precisar escrever nenhuma linha de SQL. Esta é uma das vantagens do _Sequelize_.