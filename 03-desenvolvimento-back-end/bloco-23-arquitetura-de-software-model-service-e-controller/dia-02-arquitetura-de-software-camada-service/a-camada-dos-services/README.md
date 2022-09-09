# A camada dos Services

Atribuições da camada _Service_:
- Abstrair regras de negócio complexas do seu modelo;
  - Ex: definir recomendações de filmes de acordo com o perfil da pessoa usuária.
- Centralizar validações de regras de negócios:
  - Ex: Uma pessoa que ainda não efetuou o pagamento do mês não dever ter acesso a plataforma de filmes.

O que não é atribuição da camada _Service_:
- Não deve ter nenhum tipo de informação sobre o acesso a camada de dados (Model).
  - Ex: não ter nenhuma query SQL.
- Não deve receber nada relacionado ao HTTP, seja o request ou o response.
  - A camada Controller, que será explorada mais adiante, deve mandar apenas o necessário para a camada de Services.