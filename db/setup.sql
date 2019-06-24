DROP DATABASE IF EXISTS `products`;
CREATE DATABASE IF NOT EXISTS `products`;
USE `products`;
CREATE TABLE `product_category` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);


