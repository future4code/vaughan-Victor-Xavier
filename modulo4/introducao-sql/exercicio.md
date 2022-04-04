 <h1>exercicio <h1>
 1. A) VARCHAR - É uma string com uma quantidade maxima de caracteres
   PRIMARY KEY -  funciona como um ID para 
   DATE -  representa uma data
   NULL - significa  que o campo pode ficar nulo,  não é obrigatório possuir nenhum valor
   NOT NULL - o oposto do null, precisa ter um valor

   b) SHOW -  usado para acessar os metadados do sistema
    SHOW DATABASE -  mostra os dados dentro de um sistema
SHOW TABLES - mostra a tabela do banco de dados atual
c) foram mostrado o como os dados ficarão na tabela 

 

b)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1948-08-25", 
  "female"
);

 2. c) entrada "001" duplicada para a chave PRIMERY
   d) contagem de colunas não corresponde ao valor cont na linha 1
   e)Código de erro: 1364. O campo 'nome' não tem um valor padrão
   f)Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

3. a) SELECT id, name, salary, birth_date from Actor WHERE gender = "female"
b)SELECT salary,name from Actor WHERE name = "tony ramos"
c)SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid";
d)SELECT id, name, salary from Actor WHERE salary <= "500000";
e) Coluna desconhecida 'nome' na 'lista de campos'
SELECT id, name from Actor WHERE id = "002";

4. select id, name, salary, birth_date, gender from Actor WHERE name LIKE  "A%"OR "J%" ;
   
 select id, name, salary, birth_date, gender from Actor WHERE name LIKE  "A%"OR "J%" and SALARY >500000;
   
   a)BETWEEN é uma verificação entre os 2 valores colocados, NOT negação para uma comparação

   b)select * from Actor WHERE name  not like  "A%"OR "J%" and SALARY >350000;

 c)SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d)SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR  name LIKE"%A%";

5 
CREATE TABLE  Movies (
id varchar(255) primary key,
title TEXT(255) NOT NULL,
sinopse text NULL,
release_date DATE NOT NULL,
rating float(11) not NULL
);
INSERT INTO Movies (id, title,sinopse,release_date,rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
 "2006-01-06",
"7"
);
select * from Movies;

6a)SELECT id, title, rating FROM Movies WHERE id = "001";

b)SELECT * FROM Movies WHERE title = "Deus é Brasileiro";

c)SELECT id,title,rating FROM Movies WHERE rating >=  7;


7a )SELECT *from Movies WHERE title LIKE "%vida%" 

b) SELECT * FROM Movies
WHERE title LIKE "%voce%" OR
      sinopse LIKE "%Deus%";

c) SELECT * FROM Movies
WHERE release_date < "2022-05-04";

d)SELECT * FROM Movies
WHERE release_date < "2022-05-04" OR title LIKE "%voce%" OR rating >7;