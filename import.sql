CREATE DATABASE  IF NOT EXISTS `db_bebevindo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_bebevindo`;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_agenda`
--

LOCK TABLES `tbl_agenda` WRITE;
/*!40000 ALTER TABLE `tbl_agenda` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_alergia`
--

DROP TABLE IF EXISTS `tbl_alergia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_alergia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `alergia` text NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_GestanteAlergia` (`id_gestante`),
  CONSTRAINT `FK_Gestante_GestanteAlergia` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_alergia`
--

LOCK TABLES `tbl_alergia` WRITE;
/*!40000 ALTER TABLE `tbl_alergia` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_alergia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_alimento`
--

DROP TABLE IF EXISTS `tbl_alimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_alimento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Categoria_AlimentoCategoria` (`id_categoria`),
  CONSTRAINT `FK_Categoria_AlimentoCategoria` FOREIGN KEY (`id_categoria`) REFERENCES `tbl_categoriaalimento` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=174 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_alimento`
--

LOCK TABLES `tbl_alimento` WRITE;
/*!40000 ALTER TABLE `tbl_alimento` DISABLE KEYS */;
INSERT INTO `tbl_alimento` VALUES (1,'aveia','https://abre.ai/g3YB',1),(2,'Cereal matinal sem açúcar','https://abre.ai/g3Zl',1),(3,'Granola sem açúcar','https://abre.ai/g3Zu',1),(4,'Barra de cereais','https://abre.ai/g3YR',1),(5,'Biscoito Cream Cracker','https://abre.ai/g3Y0',1),(6,'Biscoito Água e Sal','https://abre.ai/g3YY',1),(7,'Biscoito Maisena/ Maria','https://abre.ai/g3Y2',1),(8,'Broa de milho','https://abre.ai/g3Y6',1),(9,'Bolo simples','https://abre.ai/g3Y5',1),(10,'Bisnaguinha pequena','https://abre.ai/g3Y4',1),(11,'Pão caseiro sem gordura','https://abre.ai/g3ZW',1),(12,'Pão Italiano redondo','https://abre.ai/g3Z2',1),(13,'Pão Francês/Integral sem miolo','https://abre.ai/g3ZY',1),(14,'Pão Sírio','https://abre.ai/g3Z3',1),(15,'Pão de forma/ Integral / Light','https://abre.ai/g3Z5',1),(16,'Torrada Integral','https://abre.ai/g3Z6',1),(17,'Torrada de pão francês','https://abre.ai/g3Z7',1),(18,'Arroz branco ou integral','https://abre.ai/g3YO',1),(19,'Angu','https://abre.ai/g3YM',1),(20,'Acelga','https://encurtador.com.br/disP1',2),(21,'Catalonha','https://abre.ai/g3Zg',2),(22,'Mostarda','https://abre.ai/g3ZQ',2),(23,'Agrião','https://encurtador.com.br/ksGIT',2),(24,'Couve-manteiga','https://abre.ai/g3Zq',2),(25,'Repolho','https://abre.ai/g3ZR',2),(26,'Alface','https://abre.ai/g3YJ',2),(27,'Escarola','https://abre.ai/g3Zs',2),(28,'Rúcula','https://abre.ai/g3ZU',2),(29,'Almeirão','https://abre.ai/g3YK',2),(30,'Espinafre','https://abre.ai/g3Zt',2),(31,'Salsão','https://abre.ai/g3ZV',2),(32,'Abóbora','https://encurtador.com.br/mnuLS',2),(33,'Broto de alfafa','https://abre.ai/g3Zb',2),(34,'Pepino','https://abre.ai/g3ZN',2),(35,'Abobrinha','https://encurtador.com.br/tGY05',2),(36,'Broto de Feijão','https://abre.ai/g3Zf',2),(37,'Pimentão','https://abre.ai/g3ZM',2),(38,'Aipo','https://abre.ai/g3YF',2),(39,'Chuchu','https://abre.ai/g3Zk',2),(40,'Quiabo','https://abre.ai/g3ZL',2),(41,'Alcalchofra','https://abre.ai/g3YH',2),(42,'Cenoura','https://abre.ai/g3Zj',2),(43,'Rabanete','https://abre.ai/g3ZJ',2),(44,'Aspargo','https://abre.ai/g3YP',2),(45,'Couve-flor','https://abre.ai/g3Zo',2),(46,'Tomate caqui','https://abre.ai/g3ZA',2),(47,'Berinjela','https://abre.ai/g3YV',2),(48,'Jiló','https://abre.ai/g3Zv',2),(49,'Tomate cereja','https://abre.ai/g3Zz',2),(50,'Beterraba','https://abre.ai/g3YW',2),(51,'Maxixe','https://abre.ai/g3Zx',2),(52,'Tomate comum','https://abre.ai/g3ZC',2),(53,'Brócolis','https://abre.ai/g3Za',2),(54,'Palmito em conserva','https://abre.ai/g3ZD',2),(55,'Vagem','https://abre.ai/g3ZF',2),(56,'Maçã','https://abre.ai/g3WK',3),(57,'Mamão formosa','https://abre.ai/g3WL',3),(58,'Mamão papaia','https://abre.ai/g3WN',3),(59,'Manga','https://abre.ai/g3WP',3),(60,'Maracujá','https://abre.ai/g3WQ',3),(61,'Melancia','https://abre.ai/g3WS',3),(62,'Melão','https://abre.ai/g3WT',3),(63,'Mexerica','https://abre.ai/g3WU',3),(64,'Morango','https://abre.ai/g3WW',3),(65,'Nectarina','https://abre.ai/g3WY',3),(66,'Pêra','https://abre.ai/g3WA',3),(67,'Pêssego','https://abre.ai/g3WD',3),(68,'Uva passa','https://abre.ai/g3WG',3),(69,'Uva Itália','https://abre.ai/g3WJ',3),(70,'Salada de fruta','',3),(71,'Açaí','https://abre.ai/g3V1',3),(72,'Abacaxi','https://abre.ai/g3VZ',3),(73,'Abacate','https://abre.ai/g3VW',3),(74,'Acerola','https://abre.ai/g3V4',3),(75,'Ameixa seca','https://abre.ai/g3V5',3),(76,'Ameixa vermelha','https://abre.ai/g3V7',3),(77,'Banana','https://abre.ai/g3V9',3),(78,'Caju','https://abre.ai/g3Wa',3),(79,'Caqui','https://abre.ai/g3Wd',3),(80,'Carambola','https://abre.ai/g3Wf',3),(81,'Cereja','https://abre.ai/g3Wg',3),(82,'Damasco seco','https://abre.ai/g3Wk',3),(83,'Figo','https://abre.ai/g3Wl',3),(84,'Goiaba','https://abre.ai/g3Wm',3),(85,'Jabuticaba','https://abre.ai/g3Wn',3),(86,'Jaca','https://abre.ai/g3Wo',3),(87,'Kiwi','https://abre.ai/g3Wt',3),(88,'Laranja','https://abre.ai/g3Wv',3),(89,'Limão','https://abre.ai/g3Wy',3),(90,'Coalhada fresca','https://abre.ai/g3W2',4),(91,'Leite desnatado','https://abre.ai/g3W7',4),(92,'Leite em pó desnatado','https://abre.ai/g3Xb',4),(93,'Iogurte desnatado / light','https://abre.ai/g3W4',4),(94,'Queijo cottage','https://abre.ai/g3Xd',4),(95,'Queijo pasteurizado','https://abre.ai/g3Xf',4),(96,'Queijo fresco','https://abre.ai/g3Xe',4),(97,'Queijo ricota','https://abre.ai/g3Xg',4),(98,'Leite de soja','https://abre.ai/g3W9',4),(99,'Leite de coco','https://abre.ai/g3W5',4),(100,'Leite de gergelim','https://abre.ai/g3W6',4),(101,'Almôndega assadas caseira','https://abre.ai/g3Yy',5),(102,'Atum light','https://abre.ai/g3Yx',5),(103,'Bife grelhado','https://abre.ai/g3Yu',5),(104,'Bife de fígado grelhado','https://abre.ai/g3Yw',5),(105,'Carne assada','https://abre.ai/g3Ys',5),(106,'Carne cozida','https://abre.ai/g3Yp',5),(107,'Carne moída','https://abre.ai/g3Yn',5),(108,'Camarão','https://abre.ai/g3Yt',5),(109,'Coxa assada','https://abre.ai/g3Ym',5),(110,'Espetinho de carne','https://abre.ai/g3Yl',5),(111,'Hamburguer caseiro','https://abre.ai/g3Yj',5),(112,'Filé de frango grelhado','https://abre.ai/g3Yk',5),(113,'Peito de frango cozido','https://abre.ai/g3Ye',5),(114,'Sobrecoxa assada sem pele','https://abre.ai/g3X8',5),(115,'Lombo de porco assado','https://abre.ai/g3Yg',5),(116,'Ovo pochê, cozido, omelete','https://abre.ai/g3X9',5),(117,'Peixe grelhado/cozido/assado','sem foto',5),(118,'Sardinha fresca','https://abre.ai/g3Yd',5),(119,'Sardinha em lata','https://abre.ai/g3Ya',5),(120,'Hambúrguer de soja assado','https://abre.ai/g3Yh',5),(121,'Almôndegas de soja assadas','https://abre.ai/g3Yz',5),(122,'Lentilha','https://abre.ai/g3Xm',6),(123,'Grão-de-bico','https://abre.ai/g3Xl',6),(124,'Ervilha fresca','https://abre.ai/g3Xk',6),(125,'Ervilha torta cozida','sem foto',6),(126,'Ervilha em conserva','https://abre.ai/g3Xj',6),(127,'Soja cozida','https://abre.ai/g3Xp',6),(128,'Proteína texturizada de soja','https://abre.ai/g3Xn',6),(129,'Maionese','https://abre.ai/g3Xt',7),(130,'Manteiga','https://abre.ai/g3Xu',7),(131,'Óleo vegetal','https://abre.ai/g3Xv',7),(132,'Azeite de oliva','https://abre.ai/g3Xq',7),(133,'Requeijão','https://abre.ai/g3Xx',7),(134,'Cream Cheese','https://abre.ai/g3Xr',7),(135,'Geléia de frutas (diet)','https://abre.ai/g3Xs',7),(136,'Pasta de amendoím','https://abre.ai/g3Xy',7),(137,'Amêndoas','https://abre.ai/g3XB',8),(138,'Castanha do Pará','https://abre.ai/g3XF',8),(139,'Castanha de caju','https://abre.ai/g3XE',8),(140,'Avelã','https://abre.ai/g3XD',8),(141,'Amendoim cru s/ sal','https://abre.ai/g3XC',8),(142,'Nozes','https://abre.ai/g3XH',8),(143,'Macadâmia','https://abre.ai/g3XG',8),(144,'Semente de Jaca','https://abre.ai/g3XI',8),(145,'Linhaça dourada/marrom','https://abre.ai/g3XP',9),(146,'Farelo de Aveia','https://abre.ai/g3XM',9),(147,'Amaranto','https://abre.ai/g3XJ',9),(148,'Chia','https://abre.ai/g3XL',9),(149,'Quinoa','https://abre.ai/g3XQ',9),(150,'Gergelim','https://abre.ai/g3XN',9),(151,'Semente de Girassol','https://abre.ai/g3XT',9),(152,'Semente de cânhamo','https://abre.ai/g3XS',9),(153,'Semente de abóbora','https://abre.ai/g3XR',9),(154,'Orégano Curry','https://abre.ai/g3X6',10),(155,'Alecrim Cominho','https://abre.ai/g3XW',10),(156,'Tomilho Erva doce','sem foto',10),(157,'Açafrão Louro','https://abre.ai/g3XU',10),(158,'Salsão Hortelã','sem foto',10),(159,'Coentro Manjericão','https://abre.ai/g3X1',10),(160,'Cravo Noz moscada','https://abre.ai/g3X3',10),(161,'Cebolinha Páprica','https://abre.ai/g3X0',10),(162,'Cardamomo Salsa','https://abre.ai/g3XZ',10),(163,'Canela Sálvia','https://abre.ai/g3XY',10),(164,'Frutas em calda','https://abre.ai/g30q',11),(165,'Bananada','https://abre.ai/g30g',11),(166,'Docinhos de festa','https://abre.ai/g30k',11),(167,'Chocolate 70% cacau','https://abre.ai/g30h',11),(168,'Frozen (sorvete de iogurte)','https://abre.ai/g30o',11),(169,'Gelatina','https://abre.ai/g30r',11),(170,'Goiabada','https://abre.ai/g30s',11),(171,'Mel','https://abre.ai/g30t',11),(172,'Picolé de frutas','https://abre.ai/g30u',11),(173,'Achocolatado','https://abre.ai/g30e',11);
/*!40000 ALTER TABLE `tbl_alimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_alimento_refeicao`
--

DROP TABLE IF EXISTS `tbl_alimento_refeicao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_alimento_refeicao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_alimento` int NOT NULL,
  `id_refeicao` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Alimento_AlimentoRefeicaoAlimento` (`id_alimento`),
  KEY `FK_Refeicao_RefeicaoRefeicaoAlimento` (`id_refeicao`),
  CONSTRAINT `FK_Alimento_AlimentoRefeicaoAlimento` FOREIGN KEY (`id_alimento`) REFERENCES `tbl_alimento` (`id`),
  CONSTRAINT `FK_Refeicao_RefeicaoRefeicaoAlimento` FOREIGN KEY (`id_refeicao`) REFERENCES `tbl_refeicao` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_alimento_refeicao`
--

LOCK TABLES `tbl_alimento_refeicao` WRITE;
/*!40000 ALTER TABLE `tbl_alimento_refeicao` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_alimento_refeicao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_alimento_refeicaopadrao`
--

