# Trybe
## Bloco 20 - dia 01
### Introdução à SQL
### Banco de dados SQL

### Conteúdos

1. O que é e quais são os tipos de banco de dados
2. O que é SQL?
3. Como essas informações (tabelas) são armazenadas?
4. Constraints (restrições), chaves primárias e chaves estrangeiras
5. Instalando o MySQL Server
6. Verificando o status da instalação
7. Configurando a inicialização e senha do servidor MySQL
8. Desinstalando o MySQL Server
9. MySQL na linha de comando
10. Instalando uma interface gráfica (MySQL Workbench)
11. Restaurando o banco de dados de prática Sakila
12. Utilizando as principais features do workbench (Crash course do workbench)
13. O que é uma entidade
14. Como os dados são ligados?

### Exercícios

Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila, que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench, sua missão agora é tentar finalizar os exercícios a seguir!

1. Exercício 1: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.
2. Exercício 2: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.
3. Exercício 3: Feito isso, crie uma tabela com as seguintes restrições:
  Nome da tabela: filme
  Colunas:
  - filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
  - descricao - não permite nulos, tipo texto (varchar(100));
  - ano_lancamento - não permite nulos, tipo int;
  - nota - permite nulos, tipo int;

```
CREATE TABLE `sakila`.`filme` (
  `filme_id` INT NOT NULL,
  `descricao` VARCHAR(100) NOT NULL,
  `ano_lancamento` INT NOT NULL,
  `nota` INT NULL,
  PRIMARY KEY (`filme_id`));
```

4. Exercício 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

```
country_id -> country (fk_city_country)
```

5. Exercício 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?

```
N:1 (Muitos para Um)
```

6. Exercício 6: Qual tipo de relacionamento a tabela country faz com a tabela city?

```
1:N (Um para Muitos)
```

7. Exercício 7: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

```
1. store -> staff (1:N)
2. country -> city (1:N)
3. film -> language (1:N)
```