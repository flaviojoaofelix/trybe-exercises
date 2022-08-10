# DELETE - removendo dados de uma tabela
## Vamos praticar o DELETE

1. Exclua do banco de dados o ator com o nome de "KARL".
```
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'KARL';
```

2. Exclua do banco de dados os atores com o nome de "MATTHEW".
```
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- Em seguida, apague as referências
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';
```

3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
```
DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';
```

4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
```
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
```

5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
```
Basta inspecionar e analisar uma a uma.
```

6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
```
1. Abra o MySQL Workbench e se conecte a ele.
2. Selecione o banco sakila na lista de bancos de dados com o botão direito e clique em "Drop Schema".
3. Selecione "Drop Now".
4. Clique com o botão direito neste link e salve como arquivo .sql.
5. Selecione todo o conteúdo do arquivo (CTRL + A) e cole-o dentro de uma janela de nova query no MySQL Workbench.
6. Clique em executar para restaurar o banco de dados.
```