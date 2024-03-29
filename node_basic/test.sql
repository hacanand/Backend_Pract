-- Active: 1707420669911@@127.0.0.1@3306@sakila
SHOW TABLES;
CREATE DATABASE TEST;
SHOW DATABASES;             
-- SHOW DATABASES LIKE 'TEST';
USE TEST;            
CREATE TABLE FIRST_TABLE(NAME VARCHAR(20),DOB DATE ,SALARY DECIMAL);
SHOW TABLES;
DESC FIRST_TABLE;

INSERT INTO first_table(NAME,DOB,SALARY) VALUES('RAMESH ','1990-01-01',10000);
INSERT INTO first_table(NAME,DOB,SALARY) VALUES('Suresh ','1991-01-01',20000);
SELECT *FROM first_table;

CREATE TABLE SECOND_TABLE(NAME VARCHAR(20) NOT NULL ,DOB DATE DEFAULT '1990-01-01',GENDER ENUM('MALE','FEMALE','OTHER') DEFAULT 'MALE');

DESC SECOND_TABLE;
INSERT INTO SECOND_TABLE(NAME ,DOB, GENDER) VALUES('RAHUL',DEFAULT ,"MALE");
SELECT DOB FROM SECOND_TABLE;
SELECT * FROM second_table WHERE DOB >2020 -01-01;
SELECT * FROM SECOND_TABLE WHERE NAME LIKE '%A%';

SELECT * FORM SECOND_TABLE WHERE NOT GENDER ='MALE';

SELECT * FROM second_table_TABLE  WHERE GENDER='FEMALE';
SHOW TABLES;



DELETE FROM ACTOR WHERE FIRST_NAME ="__S%";
SELECT * FROM COUNTRY;

DELETE FROM actor WHERE FIRST_NAME LIKE '_S%';
SELECT NAME AS COUNTRY_NAME FROM COUNTRY;
SELECT CONCAT (CODE ,CONTINENT) AS CODE_CONTINENT FROM COUNTRY;
SELECT MAX(POPULATION) AS TOTAL_POPULATION FROM COUNTRY;
SELECT * FROM COUNTRY WHERE POPULATION = (SELECT MAX(POPULATION));
SELECT NAME FROM COUNTRY WHERE POPULATION = (SELECT MIN(POPULATION));
SELECT * FROM COUNTRY WHERE POPULATION = (SELECT MAX(POPULATION) FROM COUNTRY) ;
UPDATE country SET INDEPYEAR='1949' WHERE NAME='CHINA';
SELECT COUNT(*) FROM COUNTRY GROUP BY CONTINENT;
SELECT * FROM CUSTOMER ;
SELECT * FROM actor_info;

SELECT * ACTOR INNER JOIN ACTOR_INFO ON ACTOR.ACTOR_ID=ACTOR_INFO.ACTOR_ID;