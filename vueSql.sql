/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 8.0.19 : Database - vue
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`vue` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `vue`;

/*Table structure for table `account` */

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `Username` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Password` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `userPhone` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatar` char(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `userAddress` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`Username`,`Password`,`userPhone`,`avatar`,`userAddress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `account` */

insert  into `account`(`Username`,`Password`,`userPhone`,`avatar`,`userAddress`) values 
('admin','1234566','13377512770','blob:http://localhost:8080/f38087a1-924f-47a5-92d7-414207fcb9c7','广东广州市花都区城区/迎宾大道西30号广东第二师范学院'),
('junli','123456','13632452088','',''),
('qwj','15wxbdhcm','15816512104','',''),
('qwjjj','15444','15816512104','',''),
('wxbdhcm','1542120','18511945770','',''),
('我想变得很聪明','1581654544','18577135440','','广东广州市花都区城区/迎宾大道西30号广东第二师范学院');

/*Table structure for table `commoditylist` */

DROP TABLE IF EXISTS `commoditylist`;

CREATE TABLE `commoditylist` (
  `id` char(20) NOT NULL,
  `img` char(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` char(20) NOT NULL,
  `price` char(20) NOT NULL,
  `number` char(5) NOT NULL,
  `introduction` char(50) NOT NULL,
  PRIMARY KEY (`id`,`img`,`name`,`price`,`number`,`introduction`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `commoditylist` */

insert  into `commoditylist`(`id`,`img`,`name`,`price`,`number`,`introduction`) values 
('10','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2f71a797a74e1ca70f1fb4570bc026.jpg?thumb=1&w=250&h=250&f=webp&q=90','note 9','1299','0','大屏更享受'),
('11','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg?thumb=1&w=250&h=250&f=webp&q=90','note 9 4G','1099','0','新一代独立显卡'),
('12','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a260090e0e08770b0bd865845a4b4ab.jpg?thumb=1&w=250&h=250&f=webp&q=90','小米11','3999','0','全面屏设计'),
('13','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e75e528fb468aee107f551179aa0799.jpg?thumb=1&w=250&h=250&f=webp&q=90','note 9 pro','1599','0','全面屏设计，海量内容'),
('14','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2f71a797a74e1ca70f1fb4570bc026.jpg?thumb=1&w=250&h=250&f=webp&q=90','note 9','1299','0','大屏更享受'),
('15','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg?thumb=1&w=250&h=250&f=webp&q=90','note 9 4G','1099','0','新一代独立显卡'),
('16','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=250&h=250&f=webp&q=90','小米全面屏电视65英寸 E65X','2999','0','全面屏设计'),
('17','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20d36fbaa18625e4fe507af31e4e9f83.jpg?thumb=1&w=250&h=250&f=webp&q=90','全面屏电视E43K','1299','0','全面屏设计，海量内容'),
('18','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=250&h=250&f=webp&q=90','小米电视4A 70英寸','3399','0','大屏更享受'),
('19','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=250&h=250&f=webp&q=90','Air 13.3 2019款','5999','0','新一代独立显卡'),
('20','//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=250&h=250','平衡车','3399','0','大屏更享受'),
('20','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=250&h=250&f=webp&q=90','小米全面屏电视65英寸 E65X','2999','0','全面屏设计'),
('21','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20d36fbaa18625e4fe507af31e4e9f83.jpg?thumb=1&w=250&h=250&f=webp&q=90','全面屏电视E43K','1299','0','全面屏设计，海量内容'),
('22','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=250&h=250&f=webp&q=90','小米电视4A 70英寸','3399','0','大屏更享受'),
('23','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=250&h=250&f=webp&q=90','Air 13.3 2019款','5999','0','新一代独立显卡'),
('24','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f30069c778b494257320d9da5a1a60.jpg?thumb=1&w=250&h=250&f=webp&q=90','手环5','2999','0','全面屏设计'),
('25','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec0ec7692ba005710d1887262559609c.jpg?thumb=1&w=250&h=250&f=webp&q=90','手表','1299','0','全面屏设计，海量内容'),
('254','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=250&h=250&f=webp&q=90','无线快充','1299','0','快速无线充电'),
('26','//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=250&h=250','平衡车','3399','0','大屏更享受'),
('27','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg?thumb=1&w=250&h=250&f=webp&q=90','音响','5999','0','新一代独立显卡'),
('28','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f30069c778b494257320d9da5a1a60.jpg?thumb=1&w=250&h=250&f=webp&q=90','手环5','2999','0','全面屏设计'),
('29','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec0ec7692ba005710d1887262559609c.jpg?thumb=1&w=250&h=250&f=webp&q=90','手表','1299','0','全面屏设计，海量内容'),
('31','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg?thumb=1&w=250&h=250&f=webp&q=90','音响','5999','0','新一代独立显卡'),
('32','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg?thumb=1&w=250&h=250&f=webp&q=90','小米氮化镓GaN充电器 Type-C','199','0','氮化镓黑科技 65W MAX 大功率快充'),
('355','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg?thumb=1&w=250&h=250&f=webp&q=90','充电宝','299','0','充电宝青春活力'),
('447','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4b3bff030170ad1a07dfb50311352c9.jpg?thumb=1&w=250&h=250&f=webp&q=90','充电头','5999','0','超级快充，三台设备同时充'),
('50','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/03d94ee6059481a6adcb6c4c5c572fb4.jpg?thumb=1&w=250&h=250&f=webp&q=90','jj保温杯','199','0','随身携带'),
('52','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg?thumb=1&w=250&h=250&f=webp&q=90','jj中性笔','99','0','一顶四'),
('53','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg?thumb=1&w=250&h=250&f=webp&q=90','太阳眼镜','299','0','woo'),
('54','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9017bebb14740ea46673aaa81a616cb.jpg?thumb=1&w=250&h=250&f=webp&q=90','乳胶床垫','1999','0','双面可用'),
('55','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/03d94ee6059481a6adcb6c4c5c572fb4.jpg?thumb=1&w=250&h=250&f=webp&q=90','jj保温杯','199','0','随身携带'),
('5524','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg?thumb=1&w=250&h=250&f=webp&q=90','小米氮化镓GaN充电器 Type-C','199','0','氮化镓黑科技 65W MAX 大功率快充'),
('56','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg?thumb=1&w=250&h=250&f=webp&q=90','jj中性笔','99','0','一顶四'),
('57','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg?thumb=1&w=250&h=250&f=webp&q=90','太阳眼镜','299','0','woo'),
('58','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9017bebb14740ea46673aaa81a616cb.jpg?thumb=1&w=250&h=250&f=webp&q=90','乳胶床垫','1999','0','双面可用'),
('655','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=250&h=250&f=webp&q=90','无线快充','1299','0','快速无线充电'),
('742','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg?thumb=1&w=250&h=250&f=webp&q=90','充电宝','299','0','充电宝青春活力'),
('8','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a260090e0e08770b0bd865845a4b4ab.jpg?thumb=1&w=250&h=250&f=webp&q=90','小米11','3999','0','全面屏设计'),
('854','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4b3bff030170ad1a07dfb50311352c9.jpg?thumb=1&w=250&h=250&f=webp&q=90','充电头','5999','0','超级快充，三台设备同时充'),
('9','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e75e528fb468aee107f551179aa0799.jpg?thumb=1&w=250&h=250&f=webp&q=90','note 9 pro','1599','0','全面屏设计，海量内容');

/*Table structure for table `orderlist` */

DROP TABLE IF EXISTS `orderlist`;

CREATE TABLE `orderlist` (
  `userName` char(20) NOT NULL,
  `reciver` char(20) NOT NULL,
  `userAddress` char(20) NOT NULL,
  `userAddressDetails` char(20) NOT NULL,
  `userPhone` char(20) NOT NULL,
  `id` char(20) NOT NULL,
  `number` char(20) NOT NULL,
  `createdTime` char(20) NOT NULL,
  PRIMARY KEY (`userName`,`reciver`,`userAddress`,`userAddressDetails`,`userPhone`,`id`,`number`,`createdTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `orderlist` */

insert  into `orderlist`(`userName`,`reciver`,`userAddress`,`userAddressDetails`,`userPhone`,`id`,`number`,`createdTime`) values 
('admin','cxqwj','广东广州市花都区城区','迎宾大道西30号广东第555师范学院','13377512770','19','1','2021年6月22日11:31'),
('admin','cxs','广东广州市花都区城区/','迎宾大道西30号广东第333师范学院','13377512770','15','1','2021年6月22日11:37'),
('admin','cxs','广东广州市花都区城区/','迎宾大道西30号广东第333师范学院','13377512770','19','1','2021年6月22日11:35'),
('admin','cxs','广东广州市花都区城区/','迎宾大道西30号广东第333师范学院','13377512770','53','1','2021年6月22日12:19'),
('admin','qwj','广东广州市花都区城区/','迎宾大道西30号广东第二师范学院','13377512770','742','1','2021年6月22日11:30'),
('admin','qwj','广东第二师范','学院','13377512770','50','2','2021/05/15'),
('admin','qwj','广东省/深圳市/南山区/','啊是的请问的小纸箱','13377512770','15','1','2021年6月22日11:36'),
('admin','qwj','广东省/深圳市/南山区/','啊是的请问的小纸箱','13377512770','23','2','2021年6月22日15:45'),
('admin','qwj','广东省/深圳市/南山区/','啊是的请问的小纸箱','13377512770','50','1','2021年6月22日11:41'),
('admin','qwj','广东省/深圳市/南山区/','啊是的请问的小纸箱','13377512770','742','1','2021年6月22日11:42'),
('qwj','cxs','山西省/大同市/平城区/','xiguawrawe','13527643634','16','1','2021年6月22日11:47'),
('qwj','cxs','山西省/大同市/平城区/','xiguawrawe','13527643634','355','4','2021年6月22日11:52'),
('qwj','cxs','山西省/大同市/平城区/','xiguawrawe','13527643634','53','3','2021年6月22日11:52'),
('qwj','cxs','山西省/大同市/平城区/','xiguawrawe','13527643634','854','1','2021年6月22日11:52');

/*Table structure for table `useraddresslist` */

DROP TABLE IF EXISTS `useraddresslist`;

CREATE TABLE `useraddresslist` (
  `userName` char(20) DEFAULT NULL,
  `userAddress` char(100) DEFAULT NULL,
  `userPhone` char(11) DEFAULT NULL,
  `receiver` char(20) DEFAULT NULL,
  `userAddressDetails` char(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `useraddresslist` */

insert  into `useraddresslist`(`userName`,`userAddress`,`userPhone`,`receiver`,`userAddressDetails`) values 
('admin','广东广州市花都区城区/','13377512770','qwj','迎宾大道西30号广东第二师范学院'),
('admin','广东广州市花都区城区/','13377512770','cxs','迎宾大道西30号广东第333师范学院'),
('admin','广东广州市花都区城区','13377512770','cxqwj','迎宾大道西30号广东第555师范学院'),
('admin','广东省/深圳市/南山区/','13377512770','qwj','啊是的请问的小纸箱'),
('admin','河北省/唐山市/路南区/','13377512778','asdqwe','dwqeq'),
('qwj','山西省/大同市/平城区/','13527643634','cxs','xiguawrawe');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
