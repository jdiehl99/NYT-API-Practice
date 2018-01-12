DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT default 0,
    stock_quantity INT default 0,
    PRIMARY KEY (item_id)
);

INSERT INTO
	`products`( `department_name`, `price`, `product_name`, `stock_quantity` )
VALUES
	('Produce',12,'Bananas',25),
	('Produce',4,'Apples',10),
	('Dairy',2,'Milk',100),
	('Dairy',1,'Eggs',15),
	('Frozen',21,'Pizza',12),
	('Frozen',6,'Ice Cream',75),
	('Pantry',8,'Peanut Butter',40),
	('Pantry',8,'Jelly',40),
	('Meat',30,'Steak',5),
	('Meat',25,'Chicken',10);