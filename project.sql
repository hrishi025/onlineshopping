/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : project

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 14/03/2021 19:58:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `add_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `city` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `state` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `country` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pin` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`add_id`) USING BTREE,
  INDEX `FK_UserAddress`(`user_id`) USING BTREE,
  CONSTRAINT `FK_UserAddress` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of address
-- ----------------------------

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `prod_id` int NULL DEFAULT NULL,
  `cart_quantity` int NULL DEFAULT NULL,
  PRIMARY KEY (`cart_id`) USING BTREE,
  INDEX `FK_UserCart`(`user_id`) USING BTREE,
  INDEX `FK_CartProduct`(`prod_id`) USING BTREE,
  CONSTRAINT `FK_CartProduct` FOREIGN KEY (`prod_id`) REFERENCES `product` (`prod_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_UserCart` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES (18, 1, 1, 1);
INSERT INTO `cart` VALUES (61, 26, 1, 1);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `cat_id` int NOT NULL AUTO_INCREMENT,
  `cat_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cat_description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`cat_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'Electronics', 'My Electronics');
INSERT INTO `category` VALUES (2, 'Decor', 'Beutiful Decor');
INSERT INTO `category` VALUES (3, 'Books', 'Fictional Books');
INSERT INTO `category` VALUES (4, 'Nutritions', 'MuscleBezz');

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `comp_id` int NOT NULL AUTO_INCREMENT,
  `comp_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `comp_description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`comp_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES (1, 'Apple', 'Expensive Comany');
INSERT INTO `company` VALUES (2, 'Samsung', 'Good Company');
INSERT INTO `company` VALUES (3, 'Micromax', 'Indian Brand');
INSERT INTO `company` VALUES (4, 'Classmates', 'Indian TextBook Company');
INSERT INTO `company` VALUES (5, 'Beautify', 'Decor Company');
INSERT INTO `company` VALUES (6, 'Navneet Publication', 'Book Company');

-- ----------------------------
-- Table structure for myorder
-- ----------------------------
DROP TABLE IF EXISTS `myorder`;
CREATE TABLE `myorder`  (
  `myorder_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `orderDate` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT 0,
  `total_price` float NOT NULL,
  PRIMARY KEY (`myorder_id`) USING BTREE,
  INDEX `FK_UserOrder`(`user_id`) USING BTREE,
  CONSTRAINT `FK_UserOrder` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of myorder
-- ----------------------------
INSERT INTO `myorder` VALUES (1, 1, '2021-03-09', 0, 0);
INSERT INTO `myorder` VALUES (17, 1, '10/03/2021', 0, 1300000);
INSERT INTO `myorder` VALUES (18, 1, '10/03/2021', 0, 200000);
INSERT INTO `myorder` VALUES (19, 1, '10/03/2021', 0, 0);
INSERT INTO `myorder` VALUES (20, 1, '10/03/2021', 0, 0);
INSERT INTO `myorder` VALUES (21, 1, '10/03/2021', 0, 0);
INSERT INTO `myorder` VALUES (22, 1, '10/03/2021', 0, 300000);
INSERT INTO `myorder` VALUES (23, 1, '10/03/2021', 0, 300000);
INSERT INTO `myorder` VALUES (24, 1, '10/03/2021', 0, 1150000);
INSERT INTO `myorder` VALUES (25, 1, '10/03/2021', 0, 2000000);
INSERT INTO `myorder` VALUES (26, 1, '10/03/2021', 0, 4000000);
INSERT INTO `myorder` VALUES (27, 26, '10/03/2021', 2, 0);
INSERT INTO `myorder` VALUES (28, 26, '10/03/2021', 1, 3000000);

