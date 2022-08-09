# INSERT - adicionando dados em tabelas
## "Practice Makes Perfect".

1. Insira um novo funcionário na tabela sakila.staff.
```
INSERT INTO sakila.staff
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Armando', 'Pinto', 2, 'armando@pinto.com', 1, 1, 'armando', '23cmlemo');
```

2. Insira dois funcionários novos em apenas uma query.
```
INSERT INTO sakila.staff
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Helio', 'Romeu', 3, 'h@romeu.com', 1, 1, 'hromeu, 'ekika123'),
    ('Ana', 'Konda', 4, 'ana@konda.com', 1, 1, 'anaconda', 'aserpente321');
```

3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
```
INSERT INTO sakila.actor(first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;
```

4. Cadastre três categorias de uma vez só na tabela sakila.category.
```
INSERT INTO sakila.category (name)
VALUES
    ('Games'),
    ('Comedy'),
    ('Sci-Fi');
```

5. Cadastre uma nova loja na tabela sakila.store.
```
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);
```
