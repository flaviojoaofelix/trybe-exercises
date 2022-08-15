# O que é SELF JOIN e quando utilizá-lo
## Para fixar

1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
```
SELECT
	CONCAT(employee.first_name, ' ', employee.last_name) AS Colaborador,
  CONCAT(manager.first_name, ' ', manager.last_name) AS Gerente
FROM hr.employees AS employee
INNER JOIN hr.employees AS manager
	ON employee.employee_id = manager.manager_id
WHERE employee.department_id <> manager.department_id;
```

2. Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
```
SELECT
	CONCAT(manager.first_name, ' ', manager.last_name) AS Gerente,
  COUNT(*)
FROM hr.employees AS manager
INNER JOIN hr.employees AS employee
	ON employee.manager_id = manager.employee_id
GROUP BY manager.employee_id;
```