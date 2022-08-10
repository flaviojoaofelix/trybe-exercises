/*
QUESTÃO 01
Adicione os dois principais atores filme Matrix na tabela actor;
*/
INSERT INTO sakila.actor (first_name, last_name)
	VALUES ('Keanu', 'Reeves'),
	('Laurence', 'Fishburne');

/*
QUESTÃO 02
Adicione o filme Matrix 4 na tabela film;
*/
INSERT INTO sakila.film (title, language_id)
	VALUES ('Matrix 4', 1 );

/*
QUESTÃO 03
Faça a ligação na tabela film_actor destes registros inseridos anteriormente;
*/
SELECT actor_id FROM sakila.actor
	WHERE first_name = 'Keanu' AND last_name = 'Reeves';

SELECT actor_id FROM sakila.actor
	WHERE first_name = 'Laurence' AND last_name = 'Fishburne';

SELECT film_id FROM sakila.film
	WHERE title = 'Matrix 4';

INSERT INTO sakila.film_actor (actor_id, film_id)
	VALUES (201, 1001), (202, 1001);

/*
QUESTÃO 04
Insira na tabela inventory um registro com o id deste filme para a loja com id igual a 1;
*/
INSERT INTO sakila.inventory (film_id, store_id)
	VALUES (1001, 1);
    
/*
QUESTÃO 05
Crie você como pessoa usuária na tabela customer (faça a associação do seu cadastro com um registro já existente na tabela address);
*/
INSERT INTO sakila.customer
	(store_id, first_name, last_name, address_id)
    VALUES (1, 'Flávio', 'Félix', 10);
    
/*
QUESTÃO 06
Insira os dados de aluguel na tabela rental deste filme, como sendo realizado a retirada do filme no dia 09/08/2022;
*/
INSERT INTO sakila.rental
	(rental_date, inventory_id, customer_id, staff_id)
    VALUES ('2022-08-09 22:53:30', 4582, 600, 1);

/*
QUESTÃO 07
Faça a atualização com a devolução do filme no dia de hoje (09/08/2022) na tabela rental, no registro que foi inserido anteriormente (return_date);
*/
UPDATE sakila.rental
	SET return_date = '2022-08-10 22:01:52',
    last_update = NOW()
    WHERE (rental_id = '16050');

/*
QUESTÃO 08
Faça o delete lógico (update) do seu usuário na tabela customer (mudar o status de active para 0);
*/
UPDATE sakila.customer
	SET active = 0
    WHERE (customer_id = 600);

/*
QUESTÃO 09
Bônus: deletar todos registros inseridos anteriormente;
*/
DELETE FROM sakila.rental
	WHERE rental_id = '16050';

DELETE FROM sakila.customer
	WHERE customer_id = '600';

DELETE FROM sakila.inventory
	WHERE inventory_id = '4582';

DELETE FROM sakila.film_actor
	WHERE film_id = '1001';

DELETE FROM sakila.film
	WHERE film_id = '1001';

DELETE FROM sakila.actor
	WHERE actor_id = '201';
    
DELETE FROM sakila.actor
	WHERE actor_id = '202';