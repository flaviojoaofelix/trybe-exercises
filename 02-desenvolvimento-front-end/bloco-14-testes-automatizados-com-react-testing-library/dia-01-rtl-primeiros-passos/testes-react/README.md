# Trybe - Exercícios
## Bloco 14 - dia 01
### Testes automatizados com React Testing Library
### RTL - Primeiros passos

### Introdução ao RTL
#### Exemplo 01

Agora veremos a estrutura desses testes e suas ferramentas:
- Crie uma nova aplicação com o comando npx create-react-app testes-react.
  - Não se preocupe! A biblioteca RTL já vem instalada nos novos projetos.
- Abra a aplicação no VSCode e abra o arquivo App.test.js. Ele está dentro do diretório src.
- Observe o arquivo App.test.js

O que ele está fazendo é verificar se algum elemento dentro do componente App possui o texto "learn react" (/string/i é utilizado para ignorar case sensitive, ou seja, não diferenciar letras maiúsculas e minúsculas). Para rodar os testes vá para a pasta src e execute npm test.

Como pode ver, o nosso único teste passou. Quer dizer que existe o texto "learn react" dentro do componente App! Se rodar aplicação com o npm start, você encontrará o texto "learn react", conforme indicado pelo teste.

Agora vamos provocar um erro ou uma falha. Mude o texto "learn react" para "algo que não aparece" e rode o teste.

Ele está falando que não foi possível encontrar um elemento que possui o texto "/algo que não aparece/i".