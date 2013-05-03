-- MySQL dump 10.10
--
-- Host: localhost    Database: application
-- ------------------------------------------------------
-- Server version	5.0.15-nt

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `check` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projects`
--


/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
LOCK TABLES `projects` WRITE;
INSERT INTO `projects` VALUES (1,'куукеркур','2013-12-01',0),(2,'fgdfgdfgdf','2003-12-12',1),(3,'poopo','2005-09-12',0),(4,'ggg','2012-09-08',0),(5,'z\\\\z\\z\\z','2012-12-12',1),(8,'тест ','2013-05-03',0),(6,'аа','2012-09-08',1),(7,'занзр','2008-05-07',1);
UNLOCK TABLES;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;

--
-- Table structure for table `time`
--

DROP TABLE IF EXISTS `time`;
CREATE TABLE `time` (
  `time_b` int(11) default NULL,
  `time_e` int(11) default NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `time`
--


/*!40000 ALTER TABLE `time` DISABLE KEYS */;
LOCK TABLES `time` WRITE;
INSERT INTO `time` VALUES (8,21);
UNLOCK TABLES;
/*!40000 ALTER TABLE `time` ENABLE KEYS */;

--
-- Table structure for table `today`
--

DROP TABLE IF EXISTS `today`;
CREATE TABLE `today` (
  `id` int(11) NOT NULL auto_increment,
  `time` varchar(20) NOT NULL,
  `task_id` int(11) NOT NULL,
  `task_type` varchar(20) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `today`
--


/*!40000 ALTER TABLE `today` DISABLE KEYS */;
LOCK TABLES `today` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `today` ENABLE KEYS */;

--
-- Table structure for table `work`
--

DROP TABLE IF EXISTS `work`;
CREATE TABLE `work` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(250) default NULL,
  `datetime` date default NULL,
  `check` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `work`
--


/*!40000 ALTER TABLE `work` DISABLE KEYS */;
LOCK TABLES `work` WRITE;
INSERT INTO `work` VALUES (1,'hihi','2012-05-03',0),(2,'руккола','2012-03-09',0),(3,'холокост','1945-09-09',1),(4,'купола','2012-08-09',1),(5,'хор','2012-05-04',0),(7,'тест ворк','2013-05-03',0),(6,'шол','2013-08-09',0);
UNLOCK TABLES;
/*!40000 ALTER TABLE `work` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

