-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.2.30-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- react-clone-insta 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `react-clone-insta` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `react-clone-insta`;

-- 테이블 react-clone-insta.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL,
  `content` varchar(500) NOT NULL,
  `ins_dt` datetime DEFAULT NULL,
  `upt_dt` datetime DEFAULT NULL,
  `ins_user` varchar(50) NOT NULL,
  `upt_user` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- 테이블 데이터 react-clone-insta.board:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` (`id`, `title`, `content`, `ins_dt`, `upt_dt`, `ins_user`, `upt_user`) VALUES
	(1, 'title1', 'content1', '2021-02-23 10:51:10', '2021-02-23 10:51:11', 'user1', 'user1'),
	(2, 'title2', 'contnet2', '2021-02-23 10:51:29', '2021-02-23 10:51:29', 'user2', 'user2'),
	(3, 'title3', 'content3', '2021-02-23 10:51:43', '2021-02-23 10:51:44', 'user1', 'user1'),
	(4, 'abc', 'aas', '2021-02-26 14:05:29', '2021-02-26 14:05:29', 'admin', 'admin'),
	(5, 'bbc', 'asdf', '2021-02-26 14:07:36', '2021-02-26 14:07:36', 'admin', 'admin'),
	(6, 'undefined', 'undefined', '2021-02-26 16:50:10', '2021-02-26 16:50:10', 'admin', 'admin');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
