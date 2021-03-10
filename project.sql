/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : project

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 09/03/2021 13:35:47
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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (1, 1, 'Chaudhari Wada ', 'Jalgaon', 'Maharashtra', 'India', '425524');

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
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES (1, 1, 1, 1);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `cat_id` int NOT NULL AUTO_INCREMENT,
  `cat_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cat_description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`cat_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES (1, 'Apple', 'Expensive Comany');
INSERT INTO `company` VALUES (2, 'Redmi', 'Cheap Company');
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
  PRIMARY KEY (`myorder_id`) USING BTREE,
  INDEX `FK_UserOrder`(`user_id`) USING BTREE,
  CONSTRAINT `FK_UserOrder` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of myorder
-- ----------------------------
INSERT INTO `myorder` VALUES (1, 1, '2021-03-09', 0);

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
  CONSTRAINT `FK_MyOrderDetails` FOREIGN KEY (`myorder_id`) REFERENCES `myorder` (`myorder_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of orderdetails
-- ----------------------------
INSERT INTO `orderdetails` VALUES (1, 1, 1, 200000, 1, 5, 'Good Phone');

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
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of payment
-- ----------------------------
INSERT INTO `payment` VALUES (1, 1, 200000, 1, '2021-03-09', 1);

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
  PRIMARY KEY (`prod_id`) USING BTREE,
  INDEX `FK_ProductCategory`(`cat_id`) USING BTREE,
  INDEX `FK_ProductCompany`(`comp_id`) USING BTREE,
  CONSTRAINT `FK_ProductCategory` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_ProductCompany` FOREIGN KEY (`comp_id`) REFERENCES `company` (`comp_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 'IPhone', 'Very Good Phone', 200000, 1, 1, 10);
INSERT INTO `product` VALUES (2, NULL, NULL, NULL, NULL, NULL, 0);
INSERT INTO `product` VALUES (3, '11 hours', 'Crime Book ', 250, 3, 4, 40);
INSERT INTO `product` VALUES (4, 'Sofa', 'Chillax sofa', 25000, 2, 5, 10);
INSERT INTO `product` VALUES (5, 'The  Billion Dream', 'Book of Sachin Tendulkar', 900, 3, 6, 20);

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
  `user_status` int NULL DEFAULT NULL,
  `user_role` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'CUSTOMER',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `user_email`(`user_email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'pranit', '9988776655', 'pranit@gmail.com', 'pranit', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (2, 'yogesh', '9823132998', 'ytchaudhari7@gmail.com', '1234', 0, 'CUSTOMER');
INSERT INTO `user` VALUES (3, 'Pankaj', '8007840189', 'chaudharip371@gmail.com', 'Pankaj@98', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (4, 'Roshan', '7972333108', 'rdc420@gmail.com', 'rc123', 2, 'CUSTOMER');
INSERT INTO `user` VALUES (5, 'Hrishi', '9923528048', 'hrishi302@gmail.com', 'hrishi@98', 0, 'CUSTOMER');


SET FOREIGN_KEY_CHECKS = 1;
