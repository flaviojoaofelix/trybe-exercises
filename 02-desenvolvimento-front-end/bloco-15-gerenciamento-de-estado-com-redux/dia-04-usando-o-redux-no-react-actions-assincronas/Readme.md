# Trybe - Exercícios
## Bloco 15 - dia 04
### Gerenciamento de estado com Redux
### Usando o Redux no React - Actions Assíncronas

### O que vamos aprender?

Foquemos agora no fluxo de dados de uma aplicação Redux: "out of the box", o Redux suporta somente o fluxo síncrono de dados, e isso consegue ser percebido ao olhar para actions: uma action é um objeto JavaScript que descreve algum evento que já aconteceu e esse objeto é enviado para a store para que seu estado seja atualizado.

Mas, e se fosse preciso ter uma action assíncrona, que precisa fazer uma requisição para uma API, de forma que os devidos dados necessários estejam presentes para gerar a action? De antemão não teríamos tais dados para formar essa action, esse objeto, haja visto que é preciso esperar pela requisição ser concluída. Logo, como se cria actions assíncronas? É isso que você aprenderá na aula de hoje.

### Você será capaz de:

- Criar actions assíncronas na sua aplicação React que faz uso de Redux..
