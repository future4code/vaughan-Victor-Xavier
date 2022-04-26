
<h1> aprofundamento sql
</h1>

1 a) primeiramente o ALTER TABLE vai dizer qual o nome da tabela que vai ser alterada, no caso a Actor, ai o DROP COLUM vai deleta-la
b) vai mudar o nome da coluna de gener para sex
c) vai mudar a quantidade do VARCHAR de 6 para 255
d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2)a)
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003";

b)UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

c)UPDATE Actor
SET 
name = "carlos alberto de nobrega",
birth_date = "1936-03-12",
salary = 600000,
gender = "male"
WHERE id = "005";

d)
ele passa como se tivesse dado certo, mas não tem nenhuma alteração feita
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

3a)DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b) DELETE from Actor WHERE gender = "male" AND salary>1000000

4a)    SELECT MAX(salary) FROM Actor;
b)SELECT MIN(salary) FROM Actor WHERE gender = "female"
c)SELECT COUNT(*) FROM Actor WHERE gender = "female"    
d)SELECT SUM(salary) FROM Actor

5a) fez a contagem da quantidade de pessoas no gender female e male
b)SELECT id, name FROM Actor ORDER BY name DESC;
c)SELECT * FROM Actor ORDER BY salary;
d)SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

6)a)ALTER TABLE Movies ADD playing_limit_date DATE;
b)ALTER TABLE Movies CHANGE rating rating FLOAT;
c)UPDATE Movies
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"

d)DELETE FROM Movie WHERE id = "001"