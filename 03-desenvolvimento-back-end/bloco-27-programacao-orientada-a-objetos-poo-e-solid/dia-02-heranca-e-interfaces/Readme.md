# Trybe
## Módulo: Back-end
## Bloco 27 - dia 02 / Seção 09 - Dia 02
### Programação Orientada a Objetos (POO) e SOLID
### Herança e Interfaces


### Conteúdos

01. Introdução
02. Problematização
03. Relembrando
04. Herança
05. Sintaxe geral
06. Implementando interfaces
07. Interfaces versus Classes
08. Composição
09. Resolução do problema inicial
10. Exercícios
    - Agora, a prática

### Exercícios
#### Agora, a prática

Vamos dar continuidade a modelagem do nosso software escolar desenvolvido no exercício do dia anterior. Para isso, iremos refatorar algumas partes do nosso sistema aplicando os novos conceitos de herança que aprendemos no dia de hoje e melhorando alguns aspectos da nossa implementação inicial.

__Importante__: Devido a uma restrição em transpilar arquivos _.ts_ para _.js_ em versões posteriores ao ES5, utilize o seguinte comando para executar a transpilação corretamente:

```
npx tsc -t es5 ./index.ts
```

__Recapitulando__: Nós desenvolvemos uma classe que representava a pessoa estudante da nossa escola, contendo os atributos matrícula, nome, quatro notas de prova e duas notas de trabalho. Além disso, nossa classe possuía dois métodos: um que calculava a soma das notas da pessoa estudante e um que calculava a média das notas da pessoa estudante.

__Para facilitar__: Visando facilitar o entendimento dos enunciados dos nossos exercícios, adotaremos a seguinte notação para dispor a modelagem das nossas classes:

```
`Class`: Nome da classe, caso seja uma classe
`Interface`: Nome da interface, caso seja uma interface
`Extends`: Classe da qual herda (superclasse), caso exista
`Implements`: Interfaces a qual implementa, caso exista
`Attributes`: Atributos
`Methods`: Métodos
`Validations`: Validações que devem ser aplicadas aos atributos
```

01. Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.
```
`Class`: Person
`Attributes`:
    - name: nome da pessoa
    - birthDate: data de nascimento da pessoa
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento
`Validations`:
    - O nome deve ter no mínimo três caracteres
    - A data de nascimento não pode ser uma data no futuro
    - A pessoa não pode possuir mais de 120 anos
```

02. Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.
```
`Class`: Student
`Extends`: Person
`Attributes`:
    - enrollment: matrícula da pessoa estudante
    - examsGrades: notas de provas
    - worksGrades: notas de trabalhos
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e
      preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrade: retorna a média das notas da pessoa estudante
    - generateEnrollment: retorna uma string única gerada
      como matrícula para a pessoa estudante
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - A pessoa estudante deve possuir no máximo 4 notas de provas
    - A pessoa estudante deve possuir no máximo 2 notas de trabalhos
```
Para testar, crie pelo menos cinco pessoas estudantes.

03. Crie uma interface que representará uma pessoa funcionária.
```
`Interface`: Employee
`Attributes`:
    - registration: número do registro
    - salary: valor do salário
    - admissionDate: data de admissão
`Methods`:
    - generateRegistration: retorna uma string única gerada como registro
```

04. Crie uma classe cujos objetos representem uma disciplina lecionada na escola.
```
`Class`: Subject
`Attributes`:
    - name: nome da disciplina
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome
`Validations`:
    - O nome tem que possuir no mínimo 3 caracteres
```
Para testar, crie as disciplinas Matemática, História, Filosofia.

05. Crie uma classe cujos objetos representem uma pessoa professora.
```
`Class`: Teacher
`Extends`: Person
`Implements`: Employee
`Attributes`:
    - subject: a disciplina lecionada pela pessoa professora
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário
      e a disciplina
`Validations`:
    - O registro deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro
```
Para testar, crie uma pessoa professora para cada disciplina criada no exercício anterior.