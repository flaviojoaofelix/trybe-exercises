# Data e tempo - lidando com resultados temporais

```
**DATE** - Possui apenas data, no formato YYYY-MM-DD na faixa de 1001-01-01 até 9999-12-31
**DATETIME** - Possui data e tempo, no formato YYYY-MM-DD HH:MM:SS com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59.
```

```
-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo
```

## Para Fixar

1. Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta.
```
USE sakila;
SELECT COUNT(*) pagamentos FROM payment
WHERE DATE(payment_date) = '2005-05-25';
```

2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
```
USE sakila;
SELECT COUNT(*) pagamentos FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';
```

3. Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
```
USE sakila;
SELECT DATE(rental_date) AS data,
YEAR(rental_date) AS ano ,
MONTH(rental_date) AS mes,
DAY(rental_date) AS dia,
HOUR(rental_date) AS hora,
MINUTE(rental_date) AS minuto,
SECOND(rental_date) AS segundo
FROM rental
WHERE rental_id = 10330;
```

4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
```
USE sakila;
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
```