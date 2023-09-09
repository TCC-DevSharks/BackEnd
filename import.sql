-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: db_bebevindo
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `tbl_agenda`
--

DROP TABLE IF EXISTS `tbl_agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_agenda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dia` date NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `lembrete` tinyint(1) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_AgendaGestante` (`id_gestante`),
  CONSTRAINT `FK_Gestante_AgendaGestante` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_agenda`
--

LOCK TABLES `tbl_agenda` WRITE;
/*!40000 ALTER TABLE `tbl_agenda` DISABLE KEYS */;
INSERT INTO `tbl_agenda` VALUES (1,'2023-11-20','Consulta Nutri',1,'É uma descrição',3),(2,'2023-11-20','Consulta',1,'É uma descrição',3),(3,'2023-11-20','Não tem consulta',1,'É uma descrição',3),(4,'2023-11-20','Ou será que tem?',1,'É uma descrição',3),(5,'2023-11-20','Nahhh! Tem não!',1,'É uma descrição',3);
/*!40000 ALTER TABLE `tbl_agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_alimentos`
--

DROP TABLE IF EXISTS `tbl_alimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_alimentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `peso` varchar(10) NOT NULL,
  `carboidratos` varchar(10) NOT NULL,
  `proteinas` varchar(10) NOT NULL,
  `gorduras` varchar(10) NOT NULL,
  `fibras` varchar(10) NOT NULL,
  `acucares` varchar(10) NOT NULL,
  `sodio` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_alimentos`
--

LOCK TABLES `tbl_alimentos` WRITE;
/*!40000 ALTER TABLE `tbl_alimentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_alimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_categoria`
--

DROP TABLE IF EXISTS `tbl_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_categoria`
--

LOCK TABLES `tbl_categoria` WRITE;
/*!40000 ALTER TABLE `tbl_categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_clinica`
--

DROP TABLE IF EXISTS `tbl_clinica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_clinica` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(20) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `razao_social` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `email` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_clinica`
--

LOCK TABLES `tbl_clinica` WRITE;
/*!40000 ALTER TABLE `tbl_clinica` DISABLE KEYS */;
INSERT INTO `tbl_clinica` VALUES (4,'64sd8s','eusoubroxa','Uma foto','Vagabunda1','É uma descrição','kafe@gid.com'),(5,'64sd8ss','eusoubroxa','Uma foto','Vagabunda1','É uma descrição','kafe@gid.com'),(6,'64sd8sss','eusoubroxa','Uma foto','Vagabunda1','É uma descrição','kafe@gid.com'),(7,'64sds','eusoubroxa','Uma foto','Vagabunda1','É uma descrição','kafe@gid.com'),(8,'642sdafs','eusoubroxa','Uma foto','Vagabunda2','É uma descrição','kasge@gmail.com'),(9,'64sd214s','eusoubroxa','Uma foto','Vagabunda1','É uma descrição','kafe@gid.com'),(10,'64sd21f4s','eusoubroxa','Uma fofto','Vagabunda1','É uma descrição','kafe@gid.com'),(11,'6sd21f4s','eusoubroxa','Uma fofto','Vagabunda1','É uma descrição','kafe@gid.com'),(12,'6sd21ff4s','eusoubroxa','Uma fofto','Vagabunda1','É uma descrição','kafe@gid.com'),(13,'6sd2d1ff4s','$2b$10$9fk2cR.ydhCrpQbOw36QRuHnUdtkEP/yWJ3iXz.ZE.8DNmsLXsvdm','Uma fofto','Vagabunda1','É uma descrição','kafe@gid.com'),(14,'6sd2ds1ff4s','$2b$10$D8a6Bq9ByCJXsDbKIDbR7OqoL2Fug1Fpi2mpFq47Qu/F1qMFgynKS','Uma fofto','Vagabunda1','É uma descrição','kafe@gid.com');
/*!40000 ALTER TABLE `tbl_clinica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_clinica_telefone`
--

DROP TABLE IF EXISTS `tbl_clinica_telefone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_clinica_telefone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_clinica` int NOT NULL,
  `id_telefone` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Clinica_ClinicaTelefoneClinica` (`id_clinica`),
  KEY `FK_Telefone_ClinicaTelefoneTelefone` (`id_telefone`),
  CONSTRAINT `FK_Clinica_ClinicaTelefoneClinica` FOREIGN KEY (`id_clinica`) REFERENCES `tbl_clinica` (`id`),
  CONSTRAINT `FK_Telefone_ClinicaTelefoneTelefone` FOREIGN KEY (`id_telefone`) REFERENCES `tbl_telefone` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_clinica_telefone`
--

LOCK TABLES `tbl_clinica_telefone` WRITE;
/*!40000 ALTER TABLE `tbl_clinica_telefone` DISABLE KEYS */;
INSERT INTO `tbl_clinica_telefone` VALUES (3,4,4),(4,5,5),(5,6,6),(6,7,7),(7,8,8),(8,9,9),(9,10,10),(10,11,11),(11,12,12),(12,13,13),(13,14,14);
/*!40000 ALTER TABLE `tbl_clinica_telefone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_comorbidade`
--

DROP TABLE IF EXISTS `tbl_comorbidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_comorbidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_comorbidade`
--

LOCK TABLES `tbl_comorbidade` WRITE;
/*!40000 ALTER TABLE `tbl_comorbidade` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_comorbidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_consulta`
--

DROP TABLE IF EXISTS `tbl_consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_consulta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dia` date NOT NULL,
  `hora` time NOT NULL,
  `id_profissional` int NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Profissional_ConsultaProfissional` (`id_profissional`),
  KEY `FK_Gestante_ConsultaGestante` (`id_gestante`),
  CONSTRAINT `FK_Gestante_ConsultaGestante` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`),
  CONSTRAINT `FK_Profissional_ConsultaProfissional` FOREIGN KEY (`id_profissional`) REFERENCES `tbl_profissional` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_consulta`
--

LOCK TABLES `tbl_consulta` WRITE;
/*!40000 ALTER TABLE `tbl_consulta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_deficiencia`
--

DROP TABLE IF EXISTS `tbl_deficiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_deficiencia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_deficiencia`
--

LOCK TABLES `tbl_deficiencia` WRITE;
/*!40000 ALTER TABLE `tbl_deficiencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_deficiencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_dieta`
--

DROP TABLE IF EXISTS `tbl_dieta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_dieta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_consulta` int NOT NULL,
  `id_refeicao` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Consulta_DietaConsulta` (`id_consulta`),
  KEY `FK_Refeicao_DietaRefeicao` (`id_refeicao`),
  CONSTRAINT `FK_Consulta_DietaConsulta` FOREIGN KEY (`id_consulta`) REFERENCES `tbl_consulta` (`id`),
  CONSTRAINT `FK_Refeicao_DietaRefeicao` FOREIGN KEY (`id_refeicao`) REFERENCES `tbl_refeicao` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_dieta`
--

LOCK TABLES `tbl_dieta` WRITE;
/*!40000 ALTER TABLE `tbl_dieta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_dieta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_endereco_gestante`
--

DROP TABLE IF EXISTS `tbl_endereco_gestante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_endereco_gestante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(10) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `cep` varchar(10) NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_EnderecoGestante` (`id_gestante`),
  CONSTRAINT `FK_Gestante_EnderecoGestante` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_endereco_gestante`
--

LOCK TABLES `tbl_endereco_gestante` WRITE;
/*!40000 ALTER TABLE `tbl_endereco_gestante` DISABLE KEYS */;
INSERT INTO `tbl_endereco_gestante` VALUES (1,'12','complemento','cep123',1);
/*!40000 ALTER TABLE `tbl_endereco_gestante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_endereco_profissional`
--

DROP TABLE IF EXISTS `tbl_endereco_profissional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_endereco_profissional` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(10) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `cep` varchar(10) NOT NULL,
  `id_profissional` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Profissional_EnderecoProfissional` (`id_profissional`),
  CONSTRAINT `FK_Profissional_EnderecoProfissional` FOREIGN KEY (`id_profissional`) REFERENCES `tbl_profissional` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_endereco_profissional`
--

LOCK TABLES `tbl_endereco_profissional` WRITE;
/*!40000 ALTER TABLE `tbl_endereco_profissional` DISABLE KEYS */;
INSERT INTO `tbl_endereco_profissional` VALUES (1,'23','a','06250130',14),(2,'23','a','06250130',15);
/*!40000 ALTER TABLE `tbl_endereco_profissional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_enderecoclinica`
--

DROP TABLE IF EXISTS `tbl_enderecoclinica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_enderecoclinica` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(10) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `cep` varchar(10) NOT NULL,
  `id_clinica` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Clinica_EnderecoClinica` (`id_clinica`),
  CONSTRAINT `FK_Clinica_EnderecoClinica` FOREIGN KEY (`id_clinica`) REFERENCES `tbl_clinica` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_enderecoclinica`
--

LOCK TABLES `tbl_enderecoclinica` WRITE;
/*!40000 ALTER TABLE `tbl_enderecoclinica` DISABLE KEYS */;
INSERT INTO `tbl_enderecoclinica` VALUES (4,'41','','06250130',4),(5,'41','','06250130',5),(6,'41','','06250130',6),(7,'41','','06250130',7),(8,'41','','06250130',8),(9,'41','','06250130',9),(10,'41','','06250130',10),(11,'41','','06250130',11),(12,'41','','06250130',12),(13,'41','','06250130',13),(14,'41','','06250130',14);
/*!40000 ALTER TABLE `tbl_enderecoclinica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_enxoval`
--

DROP TABLE IF EXISTS `tbl_enxoval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_enxoval` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item` varchar(150) NOT NULL,
  `checkbox` tinyint(1) NOT NULL,
  `quantidade` int NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Categoria_EnxovalCategoria` (`id_categoria`),
  CONSTRAINT `FK_Categoria_EnxovalCategoria` FOREIGN KEY (`id_categoria`) REFERENCES `tbl_planocategoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_enxoval`
--

LOCK TABLES `tbl_enxoval` WRITE;
/*!40000 ALTER TABLE `tbl_enxoval` DISABLE KEYS */;
INSERT INTO `tbl_enxoval` VALUES (1,'Berço desmontável',0,1,1),(2,'Jogos de lençol para berço desmontável',0,2,1),(3,'Mantas',0,3,1),(4,'Cueiros',0,2,1),(5,'Edredons',0,2,1),(6,'Cobertores de berço',0,2,1),(7,'Cobertores de enrolar',0,2,1),(8,'Colchonete para berço desmontável',0,1,1),(9,'Jogos de lençol para berço',0,4,1),(10,'Protetor de colchão',0,1,1),(11,'Fronhas avulsas',0,3,1),(12,'Travesseiro antirrefluxo',0,1,1),(13,'Travesseiros antissufocante',0,2,1),(14,'Posicionador para dormir',0,1,1),(15,'Kits para berço',0,2,1),(16,'Mosquiteiro',0,1,1),(17,'Kits de fralda de boca',0,2,1),(18,'Blanket (naninha)',0,1,1),(19,'Ninho',0,1,1),(20,'Móbile',0,1,1),(21,'Kits de cabide',0,3,1),(22,'Saída de maternidade',0,1,2),(23,'Macacões tamanho RN',0,6,2),(24,'Macacões tamanho P',0,6,2),(25,'Macacões tamanho M',0,4,2),(26,'Macacões tamanho G',0,4,2),(27,'Bodies manga longa RN',0,6,2),(28,'Bodies manga longa P',0,6,2),(29,'Bodies manga longa M',0,4,2),(30,'Bodies manga longa G',0,4,2),(31,'Culotes (mijão) RN',0,6,2),(32,'Culotes (mijão) P',0,6,2),(33,'Culotes (mijão) M',0,4,2),(34,'Culotes (mijão) G',0,4,2),(35,'Bodies manga curta RN',0,6,2),(36,'Bodies manga curta P',0,6,2),(37,'Bodies manga curta M',0,4,2),(38,'Bodies manga curta G',0,4,2),(39,'Casaquinhos tamanho RN',0,2,2),(40,'Casaquinhos tamanho P',0,4,2),(41,'Casaquinhos tamanho M',0,2,2),(42,'Casaquinhos tamanho G',0,2,2),(43,'Conjuntos body/culote RN',0,6,2),(44,'Conjuntos body/culote P',0,6,2),(45,'Conjuntos body/culote M',0,6,2),(46,'Conjuntos body/culote G',0,6,2),(47,'Kit Bodies RN',0,6,2),(48,'Kit Bodies P',0,6,2),(49,'Kit Bodies M',0,6,2),(50,'Kit Bodies G',0,6,2),(51,'Kit culotes RN',0,6,2),(52,'Kit culotes P',0,6,2),(53,'Kit culotes M',0,6,2),(54,'Kit culotes G',0,6,2),(55,'Pares de meia',0,4,2),(56,'Sapatinhos',0,2,2),(57,'Luvas',0,2,2),(58,'Toucas',0,3,2),(59,'Conjunto Bebê P',0,3,2),(60,'Conjunto Bebê M',0,3,2),(61,'Conjunto Bebê G',0,3,2),(62,'Conjunto Bebê GG',0,3,2),(63,'Pacotes fralda descartável tamanho RN',0,4,3),(64,'Pacotes fralda descartável tamanho P',0,4,3),(65,'Pacotes fralda descartável tamanho M',0,6,3),(66,'Pacotes fralda descartável tamanho G',0,4,3),(67,'Fraldas de tecido',0,3,3),(68,'Pacotes de lenço umedecido',0,6,3),(69,'Pacotes de algodão',0,6,3),(70,'Caixas de hastes flexíveis (cotonetes)',0,3,3),(71,'Cremes para assaduras',0,3,3),(72,'Shampoo',0,1,3),(73,'Condicionador',0,1,3),(74,'Hidratante',0,1,3),(75,'Sabonetes líquido',0,4,3),(76,'Colônia',0,1,3),(77,'Óleos',0,2,3),(78,'Kit escova e pente',0,1,3),(79,'Massageador de gengiva',0,1,3),(80,'Kit manicure',0,1,3),(81,'Garrafa térmica para higiene (avulsa)',0,1,3),(82,'Álcool em Gel',0,1,3),(83,'Cadeira para alimentação',0,1,4),(84,'Mamadeira pequena',0,1,4),(85,'Mamadeiras médias',0,3,4),(86,'Mamadeiras grandes',0,2,4),(87,'Kit Mamadeiras',0,1,4),(88,'Escorredor de mamadeiras',0,1,4),(89,'Escova para mamadeiras',0,1,4),(90,'Esterilizador de mamadeiras',0,1,4),(91,'Aquecedor de mamadeiras',0,3,4),(92,'Bicos de mamadeira até 6 meses',0,3,4),(93,'Bicos de mamadeira a partir 6 meses',0,1,4),(94,'Copo Transição',0,3,4),(95,'Potes para alimentos',0,2,4),(96,'Pratos para papinha',0,1,4),(97,'Jogo de talher',0,1,4),(98,'Porta mamadeira térmico',0,1,4),(99,'Porta leite em pó',0,6,4),(100,'Babadouros',0,1,4),(101,'Alimentador',0,1,4),(102,'Conjunto de coador e funil',0,1,4),(103,'Pinça higiênica',0,1,4),(104,'Mala maternidade',0,1,5),(105,'Envelope/saco maternidade',0,6,5),(106,'Tira-leite',0,1,5),(107,'Caixas de absorvente para seios',0,4,5),(108,'Concha para seios',0,2,5),(109,'Protetores para seios',0,1,5),(110,'Almofada para amamentar',0,3,5),(111,'Potes para congelar leite materno',0,1,5),(112,'Sacos para congelar leite materno',0,1,5),(113,'Bebê conforto (cadeirinha para carro)',0,1,6),(114,'Carrinho',0,1,6),(115,'Sacola para roupinhas',0,1,6),(116,'Sacola pequena (frasqueira)',0,1,6),(117,'Canguru/sling',0,1,6),(118,'Apoio para cabeça',0,3,6),(119,'Jogos de lençol para carrinho',0,1,6),(120,'Colchonete para carrinho',0,1,6),(121,'Travesseiro antirrefluxo para carrinho',0,1,6),(122,'Capa de chuva para carrinho',0,1,6),(123,'Trocador avulso de bolsa',0,1,6),(124,'Protetor solar para carro',0,1,6),(125,'Espelho retrovisor para carro',0,1,6),(126,'Kit de bolsas',0,1,6),(127,'Banheira completa',0,1,7),(128,'Rede para Banheira / almofada para banho',0,1,7),(129,'Toalhas com capuz',0,3,7),(130,'Toalhas fralda',0,1,7),(131,'Trocador',0,1,7),(132,'Termômetro para banho',0,1,7),(133,'Ofurô',0,1,7),(134,'Brinquedos de banho',0,0,7),(135,'Aspirador nasal',0,1,8),(136,'Termômetro clínico',0,1,8),(137,'Babá eletrônica',0,1,8),(138,'Conta gotas',0,2,8),(139,'Chupetas fase 1',0,2,8),(140,'Chupetas fase 2',0,2,8),(141,'Prendedores de chupeta',0,2,8),(142,'Porta chupetas',0,1,8),(143,'Mordedor',0,2,8),(144,'Chocalhos',0,1,8),(145,'Tapete de atividades',0,1,8),(146,'Cadeirinha de descanso',0,1,8),(147,'Lixeira',0,1,8),(148,'Livro diário do bebê',0,1,8),(149,'Bolsa Térmica para Cólica',0,1,8);
/*!40000 ALTER TABLE `tbl_enxoval` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_enxoval_gestante`
--

DROP TABLE IF EXISTS `tbl_enxoval_gestante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_enxoval_gestante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_enxoval` int NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Enxoval_EnxovalGestante` (`id_enxoval`),
  KEY `FK_Gestante_EnxovalGestante` (`id_gestante`),
  CONSTRAINT `FK_Enxoval_EnxovalGestante` FOREIGN KEY (`id_enxoval`) REFERENCES `tbl_enxoval` (`id`),
  CONSTRAINT `FK_Gestante_EnxovalGestante` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_enxoval_gestante`
--

LOCK TABLES `tbl_enxoval_gestante` WRITE;
/*!40000 ALTER TABLE `tbl_enxoval_gestante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_enxoval_gestante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_especialidade`
--

DROP TABLE IF EXISTS `tbl_especialidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_especialidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `descricao` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_especialidade`
--

LOCK TABLES `tbl_especialidade` WRITE;
/*!40000 ALTER TABLE `tbl_especialidade` DISABLE KEYS */;
INSERT INTO `tbl_especialidade` VALUES (1,'Nutricionista','O Nutricionista é o profissional de saúde capacitado para atuar na prevenção, promoção e recuperação da saúde humana, planejando, executando e avaliando ações baseadas nos conhecimentos da ciência da nutrição e alimentação.'),(2,'Obstetra','O profissional lida com aspectos patológicos e fisiológicos. O obstetra realiza consultas, orienta e aconselha a mulher e familiares ao longo do período gestacional, realiza o parto e cuida da mulher e da criança durante o puerpério.'),(3,'Psicólogo','O Psicólogo, dentro de suas especificidades profissionais, atua no âmbito da educação, saúde, lazer, trabalho, segurança, justiça, comunidades e comunicação com o objetivo de promover, em seu trabalho, o respeito à dignidade e integridade do ser humano.'),(4,'Fisioterapeuta','Atender pacientes para prevenção, habilitação e reabilitação, utilizando protocolos e procedimentos específicos de fisioterapia; habilitar pacientes; realizar diagnósticos específicos; analisar condições dos pacientes; desenvolver programas de prevenção, promoção de saúde e qualidade de vida.');
/*!40000 ALTER TABLE `tbl_especialidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exercicio`
--

DROP TABLE IF EXISTS `tbl_exercicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_exercicio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `passo_a_passo` text NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exercicio`
--

LOCK TABLES `tbl_exercicio` WRITE;
/*!40000 ALTER TABLE `tbl_exercicio` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_exercicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_exercicio_categoria`
--

DROP TABLE IF EXISTS `tbl_exercicio_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_exercicio_categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_exercicio` int NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Exercicio_ExercicioCategoria` (`id_exercicio`),
  KEY `FK_Categoria_ExercicioCategoria` (`id_categoria`),
  CONSTRAINT `FK_Categoria_ExercicioCategoria` FOREIGN KEY (`id_categoria`) REFERENCES `tbl_categoria` (`id`),
  CONSTRAINT `FK_Exercicio_ExercicioCategoria` FOREIGN KEY (`id_exercicio`) REFERENCES `tbl_exercicio` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exercicio_categoria`
--

LOCK TABLES `tbl_exercicio_categoria` WRITE;
/*!40000 ALTER TABLE `tbl_exercicio_categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_exercicio_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_gestante`
--

DROP TABLE IF EXISTS `tbl_gestante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_gestante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `senha` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cpf` varchar(18) DEFAULT NULL,
  `peso` double DEFAULT NULL,
  `altura` double DEFAULT NULL,
  `semana_gestacao` int DEFAULT NULL,
  `data_parto` date DEFAULT NULL,
  `foto` text NOT NULL,
  `telefone` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_gestante`
--

LOCK TABLES `tbl_gestante` WRITE;
/*!40000 ALTER TABLE `tbl_gestante` DISABLE KEYS */;
INSERT INTO `tbl_gestante` VALUES (1,'GestanteV1','2001-01-20','$2b$10$wzcmNkEY7ZIPF7kiLKOlBeMMqH35WdMe.JUj9yMBKn8ObayFxFeFG','c@c.com','25352145212',75,1.67,7,'2024-04-05','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9b02ca4-4c18-4faf-a4ec-04355f1bf842/dfev1nr-d8c77087-4d1a-41e9-875e-b12dacc1cfaf.jpg/v1/fit/w_375,h_375,q_70,strp/beauty_by_coconarts_dfev1nr-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2Q5YjAyY2E0LTRjMTgtNGZhZi1hNGVjLTA0MzU1ZjFiZjg0MlwvZGZldjFuci1kOGM3NzA4Ny00ZDFhLTQxZTktODc1ZS1iMTJkYWNjMWNmYWYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.McF59yAvNlxRMblfovqE7QiS22_lomj5ntPOG6KA_x0','1111111111'),(3,'Gestante','2001-01-20','$2b$10$b7iBdOQBVtWINqQ7278Lg.F2djumUmKZC2VEk2mNshFo99bHdAwja','g@g.com','',1.1,0,1,'2024-06-02','null','(11) 95161-2029');
/*!40000 ALTER TABLE `tbl_gestante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_gestante_comorbidade`
--

DROP TABLE IF EXISTS `tbl_gestante_comorbidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_gestante_comorbidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_gestante` int NOT NULL,
  `id_comorbidade` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Comorbidade_GestanteComorbidade` (`id_comorbidade`),
  KEY `FK_Gestante_GestanteComorbidade` (`id_gestante`),
  CONSTRAINT `FK_Comorbidade_GestanteComorbidade` FOREIGN KEY (`id_comorbidade`) REFERENCES `tbl_comorbidade` (`id`),
  CONSTRAINT `FK_Gestante_GestanteComorbidade` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_gestante_comorbidade`
--

LOCK TABLES `tbl_gestante_comorbidade` WRITE;
/*!40000 ALTER TABLE `tbl_gestante_comorbidade` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_gestante_comorbidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_gestante_deficiencia`
--

DROP TABLE IF EXISTS `tbl_gestante_deficiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_gestante_deficiencia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_gestante` int NOT NULL,
  `id_deficiencia` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_GestanteDeficienciaGestante` (`id_gestante`),
  KEY `FK_Deficiencia_GestanteDeficienciaDeficiencia` (`id_deficiencia`),
  CONSTRAINT `FK_Deficiencia_GestanteDeficienciaDeficiencia` FOREIGN KEY (`id_deficiencia`) REFERENCES `tbl_deficiencia` (`id`),
  CONSTRAINT `FK_Gestante_GestanteDeficienciaGestante` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_gestante_deficiencia`
--

LOCK TABLES `tbl_gestante_deficiencia` WRITE;
/*!40000 ALTER TABLE `tbl_gestante_deficiencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_gestante_deficiencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_gestante_telefone`
--

DROP TABLE IF EXISTS `tbl_gestante_telefone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_gestante_telefone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_gestante` int NOT NULL,
  `id_telefone` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_GestanteGestanteTelefone` (`id_gestante`),
  KEY `FK_Telefone_GestanteTelefoneTelefone` (`id_telefone`),
  CONSTRAINT `FK_Gestante_GestanteGestanteTelefone` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`),
  CONSTRAINT `FK_Telefone_GestanteTelefoneTelefone` FOREIGN KEY (`id_telefone`) REFERENCES `tbl_telefone` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_gestante_telefone`
--

LOCK TABLES `tbl_gestante_telefone` WRITE;
/*!40000 ALTER TABLE `tbl_gestante_telefone` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_gestante_telefone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_mala_gestante`
--

DROP TABLE IF EXISTS `tbl_mala_gestante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_mala_gestante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_mala` int NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Mala_MalaGestante` (`id_mala`),
  KEY `FK_Gestante_MalaGestante` (`id_gestante`),
  CONSTRAINT `FK_Gestante_MalaGestante` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`),
  CONSTRAINT `FK_Mala_MalaGestante` FOREIGN KEY (`id_mala`) REFERENCES `tbl_malamaternidade` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_mala_gestante`
--

LOCK TABLES `tbl_mala_gestante` WRITE;
/*!40000 ALTER TABLE `tbl_mala_gestante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_mala_gestante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_malamaternidade`
--

DROP TABLE IF EXISTS `tbl_malamaternidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_malamaternidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item` varchar(150) NOT NULL,
  `checkbox` tinyint(1) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Categoria_MalaCategoria` (`id_categoria`),
  CONSTRAINT `FK_Categoria_MalaCategoria` FOREIGN KEY (`id_categoria`) REFERENCES `tbl_planocategoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_malamaternidade`
--

LOCK TABLES `tbl_malamaternidade` WRITE;
/*!40000 ALTER TABLE `tbl_malamaternidade` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_malamaternidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_nome_gestante`
--

DROP TABLE IF EXISTS `tbl_nome_gestante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_nome_gestante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_nome` int NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Nome_NomeGestante` (`id_nome`),
  KEY `FK_Gestante_NomeGestante` (`id_gestante`),
  CONSTRAINT `FK_Gestante_NomeGestante` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`),
  CONSTRAINT `FK_Nome_NomeGestante` FOREIGN KEY (`id_nome`) REFERENCES `tbl_sugestao_nome` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_nome_gestante`
--

LOCK TABLES `tbl_nome_gestante` WRITE;
/*!40000 ALTER TABLE `tbl_nome_gestante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_nome_gestante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_plano_gestante`
--

DROP TABLE IF EXISTS `tbl_plano_gestante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_plano_gestante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_plano` int NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Plano_PlanoGestante` (`id_plano`),
  KEY `FK_Gestante_PlanoGestante` (`id_gestante`),
  CONSTRAINT `FK_Gestante_PlanoGestante` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`),
  CONSTRAINT `FK_Plano_PlanoGestante` FOREIGN KEY (`id_plano`) REFERENCES `tbl_plano_parto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_plano_gestante`
--

LOCK TABLES `tbl_plano_gestante` WRITE;
/*!40000 ALTER TABLE `tbl_plano_gestante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_plano_gestante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_plano_parto`
--

DROP TABLE IF EXISTS `tbl_plano_parto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_plano_parto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item` varchar(150) NOT NULL,
  `descricao` varchar(300) NOT NULL,
  `checkbox` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_plano_parto`
--

LOCK TABLES `tbl_plano_parto` WRITE;
/*!40000 ALTER TABLE `tbl_plano_parto` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_plano_parto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_planocategoria`
--

DROP TABLE IF EXISTS `tbl_planocategoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_planocategoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_planocategoria`
--

LOCK TABLES `tbl_planocategoria` WRITE;
/*!40000 ALTER TABLE `tbl_planocategoria` DISABLE KEYS */;
INSERT INTO `tbl_planocategoria` VALUES (1,'quarto'),(2,'roupinhas'),(3,'higiene'),(4,'alimentação'),(5,'PARA MAMÃE'),(6,'PASSEIO'),(7,'BANHO E TOALETE'),(8,'DIVERSOS');
/*!40000 ALTER TABLE `tbl_planocategoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_profissional`
--

DROP TABLE IF EXISTS `tbl_profissional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_profissional` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cpf` varchar(18) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  `senha` varchar(100) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `descricao` text NOT NULL,
  `inicio_atendimento` time NOT NULL,
  `fim_atendimento` time NOT NULL,
  `email` varchar(255) NOT NULL,
  `crm` varchar(30) NOT NULL,
  `id_sexo` int NOT NULL,
  `id_clinica` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Sexo_ProfissionalSexo` (`id_sexo`),
  KEY `FK_Clinica_ProfissionalClinica` (`id_clinica`),
  CONSTRAINT `FK_Clinica_ProfissionalClinica` FOREIGN KEY (`id_clinica`) REFERENCES `tbl_clinica` (`id`),
  CONSTRAINT `FK_Sexo_ProfissionalSexo` FOREIGN KEY (`id_sexo`) REFERENCES `tbl_sexo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_profissional`
--

LOCK TABLES `tbl_profissional` WRITE;
/*!40000 ALTER TABLE `tbl_profissional` DISABLE KEYS */;
INSERT INTO `tbl_profissional` VALUES (7,'cpf','nome','2020-01-01','senha','foto','descricao','10:00:00','10:00:00','email','crm',2,4),(10,'${body.cpf}','${body.nome}','2020-01-01','${body.senha}','${body.foto}','${body.descricao}','10:00:00','10:00:00','${body.email}','${body.crm}',2,4),(11,'${body.cpf}','${body.nome}','2020-01-01','${body.senha}','${body.foto}','${body.descricao}','10:00:00','10:00:00','${body.email}','${body.crm}',2,4),(12,'${body.cpf}','${body.nome}','2020-01-01','${body.senha}','${body.foto}','${body.descricao}','10:00:00','10:00:00','${body.email}','${body.crm}',2,4),(14,'25523997898','Manuela Viscontti','2001-01-20','umagarotasoueu','Uma foto linda','Não sei pra que serve essa descrição','10:00:00','18:00:00','manubb@yahoo.com','07354-23',2,14),(15,'2552399788','Manuelo','2001-01-20','$2b$10$8gFq4H34vqQPQbg/32yY5.vD.hLQIcczQOJ2J2b4bXpNDT.npbE/K','Uma foto linda','Não sei pra que serve essa descrição','10:00:00','18:00:00','masubb@yaoo.com','07354-23',2,4);
/*!40000 ALTER TABLE `tbl_profissional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_profissional_especialidade`
--

DROP TABLE IF EXISTS `tbl_profissional_especialidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_profissional_especialidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_profissional` int NOT NULL,
  `id_especialidade` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Profissional_ProfissionalEspecialidade` (`id_profissional`),
  KEY `FK_Especialidade_ProfissionalEspecialidade` (`id_especialidade`),
  CONSTRAINT `FK_Especialidade_ProfissionalEspecialidade` FOREIGN KEY (`id_especialidade`) REFERENCES `tbl_especialidade` (`id`),
  CONSTRAINT `FK_Profissional_ProfissionalEspecialidade` FOREIGN KEY (`id_profissional`) REFERENCES `tbl_profissional` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_profissional_especialidade`
--

LOCK TABLES `tbl_profissional_especialidade` WRITE;
/*!40000 ALTER TABLE `tbl_profissional_especialidade` DISABLE KEYS */;
INSERT INTO `tbl_profissional_especialidade` VALUES (9,14,2),(10,15,2);
/*!40000 ALTER TABLE `tbl_profissional_especialidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_prontuario`
--

DROP TABLE IF EXISTS `tbl_prontuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_prontuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` text NOT NULL,
  `id_consulta` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Consulta_ProntuarioConsulta` (`id_consulta`),
  CONSTRAINT `FK_Consulta_ProntuarioConsulta` FOREIGN KEY (`id_consulta`) REFERENCES `tbl_consulta` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_prontuario`
--

LOCK TABLES `tbl_prontuario` WRITE;
/*!40000 ALTER TABLE `tbl_prontuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_prontuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_refeicao`
--

DROP TABLE IF EXISTS `tbl_refeicao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_refeicao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `horario` time NOT NULL,
  `nome` varchar(25) NOT NULL,
  `desccricao` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_refeicao`
--

LOCK TABLES `tbl_refeicao` WRITE;
/*!40000 ALTER TABLE `tbl_refeicao` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_refeicao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_refeicao_alimento`
--

DROP TABLE IF EXISTS `tbl_refeicao_alimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_refeicao_alimento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_alimento` int NOT NULL,
  `id_refeicao` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Alimento_AlimentoRefeicaoAlimento` (`id_alimento`),
  KEY `FK_Refeicao_RefeicaoRefeicaoAlimento` (`id_refeicao`),
  CONSTRAINT `FK_Alimento_AlimentoRefeicaoAlimento` FOREIGN KEY (`id_alimento`) REFERENCES `tbl_alimentos` (`id`),
  CONSTRAINT `FK_Refeicao_RefeicaoRefeicaoAlimento` FOREIGN KEY (`id_refeicao`) REFERENCES `tbl_refeicao` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_refeicao_alimento`
--

LOCK TABLES `tbl_refeicao_alimento` WRITE;
/*!40000 ALTER TABLE `tbl_refeicao_alimento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_refeicao_alimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_sexo`
--

DROP TABLE IF EXISTS `tbl_sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_sexo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sigla` varchar(5) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_sexo`
--

LOCK TABLES `tbl_sexo` WRITE;
/*!40000 ALTER TABLE `tbl_sexo` DISABLE KEYS */;
INSERT INTO `tbl_sexo` VALUES (1,'M','Masculino'),(2,'F','Feminino');
/*!40000 ALTER TABLE `tbl_sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_sugestao_nome`
--

DROP TABLE IF EXISTS `tbl_sugestao_nome`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_sugestao_nome` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `checkbox` tinyint(1) NOT NULL,
  `id_sexo` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Sexo_SugestaoNomeSexo` (`id_sexo`),
  CONSTRAINT `FK_Sexo_SugestaoNomeSexo` FOREIGN KEY (`id_sexo`) REFERENCES `tbl_sexo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_sugestao_nome`
--

LOCK TABLES `tbl_sugestao_nome` WRITE;
/*!40000 ALTER TABLE `tbl_sugestao_nome` DISABLE KEYS */;
INSERT INTO `tbl_sugestao_nome` VALUES (1,'Enzo',0,1),(2,'Miguel',0,1),(3,'Pedro',0,1),(4,'Lucas',0,1),(5,'Mateus',0,1),(6,'Gabriel',0,1),(7,'Rafael',0,1),(8,'João',0,1),(9,'Matheus',0,1),(10,'Guilherme',0,1),(11,'Sophia',0,2),(12,'Alice',0,2),(13,'Maria',0,2),(14,'Valentina',0,2),(15,'Laura',0,2),(16,'Isabella',0,2),(17,'Gabriela',0,2),(18,'Helena',0,2),(19,'Clara',0,2),(20,'Ana Luiza',0,2),(21,'Arthur',0,1),(22,'Davi',0,1),(23,'Pedro Henrique',0,1),(24,'Daniel',0,1),(25,'Luan',0,1),(26,'Thiago',0,1),(27,'Vitor',0,1),(28,'Lucas Gabriel',0,1),(29,'Eduardo',0,1),(30,'Vinícius',0,1),(31,'Manuela',0,2),(32,'Lara',0,2),(33,'Lívia',0,2),(34,'Sophie',0,2),(35,'Isadora',0,2),(36,'Melissa',0,2),(37,'Eloá',0,2),(38,'Clara Sofia',0,2),(39,'Carolina',0,2),(40,'Julia',0,2),(41,'Leonardo',0,1),(42,'Antônio',0,1),(43,'Samuel',0,1),(44,'Miguel Henrique',0,1),(45,'João Pedro',0,1),(46,'Bruno',0,1),(47,'Felipe',0,1),(48,'Raul',0,1),(49,'Enrico',0,1),(50,'Benício',0,1),(51,'Valentina Sofia',0,2),(52,'Beatriz',0,2),(53,'Isabel',0,2),(54,'Marina',0,2),(55,'Laura Sofia',0,2),(56,'Isis',0,2),(57,'Luna',0,2),(58,'Mirella',0,2),(59,'Rafaela',0,2),(60,'Nina',0,2);
/*!40000 ALTER TABLE `tbl_sugestao_nome` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_telefone`
--

DROP TABLE IF EXISTS `tbl_telefone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_telefone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(20) NOT NULL,
  `id_tipo_telefone` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_TipoTelefone_TelefoneTipoTelefone` (`id_tipo_telefone`),
  CONSTRAINT `FK_TipoTelefone_TelefoneTipoTelefone` FOREIGN KEY (`id_tipo_telefone`) REFERENCES `tbl_tipo_telefone` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_telefone`
--

LOCK TABLES `tbl_telefone` WRITE;
/*!40000 ALTER TABLE `tbl_telefone` DISABLE KEYS */;
INSERT INTO `tbl_telefone` VALUES (4,'41',1),(5,'41',1),(6,'41',1),(7,'41',1),(8,'41',1),(9,'41',1),(10,'41',1),(11,'41',1),(12,'41',1),(13,'41',1),(14,'41',1),(23,'${body.telefone}',1),(24,'${body.telefone}',1),(26,'11957872029',2),(27,'2257872029',2);
/*!40000 ALTER TABLE `tbl_telefone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_telefone_profissional`
--

DROP TABLE IF EXISTS `tbl_telefone_profissional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_telefone_profissional` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_profissional` int NOT NULL,
  `id_telefone` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Profissional_TelefoneProfissionalProfissional` (`id_profissional`),
  KEY `FK_Telefone_TelefoneProfissionalTelefone` (`id_telefone`),
  CONSTRAINT `FK_Profissional_TelefoneProfissionalProfissional` FOREIGN KEY (`id_profissional`) REFERENCES `tbl_profissional` (`id`),
  CONSTRAINT `FK_Telefone_TelefoneProfissionalTelefone` FOREIGN KEY (`id_telefone`) REFERENCES `tbl_telefone` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_telefone_profissional`
--

LOCK TABLES `tbl_telefone_profissional` WRITE;
/*!40000 ALTER TABLE `tbl_telefone_profissional` DISABLE KEYS */;
INSERT INTO `tbl_telefone_profissional` VALUES (9,12,24),(11,14,26),(12,15,27);
/*!40000 ALTER TABLE `tbl_telefone_profissional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_tipo_telefone`
--

DROP TABLE IF EXISTS `tbl_tipo_telefone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_tipo_telefone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(15) NOT NULL,
  `sigla` varchar(5) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_tipo_telefone`
--

LOCK TABLES `tbl_tipo_telefone` WRITE;
/*!40000 ALTER TABLE `tbl_tipo_telefone` DISABLE KEYS */;
INSERT INTO `tbl_tipo_telefone` VALUES (1,'celular','cel'),(2,'residencial','res');
/*!40000 ALTER TABLE `tbl_tipo_telefone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_bebevindo'
--

--
-- Dumping routines for database 'db_bebevindo'
--
/*!50003 DROP FUNCTION IF EXISTS `funcLastIdClinica` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `funcLastIdClinica`() RETURNS int
    READS SQL DATA
BEGIN
    DECLARE last_id INT;
    SELECT MAX(id) INTO last_id FROM tbl_clinica;
    RETURN last_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `funcLastIdGestante` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `funcLastIdGestante`() RETURNS int
    READS SQL DATA
BEGIN
    DECLARE last_id INT;
    SELECT MAX(id) INTO last_id FROM tbl_gestante;
    RETURN last_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `funcLastIdTelefone` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `funcLastIdTelefone`() RETURNS int
    READS SQL DATA
BEGIN
    DECLARE last_id INT;
    SELECT MAX(id) INTO last_id FROM tbl_telefone;
    RETURN last_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `LastIdProfissional` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `LastIdProfissional`() RETURNS int
    READS SQL DATA
BEGIN
    DECLARE last_id INT;
    SELECT MAX(id) INTO last_id FROM tbl_profissional;
    RETURN last_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procDeleteClinica` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procDeleteClinica`(in idClinica int)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;


delete from tbl_clinica_telefone where id_clinica = idClinica;

delete from tbl_telefone
where tbl_telefone.id not in (
select tbl_clinica_telefone.id_telefone from tbl_clinica_telefone
union select 
tbl_telefone_profissional.id_telefone from tbl_telefone_profissional
);

delete from tbl_enderecoClinica where id_clinica = idClinica;

delete from tbl_clinica where id = idClinica;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Clinica deletada com sucesso' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na operação' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procDeleteGestante` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procDeleteGestante`(in idGestante int)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;

delete from tbl_telefone
where tbl_telefone.id not in (
select tbl_clinica_telefone.id_telefone from tbl_clinica_telefone
union select 
tbl_telefone_profissional.id_telefone from tbl_telefone_profissional
);

delete from tbl_endereco_gestante where id_gestante = idGestante;

delete from tbl_gestante where id = idGestante;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Gestante deletada com sucesso' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na transação' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procDeleteProfissional` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procDeleteProfissional`(in idProfissional int)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;

delete from tbl_telefone_profissional where id_profissional = idProfissional;

delete from tbl_telefone
where tbl_telefone.id not in (
select 	tbl_clinica_telefone.id_telefone from tbl_clinica_telefone
union select 
tbl_telefone_profissional.id_telefone from tbl_telefone_profissional
);

delete from tbl_endereco_profissional where id_profissional = idProfissional;

delete from tbl_profissional where id = idProfissional;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Medic deleted successfully.' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na transação' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procInsertClinica` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procInsertClinica`(
in senha varchar(100),
email varchar(200),
cnpj varchar(20),
foto varchar(255),
razao_social varchar(100),
descricao text,
telefone varchar(20),
id_tipo_telefone int,
numero varchar(10),
complemento varchar(50),
cep varchar(10))
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;
	insert into tbl_clinica(razao_social, cnpj, email, senha,  foto, descricao)values(
    razao_social, cnpj, email, senha, foto, descricao);

	INSERT INTO tbl_telefone (numero,id_tipo_telefone) VALUES (numero,id_tipo_telefone);

	INSERT INTO tbl_clinica_telefone (id_clinica, id_telefone) VALUES (funcLastIdClinica(), funcLastIdTelefone());
    
    insert into tbl_enderecoClinica(numero,complemento,cep, id_clinica)values(
	numero, complemento, cep, funcLastIdClinica());

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT "Clinica criada com sucesso", funcLastIdClinica()  AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na operação' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procInsertGestante` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procInsertGestante`(in nome varchar(150),
data_nascimento date,
senha varchar(100),
email varchar(255),
cpf varchar(18),
peso double,
altura double,
semana_gestacao int,
data_parto date,
foto varchar(255),
telefone varchar(20))
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;
 INSERT INTO tbl_gestante (nome, data_nascimento, senha, email, cpf, peso, altura, semana_gestacao, data_parto, foto,telefone) VALUES (nome, data_nascimento, senha, email, cpf, peso, altura, semana_gestacao, data_parto, foto, telefone);

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Gestante cadastrada com sucesso.' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na operação.' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procInsertProfissional` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procInsertProfissional`(
in senha varchar(100),
email varchar(200),
cpf varchar(18),
foto varchar(255),
nome varchar(100),
descricao text,
data_nascimento date,
inicio_atendimento time,
fim_atendimento time,
crm varchar(30),
id_sexo int,
id_clinica int,
telefone varchar(20),
id_tipo_telefone int,
numero varchar(10),
complemento varchar(50),
cep varchar(10),
id_especialidade int)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;
	insert into tbl_profissional(nome, cpf, crm, data_nascimento, email, senha,  foto, descricao,inicio_atendimento, fim_atendimento, id_sexo, id_clinica )values(
    nome, cpf, crm, data_nascimento, email, senha, foto, descricao, inicio_atendimento, fim_atendimento, id_sexo, id_clinica);

	INSERT INTO tbl_telefone (numero,id_tipo_telefone) VALUES (telefone,id_tipo_telefone);

	INSERT INTO tbl_telefone_profissional (id_profissional, id_telefone) VALUES (LastIdProfissional(),funcLastIdTelefone());
    
    insert into tbl_endereco_profissional(numero,complemento,cep, id_profissional)values(
numero,complemento, cep,LastIdProfissional());

	insert into tbl_profissional_especialidade(id_profissional, id_especialidade)values(LastIdProfissional(),id_especialidade);
  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Profissional cadastrado com sucesso.', LastIdProfissional() AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na transação' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procUpdateClinica` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procUpdateClinica`(
in id int,
cnpj varchar(18),
razao_social varchar(100),
senha varchar(100),
email varchar(255),
descricao text,
foto varchar(255),
telefone varchar(20),
id_tipo_telefone int,
id_telefone int,
id_endereco int,
numero varchar(10),
complemento varchar(50),
cep varchar(10))
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;
 update tbl_clinica set
 tbl_clinica.cnpj = cnpj,
 tbl_clinica.senha = senha,
 tbl_clinica.foto = foto,
 tbl_clinica.razao_social =  razao_social,
 tbl_clinica.email = email,
 tbl_clinica.descricao = descricao
 where tbl_clinica.id = id;
 
update tbl_telefone set 
    tbl_telefone.numero = telefone,
    tbl_telefone.id_tipo_telefone = id_tipo_telefone where tbl_telefone.id = id_telefone ;
    
update tbl_enderecoClinica set
tbl_enderecoClinica.numero = numero,
tbl_enderecoClinica.complemento = complemento,
tbl_enderecoClinica.cep = cep
where tbl_enderecoClinica.id_clinica = id;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Clinica editada com sucesso' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na operação' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procUpdateGestante` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procUpdateGestante`(
in id int,
nome varchar(150),
data_nascimento date,
email varchar(255),
cpf varchar(18),
peso double,
altura double,
semana_gestacao int,
data_parto date,
foto text,
telefone varchar(20),
cep varchar(10),
numero varchar(10),
complemento varchar(50))
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;
 update tbl_gestante set 
  tbl_gestante.nome = nome,
    tbl_gestante.email = email ,
    tbl_gestante.cpf = cpf,
    tbl_gestante.peso = peso,
    tbl_gestante.altura = altura,
    tbl_gestante.semana_gestacao = semana_gestacao,
    tbl_gestante.data_parto = data_parto,
    tbl_gestante.foto = foto,
    tbl_gestante.telefone = telefone where tbl_gestante.id= id ;

update tbl_endereco_gestante set 
	tbl_endereco_gestante.numero = numero,
    tbl_endereco_gestante.complemento = complemento,
    tbl_endereco_gestante.cep = cep
    where id_gestante = id;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Gestante Atualizada com Sucesso' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na operação' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procUpdateGestanteEndereco` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procUpdateGestanteEndereco`(
in id int,
nome varchar(150),
data_nascimento date,
senha varchar(50),
email varchar(255),
cpf varchar(18),
peso double,
altura double,
semana_gestacao int,
data_parto date,
foto varchar(255),
telefone varchar(20),
numero varchar(10),
complemento varchar(50),
cep varchar(10))
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;
 update tbl_gestante set 
  tbl_gestante.senha = senha,
    tbl_gestante.email = email ,
    tbl_gestante.cpf = cpf,
    tbl_gestante.peso = peso,
    tbl_gestante.altura = altura,
    tbl_gestante.semana_gestacao = semana_gestacao,
    tbl_gestante.data_parto = data_parto,
    tbl_gestante.foto = foto,
    tbl_gestante.telefone = telefone where tbl_gestante.id= id ;
    
insert into tbl_endereco_gestante(numero,complemento,cep,id_gestante)values(
numero,complemento, cep, id
);
  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Endereço modificado com sucesso' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na operação' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procUpdateProfissional` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procUpdateProfissional`(
in id int,
senha varchar(50),
email varchar(200),
cpf varchar(18),
foto varchar(255),
nome varchar(100),
descricao text,
data_nascimento date,
inicio_atendimento time,
fim_atendimento time,
crm varchar(30),
id_sexo int,
id_clinica int,
telefone varchar(20),
id_tipo_telefone int,
id_telefone int,
id_endereco int,
numero varchar(10),
complemento varchar(50),
cep varchar(10))
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;
 update tbl_profissional set
 tbl_profissional.cpf = cpf,
 tbl_profissional.senha = senha,
 tbl_profissional.foto = foto,
 tbl_profissional.nome =  nome,
 tbl_profissional.email = email,
 tbl_profissional.descricao = descricao,
 tbl_profissional.data_nascimento = data_nascimento,
 tbl_profissional.inicio_atendimento = inicio_atendimento,
 tbl_profissional.fim_atendimento = fim_atendimento,
 tbl_profissional.crm = crm,
 tbl_profissional.id_sexo = id_sexo,
 tbl_profissional.id_clinica = id_clinica
 where tbl_profissional.id = id;
 
update tbl_telefone set 
    tbl_telefone.numero = telefone,
    tbl_telefone.id_tipo_telefone = id_tipo_telefone where tbl_telefone.id = id_telefone ;
    
update tbl_endereco_profissional set
tbl_endereco_profissional.numero = numero,
tbl_endereco_profissional.complemento = complemento,
tbl_endereco_profissional.cep = cep
where tbl_endereco_profissional.id_profissional = id;
	
  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Profissional editada com sucesso' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na operação' AS Resultado;
  END IF;
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

-- Dump completed on 2023-09-07 22:41:26
