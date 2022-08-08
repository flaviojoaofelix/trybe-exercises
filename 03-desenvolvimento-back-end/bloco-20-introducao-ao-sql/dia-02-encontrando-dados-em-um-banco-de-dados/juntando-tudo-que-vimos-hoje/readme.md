# Juntando tudo que vimos hoje

### Para os exercícios a seguir, vamos usar a tabela sakila.film:

1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
```
SELECT * FROM sakila.film;
```

2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
```
SELECT title, release_year, rating FROM sakila.film;
```

3. Quantos filmes temos cadastrados?
```
SELECT COUNT(*) FROM sakila.film;
```

### Para os exercícios a seguir, vamos usar a tabela sakila.actor:

1. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
```
SELECT DISTINCT last_name FROM sakila.actor;
```

2. Quantos sobrenomes únicos temos na tabela?
```
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
```

3. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
```
SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;
```

### Usando a tabela language:

1. Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
```
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
```

### Usando a tabela film:

1. Selecione todos os dados da tabela. Pronto, fez isso?
```
SELECT * FROM sakila.film;
```

2. Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
```
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;
```