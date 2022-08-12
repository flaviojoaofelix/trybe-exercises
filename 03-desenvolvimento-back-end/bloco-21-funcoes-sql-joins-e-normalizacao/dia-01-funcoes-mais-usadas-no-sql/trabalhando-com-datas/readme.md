# Trabalhando com datas
## Para fixar

1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
```
SELECT DATEDIFF(CURRENT_DATE(), 2030-01-20);
```

2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
```
SELECT CONCAT(DATEDIFF('2030-01-20', CURRENT_DATE()), ' Dias');
```