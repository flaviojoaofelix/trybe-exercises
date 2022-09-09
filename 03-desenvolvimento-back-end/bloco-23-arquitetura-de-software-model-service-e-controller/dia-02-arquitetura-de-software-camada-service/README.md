# Trybe
## Bloco 23 - dia 02
### Arquitetura de Software: Model, Service e Controller
### Arquitetura de Software: Camada Service

### Conteúdos

1. Introdução
2. A camada dos Services
3. O que é Regra de Negócio
4. Praticando 1
5. Testes de Unidade na Camada Service
6. Validações
7. Mochando a Camada Model
8. Praticando 2
9. Exercícios
  - Agora, a prática

### TrybeCar API
- [Original](https://github.com/tryber/msc-architecture-trybecar)
- [Meu Fork](https://github.com/flaviojoaofelix/trybe-bloco-23-msc-architecture-trybecar)

⚠️ Infelizmente a Trybe mantém estes repositórios como privados.

### Exercícios
#### Passos gerais para criação da camada de service usando TDD
1.  Determinar como a nossa função na camada Service vai funcionar (contrato):
  - Que dados são recebidos pelo controller?
  - Que validações precisam ser feitas?
  - Quais funções do model usamos?
  - Que resultado será retornado para o controller em cada caso?
2. Criar testes baseados nos contratos
  - Testar caminhos que geram erros de validação
  - Testar caminho que retorna com sucesso
3. Implementar código na camada Service
  - Escrever funções
  - Verificar se passam nos testes
4. Isolar testes usando stubs
- Criar stubs para recursos externos (camada Model, por exemplo)
- Testes devem funcionar sem os recursos disponíveis (DB, por exemplo)

#### Agora, a prática

Preparação:
- Acesse a branch dos exercícios de Model que você fez no repositório do projeto e crie uma nova branch a partir dela
- Caso falte alguma parte, crie uma branch nova a partir da branch do [repositório](https://github.com/tryber/msc-architecture-trybecar/tree/simple-application-service-live-lectures).
- Inicie o banco de dados e rode o script SQL da raiz do projeto para iniciar a DB
- Feito isso, estamos prontos para a camada Service!

1. Listar as pessoas motoristas
Crie uma função na camada Service que lista as pessoas motoristas em nosso app.
  - A função deve se chamar _getDrivers_
  - Usar a camada Model para receber a lista de motoristas
  - Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service.

Exemplo de reposta:
```
{
  type: null,
  message: [
    { id: 1, name: 'Liana Cisneiros' },
    { id: 2, name: 'Fábio Frazão' },
    { id: 3, name: 'Anastacia Bicalho' },
    { id: 4, name: 'Samara Granjeiro' },
    { id: 5, name: 'Levi Teixeira' },
  ],
}
```

1.1. Crie testes unitários para a função _getDrivers_
  - Listando as pessoas motoristas
    - A lista de motoristas é um array
    - Retorna a lista de motoristas com sucesso

1.2. Implemente a função getDrivers na camada Service
- Chame as funções da camada Model conforme a necessidade
- Confirme que a função passa nos testes

1.3. Crie stubs para isolar os testes
- Use stubs da função da camada Model para isolar seus testes
- Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

2. Cadastrar um carro
Crie uma função na camada Service que cadastra um carro em nosso app.
  - A função deve se chamar _createCar_
  - Receber o modelo, cor e placa do novo carro
  - Retornar um objeto de erro caso algum dado não seja recebido ou seja inválido
  - Usar a camada Model para cadastrar um novo carro no banco de dados
  - Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service;

Parâmetros para receber:
  - _model_: string com pelo menos 3 caracteres ex: "Ford Ka"
  - _color_: string com pelo menos 2 caracteres ex.: "Azul"
  - _licensePlate_: string com exatamente 7 caracteres ex.: "ABC1D2E"

  Exemplo de resposta correta:
  ```
  {
    type: null,
    message: {
      id: 1,
      model: 'Chevrolet Monza',
      color: 'Branco',
      licensePlate: 'ABC1A2B',
    },
  }
  ```

  Exemplo de erro:
  ```
  {
    type: 'INVALID_VALUE',
    message: '"model" length must be at least 3 characters long',
  }
  ```

2.1. Crie testes unitários para a função _createCar_
  - Tentando cadastrar um novo carro com erros semânticos
    - retorna um erro ao receber um modelo inválido
    - retorna um erro ao receber uma cor inválida
    - retorna um erro ao receber uma placa inválida
  - Cadastrando um novo carro com sucesso
    - não retorna erros
    - retorna o carro cadastrado

2.2. Implemente a função _createCar_ na camada Service
  - Crie um schema do Joi e uma função de validação para validar os dados de um novo carro
  - Chame as funções da camada Model conforme a necessidade
  - Confirme que a função passa nos testes

2.3. Crie stubs para isolar os testes
  - Use stubs da função da camada Model para isolar seus testes
  - Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

3. 🚀 Cadastrar uma pessoa motorista
Crie uma função na camada Service que cadastra uma pessoa motorista em nosso app.
  -  A função deve se chamar _createDriver_;
  - Receber o nome da pessoa motorista;
  - Receber opcionalmente um array de ids de carros já cadastrados em nossa base de dados;
  - Retornar um objeto de erro caso o nome não seja recebido ou seja inválido;
  - Retornar um objeto de erro caso o array de carros seja inválido ex.: algum carro não exista;
  - Usar a camada Model para cadastrar a pessoa motorista no banco de dados;
  - Vincular os carros do array de ids (caso seja passada) à pessoa motorista;
  - Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service,
  - A lista de carros vinculados à pessoa motorista deve ser retornada junto com as outras informações da pessoa motorista.

Parâmetros a serem recebidos
  - _name_: string com pelo menos 3 caracteres ex: "Gena"
  - _carIds_: array com os ids dos carros a serem vinculados com a pessoa motorista (opcional)

Exemplo de resposta de sucesso:
```
{
  type: null,
  message: {
    id: 1,
    name: 'Gus',
    cars: [
      {
        color: 'Branco',
        id: 1,
        licensePlate: 'NCA-0956',
        model: 'Renault Sandero',
      },
      {
        color: 'Vermelho',
        id: 2,
        licensePlate: 'DZG-4376',
        model: 'Volkswagen Gol',
      },
    ],
  }
}
```
Resposta para erro:
```
{
  type: 'CAR_NOT_FOUND',
  message: 'Some car is not found',
}
```

3.1. 🚀 Crie testes unitários para a função _createDriver_
  - Tentando cadastrar uma nova pessoa motorista com erros semânticos
    - retorna um erro ao receber um nome inválido
     -retorna um erro ao receber uma lista de carros inválida
  - Tentando cadastrar uma nova pessoa motorista com erros de id
    - retorna o erro "CAR_NOT_FOUND"
    - retorna a mensagem "Some car is not found"
  - Cadastrando uma nova pessoa motorista com sucesso sem carros
    - retorna a pessoa motorista cadastrada
    - não retorna erro
  - Cadastrando uma nova pessoa motorista com sucesso com carros
    - retorna os carros vinculados à pessoa motorista
    - não retorna erro

3.2. 🚀 Implemente a função _createDriver_ na camada Service
  - Confirme que a função passa nos testes

3.3. 🚀 Crie stubs para isolar os testes
  - Use stubs da função da camada Model para isolar seus testes
  - Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente
