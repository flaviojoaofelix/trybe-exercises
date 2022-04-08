# Trybe - Exercícios
## Bloco 07 - dia 02
### JavaScript ES6 - Fluxo de Exceção e Objetos

### Exercícios
#### Parte 01

1. Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
  - Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
  - Utilize o throw new Error e o bloco try/catch .
  - Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
  - Evite funções que tenham muitas responsabilidades distintas.
2. Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.
  - Você pode fazer essa verificação utilizando a função isNan() .
3. Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally ?

#### Parte 02

1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  - Note que o parâmetro da função já está sendo passado na chamada da função.
2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  - Modifique o nome da pessoa compradora.
  - Modifique o valor total da compra para R$ 50,00.