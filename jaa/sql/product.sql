CREATE TABLE product (
    testproduct_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    category_id INTEGER
);

INSERT INTO product ( product_name, category_id)
VALUES
('Johns Fruit Cake',3),
('Marys Healthy Mix',9),
('Peters Scary Stuff',10),
('Jims Secret Recipe',11),
('Elisabeths Best Apples',12),
('Janes Favorite Cheese',4),
('Billys Home Made Pizza ',13),
(' Ellas Special Salmon ',8),
('Roberts Rich Spaghetti',5),
('Mias Popular Ice',14);
           
CREATE TABLE categories
(category_id SERIAL PRIMARY KEY,
category_name VARCHAR(100),
description VARCHAR(500));


INSERT INTO categories(category_name, description)
VALUES ('Beverages','Soft drinks,coffees,teas,beers,and ales'),
('Condiments','Sweet and savory sauces,relishes,spreads,and seasinings'),
('Confections','Desserts,candies,and sweet bread'),
('Dairy Products','Cheeses'),
('Grans/Cereals','Breads,crackers,pasta,and cereal'),
('Meat/Poultry','Prepared meats'),
('Produce','Dried fruit and bean curd'),
('Seafood','Seaweed and fish');

-- SELECT testproduct_id, product_name, category_name
-- FROM product
-- INNER JOIN categories ON product.category_id = categories.category_id;

CREATE TABLE updatelogin (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(100),
    password VARCHAR(100),
    email VARCHAR(100),
    street_number INTEGER,
    street_name VARCHAR(50),
    city VARCHAR(100),
    zipcode INTEGER,
    phone_number VARCHAR(50)
    );


INSERT INTO updatelogin( username, password, email, street_number, street_name, city, zipcode, phone_number)
VALUES 
('ashely','12345678','ashley@mail.com',123,'ashley street','ashley city',12345,'123-451-2345'),
('jessie','87654321','jessie@mail.com',456,'jessie street','jessie city',54321,'098-761-2345'),
('emmanual','13579086','emmanual@mail.com',789,'emmanual street','emmanual city',13579,'129-031-2345'),
('joel','45612398','joel@mail.com',654,'joel2 street','joel city',54786,'738-471-2323');