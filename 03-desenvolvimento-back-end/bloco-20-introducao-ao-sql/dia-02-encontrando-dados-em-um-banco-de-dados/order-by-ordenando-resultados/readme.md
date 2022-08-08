# ORDER BY - ordenando resultados

```
SELECT * FROM sakila.address
ORDER BY address;

ou

SELECT * FROM sakila.address
ORDER BY address ASC;

```

```
SELECT * FROM sakila.address
ORDER BY address DESC;
```

```
SELECT * FROM sakila.address
ORDER BY address, district;
```

```
SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;
```