CREATE DATABASE IF NOT EXISTS companydb;

use companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary  INT(10) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employee;

INSERT INTO employee VALUES 
    (1,'Joe',1000),
    (2,'Steve',2000),
    (3,'Anaxagoras',3000)