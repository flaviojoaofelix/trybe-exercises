# Trybe - Exercícios
## Bloco 19 - dia 03
### Docker: Utilizando Containers
### Orquestrando Containers com Docker Compose

### Exercícios

#### 🚀 Exercício 1:
_/exercicio-01/_
Vamos aprimorar nossos conhecimentos sobre images e volumes, para isso:

1. Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:
  - Tag 'title' com o seguinte texto "Trybe";
  - Tag 'h1' com o seguinte texto "Missão da Trybe";
  - Tag 'p' com o seguinte texto "Gerar oportunidade para pessoas";
  - Salve o arquivo em qualquer lugar da sua máquina com a extensão html

2. Crie um contêiner para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
```
docker run -d --name site-trybe -p 4545:80 -v "<CAMINHO DO DIRETÓRIO ONDE ESTÁ SEU HTML>:/usr/local/apache2/htdocs" httpd:2.4

docker run -d --name site-trybe -p 4545:80 -v "/home/flavio/Trybe/trybe-exercises/03-desenvolvimento-back-end/bloco-19-docker-utilizando-containers/dia-03-orquestrando-containers-com-docker-compose/exercicio-01:/usr/local/apache2/htdocs" httpd:2.4

💡Dica: para descobrir o caminho atual, basta digitar pwd.
```

3. Após criar o contêiner, acesse a página HTML que está rodando no servidor em seu browser.
```
http://localhost:4545/missao_trybe.html
```

4. Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto: "Nosso negócio é GENTE! #VQV";

5. Obtenha o id do contêiner httpd:2.4;
```
docker ps
```

6. Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse contêiner no Docker Host;
```
docker inspect <COLOQUE AQUI SEU CONTAINER ID>
```

7. Agora pare o contêiner httpd:2.4;
```
docker stop <COLOQUE AQUI SEU CONTAINER ID>
```

8. Exclua o seu contêiner;
```
docker rm <COLOQUE AQUI SEU CONTAINER ID>
```

9. Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;

10. Obtenha o IMAGE ID do servidor;
```
docker images
```

11. Depois de obter o IMAGE ID, exclua a imagem.
```
docker rmi -f <COLOQUE AQUI SEU IMAGE ID>
 ou
docker image rm <COLOQUE AQUI SEU IMAGE ID>
```

#### 🚀 Exercício 2:
Crie o arquivo Compose para subir um ghost blog. Essa plataforma é similar ao Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

1. Utilize a versão "3" no arquivo;
2. Crie um service para subir a plataforma. Para isso, utilize a imagem ghost:1-alpine;
3. Publique a porta 2368, fazendo bind também para a 2368;
4. Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

_/exercicio-02/docker-compose.yaml_

#### 🚀 Exercício 3:
Por padrão, o ghost utiliza um sqlite interno para salvar as informações, porém vamos alterar esse comportamento para exercitar nossos conhecimentos:

1. Crie um novo serviço para o nosso banco de dados. Nesse caso, podemos utilizar um mysql, portanto use a imagem mysql:5.7;
2. Precisamos definir uma senha root para o nosso bd. Para isso, utilize a variável MYSQL_ROOT_PASSWORD e lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host para a env do container;
3. Agora precisamos configurar nosso service com o ghost para utilizar o MySQL. Para isso, defina a variável database__client para mysql;
4. Defina o nome ghost para o nome do database utilizando a variável database__connection__database;
5. Então, indique a conexão para o nosso MySQL na env database__connection__host;
6. Para definir a pessoa usuária (root) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password.
7. Utilize a opção depends_on para criar relações de dependências entre os serviços.
8. Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.

_/exercicio-03/docker-compose.yaml_

#### Exercício 4:
Agora vamos praticar os conceitos de volumes e networks.

1. Configure o nosso serviço mysql para utilizar um volume conforme vimos no conteúdo. Utilize o caminho target /var/lib/mysql.
2. Em vez de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.
3. Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.

_/exercicio-04/docker-compose.yaml_
```
docker-compose up -d
```

#### Exercício 5:
Agora vamos criar um novo arquivo Compose para rodarmos uma aplicação React, conforme vimos alguns exemplos do conteúdo:

1. Inicie um novo projeto ReactJS utilizando o create-react-app;
2. Crie o Dockerfile, conforme vimos na aula passada;
3. Crie um novo arquivo Compose utilizando a versão 3;
4. Defina um serviço no arquivo para nosso app. Para isso, utilize a opção build para apontar para o Dockerfile;
5. Publique a porta exposta no Dockerfile fazendo bind para a porta 8080 do localhost;

_/exercicio-05/docker-compose.yaml_

#### Exercício 6:
Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react. Então, execute o comando para subir o serviço novamente, "rebuildando" a imagem para aplicar as alterações.

```
docker-compose up --build -d
```

#### Exercício 7:
Crie um arquivo Compose para subir o Wordpress com MySQL:

1. Utilize a imagem wordpress:latest e mysql:5.7;
2. Faça bind da porta 80 do contêiner do wordpress para 8080 do host;
3. Defina as seguintes variáveis para o wordpress:
  - WORDPRESS_DB_HOST: db:3306
  - WORDPRESS_DB_USER: wordpress
  - WORDPRESS_DB_PASSWORD: wordpress
  - WORDPRESS_DB_NAME: wordpress
4. Defina as seguintes variáveis para o mysql:
  - MYSQL_ROOT_PASSWORD: somewordpress
  - MYSQL_DATABASE: wordpress
  - MYSQL_USER: wordpress
  - MYSQL_PASSWORD: wordpress
5. Defina o volume db_data para o mysql;
6. Utilize o parâmetro depends_on para criar dependência entre os serviços;
7. Adicione a política de restart com o valor always aos serviços;
8. Suba os serviços utilizando docker-compose e abra no terminal para validar o funcionamento.

```
Esse exercício tem na própria documentação oficial e possui algumas considerações especiais, vale a pena dar uma olhada! 😉
```

_/exercicio-07/docker-compose.yaml_