-- ----------------------------
-- Table structure for orderdetails
-- ----------------------------
DROP TABLE IF EXISTS `orderdetails`;
CREATE TABLE `orderdetails`  (
  `orderdetails_id` int NOT NULL AUTO_INCREMENT,
  `myorder_id` int NULL DEFAULT NULL,
  `product_id` int NULL DEFAULT NULL,
  `price` float NULL DEFAULT NULL,
  `quantity` int NULL DEFAULT NULL,
  `rating` int NULL DEFAULT NULL,
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`orderdetails_id`) USING BTREE,
  INDEX `FK_MyOrderDetails`(`myorder_id`) USING BTREE,
  INDEX `FK_ProductOrderDetails`(`product_id`) USING BTREE,
  CONSTRAINT `FK_MyOrderDetails` FOREIGN KEY (`myorder_id`) REFERENCES `myorder` (`myorder_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_ProductOrderDetails` FOREIGN KEY (`product_id`) REFERENCES `product` (`prod_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of orderdetails
-- ----------------------------
INSERT INTO `orderdetails` VALUES (1, 1, 1, 200000, 1, 5, 'Good Phone');
INSERT INTO `orderdetails` VALUES (18, 17, 1, 200000, 5, NULL, NULL);
INSERT INTO `orderdetails` VALUES (19, 17, 2, 150000, 2, NULL, NULL);
INSERT INTO `orderdetails` VALUES (20, 18, 1, 200000, 1, NULL, NULL);
INSERT INTO `orderdetails` VALUES (21, 22, 2, 150000, 2, NULL, NULL);
INSERT INTO `orderdetails` VALUES (22, 23, 2, 150000, 2, NULL, NULL);
INSERT INTO `orderdetails` VALUES (23, 24, 1, 200000, 5, NULL, NULL);
INSERT INTO `orderdetails` VALUES (24, 24, 2, 150000, 1, NULL, NULL);
INSERT INTO `orderdetails` VALUES (25, 25, 1, 200000, 10, NULL, NULL);
INSERT INTO `orderdetails` VALUES (26, 26, 1, 200000, 20, NULL, NULL);
INSERT INTO `orderdetails` VALUES (27, 28, 2, 150000, 20, NULL, NULL);

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment`  (
  `pay_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `pay_amount` float NULL DEFAULT NULL,
  `myorder_id` int NULL DEFAULT NULL,
  `pay_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pay_type` int NULL DEFAULT 0,
  PRIMARY KEY (`pay_id`) USING BTREE,
  INDEX `FK_UserPayment`(`user_id`) USING BTREE,
  INDEX `FK_MyorderPayment`(`myorder_id`) USING BTREE,
  CONSTRAINT `FK_MyorderPayment` FOREIGN KEY (`myorder_id`) REFERENCES `myorder` (`myorder_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_UserPayment` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of payment
-- ----------------------------
INSERT INTO `payment` VALUES (6, 1, 200000, 18, '10/03/2021', 0);
INSERT INTO `payment` VALUES (7, 1, 0, 19, '10/03/2021', 1);
INSERT INTO `payment` VALUES (8, 1, 0, 20, '10/03/2021', 1);
INSERT INTO `payment` VALUES (9, 1, 300000, 23, '10/03/2021', 1);
INSERT INTO `payment` VALUES (10, 1, 2000000, 25, '10/03/2021', 0);
INSERT INTO `payment` VALUES (11, 1, 0, 27, '10/03/2021', 0);
INSERT INTO `payment` VALUES (12, 1, 3000000, 28, '10/03/2021', 0);

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `prod_id` int NOT NULL AUTO_INCREMENT,
  `prod_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `prod_description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `prod_price` float NULL DEFAULT NULL,
  `cat_id` int NULL DEFAULT NULL,
  `comp_id` int NULL DEFAULT NULL,
  `prod_qty` int NULL DEFAULT 0,
  `seller_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`prod_id`) USING BTREE,
  INDEX `FK_ProductCategory`(`cat_id`) USING BTREE,
  INDEX `FK_ProductCompany`(`comp_id`) USING BTREE,
  CONSTRAINT `FK_ProductCategory` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_ProductCompany` FOREIGN KEY (`comp_id`) REFERENCES `company` (`comp_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 'IPhone 12 mini', 'Very Good Phone', 200, 1, 1, 1, 26);
INSERT INTO `product` VALUES (2, 'Samsung', 'S20 Ultra', 150000, 1, 2, 9, 26);
INSERT INTO `product` VALUES (3, '11 hours', 'Crime Book ', 250, 3, 4, 40, 26);
INSERT INTO `product` VALUES (4, 'Sofa', 'Chillax sofa', 25000, 2, 5, 10, 26);
INSERT INTO `product` VALUES (5, 'The  Billion Dream', 'Book of Sachin Tendulkar', 900, 3, 6, 20, 26);
INSERT INTO `product` VALUES (7, 'iphone xr', 'best', 13241, 1, 1, 22, 26);
INSERT INTO `product` VALUES (9, 'iPhone 12', 'latest phone', 199999, 1, 1, 13, 26);
INSERT INTO `product` VALUES (10, 'hp spectre laptop', 'nice product', 100, 1, 2, 20, 26);
INSERT INTO `product` VALUES (11, 'clock', 'wall clock', 3, 2, 5, 100, 26);
INSERT INTO `product` VALUES (12, 'melody', 'melody khao khud jaan jao', 1, 4, 5, 1, 26);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_phone` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_status` int NULL DEFAULT 0,
  `user_role` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'CUSTOMER',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `user_email`(`user_email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'h', '1234', 'h', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 2, 'CUSTOMER');
INSERT INTO `user` VALUES (2, 'Pankaj', '8007840189', 'chaudharip371@gmail.com', 'Pankaj@98', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (3, 'Roshan', '7972333108', 'rdc420@gmail.com', 'rc123', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (4, 'Hrishi', '9923528048', 'hrishi302@gmail.com', 'hrishi@98', 0, 'CUSTOMER');
INSERT INTO `user` VALUES (18, 'undefined', 'undefined', 'e@gmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0, 'CUSTOMER');
INSERT INTO `user` VALUES (19, 'bill', '9999999999', 'bill@gmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 1, 'SELLER');
INSERT INTO `user` VALUES (20, 'pranit', '1234', 'pranit@email.com', 'bd5523a9bc938e1bca3f0f145f2d1e9881b3ecf07ed806af337114532c2d9315', 1, 'SELLER');
INSERT INTO `user` VALUES (21, 'pankaj', '1234', 'pankaj@email.com', '7c78eea7a591b0c8a4dad680372e35ca12e11cffdac5c69a39700c8014fbcc82', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (22, 'aditya', '1234', 'aditya@email.com', '265719f4e7ee032fe4a0c5ed5735a0530545e4f35c8648155dc5450330327e2a', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (23, 'yogesh', '1234', 'yogesh@email.com', '28716f5e99d3c20d5bff5082b8fa4c7197a2360d55156f04f0302d4f7db21f0f', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (26, 'a', '123', 'a', 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (27, 'dj', '123', 'dj@g.com', '6792a7378ad3efaa577aaa68a96880aed193e09ebea3ac5f6e82514ff7d90c3f', 0, 'CUSTOMER');

SET FOREIGN_KEY_CHECKS = 1;