DROP TABLE IF EXISTS `tbl_alimento_refeicaopadrao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_alimento_refeicaopadrao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_alimento` int NOT NULL,
  `id_refeicao` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Alimento_AlimentoRefeicaoPadraoAlimento` (`id_alimento`),
  KEY `FK_RefeicaoPadrao_RefeicaoRefeicaoAlimento` (`id_refeicao`),
  CONSTRAINT `FK_Alimento_AlimentoRefeicaoPadraoAlimento` FOREIGN KEY (`id_alimento`) REFERENCES `tbl_alimento` (`id`),
  CONSTRAINT `FK_RefeicaoPadrao_RefeicaoRefeicaoAlimento` FOREIGN KEY (`id_refeicao`) REFERENCES `tbl_refeicaopadrao` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_alimento_refeicaopadrao`
--

LOCK TABLES `tbl_alimento_refeicaopadrao` WRITE;
/*!40000 ALTER TABLE `tbl_alimento_refeicaopadrao` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_alimento_refeicaopadrao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_artigo`
--

DROP TABLE IF EXISTS `tbl_artigo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_artigo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` text NOT NULL,
  `descricao` text NOT NULL,
  `imagem` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_artigo`
--

LOCK TABLES `tbl_artigo` WRITE;
/*!40000 ALTER TABLE `tbl_artigo` DISABLE KEYS */;
INSERT INTO `tbl_artigo` VALUES (1,'TRANSTORNOS MENTAIS DA MÃE NO PUERPÉRIO E A RELAÇÃO COM O BEBÊ PREMATURO','O presente estudo buscou identificar os transtornos mentais da mãe no puerpério e a relação com a prematuridade. Trata-se de uma pesquisa quantitativa realizada a partir da coleta de dados de 72 puérperas de parto a termo e pré-termo, em um período de até 2 meses, com idade maior que 18 anos. Os dados foram coletados através de um questionário online, na plataforma “Google Forms”, e de forma presencial, totalizando 10 perguntas na Escala de Depressão Pós-parto de Edimburgo e 12 sociodemográficas. Dentre as entrevistadas, 26.4% às vezes tem se culpado sem razão quando as coisas dão errado; 9.7% têm pensado no futuro com alegria um pouco menos que de costume; 23.6% não tem sido capaz de rir e achar graça das coisas como antes. Com isso, foi possível observar o aumento dos distúrbios mentais no período pós-parto. Dentre as puérperas com bebês prematuros (22.3%), 33% apresentaram um EPDS maior ou igual a 10, evidenciando-se que a prematuridade pode ser um fator agravante para o desenvolvimento de distúrbios mentais. Conclui-se, dessa forma, que existe uma importante relação dos transtornos mentais com o período puerperal e, portanto, que podem ser intensificados diante do fator prematuridade do bebê.','https://abre.ai/hcYw'),(2,'PERCEPÇÕES DE DISCENTES DE DUAS ESCOLAS DO MUNICÍPIO DE PAUDALHO/PE ACERCA DE GRAVIDEZ NA ADOLESCÊNCIA','A adolescência, um período de transição entre a infância e a vida adulta, refere-se ao período em que indivíduos enfrentam mudanças fisiológicas que são traduzidas também em mudanças sociais com o despertar da sexualidade. Nesse momento, os jovens exploram essa novidade lidando com desejos românticos e sexuais e, a partir disso, um descuido oriundo da escassez de orientações pode impactar de diversas formas a saúde, o contexto social e o futuro do adolescente. A evasão escolar, as discriminações e as possíveis consequências biológicas da gestação são exemplos de como a vida do jovem pode ser impactada. Desse modo, o presente estudo avaliou a percepção sobre gravidez na adolescência e os seus desdobramentos. O estudo foi realizado em duas escolas públicas do município de Paudalho/PE com a participação de 193 discentes com idade dos 15 aos 19 anos os quais responderam questionários acerca da temática estudada. A partir dos dados obtidos, medidas educacionais foram aplicadas a fim de direcionar os alunos sobre condutas que devem ser adotadas para prevenir transmissão de infecções sexualmente transmissíveis e gravidez não planejada.','https://abre.ai/hcYL'),(3,'ASSISTÊNCIA EM SAÚDE NO PERÍODO GESTACIONAL: O PROTAGONISMO DO PROFISSIONAL DE ENFERMAGEM NO ATENDIMENTO DE MULHERES PRIVADAS DE LIBERDADE','O aumento do número de mulheres envolvidas em crimes graves é destacado com preocupação por grupos sociais organizados, pesquisadores e políticos como um tema de urgente debate político, social e governamental. Por sua vez, o enfermeiro tem sido reconhecido pelo Ministério da Saúde e outros órgãos e instituições não governamentais, como o profissional que possui formação holística e procura atuar de forma humanizada, visando proporcionar uma assistência de enfermagem que ofereça conforto e segurança no cuidado à parturiente. Esse estudo teve o objetivo de avaliar o papel do enfermeiro para promoção de assistência em saúde e saúde da mulher no atendimento a mulheres grávidas que se encontram privadas de liberdade no Brasil por meio de revisão da literatura. Durante a rotina de trabalho do enfermeiro que trabalha na assistência em saúde da mulher, é muito relevante que esse trabalhador tenha amplo conhecimento técnico, científico e prático para tomar as decisões certas em casos de urgência e emergência, bem como, delegar ações preconizando o acolhimento e segurança à equipe, paciente e família. Nesta pesquisa os resultados apontam que se faz relevante que sejam tomadas medidas para estabelecer a expansão e promover a melhoria das condições estruturais, gerenciais, orçamentárias e humanas do sistema prisional brasileiro, que carece de profunda reestruturação física e operacional. Nesse processo, o enfermeiro é um ator fundamental na promoção de cuidados de saúde.','https://abre.ai/hcYM'),(4,'DRENAGEM LINFÁTICA MANUAL EM GESTANTE','Introdução: a Drenagem Linfática Manual (DLM) é uma massagem que estimula o sistema linfático. Esse método consiste no ato de pressionar as mãos suavemente e lentamente, ajudando a reduzir a retenção de líquidos no corpo. Nesse contexto e levando em consideração que no período gestacional o corpo passa por adaptações fisiológicas, a DLM torna-se uma técnica muito indicada para o tratamento de edema corporal que é típico da gravidez. Desta forma, o problema proposto foi: quais os benefícios do método de Drenagem Linfática Manual em gestantes? O objetivo foi descrever os benefícios da técnica de Drenagem Linfática em gestantes, por meio da revisão de literatura, verificando as leituras existentes sobre Drenagem Linfática Manual em gestantes, com a finalidade responder à pergunta norteadora, através do conhecimento da técnica, bem como das mudanças que ocorrem no corpo da mulher no período gestacional. Metodologia: trata-se de uma revisão integrativa da literatura. A coleta dos artigos ocorreu entre os meses de outubro de 2021 a janeiro de 2022. Selecionou-se os artigos publicados entre os anos de 1986 a 2021. Dentre os 29 artigos coletados, 20 foram selecionados, seguindo como critério de inclusão: literaturas com a temática Drenagem Linfática. As bases de dados consultadas foram: google acadêmico e Scielo. Utilizou-se, também, artigos científicos e livros que versassem sobre o tema. Conclusão: foi possível concluir que a DLM em gestante traz benefícios, tratando as disfunções estéticas, auxiliando na ativação da circulação, bem como no combate a celulites e estrias. Além disso, a técnica combate o edema corporal fisiológico da gestação, sendo este um dos principais incômodos que impede as gestantes de realizar tarefas simples e rotineiras.','https://abre.ai/hcYO'),(5,'O CONSUMO DE CAFEÍNA POR MULHERES GRÁVIDAS E AS INTERAÇÕES FETAIS: UMA REVISÃO BIBLIOMÉTRICA','O café é classificado como o alimento mais consumido pela população brasileira. Para mulheres adultas, a dose de cafeína relatada como segura é de 400 mg por dia, porém, em gestantes, estipulou-se o consumo de 300 mg por dia como dosagem segura, pois a cafeína expõe o ambiente intrauterino a possíveis alterações metabólicas. Os responsáveis por tais fatos são os efeitos estimulantes e a diminuição do fluxo sanguíneo para a placenta, aumentando a probabilidade de ocorrerem nascimentos de crianças com baixo peso. Por isso, elaborou-se a seguinte questão norteadora: quais são as alterações ocasionadas pelo consumo de cafeína no organismo materno que acarretam alterações fetais durante o período gestacional?. O presente estudo teve objetivo geral correlacionar o consumo diário de cafeína com as alterações fetais durante o período gestacional, assim como com o risco de baixo peso ao nascer. Foi realizada uma revisão bibliométrica sobre a relação entre consumo de cafeína durante o período gestacional, a ocorrência de baixo peso ao nascer e prematuridade. As publicações utilizadas para compor esta revisão foram coletadas e analisadas durante o período de março a junho de 2021 e compreenderam o período de publicação de 2007 a 2021. Observou-se que o consumo de cafeína, pode predispor o feto a alterações, como baixo peso ao nascer, prematuridade e o aborto espontâneo. Essas variações também são potencializadas por fatores internos e externos, como o aumento da meia vida da cafeína, o álcool, o tabaco e a obesidade. Além disso, constatou-se que a interação entre a cafeína e a resistência à insulina contribui para a alteração dos fatores metabólicos envolvidos no crescimento e desenvolvimento fetal. Diversos estudos correlacionam o consumo de cafeína acima da dose de 300 mg com o nascimento com baixo peso, nascimento pré-termo e o aborto espontâneo, porém, outros trabalhos demonstraram alterações com uma dosagem abaixo da recomendada. A divergência encontrada deve-se, principalmente, às dificuldades na mensuração do consumo de cafeína e as interações entre a sua ingestão e as comorbidades prévias da gestante.','https://abre.ai/hcYR'),(6,'GRAVIDEZ E SAÚDE MENTAL: UMA REVISÃO DE LITERATURA ACERCA DAS REPERCUSSÕES NA ADOLESCÊNCIA','A maternidade na adolescência precisa ser observada como um processo histórico-social, não podendo ser considerada isoladamente. No Brasil, os dados estimam que entre mil adolescentes, quarenta e seis se tornaram mães. Nesse sentido, de que forma a gravidez repercute na saúde mental das adolescentes? Partindo dessa perspectiva, o presente estudo apresenta como objetivo geral: compreender através da literatura as repercussões da gravidez na saúde mental da adolescente. Para a realização da pesquisa, foi utilizado o método qualitativo, que além de descritivo, é fundamentalmente interpretativo. Tratou-se também de uma pesquisa bibliográfica, utilizando as plataformas Scielo e Biblioteca Digital Brasileira de Teses e Dissertações (BDTD), com os descritores: gravidez, adolescência e saúde mental. Após a busca, foram escolhidos trabalhos que tivessem o mesmo objetivo com a pesquisa, resultando em 4 materiais do Scielo e 9 da BDTD. A partir disso, observou-se que as representações sociais da gravidez na adolescência perpassam por questões como: cultura a respeito das funções maternas e papel de cuidadora; identificação entre mãe e filha; e a transgeracionalidade no que diz respeito à toda a estrutura familiar afetar o comportamento da adolescente, bem como as novas funções familiares desempenhadas. No que diz respeito às mudanças na vida da adolescente, foram identificadas mudanças sociais, corporais e sexuais, bem como a busca pela aquisição da identidade e abandono dos objetos infantis para entrada na vida adulta. Quanto às repercussões na saúde mental, a possibilidade de sintomas depressivos e ansiosos em adolescentes grávidas é duas vezes maior do que em adultas grávidas. Já entre as adolescentes que apresentaram ideação suicida, a maior parte eram solteiras e não contavam com apoio social. Concluiu-se que se torna imprescindível que as equipes de saúde possam identificar fatores de risco a fim de garantir o cuidado integral e promoção de saúde mental para esse grupo.','https://abre.ai/hcYU'),(7,'PERCEPÇÃO DE RISCO SOBRE A COVID-19 EM GESTANTES E SEUS FATORES RELACIONADOS: REVISÃO DE LITERATURA','Objetivo: Revisar a produção científica acerca da percepção de risco sobre a COVID-19 em gestantes e seus fatores relacionados. Pergunta problema: O que a literatura médica aborda sobre a percepção de riscos da COVID-19 em gestantes durante a pandemia? Metodologia: Trata-se de um estudo de revisão bibliográfica realizado em abril de 2021. As buscas foram realizadas inserindo os termos risk perception, pregnancy e COVID-19 nas bases de dados bibliográficas PubMed e SciELO. Os resultados não foram restringidos pela data de publicação dos artigos pelo fato de a pandemia ter iniciado em 2020. Foram incluídos todos os 14 artigos originais indexados em inglês que resultaram da busca, sendo excluídos os artigos que não eram diretamente relacionados à percepção de risco na COVID-19. Devido a necessidade de elucidar de maneira mais ampla a doença, foram incluídos ainda artigos que tratassem da COVID-19 em contexto de gravidez. Principais resultados: Foi possível perceber que a percepção de risco sobre a COVID-19 em gestantes varia de acordo com contexto social, características pessoais e culturais e história obstétrica. Espera-se com este trabalho contribuir na difusão de conhecimentos nesta abordagem visando fomentar o planejamento de ações de saúde, pautadas no saber científico.','https://abre.ai/hcY0'),(8,'URGÊNCIAS E EMERGÊNCIAS INFECCIOSAS NA GESTAÇÃO','A gestação é um período de grandes adaptações no organismo. Além das alterações em diversos sistemas, a própria gestação pode, também, gerar um estado de imunodepressão, favorecendo o surgimento de infecções. Dado o elevado risco materno, cujas estatísticas brasileiras são desfavoráveis, o presente artigo consiste em uma revisão narrativa sobre determinadas infecções relacionadas ao período gestacional. Para isso, foi feito um levantamento de publicações no banco de dados das bibliotecas eletrônicas Google Scholar, PubMed e Scielo. De modo geral, aborto infectado, corioamnionite, endometrite e pielonefrite aguda configuram doenças características de países em desenvolvimento/subdesenvolvidos, como o Brasil. Esse cenário reflete não apenas as condições em saúde, mas, inclusive, socioeconômicas da população brasileira. Portanto, compreender os fatores de risco e o quadro clínico dessas doenças auxilia em um diagnóstico mais rápido e eficaz. O tratamento deve ser assertivo e a prevenção estimulada, a fim de reduzir a elevada incidência de morbimortalidade materna.','https://abre.ai/hcY2'),(9,'DEPENDÊNCIA QUÍMICA NA GRAVIDEZ: UMA REVISÃO INTEGRATIVA','O presente estudo pretendeu analisar esse grande problema de saúde pública que repercute de maneira assustadora na sociedade em que vivemos que é a gravidez relacionada ao uso de álcool e outras drogas. O estudo teve como objetivo abordar a dependência química na gravidez. A metodologia utilizada foi realizar uma revisão bibliográfica através das bases de dados SCIELO, LILACS e BVS, sobre os artigos mais recentes abordando o tema proposto. Foram referidas as principais consequências da utilização de drogas de abuso, tanto para a gestante quanto para o feto. Durante os últimos anos o uso de substâncias psicoativas no período gestacional é algo que vem crescendo, porém, seu diagnóstico ainda é escasso, sendo muitas vezes omitido pelas gestantes e pouco investigado pelos profissionais de saúde, dessa forma é convertido em um problema de saúde pública, assunto ainda pouco discutido. O estudo colaborou com o intuito de se estabelecer melhores estratégias de intervenção nesta população.','https://abre.ai/hcY4'),(10,'PAPEL DO ENFERMEIRO NA PREVENÇÃO DAS DOENÇAS PERIODONTAIS E SAÚDE BUCAL DURANTE PRÉ-NATAL','A pesquisa aborda a importância do enfermeiro na consulta de pré-natal para prevenção de doenças periodontais e saúde bucal das gestantes. O objetivo geral da pesquisa é reconhecer a importância do enfermeiro na prevenção das doenças periodontais e na saúde bucal de gestantes em consulta pré-natal. Tem como objetivos específicos: a) Identificar as doenças periodontais que atingem as gestantes; b) Descrever as consequências das doenças periodontais para as gestantes e o feto; e c) Discutir a função do enfermeiro na consulta pré-natal à luz das políticas públicas vigentes no país. O presente artigo será desenvolvido com base em uma pesquisa de campo, descritiva, qual quantitativa, realizada na cidade de Uberlândia-MG no ano de 2017, onde foi utilizada como instrumentos de coleta de dados do grupo, uma entrevista semiestruturada realizada com a população de gestantes atendidas em consultas de pré-natal das referidas unidades: Unidades Básicas de Saúde da Família UBSF Jardim Célia I e II, UBSF Morumbi I e II, UBSF Joana Darc I e II na cidade de Uberlândia, que realizam consulta pré-natal;','https://abre.ai/hcY5'),(11,'PARTICIPAÇÃO DO HOMEM NO PROCESSO GRAVIDEZ E NASCIMENTO: UMA PERSPECTIVA DE GÊNERO','O processo da gravidez e do nascimento é considerado como uma função da mulher, isso geralmente é influenciado pelo determinismo biológico que permite a mulher engravidar e ter filhos. Além do biológico, o processo de gravidez e parto tem uma forte influência social, dos estereótipos de gênero tradicionais. Entretanto, este processo também envolve diretamente o homem. Portanto, a presente revisão tem como objetivo apresentar os principais pontos das representações sociais sobre a participação do homem no processo da gravidez e do nascimento, dentro de uma perspectiva de gênero. Pretende-se ao final, enfatizar a necessidade de se promover as novas masculinidades com reflexo positivo para sociedade e saúde. Uma perspectiva de gênero no processo de gravidez e do nascimento poderá contribuir para promover mudanças em relação a igualdade de gênero em seu aspecto mais amplo.','https://abre.ai/hcY6'),(12,'ATUAÇÃO DO ENFERMEIRO NAS ESCOLAS PARA A PREVENÇÃO DA GRAVIDEZ NA ADOLESCÊNCIA','O processo da gravidez e do nascimento é considerado como uma função da mulher, isso geralmente é influenciado pelo determinismo biológico que permite a mulher engravidar e ter filhos. Além do biológico, o processo de gravidez e parto tem uma forte influência social, dos estereótipos de gênero tradicionais. Entretanto, este processo também envolve diretamente o homem. Portanto, a presente revisão tem como objetivo apresentar os principais pontos das representações sociais sobre a participação do homem no processo da gravidez e do nascimento, dentro de uma perspectiva de gênero. Pretende-se ao final, enfatizar a necessidade de se promover as novas masculinidades com reflexo positivo para sociedade e saúde. Uma perspectiva de gênero no processo de gravidez e do nascimento poderá contribuir para promover mudanças em relação a igualdade de gênero em seu aspecto mais amplo.','https://abre.ai/hcY7'),(13,'IMPACTOS DO ACOMPANHANTE NO CONTEXTO DO PARTO: RELEVÂNCIA E VIOLÊNCIA','Objetivo: Este estudo teve como objetivo compreender a relevância do acompanhante no processo parturitivo, tendo como pergunta norteadora qual o impacto da presença do acompanhante durante o trabalho de parto das gestantes. Método: Este estudo caracterizou-se como uma pesquisa transversal, descritiva, qualitativa, utilizando como instrumentos de coleta um questionário e uma entrevista semiestruturada. A pesquisa foi realizada com 12 participantes que estavam com 28 semanas ou mais de gestação. A coleta ocorreu entre os meses de julho e setembro de 2019 em uma instituição hospitalar, referência da região Centro-Sul do estado do Rio de Janeiro. A limitação dos participantes foi por critério de saturação e para análise dos dados foi utilizado a Análise de Conteúdo. Resultados: Os dados permitiram o reconhecimento das seguintes categorias: A atuação do acompanhante no processo parturitivo; A violência institucional desvelada. Constatou-se que o acompanhante propicia a gestante autoconfiança, proteção, tranquilidade, concedendo-a uma assistência indispensável neste momento. Observou-se ainda que há uma privação da presença do acompanhante nas instituições hospitalares, descortinando uma violência institucional desvelada. Pode-se verificar a relevância do acompanhante para a parturiente em todos os momentos do parto, fazendo-se parte constituinte neste processo. Entretanto, a efetividade da lei do acompanhante ainda é um grande desafio a ser superado pelos profissionais e pelas instituições hospitalares, ocasionando assim, novas modificações no padrão da assistência obstétrica.','https://abre.ai/hcY8'),(14,'ASSISTÊNCIA DE ENFERMAGEM ÀS ADOLESCENTES GRÁVIDAS','Este estudo tem como objetivo entender qual o papel da equipe de enfermagem na assistência às adolescentes grávidas. Trata-se de uma pesquisa bibliográfica de tipo revisão de literatura e documental; as fontes de dados pesquisadas para elaboração desse estudo teve como base artigos científicos, revistas de enfermagem, diretrizes, sendo adotado como critérios de inclusão estar na íntegra para leitura, em língua portuguesa, onde abordou o assunto proposto. O presente trabalho fala sobre a gravidez na adolescência, o que isso pode causar na vida dessas mulheres; os métodos contraceptivos e o motivo de algumas não aderirem estes métodos; além da importância do profissional enfermeiro na vida destas gestantes jovens e como é realizada a assistência de enfermagem a essas adolescentes. Portanto, conclui-se com esse estudo, que a gravidez na adolescência está diretamente relacionada aos fatores sociais, emocionais, econômicos e culturais. Sendo assim a assistência de Enfermagem torna-se um vínculo entre os jovens e o mundo exterior para minimização do número de gestações na adolescência, uma vez que o ESF local passa a ser uma referência, buscando sempre compreender e responder qual o papel da equipe de enfermagem nesta assistência afim de promover a qualidade de vida.','https://abre.ai/hcY9'),(15,'CONSTRUÇÃO DE CARTILHA EDUCATIVA SOBRE AS PRINCIPAIS QUEIXAS CLÍNICAS DECORRENTES DA GRAVIDEZ','O período gestatório da mulher é perturbado por patologias múltiplas, ocorrendo transformações imediatas e/ou alterações permanentes nos aspectos físicos, emocionais e sociais. Frente a esta situação, o profissional de enfermagem, principalmente o enfermeiro, dentre as várias responsabilidades, devem ater sobre o acompanhamento, orientação, prevenção e recuperação da saúde, frente às modificações anatomofisiológico decorrentes da gravidez, oferecendo um suporte adequado e de preferência não farmacológico e invasivo, visando o autocuidado e baixo custo. Este estudo objetivou desenvolver uma cartilha educativa sobre as principais queixas que são referidas e alguns cuidados a ser usados para promover a qualidade de vida da gestante, podendo ser utilizado pelo enfermeiro no processo de educação continuada e assistida como um instrumento facilitador simples e objetivo, de fácil leitura e entendimento. Utilizou-se o levantamento bibliográfico para a construção da cartilha, caracterizando-a como um estudo de natureza básica, abordagem quali-qualitativa, procedimento metodológico descritivo. Considerando que foram levantados 37 principais alterações orgânicas e seus cuidados, para a construção da primeira versão da cartilha denominada “Gravidez não é doença!”, preocupou-se também com a usabilidade e designer, sendo complementados com iconográficos personalizados e de “saber mais” sobre o assunto em questão. Acredita-se que por ser a primeira versão, poderá e deverá sofrer revisões, com incorporação de futuras de sugestões.','https://abre.ai/hcZa');
/*!40000 ALTER TABLE `tbl_artigo` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_categoria`
--

LOCK TABLES `tbl_categoria` WRITE;
/*!40000 ALTER TABLE `tbl_categoria` DISABLE KEYS */;
INSERT INTO `tbl_categoria` VALUES (1,'Yoga','https://encurtador.com.br/acmHW'),(2,'Pilates','https://encurtador.com.br/gjmEK');
/*!40000 ALTER TABLE `tbl_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_categoriaalimento`
--

DROP TABLE IF EXISTS `tbl_categoriaalimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_categoriaalimento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_categoriaalimento`
--

LOCK TABLES `tbl_categoriaalimento` WRITE;
/*!40000 ALTER TABLE `tbl_categoriaalimento` DISABLE KEYS */;
INSERT INTO `tbl_categoriaalimento` VALUES (1,'Arroz, pães, massas e tubérculos'),(2,'Verduras e Legumes'),(3,'Frutas'),(4,'Leites e derivados'),(5,'Carnes'),(6,'Leguminosas'),(7,'Extras / Recheios'),(8,'Oleaginosas'),(9,'Sementes/grãos'),(10,'Especiarias'),(11,'Açúcares e Doces');
/*!40000 ALTER TABLE `tbl_categoriaalimento` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_clinica`
--

LOCK TABLES `tbl_clinica` WRITE;
/*!40000 ALTER TABLE `tbl_clinica` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_clinica_telefone`
--

LOCK TABLES `tbl_clinica_telefone` WRITE;
/*!40000 ALTER TABLE `tbl_clinica_telefone` DISABLE KEYS */;
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
  `comorbidade` text NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_GestanteComorbidade` (`id_gestante`),
  CONSTRAINT `FK_Gestante_GestanteComorbidade` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
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
  `deficiencia` text NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_GestanteDeficiencia` (`id_gestante`),
  CONSTRAINT `FK_Gestante_GestanteDeficiencia` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Consulta_DietaConsulta` (`id_consulta`),
  CONSTRAINT `FK_Consulta_DietaConsulta` FOREIGN KEY (`id_consulta`) REFERENCES `tbl_consulta` (`id`)
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
-- Table structure for table `tbl_dieta_refeicao`
--

DROP TABLE IF EXISTS `tbl_dieta_refeicao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_dieta_refeicao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `horario` time NOT NULL,
  `id_dieta` int NOT NULL,
  `id_refeicao` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Dieta_DietaRefeicao` (`id_dieta`),
  KEY `FK_Refeicao_RefeicaoDieta` (`id_refeicao`),
  CONSTRAINT `FK_Dieta_DietaRefeicao` FOREIGN KEY (`id_dieta`) REFERENCES `tbl_dieta` (`id`),
  CONSTRAINT `FK_Refeicao_RefeicaoDieta` FOREIGN KEY (`id_refeicao`) REFERENCES `tbl_refeicao` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_dieta_refeicao`
--

LOCK TABLES `tbl_dieta_refeicao` WRITE;
/*!40000 ALTER TABLE `tbl_dieta_refeicao` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_dieta_refeicao` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_endereco_gestante`
--

LOCK TABLES `tbl_endereco_gestante` WRITE;
/*!40000 ALTER TABLE `tbl_endereco_gestante` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_endereco_profissional`
--

LOCK TABLES `tbl_endereco_profissional` WRITE;
/*!40000 ALTER TABLE `tbl_endereco_profissional` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_enderecoclinica`
--

LOCK TABLES `tbl_enderecoclinica` WRITE;
/*!40000 ALTER TABLE `tbl_enderecoclinica` DISABLE KEYS */;
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
  `video` varchar(255) NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_EXERCICIO_CATEGORIAEXERCICIO` (`id_categoria`),
  CONSTRAINT `FK_EXERCICIO_CATEGORIAEXERCICIO` FOREIGN KEY (`id_categoria`) REFERENCES `tbl_categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exercicio`
--

LOCK TABLES `tbl_exercicio` WRITE;
/*!40000 ALTER TABLE `tbl_exercicio` DISABLE KEYS */;
INSERT INTO `tbl_exercicio` VALUES (1,'Aquecimento','','Exercício para gestantes independentemente da semana com a professora Patricia Bueno','ATP245eBpq4',2),(2,'1° Exercício','','Exercício para gestantes independentemente da semana com a professora Patricia Bueno','ipRF8DbSehM',2),(3,'2° Exercício','','Exercício para gestantes independentemente da semana com a professora Patricia Bueno','pRZNkmJChpQ',2),(4,'3° Exercício','','Exercício para gestantes independentemente da semana com a professora Patricia Bueno','PfjLwQpF1xc',2),(5,'4° Exercício','','Exercício para gestantes independentemente da semana com a professora Patricia Bueno','6uaBEkQyvDA',2),(6,'5° Exercício','','Exercício para gestantes independentemente da semana com a professora Patricia Bueno','lYXPzYnoC60',2),(7,'6° Exercício','','Exercício para gestantes independentemente da semana com a professora Patricia Bueno','0cdZqAoJ5zA',2),(8,'7° Exercício','','Exercício para gestantes independentemente da semana com a professora Patricia Bueno','NGkHOjID3Zs',2);
/*!40000 ALTER TABLE `tbl_exercicio` ENABLE KEYS */;
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
  `data_nascimento` date NOT NULL,
  `senha` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cpf` varchar(18) DEFAULT NULL,
  `peso` double DEFAULT NULL,
  `altura` double DEFAULT NULL,
  `semana_gestacao` int NOT NULL,
  `data_parto` date NOT NULL,
  `foto` text NOT NULL,
  `telefone` varchar(16) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_gestante`
--

LOCK TABLES `tbl_gestante` WRITE;
/*!40000 ALTER TABLE `tbl_gestante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_gestante` ENABLE KEYS */;
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
  `descricao` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_malamaternidade`
--

LOCK TABLES `tbl_malamaternidade` WRITE;
/*!40000 ALTER TABLE `tbl_malamaternidade` DISABLE KEYS */;
INSERT INTO `tbl_malamaternidade` VALUES (1,'Bodies de manga longa',0,'Estes são essenciais para manter o bebê aquecido, especialmente nos primeiros dias de vida, quando os recém-nascidos têm dificuldade em regular a temperatura do corpo.'),(2,'Macacões',0,'São práticos e confortáveis para o bebê, facilitando a troca de fraldas e mantendo-o coberto.'),(3,'Meias e luvas',0,'As meias ajudam a manter os pezinhos do bebê quentes, enquanto as luvas evitam que ele se arranhe com as unhas afiadas.'),(4,'Fraldas Descartáveis',0,'As fraldas descartáveis são uma escolha conveniente para o hospital. Certifique-se de levar uma quantidade suficiente para a estadia, pois você não quer ficar sem.'),(5,'Cobertores e Mantas',0,'Ter cobertores leves e pesados à disposição é importante, pois as temperaturas podem variar na maternidade. Os cobertores garantem que o bebê esteja sempre confortável.'),(6,'Fraldas de pano ou lenços umedecidos',0,'As fraldas de pano podem ser usadas para limpar o bebê, enquanto os lenços umedecidos são práticos para pequenas limpezas.'),(7,'Pomada para assaduras',0,'Este produto é importante para proteger a pele sensível do bebê contra assaduras causadas pelo contato com a fralda.'),(8,'Camisolas ou pijamas confortáveis',0,'Roupas confortáveis facilitam a amamentação e o descanso da mãe.'),(9,'Sutiãs de amamentação',0,'São projetados para facilitar a amamentação e oferecer suporte adequado.'),(10,'Produtos de higiene pessoal',0,'Itens como escova de dentes, pasta de dente, sabonete e xampu são essenciais para o conforto da mãe durante a estadia no hospital.'),(11,'Absorventes pós-parto',0,'São necessários para lidar com o sangramento pós-parto.'),(12,'Travesseiro de viagem',0,'Um travesseiro de viagem pode proporcionar um pouco mais de conforto durante a estadia no hospital.'),(13,'Lanches e bebidas não perecíveis',0,'Ter alguns lanches e bebidas à disposição pode ser útil para a mãe, especialmente durante o trabalho de parto e após o parto.'),(14,'Um livro ou revista',0,'Para passar o tempo e relaxar enquanto aguarda a chegada do bebê.'),(15,'Celular, tablet ou laptop',0,'Estes dispositivos podem ser úteis para entretenimento, comunicação com familiares e amigos, e até mesmo para tirar fotos preciosas.'),(16,'Carregadores e adaptadores',0,'Certifique-se de levar os carregadores e adaptadores correspondentes para garantir que seus dispositivos estejam sempre carregados.'),(17,'Cadeirinha de Bebê para o Carro',0,'A cadeirinha de bebê é um item obrigatório para garantir a segurança do bebê ao deixar o hospital e viajar de carro. Certifique-se de que está de acordo com as normas de segurança vigentes.'),(18,'Almofada de Amamentação:',0,'Uma almofada de amamentação pode proporcionar suporte e conforto para a mãe durante a amamentação, facilitando uma posição mais adequada e reduzindo o desconforto.'),(19,'Acessórios de Cabelo',0,'Prender o cabelo com elásticos ou presilhas pode ajudar a manter o cabelo da mãe arrumado e fora do caminho durante o trabalho de parto e os cuidados com o bebê.'),(20,'Máscara Facial e Lenços de Papel',0,'Levar máscaras faciais e lenços de papel é importante para manter a higiene e a proteção durante a estadia no hospital, especialmente em situações em que a mãe precise se proteger ou seguir medidas de saúde.'),(21,'Tratamento para Rachaduras nos Mamilos',0,'Creme ou pomada específica para tratamento de rachaduras nos mamilos pode ser útil para a mãe, especialmente durante os primeiros dias de amamentação.'),(22,'Roupa para a Alta Hospitalar',0,'Uma roupa confortável e adequada para sair do hospital é importante, pois você vai querer estar confortável ao deixar o hospital com seu bebê.');
/*!40000 ALTER TABLE `tbl_malamaternidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_medicacao`
--

DROP TABLE IF EXISTS `tbl_medicacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_medicacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `medicacao` text NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_GestanteMedicacao` (`id_gestante`),
  CONSTRAINT `FK_Gestante_GestanteMedicacao` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_medicacao`
--

LOCK TABLES `tbl_medicacao` WRITE;
/*!40000 ALTER TABLE `tbl_medicacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_medicacao` ENABLE KEYS */;
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
  `checkbox` tinyint(1) NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Categoria_plano_parto` (`id_categoria`),
  CONSTRAINT `FK_Categoria_plano_parto` FOREIGN KEY (`id_categoria`) REFERENCES `tbl_planocategoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_plano_parto`
--

LOCK TABLES `tbl_plano_parto` WRITE;
/*!40000 ALTER TABLE `tbl_plano_parto` DISABLE KEYS */;
INSERT INTO `tbl_plano_parto` VALUES (1,'Quero usar as minhas próprias roupas e não a do hospital',0,9),(2,'Quero música no ambiente',0,9),(3,'Quero silêncio no ambiente',0,9),(4,'Exijo que o(a) meu(a) acompanhante esteja ao meu lado',0,9),(5,'Quero receber massagem',0,9),(6,'Exijo poder me movimentar livremente',0,9),(7,'Quero usar uma bola de pilates',0,9),(8,'Não autorizo o uso de ocitocina para indução do trabalho de parto',0,9),(9,'Quero acesso a banheira ou chuveiro',0,9),(10,'Quero um ambiente com luzes baixas',0,10),(11,'Não quero ar condicionado ligado',0,10),(12,'Quero receber analgesia para aliviar a dor',0,10),(13,'Não quero receber analgesia para aliviar a dor',0,10),(14,'Quero escolher a posição mais confortável para mim',0,10),(15,'Não autorizo que meus pêlos pubianos sejam raspados',0,10),(16,'Não autorizo a episiotomia (corte na vagina)',0,10),(17,'Não autorizo manobras para forçar a saída do bebê de forma desnecessária',0,10),(18,'Exijo que, se a equipe considerar necessária a cesariana, me forneçam justificativa com base científica',0,10),(19,'Exijo que o bebê seja imediatamente trazido para o contato pele a pele comigo',0,11),(20,'Quero que o(a) acompanhante corte o cordão do bebê',0,11),(21,'Quero ver minha placenta',0,11),(22,'Não quero ver minha placenta',0,11),(23,'Prefiro que a placenta seja expelida de forma espontânea',0,11),(24,'Quero que o bebê possa mamar na primeira hora de vida',0,11),(25,'Exijo ser informada sobre todos os procedimentos que serão feitos com o bebê',0,11),(26,'Não autorizo que deem banho no bebê nas primeiras horas de vida',0,11),(27,'Quero ter uma hora de tranquilidade após o parto para me conectar com o bebê antes de qualquer procedimento.',0,11),(28,'Opto por não ter visitas por um determinado período de tempo após o parto, para aproveitar o momento com o bebê.',0,11),(29,'Não autorizo a oferta de fórmula láctea ou chupetas e bicos para o bebê',0,12),(30,'Exijo realizar a amamentação de livre demanda para o bebê',0,12),(31,'Não autorizo a oferta de nitrato de prata para o bebê, apenas se necessário',0,12),(32,'Quero que o bebê permaneça em alojamento conjunto',0,12),(33,'Preferiria ser informada e envolvida em todas as decisões relativas à minha saúde e ao bebê',0,12),(34,'Exijo respeito à minha privacidade e consentimento antes de qualquer exame ou procedimento.',0,12),(35,'Quero que seja eu ou meu(inha) acompanhante a dar o primeiro banho no bebê',0,12);
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_planocategoria`
--

LOCK TABLES `tbl_planocategoria` WRITE;
/*!40000 ALTER TABLE `tbl_planocategoria` DISABLE KEYS */;
INSERT INTO `tbl_planocategoria` VALUES (1,'quarto'),(2,'roupinhas'),(3,'higiene'),(4,'alimentação'),(5,'PARA MAMÃE'),(6,'PASSEIO'),(7,'BANHO E TOALETE'),(8,'DIVERSOS'),(9,'Durante o trabalho de parto'),(10,'Na hora do parto'),(11,'Logo após o parto'),(12,'Até a alta');
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
  `senha` text NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_profissional`
--

LOCK TABLES `tbl_profissional` WRITE;
/*!40000 ALTER TABLE `tbl_profissional` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_profissional_especialidade`
--

LOCK TABLES `tbl_profissional_especialidade` WRITE;
/*!40000 ALTER TABLE `tbl_profissional_especialidade` DISABLE KEYS */;
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
  `nome` varchar(25) NOT NULL,
  `id_profissional` int NOT NULL,
  `id_gestante` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_GestanteRefeicao` (`id_gestante`),
  KEY `FK_Profissional_ProfissionaRefeicao` (`id_profissional`),
  CONSTRAINT `FK_Gestante_GestanteRefeicao` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`),
  CONSTRAINT `FK_Profissional_ProfissionaRefeicao` FOREIGN KEY (`id_profissional`) REFERENCES `tbl_profissional` (`id`)
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
-- Table structure for table `tbl_refeicaopadrao`
--

DROP TABLE IF EXISTS `tbl_refeicaopadrao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_refeicaopadrao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(25) NOT NULL,
  `id_profissional` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Profissional_ProfissionalAlimento` (`id_profissional`),
  CONSTRAINT `FK_Profissional_ProfissionalAlimento` FOREIGN KEY (`id_profissional`) REFERENCES `tbl_profissional` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_refeicaopadrao`
--

LOCK TABLES `tbl_refeicaopadrao` WRITE;
/*!40000 ALTER TABLE `tbl_refeicaopadrao` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_refeicaopadrao` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_telefone`
--

LOCK TABLES `tbl_telefone` WRITE;
/*!40000 ALTER TABLE `tbl_telefone` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_telefone_profissional`
--

LOCK TABLES `tbl_telefone_profissional` WRITE;
/*!40000 ALTER TABLE `tbl_telefone_profissional` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_telefone_profissional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_timeline`
--

DROP TABLE IF EXISTS `tbl_timeline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_timeline` (
  `id` int NOT NULL AUTO_INCREMENT,
  `semana` int NOT NULL,
  `imagem` text NOT NULL,
  `comparacao` varchar(50) NOT NULL,
  `imagemFruta` text NOT NULL,
  `desenvolvimento` text NOT NULL,
  `agenda` text NOT NULL,
  `meses` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_timeline`
--

LOCK TABLES `tbl_timeline` WRITE;
/*!40000 ALTER TABLE `tbl_timeline` DISABLE KEYS */;
INSERT INTO `tbl_timeline` VALUES (1,1,'https://encurtador.com.br/fxIX8','','','O processo de desenvolvimento das estruturas embrionárias tem início.','O atraso menstrual já pode ser notado e a gravidez confirmada através de um teste de gravidez ou exame de beta hCG.',''),(2,2,'https://encurtador.com.br/fxIX8','','','O processo de desenvolvimento das estruturas embrionárias tem início.','O atraso menstrual já pode ser notado e a gravidez confirmada através de um teste de gravidez ou exame de beta hCG.',''),(3,3,'https://encurtador.com.br/fxIX8','','','O processo de desenvolvimento das estruturas embrionárias tem início.','O atraso menstrual já pode ser notado e a gravidez confirmada através de um teste de gravidez ou exame de beta hCG.',''),(4,4,'https://encurtador.com.br/ADIJL','Seu bebê tem tamanho de uma semente de papoula.','https://abre.ai/g9JO','O tubo neural, que dá origem ao cérebro e a coluna, começa a se formar.','O atraso menstrual pode já ser notado e a gravidez confirmada através de um teste de gravidez ou exame de beta HCG.','4 semanas de gravidez são 1 mês. Com a semana 4 da gravidez, você está na semana final do mês 1 da sua gestação.'),(5,5,'https://shre.ink/U6WB','Seu bebê tem o tamanho de um floco de aveia.','https://abre.ai/g9JQ','Em alguns casos é possível visualizar uma pequena manchinha, indicando o saco gestacional.','Se fizer um ultrassom nesta semana, poderá se assustar com uma “ausência” fetal.','5 semanas de gravidez são 2 meses. Com a semana 5 da gravidez, você está na primeira semana do mês 2 da sua gestação.'),(6,6,'https://shre.ink/U6dN','Seu bebê tem tamanho de um pistache.','https://abre.ai/g9JT','O embrião já possui olhos e brotos de onde surgirão as orelhas.','É hora de começar o seu pré-natal.','6 semanas de gravidez são 2 meses. Com a semana 6 da gravidez, você está na segunda semana do mês 2 da sua gestação.'),(7,7,'https://shre.ink/U6dc','Seu bebê tem o tamanho de um grão de café.','https://abre.ai/g9JW','órgãos como o fígado, intestino e estômago começam a surgir e o coração bate cada vez mais forte e acelerado','se realizar o primeiro ultrassom você já consegue ouvir o coraçãozinho batendo.','7 semanas de gravidez são 2 meses. Com a semana 7 da gravidez, você está na terceira semana do mês 2 da sua gestação.'),(8,8,'https://shre.ink/U6vQ','Seu bebê tem o tamanho de uma framboesa.','https://abre.ai/g9JY','a genitália deixa de ser ambigua e começa a diferenciação do sexo','exames de sangue e de urina devem ser realizados para verificar as condições de saúde da mamãe.','8 semanas de gravidez são 2 meses. Com a semana 8 da gravidez, você está na semana final do mês 2 da sua gestação.'),(9,9,'https://shre.ink/U6vl','Seu bebê tem o tamanho de uma uva.','https://abre.ai/g9J0','Sua face ainda é larga e seus olhos bem afastados um do outro.','Você deve agendar o exame de translucência nucal para as proximas semanas.','9 semanas de gravidez são 3 meses. Com a semana 9 da gravidez, você está na primeira semana do mês 3 da sua gestação.'),(10,10,'https://shre.ink/U6RP','Seu bebê tem o tamanho de um morango.','https://abre.ai/g9J1','o embrião é promovido a feto. Sua genitália está em processo de finalização.','se quiser descobrir o sexo do bebê antes do tempo, o exame de sexagem fetal já pode ser feito.','10 semanas de gravidez são 3 meses. Com a semana 10 da gravidez, você está na segunda semana do mês 3 da sua gestação.'),(11,11,'https://shre.ink/U6R2','Seu bebê tem o tamanho de um figo.','https://abre.ai/g9J2','os dedos das mãos e dos pés do bebê já estão formados e com unhas.','você deve fazer o exame de translucência nucal entre a 11º e a 14º semanas de gestação.','11 semanas de gravidez são 3 meses. Com a semana 11 da gravidez, você está na terceira semana do mês 3 da sua gestação.'),(12,12,'https://shre.ink/U6Rm','Seu bebê tem tamanho de um limão.','https://abre.ai/g9J4','Seus cabelos surgem como penugem e sua genitália começa a ficar mais definida.','Se os enjoos ainda não passaram, solicite ao obstetra um medicamento para alívio.','12 semanas de gravidez são 3 meses. Com a semana 12 da gravidez, você está na semana final do mês 3 da sua gestação.'),(13,13,'https://shre.ink/U6RC','Seu bebê tem tamanho de uma vagem.','https://abre.ai/g9J5','Sua bexiga urinária já está funcionando. Ele ingere o líquido amniótico e o elimina através da urina.','Agenda não tem','13 semanas de gravidez são 4 meses. Com a semana 13 da gravidez, você está na primeira semana do mês 4 da sua gestação.'),(14,14,'https://shre.ink/U6RA','Seu bebê tem o tamanho de uma cebola.','https://abre.ai/g9J7','o cordão umbilical já se desenvolveu e é o responsável por levar nutrientes e oxigênio para o bebê.','cuidado com a alimentação! A anemia é uma das grandes vilãs na gestação. Consuma alimentos ricos em ferro e outro nutrientes.','14 semanas de gravidez são 4 meses. Com a semana 14 da gravidez, você está na segunda semana do mês 4 da sua gestação.'),(15,15,'https://shre.ink/U6RQ','Seu bebê tem o tamanho de uma maçã.','https://abre.ai/g9J8','seus dedos estão formados e separados. O bebê já consegue chupar os dedinhos!','durante o ultrassom, um palpite do sexo do bebê pode ser dado.','15 semanas de gravidez são 4 meses. Com a semana 15 da gravidez, você está na terceira semana do mês 4 da sua gestação.'),(16,16,'https://shre.ink/U6Rb ','Seu bebê tem tamanho de um pêssego.','https://abre.ai/g9Kb','Suas pálpebras continuam fechadas, mas o bebê já possui sensibilidade à luz externa.','Não esqueça de tomar as vitaminas recomendadas pelo obstetra.',' 16 semanas de gravidez são 4 meses. Com a semana 16 da gravidez, você está na semana final do mês 4 da sua gestação.'),(17,17,'https://shre.ink/U6gO','Seu bebê tem tamanho de um abacate.','https://abre.ai/g9Kc','É iniciada a produção do vérnix protetor da pele por todo corpo do bebê.','Agenda','17 semanas de gravidez são 5 meses. Com a semana 17 da gravidez, você está na primeira semana do mês 5 da sua gestação.'),(18,18,'https://shre.ink/U6gm','Seu bebê tem tamanho de uma pêra.','https://abre.ai/g9Kd','Os movimentos respiratórios são iniciados como um treinamento. A placenta ainda supre as necessidades de oxigênio do bebê.','Comece a usar cremes ou óleos especializados para evitar o aparecimento de estrias.','18 semanas de gravidez são 5 meses. Com a semana 18 da gravidez, você está na segunda semana do mês 5 da sua gestação.'),(19,19,'https://shre.ink/U6gn','Seu bebê tem o tamanho de uma laranja.','https://abre.ai/g9Ke','O cérebro está em fase de aperfeiçoamento e todos os sentidos estão se desenvolvendo.','Cuidado com roupas muito apertadas. Elas podem machucar a sua barriga, que já está ficando saliente.','19 semanas de gravidez são 5 meses. Com a semana 19 da gravidez, você está na terceira semana do mês 5 da sua gestação.'),(20,20,'https://shre.ink/U6g7','Seu bebê tem o tamanho de um pimentão.','https://abre.ai/g9Kf','braços, pernas, pés e mãos estão completamente formados e agora o bebê só ganha peso.','faça o ultrassom morfológico para ver o desenvolvimento interno do bebê.','20 semanas de gravidez são 5 meses. Com a semana 20 da gravidez, você está na quarta semana do mês 5 da sua gestação.'),(21,21,'https://shre.ink/U6go','Seu bebê tem o tamanho de uma banana.','https://abre.ai/g9Kg','seu bebê já escuta os sons externos e começa a se familiarizar com a voz da mamãe.','em breve será solicitado o exame de curva glicêmica para garantir que a gestante não esteja com diabetes gestacional.','21 semanas de gravidez são 5 meses. Com a semana 21 da gravidez, você está na semana final do mês 5 da sua gestação.'),(22,22,'https://shre.ink/U6g1','Seu bebê tem o tamanho de uma cenoura.','https://abre.ai/g9Kh','os ossos do ouvido se formaram e a audição está em adaptação.','cuidado com o consumo de pimentas. As hemorróidas podem começar a ocorrer nessa fase.','22 semanas de gravidez são 6 meses. Com a semana 22 da gravidez, você está na primeira semana do mês 6 da sua gestação.'),(23,23,'https://shre.ink/U6g8','Seu bebê tem o tamanho de um coco seco.','https://abre.ai/g9Kj','o bebê começa a treinar como respirar fora da barriga.','fique alerta a corrimentos. Se tiver algum com odor ou coloração forte, informe o seu obstetra.','23 semanas de gravidez são 6 meses. Com a semana 23 da gravidez, você está na segunda semana do mês 6 da sua gestação.'),(24,24,'https://shre.ink/U6o6','Seu bebê tem o tamanho de um milho.','https://abre.ai/g9Kl','Seus olhos que já abrem e fecham, e agora ganham cílios.','Procure fazer atividades físicas para controlar o ganho de peso e fortalecer seu corpo, minimizando as dores. Hidroginástica e yoga são algumas das opções.','24 semanas de gravidez são 6 meses. Com a semana 24 da gravidez, você está na terceira semana do mês 6 da sua gestação.'),(25,25,'https://shre.ink/U6oV','Seu bebê tem tamanho de um pepino.','https://abre.ai/g9Kn','Seu bebê está todo formadinho. Agora ganha peso de forma acelerada.','Leve sua carteira de vacinação para o obstetra. Às vezes é necessário tomar algum reforço antes do parto.','25 semanas de gravidez são 6 meses. Com a semana 25 da gravidez, você está na quarta semana do mês 6 da sua gestação.'),(26,26,'https://shre.ink/U6oz','Seu bebê tem o tamanho de um alho poró.','https://abre.ai/g9Kr','o bebê já possui uma grande força nos braços e pernas, o que resulta em dolorosos chutes e cotoveladas.','Agenda','26 semanas de gravidez são 6 meses. Com a semana 26 da gravidez, você está na semana final do mês 6 da sua gestação.'),(27,27,'https://shre.ink/U6oh','Seu bebê tem o tamanho de uma couve-flor.','https://abre.ai/g9L0','O bebê está bem gordinho, porém vai ganhar muito mais peso até o dia do nascimento.','Novos exames de sangue e urina podem ser solicitados pelo obstetra. Já faça o agendamento para a semana recomendada por ele.','27 semanas de gravidez são 7 meses. Com a semana 27 da gravidez, você está na primeira semana do mês 7 da sua gestação.'),(28,28,'https://shre.ink/U6o7','Seu bebê tem o tamanho de uma beringela.','https://abre.ai/g9Ku','o bebê já consegue identificar luzes fora da barriga e com isso distingue a noite do dia.','se você é fator sanguíneo RH negativo, em breve terá que tomar a vacina preventiva.','28 semanas de gravidez são 7 meses. Com a semana 28 da gravidez, você está na segunda semana do mês 7 da sua gestação.'),(29,29,'https://shre.ink/U6oo','Seu bebê tem o tamanho de uma abóbora pequena.','https://abre.ai/g9Ky','é possível que o bebê dê a cambalhota fisiológica, ficando na posição cefálica (de cabeça para baixo), própria para parto normal.','se está sofrendo com os inchaços procure repousar com as pernas elevadas e utilizar meias elásticas para auxiliar na circulação.','29 semanas de gravidez são 7 meses. Com a semana 29 da gravidez, você está na terceira semana do mês 7 da sua gestação.'),(30,30,'https://shre.ink/U6o8 ','Seu bebê tem tamanho de um repolho.','https://abre.ai/g9KC','A sensibilidade ocular do bebê está cada vez mais aguçada e ele já responde a estimulos de luz.','A partir desta semana as consultas de pré-natal serão quinzenais para melhor acompanhamento.','30 semanas de gravidez são 7 meses. Com a semana 30 da gravidez, você está na semana final do mês 7 da sua gestação.'),(31,31,'https://shre.ink/U6pP','Seu bebê tem tamanho de um alface.','https://abre.ai/g9KE','O bebê já responde a estímulos de vozes e toques na barriga da mamãe.','Se vai fazer cesariana, não esqueça de tomar a vacina anti-tetânica.','31 semanas de gravidez são 8 meses. Com a semana 31 da gravidez, você está na primeira semana do mês 8 da sua gestação.'),(32,32,'https://shre.ink/U6p2','Seu bebê tem o tamanho de um coco verde.','https://abre.ai/g9KG','o bebê já fica de olhos abertos e se move em direção a luzes fora da barriga.','através do ultrassom é possível verificar o grau de placenta.','32 semanas de gravidez são 8 meses. Com a semana 32 da gravidez, você está na segunda semana do mês 8 da sua gestação.'),(33,33,'https://shre.ink/U6pE','Seu bebê tem o tamanho de um melão cantaloupe.','https://abre.ai/g9KJ','o bebê está todo formado e ganhando peso, agora o foco é o amadurecimento dos pulmões.','uma mistura de sentimentos pode estar te consumindo, fique atenta aos sinais de depressão nesta fase.','33 semanas de gravidez são 8 meses. Com a semana 33 da gravidez, você está na terceira semana do mês 8 da sua gestação.'),(34,34,'https://shre.ink/U6pi','Seu bebê tem tamanho de um abacaxi.','https://abre.ai/g9KL','O bebê está completamente desenvolvido e seus pulmões estão em processo de amadurecimento.','Descanse, mas também procure fazer exercícios físicos adequados.','34 semanas de gravidez são 8 meses. Com a semana 34 da gravidez, você está na quarta semana do mês 8 da sua gestação.'),(35,35,'https://shre.ink/U6pC','Seu bebê tem tamanho de um melão orange.','https://abre.ai/g9KN','O bebê já possui as feições com que irá nascer e já tem pouco espaço para se movimentar.','Se você trabalha fora, talvez seja a hora de começar a pensar na sua licença.','35 semanas de gravidez são 8 meses. Com a semana 35 da gravidez, você está na semana final do mês 8 da sua gestação.'),(36,36,'https://shre.ink/U6pj','Seu bebê tem tamanho de folha de alface romana.','https://abre.ai/g9KP','Seus pulmões já funcionam normalmente e seu ganho de peso é contínuo.','Fique alerta a sangramentos ou qualquer outro sinal de trabalho de parto.','36 semanas de gravidez são 9 meses. Com a semana 36 da gravidez, você está na primeira semana do mês 9 da sua gestação.'),(37,37,'https://shre.ink/U6po','Seu bebê tem o tamanho de uma acelga.','https://abre.ai/g9KR','já completamente pronto para nascer, o bebê daqui pra frente só ganhará peso.','se você ainda não fez o exame streptococcus, ele deve ser feito. O exame é tranquilo e coletado através de um cotonete.','37 semanas de gravidez são 9 meses. Com a semana 37 da gravidez, você está na segunda semana do mês 9 da sua gestação'),(38,38,'https://shre.ink/U6pQ','Seu bebê tem o tamanho de uma jaca.','https://abre.ai/g9L3','com o bebê pesando em média 3 kgs, seus movimentos estão cada vez menores na barriga.',' o exame de cardiotocografia será solicitado para checar a frequência cardíaca do bebê e confirmar as contrações uterinas.','38 semanas de gravidez são 9 meses. Com a semana 38 da gravidez, você está na terceira semana do mês 9 da sua gestação.'),(39,39,'https://shre.ink/U6pt','Seu bebê tem o tamanho de uma melancia pequena.','https://abre.ai/g9KU','o bebê já está pronto para nascer e a qualquer momento o trabalho de parto pode se iniciar.','o tampão mucoso já pode ter começado a sair há algumas semanas. Mas se ainda não começou, a hora é agora.','39 semanas de gravidez são 9 meses. Com a semana 39 da gravidez, você está na quarta semana do mês 9 da sua gestação.'),(40,40,'https://shre.ink/U6pD','Seu bebê tem tamanho de uma abóbora.','https://abre.ai/g9KV','Seus pulmões já estão maduros e assim que for cortado o cordão umbilical o bebê começará a respirar sozinho.','Observe os sinais de trabalho de parto e, ao notar contrações, marque para ver o tempo entre elas.','40 semanas de gravidez são 9 meses. Com a semana 40 da gravidez, você está na semana final do mês 9 da sua gestação.');
/*!40000 ALTER TABLE `tbl_timeline` ENABLE KEYS */;
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
-- Table structure for table `tbl_transacao`
--

DROP TABLE IF EXISTS `tbl_transacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_transacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ordem` varchar(100) NOT NULL,
  `dia` datetime NOT NULL,
  `id_gestante` int NOT NULL,
  `id_clinica` int NOT NULL,
  UNIQUE KEY `id` (`id`),
  KEY `FK_Gestante_GestanteTransacao` (`id_gestante`),
  KEY `FK_Clinica_ClinicaTransacao` (`id_clinica`),
  CONSTRAINT `FK_Clinica_ClinicaTransacao` FOREIGN KEY (`id_clinica`) REFERENCES `tbl_clinica` (`id`),
  CONSTRAINT `FK_Gestante_GestanteTransacao` FOREIGN KEY (`id_gestante`) REFERENCES `tbl_gestante` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_transacao`
--

LOCK TABLES `tbl_transacao` WRITE;
/*!40000 ALTER TABLE `tbl_transacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_transacao` ENABLE KEYS */;
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
/*!50003 DROP FUNCTION IF EXISTS `SelectIdTelefoneFromGestante` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `SelectIdTelefoneFromGestante`(idGestante int) RETURNS int
    READS SQL DATA
BEGIN
    DECLARE id INT;
    SELECT id_telefone INTO id FROM tbl_gestante_telefone
    where id_gestante = idGestante ;
    RETURN id;
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
/*!50003 DROP PROCEDURE IF EXISTS `procDeleteMealToDiet` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procDeleteMealToDiet`(
in 
idRefeicao int)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;

