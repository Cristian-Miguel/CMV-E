CREATE DATABASE  IF NOT EXISTS `bd_cmv_cuentas_cliente` /*!40100 DEFAULT CHARACTER SET latin1 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_cmv_cuentas_cliente`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_cmv_cuentas_cliente
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cat_cmv_tipo_cuenta`
--

DROP TABLE IF EXISTS `cat_cmv_tipo_cuenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_cmv_tipo_cuenta` (
  `id_cuenta` int NOT NULL AUTO_INCREMENT,
  `nombre_cuenta` varchar(50) NOT NULL,
  PRIMARY KEY (`id_cuenta`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_cmv_tipo_cuenta`
--

LOCK TABLES `cat_cmv_tipo_cuenta` WRITE;
/*!40000 ALTER TABLE `cat_cmv_tipo_cuenta` DISABLE KEYS */;
INSERT INTO `cat_cmv_tipo_cuenta` VALUES (1,'Waldo Perez'),(2,'Corenda Toxell'),(3,'Shaina Batterson'),(4,'Constantine Andre'),(5,'Mic Priditt'),(6,'Cristain Marin'),(7,'Zed Harrow');
/*!40000 ALTER TABLE `cat_cmv_tipo_cuenta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cmv_cliente`
--

DROP TABLE IF EXISTS `tbl_cmv_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cmv_cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido_paterno` varchar(45) NOT NULL,
  `apellido_materno` varchar(45) NOT NULL,
  `rfc` varchar(13) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `fecha_alta` datetime NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cmv_cliente`
--

LOCK TABLES `tbl_cmv_cliente` WRITE;
/*!40000 ALTER TABLE `tbl_cmv_cliente` DISABLE KEYS */;
INSERT INTO `tbl_cmv_cliente` VALUES (1,'Waldo','Perez','Lopez','AABE448446F09','AABE448446HMIIZF09','2022-03-13 21:20:58'),(2,'Corenda','Toxell','Hegerty','ALJG782390N11','ALJG782390HYEKON11','2021-12-03 11:32:27'),(3,'Shaina','Batterson','Barnwill','AUHQ403859D00','AUHQ403859MFQBED00','2022-02-13 16:10:58'),(4,'Constantine','Andre','Symon','BACM940839V38','BACM940839HNYLAV38','2022-04-13 18:32:42'),(5,'Mic','Priditt','Vern','BCDH111884K40','BCDH111884HZEQSK40','2022-01-13 14:13:18'),(6,'Cristian','Marin','Barrera','MABC990226R05','MABC990226HMNRRR05','2022-08-13 14:13:18'),(7,'Zed','Harrow','Dearlove','AJAF377027M72','AJAF377027WLGJPM72','2022-08-21 23:23:53');
/*!40000 ALTER TABLE `tbl_cmv_cliente` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
  CREATE DEFINER=`root`@`localhost` TRIGGER `tbl_cmv_cliente_BEFORE_INSERT` BEFORE INSERT ON `tbl_cmv_cliente` FOR EACH ROW BEGIN
	  SET @id = NEW.id_cliente;
    SET @nombreCuenta = CONCAT(NEW.nombre, ' ', NEW.apellido_paterno);
    INSERT INTO cat_cmv_tipo_cuenta (`nombre_cuenta`) value (@nombreCuenta);
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
  CREATE DEFINER=`root`@`localhost` TRIGGER `tbl_cmv_cliente_AFTER_INSERT` AFTER INSERT ON `tbl_cmv_cliente` FOR EACH ROW BEGIN
	  SET @id = NEW.id_cliente;
    SET @nombreCuenta = CONCAT(NEW.nombre, ' ', NEW.apellido_paterno);
    
    SET @id_cuenta = (SELECT id_cuenta FROM cat_cmv_tipo_cuenta WHERE nombre_cuenta = @nombreCuenta ORDER BY id_cuenta DESC LIMIT 1);
    
	INSERT INTO tbl_cmv_cliente_cuenta (`id_cliente`, `id_cuenta`, `saldo_actual`, `fecha_contratacion`, `fecha_ultimo_movimiento`) 
    value (@id, @id_cuenta, 0.00, NEW.fecha_alta, NEW.fecha_alta);
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tbl_cmv_cliente_cuenta`
--

DROP TABLE IF EXISTS `tbl_cmv_cliente_cuenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cmv_cliente_cuenta` (
  `id_cliente_cuenta` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `id_cuenta` int NOT NULL,
  `saldo_actual` decimal(10,2) NOT NULL,
  `fecha_contratacion` datetime NOT NULL,
  `fecha_ultimo_movimiento` datetime NOT NULL,
  PRIMARY KEY (`id_cliente_cuenta`,`id_cliente`,`id_cuenta`),
  KEY `TBL_CMV_CLIENTE_FK_id_cliente_idx` (`id_cliente`),
  KEY `CAT_CMV_TIPO_CUENTA_FK_id_cuenta_idx` (`id_cuenta`),
  CONSTRAINT `CAT_CMV_TIPO_CUENTA_FK_id_cuenta` FOREIGN KEY (`id_cuenta`) REFERENCES `cat_cmv_tipo_cuenta` (`id_cuenta`),
  CONSTRAINT `TBL_CMV_CLIENTE_FK_id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `tbl_cmv_cliente` (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cmv_cliente_cuenta`
--

LOCK TABLES `tbl_cmv_cliente_cuenta` WRITE;
/*!40000 ALTER TABLE `tbl_cmv_cliente_cuenta` DISABLE KEYS */;
INSERT INTO `tbl_cmv_cliente_cuenta` VALUES (1,1,1,0.01,'2021-12-03 11:32:27','2022-03-13 21:20:58'),(2,2,2,0.01,'2021-12-03 11:32:27','2021-12-03 11:32:27'),(3,3,3,10.20,'2022-02-13 16:10:58','2022-02-13 16:10:58'),(4,4,4,8430.01,'2022-04-13 18:32:42','2021-12-13 11:32:27'),(5,5,5,200.15,'2022-01-13 14:13:18','2022-03-01 11:32:27'),(6,6,6,0.24,'2022-08-13 14:13:18','2022-08-13 14:13:18'),(7,7,7,12.34,'2022-08-21 23:23:53','2022-08-21 23:23:53');
/*!40000 ALTER TABLE `tbl_cmv_cliente_cuenta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bd_cmv_cuentas_cliente'
--

--
-- Dumping routines for database 'bd_cmv_cuentas_cliente'
--
/*!50003 DROP PROCEDURE IF EXISTS `BorrarCliente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `BorrarCliente`(IN curpCliente varchar(18))
BEGIN

	SET @id_cuenta_cliente = (
		SELECT CC.id_cliente_cuenta FROM tbl_cmv_cliente_cuenta AS CC 
        INNER JOIN tbl_cmv_cliente AS C ON C.id_cliente = CC.id_cliente 
        WHERE C.curp = curpCliente
    );
    
    SET @id_cuenta = (
		SELECT TC.id_cuenta FROM tbl_cmv_cliente AS C 
		INNER JOIN tbl_cmv_cliente_cuenta AS CC ON C.id_cliente = CC.id_cliente
		INNER JOIN cat_cmv_tipo_cuenta AS TC ON TC.id_cuenta = CC.id_cuenta
		WHERE C.curp = curpCliente
    );
    
    DELETE FROM tbl_cmv_cliente_cuenta WHERE id_cliente_cuenta = @id_cuenta_cliente ;
    DELETE FROM cat_cmv_tipo_cuenta WHERE id_cuenta = @id_cuenta;
    DELETE FROM tbl_cmv_cliente WHERE curp = curpCliente;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InformacionGeneral` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InformacionGeneral`()
BEGIN
	SELECT C.nombre, C.apellido_paterno, C.apellido_materno, C.curp, C.rfc, CC.saldo_actual, C.fecha_alta, TC.nombre_cuenta FROM tbl_cmv_cliente AS C 
	INNER JOIN tbl_cmv_cliente_cuenta AS CC ON C.id_cliente = CC.id_cliente
	INNER JOIN cat_cmv_tipo_cuenta AS TC ON TC.id_cuenta = CC.id_cuenta;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-24 17:52:58
