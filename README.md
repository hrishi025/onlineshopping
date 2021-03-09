# onlineshopping

## Day-01 : Initial Backend Commands

# Server side commands:

> npm init
> npm install express mysql2 jsonwebtoken crypto-js body-parser cors moment nodemailer

# Client Side Commands:

> npm install react-router-dom redux react-redux redux-thunk redux-devtools-extension axios redux-logger

# Pending Tasks

- Verify Email
- Cart Table Creation
- Cart Functionalities : Get, Put, Post, Delete

================================================================================##

create database project;
use project;

CREATE TABLE `user` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(30) DEFAULT NULL,
`phone` varchar(12) DEFAULT NULL,
`email` varchar(50) DEFAULT NULL,
`password` varchar(100) DEFAULT NULL,
`status` int DEFAULT 0,
`role` varchar(10) DEFAULT 'CUSTOMER',
PRIMARY KEY (`id`),
UNIQUE KEY `email` (`email`)
)
ALTER TABLE user ADD UNIQUE (email);

-- status
-- 0: non-verified, 1: active, 2: suspended

================================================================================

create table category (id integer primary key auto_increment, title varchar(100), description varchar(1000));

create table company (id integer primary key auto_increment, title varchar(100), description varchar(1000));

create table product (id integer primary key auto_increment, title varchar(100), description varchar(1000), price float, category int, company int);

create table cart (id integer primary key auto_increment, user integer, product integer, quantity integer);

================================================================================

-- order master
-- status
-- 0: placed, 1: packaging, 2: dispatched, 3: out for delivery, 4: delivered, 5: cancelled

create table myOrder (id integer primary key auto_increment, user integer, totalPrice float, paidAmount float, orderDate varchar(50), status integer );

-- order details
create table orderDetails (id integer primary key auto_increment, orderId integer, product integer, price float, quantity integer);

================================================================================
create table productReviews (
id integer PRIMARY KEY auto_increment,
review VARCHAR(100),
userId INTEGER,
productId INTEGER,
rating DECIMAL,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
================================================================================
