-- Manage an online store's database by performing essential SQL operations. The project focuses on inserting, updating, deleting records, and ensuring data consistency through transactions.



-- Lesson 1 - Insert Statement

-- Customers Table:
-- Create a table to store customer information, including a unique identifier for each customer, their first and last names, email address, and the date they joined the store.
-- Insert records for at least three customers. Ensure that each customer has a unique email address.
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    JoinDate DATE NOT NULL
);

INSERT INTO Customers (FirstName, LastName, Email, JoinDate)
VALUES
    ('John', 'Doe', 'john.doe@example.com', '2024-01-15'),
    ('Jane', 'Smith', 'jane.smith@example.com', '2024-02-10'),
    ('Alice', 'Johnson', 'alice.johnson@example.com', '2024-03-05');


-- Products Table:
-- Create a table to hold product details, including a unique product identifier, product name, price, and available stock quantity.
-- Insert records for at least three different products. Make sure each product has a unique identifier and a reasonable stock quantity.
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    StockQuantity INT NOT NULL
);

INSERT INTO Products (ProductName, Price, StockQuantity)
VALUES
    ('Laptop', 999.99, 50),
    ('Smartphone', 699.99, 100),
    ('Headphones', 199.99, 200);


-- Orders Table:
-- Design a table to track customer orders. This table should include an order identifier, the customer's identifier (linking to the Customers table), the product's identifier (linking to the Products table), the order date, and the quantity ordered.
-- Insert records for at least three orders, ensuring that each order correctly references existing customers and products.
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    ProductID INT,
    OrderDate DATE NOT NULL,
    Quantity INT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity)
VALUES
    (1, 1, '2024-04-01', 1), 
    (2, 2, '2024-04-02', 2),  
    (3, 3, '2024-04-03', 3); 



    -- Lesson 2 - Update Statement

-- Customers Table
--    - One of the customers has updated their email address. Let's say John Doe's new email address is john.doe.new@example.com. Identify the customer and modify their record to reflect this change.
UPDATE Customers
SET Email = 'john.doe.new@example.com'
WHERE CustomerID = 1;


-- Products Table
--    - The price of the "Laptop" product has increased to 1,099.99. Adjust the price in the `Products` table accordingly.
UPDATE Products
SET Price = 1099.99
WHERE ProductName = 'Laptop';


-- Orders Table
--    - A customer has requested a change in their order quantity. Let's say Jane Smith wants to change the quantity of her smartphone order from 2 to 1. Update the relevant order record to reflect the new quantity.
UPDATE Orders
SET Quantity = 1
WHERE OrderID = 2;


  -- Lesson 3 - Delete Statement

--  Delete a Customer Record
-- A customer has requested that their account be deleted. Let's say Alice Johnson has asked for her account to be removed. Identify the customer and remove their record from the database.
DELETE FROM Customers
WHERE CustomerID = 3;


-- Delete a Product Record
-- One of the products, "Headphones," is no longer available for sale and should be removed from the database. Remove this product from the `Products` table.
DELETE FROM Products
WHERE ProductName = 'Headphones';


-- Delete an Order Record
-- An order has been canceled by the customer. Let's say the order with OrderID = 3, which was for Alice Johnson, needs to be deleted. Delete this order from the `Orders` table.
DELETE FROM Orders
WHERE OrderID = 3;
