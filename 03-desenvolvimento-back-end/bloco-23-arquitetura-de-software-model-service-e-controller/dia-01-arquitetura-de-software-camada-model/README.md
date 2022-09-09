# Trybe
## Bloco 23 - dia 01
### Arquitetura de Software: Model, Service e Controller
### Arquitetura de Software: Camada Model

### Conteúdos

1. Arquitetura de Software
2. Arquitetura MSC
3. Camada Model
4. Refatorando uma  Aplicação
5. Escrevendo teste de unidade
6. Implementando o model de viagens
7. Conclusão
8. Exercícios
  - Agora, a prática

### TrybeCar API
- [Original](https://github.com/tryber/msc-architecture-trybecar)
- [Meu Fork](https://github.com/flaviojoaofelix/trybe-bloco-23-msc-architecture-trybecar)

⚠️ Infelizmente a Trybe mantém estes repositórios como privados.

### Exercícios
#### Agora, a prática

⚠️ Atenção: A resolução dos exercícios deste dia (23.1), será utilizada como base nos exercícios dos dias 23.2 e 23.3, portanto, lembre-se de realizá-los. 😉

Você mandou bem na refatoração! 🎉
Agora, a empresa Trybecar confiou em você para criar alguns componentes e testes somente para a camada de Model. Eles precisam que você forneça as seguintes funcionalidades que realizam acesso com o banco de dados:
- Listar todas as pessoas motoristas que estão cadastradas;
- Cadastrar um novo carro;
- Cadastrar uma pessoa motorista;
- Encontrar um carro por meio do id;
- Encontrar uma pessoa motorista por meio do id;
- Criar o relacionamento N:N entre as pessoas motoristas e os carros.
Para isso, crie uma branch a partir do seguinte [repositório](https://github.com/tryber/msc-architecture-trybecar/tree/simple-application-model-live-lectures).

Agora, faça os exercícios abaixo:
1. 🚀 Crie testes unitários da camada de model responsável por listar todas as pessoas motoristas cadastradas no banco de dados.
  - A função retorna uma estrutura de array;
  - Retorna a lista de pessoas motoristas com o seguinte formato:
```
const expected = [
  {
    id: 1,
    name: 'Liana Cisneiros',
  }, 
  {
    id: 2,
    name: 'Fábio Frazão',
  },
];
```
Dica: Crie o stub da conexão com o banco de dados.

2. 🚀
  - Crie testes unitários da camada de model responsável por cadastrar um carro no banco de dados.
    - Retorna o carro cadastrado com o seguinte formato:
    ```
    const expected = 1;
    ```
  - Crie a camada de model responsável por cadastrar um carro.

3. 🚀
  - Crie testes unitários da camada de model responsável por encontrar um carro por meio do id.
    - Retorna o carro solicitado pelo id com o seguinte formato:
    ```
    const expected = {
      id: 2,
      model: 'Volkswagen Gol',
      color: 'Vermelho',
      licensePlate: 'DZG-4376',
    };
    ```
  - Crie a camada de model responsável por encontrar um carro por meio do id.

4. 🚀
  - Crie testes unitários da camada de model responsável por encontrar uma pessoa motorista por meio do id.
    - Retorna a pessoa motorista solicitado pelo id com o seguinte formato:
    ```
    const expected = {
      id: 1,
      name: 'Liana Cisneiros',
    };
    ```
  - Crie a camada de model responsável por encontrar uma pessoas motorista por meio do id.

5. 🚀
  - Crie testes unitários da camada de model responsável por cadastrar uma pessoa motorista.
    - Retorna a pessoa motorista cadastrada com o seguinte formato:
    ```
    const expected = 1;
    ```
  - Crie a camada de model responsável por cadastrar uma pessoa motorista.

6. 🚀
  - Crie testes unitários da camada de model responsável criar o relacionamento N:N entre as pessoas motoristas e os carros.
    - Retorna o relacionamento entre motorista e carro cadastrado com o seguinte formato:
    ```
    const expected = 1;
    ```
  - Crie a camada de model responsável por cadastrar as pessoas motoristas com o relacionamento N:N com os carros cadastrados.