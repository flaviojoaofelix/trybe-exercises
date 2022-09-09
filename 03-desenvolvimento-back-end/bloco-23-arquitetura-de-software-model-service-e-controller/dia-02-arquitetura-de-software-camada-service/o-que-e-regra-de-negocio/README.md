# O que é Regra de Negócio?

Regra de negócio envolve as validações e definições de processos que uma aplicação deve seguir. Ou seja, uma regra de negócio dzi respeito a como o programa deve realizar sua função principal.

Podemos dividi-las em dois tipos:
1. Regras de negócio Simples
  - Ex: Impedir cadastro de produto com menos de cinco letras
  - Ex: Impedir cadastro de produto já existente
  - Ex: Limitar o acesso do usuário a uma informação específica
2. Regras de negócios complexas
  - Ex: Apenas produtos em estoque podem ser vendidos
  - Ex: Impedir parcelamento de mais de 5x em compras com valor abaixo de R$100

No caso da API TrybeCar as regras para _Solicitar viagem_ e _Buscar viagens em aberto_ são as seguintes:

1. __Solicitar viagem__
Ao solicitar uma viagem, a requisição deve conter as seguintes informações:
  - ID do passageiro
  - Endereço Incial (_startingAddress_)
  - Endereço Destino (_endingAddress_)
  - Endereços Paradas (_waypoints_) [Opcional]
    - Ordem de parada (_stopOrder_)
    - Endereço de parada (_address_)

2. __Buscar viagens em aberto__
Ao buscar uma viagem em aberto, a requisição deve retornar _travels_ com o status:
  - _WAITING_DRIVER_