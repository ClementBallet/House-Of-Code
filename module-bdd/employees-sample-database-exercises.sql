-- Compter le nombre d'hommes et de femmes dans l'entreprise (une colonne avec homme/femme/total)
SELECT COUNT(*), gender AS 'number'
  FROM employees
  GROUP BY gender;
-- Quel est le salaire moyen par année croissante ?
SELECT AVG(salary) AS 'Salaire moyen', YEAR(from_date) AS Année
  FROM salaries
  GROUP BY Année
  ORDER BY Année ASC;
-- Pour l'employé n 10009 : parcours dans l'entreprise (tous les titres qu'il a eut)
select title
  from titles
  where emp_no = 10009;
-- Quelle est la moyenne des salaires des managers par département ?
select d.dept_name as Département, avg(s.salary) as moyenne
  from salaries s
  inner join dept_manager dm
  on s.emp_no = dm.emp_no
  inner join departments d
  on dm.dept_no = d.dept_no
  where s.from_date >= dm.from_date and s.to_date <= dm.to_date
  group by d.dept_name
  order by moyenne;
-- Quelle est la moyenne des salaires des employés par département ?

-- Quel est le salarié le mieux payé en ce moment ?
-- Indice : utiliser la fonction CURDATE() de MySQL
select salaries.salary, employees.first_name, employees.last_name
  where CURDATE()
-- Quelle est la liste de tous les managers qui sont passés par le département "Sales" ?
-- Infos : nom prénom Date de début & de fin
-- Ordre : date croissante

-- Quel est le salaire le plus haut historiquement ?





SELECT s.salary
FROM salaries s
INNER JOIN departments d
WHERE d.dept_name = 'Sales'