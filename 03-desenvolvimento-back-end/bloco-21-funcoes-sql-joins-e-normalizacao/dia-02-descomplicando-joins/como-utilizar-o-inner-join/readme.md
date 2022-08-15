# Como utilizar o INNER JOIN
## Para fixar

Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o INNER JOIN, utilizando o banco de dados sakila. Antes de começar a escrever suas queries, identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.

1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
```
SELECT
	ac.actor_id,
  ac.first_name,
  fa.film_id
FROM sakila.actor ac
INNER JOIN sakila.film_actor fa
  ON ac.actor_id = fa.actor_id;
```

2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
```
SELECT
	st.first_name,
  st.last_name,
  ad.address
FROM sakila.staff st
JOIN sakila.address ad
	ON st.address_id = ad.address_id;
```

3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
```
SELECT
	cu.customer_id,
  cu.first_name,
  cu.email,
  cu.address_id,
  ad.address
FROM sakila.customer AS cu
INNER JOIN sakila.address AS ad
	ON	cu.address_id = ad.address_id
ORDER BY first_name DESC
LIMIT 100;
```

4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
```
SELECT
  cu.first_name,
  cu.email,
  cu.address_id,
  ad.address,
  ad.district
FROM sakila.customer AS cu
INNER JOIN sakila.address AS ad
	ON cu.address_id = ad.address_id
WHERE cu.first_name LIKE '%rene%'
	AND ad.district = 'California';
```

5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
```
SELECT
	cu.first_name AS 'Nome',
    COUNT(ad.address) AS 'Endereços'
FROM sakila.customer AS cu
JOIN sakila.address AS ad
	ON cu.address_id = ad.address_id
WHERE cu.active = 1
GROUP BY cu.first_name
ORDER BY cu.first_name DESC;
```

6. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
```
SELECT
	CONCAT (st.first_name, ' ', st.last_name) AS 'Name',
  TRUNCATE(AVG(pa.amount), 2) AS 'Average'
FROM sakila.staff AS st
INNER JOIN sakila.payment AS pa
	ON st.staff_id = pa.staff_id
WHERE YEAR(pa.payment_date) = 2006
GROUP BY st.first_name, st.last_name;
```

7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
```
SELECT
	ac.actor_id,
  ac.first_name,
  fi.film_id,
  fi.title
FROM sakila.film_actor AS fa
INNER JOIN sakila.actor AS ac
	ON fa.actor_id = ac.actor_id
INNER JOIN sakila.film AS fi
	ON fa.film_id = fi.film_id;
```