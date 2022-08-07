# Já vamos praticar? Aham!

1. Monte uma query que exiba seu nome na tela;
```
SELECT 'Flávio';
```

2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
```
SELECT 'Flávio João', 'Félix', 'Florianópolis', 37;
```

3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);
```
SELECT 'Flávio João' AS Nome, 'Félix' AS Sobrenome, 'Florianópolis' AS Cidade, 37 AS Idade;
```

4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
```
SELECT 13 * 8;
Resultado: 104
```

5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "data_atual".
```
SELECT now() AS data_atual;
```

# Vamos fixar isso?

1. Escreva uma query que selecione todas as colunas da tabela city;
```
SELECT * FROM sakila.city;
```

2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;
```
SELECT first_name, last_name FROM sakila.customer;
```

3. Escreva uma query que exiba todas as colunas da tabela rental;
```
SELECT * FROM sakila.rental;
```

4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
```
SELECT title, description, release_year FROM sakila.film
```

5. Utilize o SELECT para explorar todas as tabelas do banco de dados.
```
SELECT * FROM sakila.NOMEDATABELA
```