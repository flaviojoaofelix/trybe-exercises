# Trybe - Exercícios
## Bloco 14 - dia 01
### Testes automatizados com React Testing Library
### RTL - Primeiros passos

### Introdução ao RTL
#### Exemplos do Conteúdo

_introducao-ao-rtl-video-01.test.js_
_introducao-ao-rtl-video-02.test.js_

_App.js_
_App.test.js_
_video-testando-eventos.test.js_

#### Passo a passo:
_App2.test.js_

1. Primeiro renderizamos a aplicação, depois salvamos o email da pessoa usuária em uma variável (o que é uma boa prática).

2. Depois, verificamos se a tag <h2> onde o email aparece na tela está apenas com o texto Valor:,

3. Depois procuramos pelo o campo de email e o botão que enviará os dados.

4. Simulamos a digitação da pessoa usuária no campo de email com o userEvent.type(inputEmail, EMAIL_USER), passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro ('email@email.com').

5. Simulamos um clique no botão com o userEvent.click(btnSend), passando o elemento do botão como parâmetro.

6. Verificamos se após o click, o campo de input do email retorna para vazio e se a tag <h2>, que anteriormente só exibia Valor:, agora recebe o email passado ao input, resultando em Valor: email@email.com.

#### Documentação

1. Usar a documentação do React Test Library
- https://testing-library.com/docs/
- https://testing-library.com/docs/queries/about/
- https://github.com/testing-library/user-event
- https://github.com/testing-library/dom-testing-library/blob/master/src/event-map.js
- https://testing-library.com/docs/dom-testing-library/cheatsheet/
2. E do JEST
- https://jestjs.io/pt-BR/docs/expect

### Testando apenas um componente

_App.js_
_ValidEmail.js_
_ValidEmail.test.js_