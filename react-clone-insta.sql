-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.5-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- react-clone-insta 데이터베이스 구조 내보내기
DROP DATABASE IF EXISTS `react-clone-insta`;
CREATE DATABASE IF NOT EXISTS `react-clone-insta` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `react-clone-insta`;

-- 테이블 react-clone-insta.board 구조 내보내기
DROP TABLE IF EXISTS `board`;
CREATE TABLE IF NOT EXISTS `board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL,
  `content` varchar(500) NOT NULL,
  `ins_dt` datetime DEFAULT NULL,
  `upt_dt` datetime DEFAULT NULL,
  `ins_user` varchar(50) NOT NULL,
  `upt_user` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- 테이블 데이터 react-clone-insta.board:~7 rows (대략적) 내보내기
DELETE FROM `board`;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` (`id`, `title`, `content`, `ins_dt`, `upt_dt`, `ins_user`, `upt_user`) VALUES
	(1, '수정 테스트', '수정 테스트', '2021-02-23 10:51:10', '2021-02-28 00:40:05', 'user1', 'update_user'),
	(2, '수정 테스트', '수정 테스트', '2021-02-23 10:51:29', '2021-02-28 00:40:05', 'user2', 'update_user'),
	(3, '수정 테스트', '수정 테스트', '2021-02-23 10:51:43', '2021-02-28 00:40:05', 'user1', 'update_user'),
	(4, '수정 테스트', '수정 테스트', '2021-02-26 14:05:29', '2021-02-28 00:40:05', 'admin', 'update_user'),
	(6, '수정 테스트1', '수정 테스트2', '2021-02-26 16:50:10', '2021-02-28 00:41:56', 'admin', 'update_user'),
	(7, 'a', 'a', '2021-03-01 22:30:29', '2021-03-01 22:30:29', 'undefined', 'undefined'),
	(8, 'a', 'b', '2021-03-01 22:32:45', '2021-03-01 22:32:45', 'undefined', 'undefined'),
	(9, 'a', 'b', '2021-03-01 22:34:23', '2021-03-01 22:34:23', 'admin', 'admin');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 react-clone-insta.board_reply 구조 내보내기
DROP TABLE IF EXISTS `board_reply`;
CREATE TABLE IF NOT EXISTS `board_reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `board_id` int(11) DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `ins_dt` datetime DEFAULT NULL,
  `upt_dt` datetime DEFAULT NULL,
  `ins_user` varchar(50) DEFAULT NULL,
  `upt_user` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__board` (`board_id`),
  CONSTRAINT `FK__board` FOREIGN KEY (`board_id`) REFERENCES `board` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 테이블 데이터 react-clone-insta.board_reply:~4 rows (대략적) 내보내기
DELETE FROM `board_reply`;
/*!40000 ALTER TABLE `board_reply` DISABLE KEYS */;
INSERT INTO `board_reply` (`id`, `board_id`, `content`, `ins_dt`, `upt_dt`, `ins_user`, `upt_user`) VALUES
	(1, 9, '무', '2021-03-02 18:47:35', '2021-03-02 18:47:35', 'admin', 'admin'),
	(2, 9, 'afsd', '2021-03-02 19:18:14', '2021-03-02 19:18:14', 'admin', 'admin'),
	(3, 9, 'bb', '2021-03-02 19:19:45', '2021-03-02 19:19:45', 'admin', 'admin'),
	(4, 9, 'bn', '2021-03-02 19:23:13', '2021-03-02 19:23:13', 'admin', 'admin');
/*!40000 ALTER TABLE `board_reply` ENABLE KEYS */;

-- 테이블 react-clone-insta.photo 구조 내보내기
DROP TABLE IF EXISTS `photo`;
CREATE TABLE IF NOT EXISTS `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL,
  `content` varchar(500) NOT NULL,
  `ins_dt` datetime NOT NULL,
  `upt_dt` datetime NOT NULL,
  `ins_user` varchar(50) NOT NULL DEFAULT '',
  `upt_user` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- 테이블 데이터 react-clone-insta.photo:~5 rows (대략적) 내보내기
DELETE FROM `photo`;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` (`id`, `title`, `content`, `ins_dt`, `upt_dt`, `ins_user`, `upt_user`) VALUES
	(1, 'asdf', 'sfad', '2021-03-14 17:10:51', '2021-03-14 17:10:51', 'admin', 'admin'),
	(2, 'asdf', 'sfad', '2021-03-14 17:11:56', '2021-03-14 17:11:56', 'admin', 'admin'),
	(3, 'asdf', 'sfad', '2021-03-14 17:12:44', '2021-03-14 17:12:44', 'admin', 'admin'),
	(4, 'asdf', 'asfd', '2021-03-14 17:15:25', '2021-03-14 17:15:25', 'admin', 'admin'),
	(5, 'asdf', 'asfd', '2021-03-14 17:33:10', '2021-03-14 17:33:10', 'admin', 'admin');
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;

-- 테이블 react-clone-insta.photo_file 구조 내보내기
DROP TABLE IF EXISTS `photo_file`;
CREATE TABLE IF NOT EXISTS `photo_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(500) NOT NULL,
  `originalname` varchar(500) NOT NULL,
  `size` int(11) NOT NULL,
  `mimetype` varchar(50) NOT NULL,
  `destination` varchar(500) NOT NULL,
  `photo_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_photo_file_photo` (`photo_id`),
  CONSTRAINT `FK_photo_file_photo` FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- 테이블 데이터 react-clone-insta.photo_file:~7 rows (대략적) 내보내기
DELETE FROM `photo_file`;
/*!40000 ALTER TABLE `photo_file` DISABLE KEYS */;
INSERT INTO `photo_file` (`id`, `filename`, `originalname`, `size`, `mimetype`, `destination`, `photo_id`) VALUES
	(1, '37a021b44b75013ba86f4f480b50f83b', '캡처.PNG', 21035, 'image/png', 'upload/', 3),
	(2, 'e4d235bb014f7d539f8fd32554011022', '유리병 이미지 연습용 jpg.jpg', 68905, 'image/jpeg', 'upload/', 3),
	(3, '430266382ca86217f4e3f51328cca788', '속성.PNG', 3561, 'image/png', 'upload/', 3),
	(4, 'f15c64baefb68707468ec9dc3ac27c4c', 'file_menu_notepad.png', 335, 'image/png', 'upload/', 4),
	(5, '91d46149f61bdda5a2659addddadabab', 'A_button.png', 463, 'image/png', 'upload/', 4),
	(6, '1fdf403a66ef782dfc2186e98fbd230b', 'file_menu_notepad.png', 335, 'image/png', 'upload/', 5),
	(7, '0d4c4bf0b6842a1bf595f5bf6f91019a', 'A_button.png', 463, 'image/png', 'upload/', 5);
/*!40000 ALTER TABLE `photo_file` ENABLE KEYS */;

-- 테이블 react-clone-insta.user 구조 내보내기
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `ins_dt` datetime DEFAULT NULL,
  `salt` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- 테이블 데이터 react-clone-insta.user:~0 rows (대략적) 내보내기
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `password`, `ins_dt`, `salt`) VALUES
	(1, 'admin', 'db49cbf237c913e9617801345b2fe8415735f3ccb95549aef426ed71974da3a0ce305b7dcfbff685622853a9a0cdc84583c67330be7f71edecbc583c79042c97', '2021-03-01 12:35:13', '1354806567653');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
