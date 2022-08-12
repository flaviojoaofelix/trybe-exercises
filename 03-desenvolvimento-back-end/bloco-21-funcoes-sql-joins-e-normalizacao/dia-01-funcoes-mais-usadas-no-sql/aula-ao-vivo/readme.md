# Aula ao Vivo
## Exercícios

1. Média de dias que uma pessoa usuária permanece com o produto alugado
```
SELECT 
    customer_id, 
    AVG(datediff(return_date, rental_date)) as `diff`  
FROM sakila.rental
GROUP BY customer_id;
```

2. Tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating
```
SELECT 
    rating, 
    AVG(length), MAX(length), MIN(length) 
FROM sakila.film
GROUP BY rating;
```

3. Quantas pessoas usuárias temos por cidade?
```
SELECT 
    city_id as 'Cidade', 
    COUNT(city_id) as `qtd`
FROM sakila.address
GROUP BY `city_id`
ORDER BY `qtd` DESC;
```

4. Qual o valor total recebido dentro de cada mês?
```
SELECT  
    SUM(amount) as `soma`, 
    year(payment_date), 
    month(payment_date) 
FROM sakila.payment
GROUP BY year(payment_date), month(payment_date)
ORDER BY year(payment_date), month(payment_date);
```

5. Quantidade de itens alugados pelo preço
```
SELECT 
    amount as `preço`, 
    COUNT(amount) as `qtd`
FROM sakila.payment
GROUP BY amount
HAVING amount <= 1.99
ORDER BY `qtd` DESC;
```

6. Qual valor total arrecadado agrupado por mês, ano e `amount`?
```
SELECT 
    amount, 
    SUM(amount) as `soma`, 
    year(payment_date), 
    month(payment_date) 
FROM sakila.payment
GROUP BY 
    amount, year(payment_date), month(payment_date)
-- HAVING `soma` >= 1000
ORDER BY year(payment_date), month(payment_date), amount;
```

Tabelas:
1. sakila.rental
2. sakila.film
3. sakila.address
4. sakila.payment
5. sakila.payment
6. sakila.payment