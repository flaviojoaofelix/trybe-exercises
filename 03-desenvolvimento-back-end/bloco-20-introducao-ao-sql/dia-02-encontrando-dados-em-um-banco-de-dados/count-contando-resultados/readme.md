# COUNT - contando resultados

Essa é a tabela staff do banco de dados sakila. Como você poderia responder às seguintes questões?

1. Quantas senhas temos cadastradas nessa tabela?
```
SELECT COUNT(password) AS Senhas FROM sakila.staff;
```

2. Quantas pessoas temos no total trabalhando para nossa empresa?
```
SELECT COUNT(staff_id) AS Workers FROM sakila.staff;
```

3. Quantos emails temos cadastrados nessa tabela?
```
SELECT COUNT(email) AS Emails FROM sakila.staff;
```