delete from tbl_dieta_refeicao where id_refeicao = idRefeicao;

delete from tbl_refeicao where id = idRefeicao;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Refeicao deletada com sucesso' AS Resultado;
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `procDeleteProfissional`(in id int)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;


delete from tbl_dieta where id in(select id from tbl_consulta where id_profissional = id);

delete from tbl_prontuario where id_consulta in (select id from tbl_consulta where id_profissional = id);

delete from tbl_consulta where id_profissional = id;

delete from tbl_endereco_profissional where id_profissional = id;

delete from tbl_alimento_refeicao where id_refeicao in (select id from tbl_refeicao where id_profissional = id);

delete from tbl_refeicao where id_profissional = id;

delete from tbl_alimento_refeicaopadrao where id_refeicao in (select id from tbl_refeicaopadrao where id_profissional = id);

delete from tbl_refeicaopadrao where id_profissional = id;

delete from tbl_profissional_especialidade where id_profissional = id;

delete from tbl_telefone_profissional where id_profissional = id;

delete from tbl_telefone
where tbl_telefone.id not in (
select 	tbl_clinica_telefone.id_telefone from tbl_clinica_telefone
union select 
tbl_telefone_profissional.id_telefone from tbl_telefone_profissional
);

delete from tbl_profissional where tbl_profissional.id = id;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Profissional deletado com sucesso' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro' AS Resultado;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procDeleteRefeicao` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procDeleteRefeicao`(in id int)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;

delete from tbl_alimento_refeicao where id_refeicao = id;

delete from tbl_refeicao where tbl_refeicao.id = id;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Refeicao deletado com sucesso' AS Resultado;
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
/*!50003 DROP PROCEDURE IF EXISTS `procDeleteRefeicaoPadrao` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procDeleteRefeicaoPadrao`(in id int)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;

delete from tbl_alimento_refeicaoPadrao where id_refeicao = id;

delete from tbl_refeicaoPadrao where tbl_refeicaoPadrao.id = id;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Profissional deletado com sucesso' AS Resultado;
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
/*!50003 DROP PROCEDURE IF EXISTS `procFoodDefaultToMeal` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procFoodDefaultToMeal`(
in 
idRefeicaoPadrao int,
idRefeicao int
)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;

insert into tbl_alimento_refeicao( id_refeicao, id_alimento)
select idRefeicao, tbl_alimento_refeicaoPadrao.id_alimento
from tbl_alimento_refeicaoPadrao
where tbl_alimento_refeicaoPadrao.id_refeicao = idRefeicaoPadrao;

  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Alimento adicionado com sucesso' AS Resultado;
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
in senha text,
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
/*!50003 DROP PROCEDURE IF EXISTS `procMealToDiet` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procMealToDiet`(
in 
nome text,
idProfissional int,
idGestante int,
idDieta int,
horario time)
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;

insert into tbl_refeicao(nome, id_profissional, id_gestante)values(nome, idProfissional, IdGestante);

insert into tbl_dieta_refeicao(id_dieta,id_refeicao, horario)
select idDieta, tbl_refeicao.id, horario 
from tbl_refeicao 
order by id desc limit 1;


  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Refeicao adicionada com sucesso' AS Resultado;
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
    tbl_gestante.data_nascimento = data_nascimento,
    tbl_gestante.email = email ,
    tbl_gestante.cpf = cpf,
    tbl_gestante.semana_gestacao = semana_gestacao,
    tbl_gestante.data_parto = data_parto,
    tbl_gestante.foto = foto,
    tbl_gestante.telefone = telefone where tbl_gestante.id= id;
    
    update tbl_endereco_gestante set 
    cep = cep,
    numero = numero,
    complemento = complemento
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
numero varchar(10),
complemento varchar(50),
cep varchar(10))
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;
    
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
    SELECT 'Profissional editadO com sucesso' AS Resultado;
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

-- Dump completed on 2023-11-12 19:59:46
