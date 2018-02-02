# Host: localhost  (Version: 5.5.53)
# Date: 2018-01-29 18:22:58
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('1','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',1199,2,'正反四摄/5.65英寸全面屏','../imgs/li1.jpg','选购','6653人评价','','','','','','','','','','',''),('10','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',1199,2,'正反四摄/5.65英寸全面屏','../imgs/li10.jpg','选购','6653人评价','','','','','','','','','','',''),('2','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',2199,2,'正反四摄/5.65英寸全面屏','../imgs/li2.jpg','选购','6653人评价','','','','','','','','','','',''),('3','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',2199,2,'正反四摄/5.65英寸全面屏','../imgs/li3.jpg','选购','6653人评价','','','','','','','','','','',''),('4','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',1199,2,'正反四摄/5.65英寸全面屏','../imgs/li4.jpg','选购','6653人评价','','','','','','','','','','',''),('5','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',1199,2,'正反四摄/5.65英寸全面屏','../imgs/li5.jpg','选购','6653人评价','','','','','','','','','','',''),('6','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',1199,2,'正反四摄/5.65英寸全面屏','../imgs/li6.jpg','选购','6653人评价','','','','','','','','','','',''),('7','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',1199,2,'正反四摄/5.65英寸全面屏','../imgs/li7.jpg','选购','6653人评价','','','','','','','','','','',''),('8','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',1199,2,'正反四摄/5.65英寸全面屏','../imgs/li8.jpg','选购','6653人评价','','','','','','','','','','',''),('9','荣耀9青春版 全网通标配版（魅海蓝）','正反四摄/5.65英寸全面屏',1199,2,'正反四摄/5.65英寸全面屏','../imgs/li9.jpg','选购','6653人评价','','','','','','','','','','','');

#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#


#
# Structure for table "vip"
#

CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(20) NOT NULL,
  `usersex` char(2) DEFAULT NULL,
  `userage` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

INSERT INTO `vip` VALUES ('17629040566','1010',NULL,NULL),('17629040567','123456',NULL,NULL),('18193333020','1128',NULL,NULL),('18709288915','',NULL,NULL),('18709288916','',NULL,NULL),('18709288917','',NULL,NULL),('张悦悦','1212','女',NULL),('陈圆圆','0101','女',NULL);
