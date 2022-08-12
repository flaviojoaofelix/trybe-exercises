# Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING
## Praticando GROUP BY

1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
```
SELECT active, COUNT(customer_id)
FROM sakila.customer
GROUP BY active;
```

2. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
```
SELECT
	store_id AS 'Loja',
  active AS 'Status do Cliente',
  COUNT(customer_id) AS 'Número de Clientes'
FROM sakila.customer
GROUP BY store_id, active;
```

3. Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
```
SELECT
	AVG(rental_duration) AS avg_rental_duration,
    rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;
```

4. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
```
SELECT
	district,
    COUNT(address_id) AS enderecos
FROM sakila.address
GROUP BY district
ORDER BY enderecos DESC;
```

## Para fixar

1. Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
```
    SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating;
```

Resposta:
```
SELECT
	rating,
    AVG(length) AS media
FROM sakila.film
GROUP BY rating
HAVING media BETWEEN 115.0 AND 121.50
ORDER BY media DESC;
```

2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
```
    SELECT rating, SUM(replacement_cost)
    FROM sakila.film
    GROUP by rating;
```

Resposta:
```
SELECT
	rating,
    SUM(replacement_cost) AS soma_do_custo
FROM sakila.film
GROUP by rating
HAVING soma_do_custo > 3950.50
ORDER BY soma_do_custo;
```