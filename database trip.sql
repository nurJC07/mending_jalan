create database travel;

use travel;

select * from product;

DROP TABLE `product`;

CREATE TABLE IF NOT EXISTS `product` (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
   `judul` varchar(100) NOT NULL,
    `image` varchar(100) NOT NULL, 
  `highlight` varchar(1000) NOT NULL,
  `description` varchar(5000) NOT NULL,
PRIMARY KEY (`productId`)
);

insert into product values
(null, 'Trip Jepang Autumn: Tokyo – Kyoto – Osaka','/images/trip autumn.jpg',
'Musim gugur atau autumn adalah salah satu periode terbaik untuk liburan ke Jepang.\nBooking dari sekarang untuk menikmati paket liburan hemat musim gugur \n di tiga kota: Tokyo, Kyoto, dan Osaka bersama Fun Adventure.',
'<p>PERIODE TRIP</p>'),
(null, 'Trip Vietnam: Hanoi – Halong Bay','/images/trip Halongbay.jpg',
'Liburan hemat empat hari tiga malam mengunjungi destinasi bersejarah di ibu kota Vietnam, Hanoi, sekaligus one day tour menikmati keindahan alam di Halong Bay.',
'<p>PERIODE TRIP</p>'),
(null, 'Kepulauan Kei Maluku','/images/Kepulauan-Kei.jpg',
'Kepulauan Kei Maluku akan menjadi sebuah pengalaman baru yang mungkin akan sangat jarang ditemukan di pantai-pantai lainnya di Indonesia. Butir pasir sehalus tepung akan memanjakan kulit kaki setelah menempuh perjalanan jauh menuju Ambon, dilanjutkan dengan penerbangan kedua dengan pesawat menuju kota Langgur-Tual.',
'<p>PERIODE TRIP</p>'),
(null, 'Sail Komodo dan Overland Flores','/images/flores-overland.jpg',
'Sail komodo dan overland flores adalah perpaduan Trip yang pas jika anda ingin explore semua keindahan di flores. Pulau komodo dikenal sebagai habitat asli dari hewan komodo, sejak ditemukan pada tahun 1910 Pulau komodo telah meraih banyak predikat dan penghargaan salah satunya adalah dari UNESCO yang menetapkan sebagai salah satu warisan dunia. Untuk menikmati keindahan Pulau Komodo kamu bisa mengikuti program sailing komodo.',
'<p>PERIODE TRIP</p>');

DROP TABLE `product`;

truncate table product;

CREATE TABLE IF NOT EXISTS `article` (
  `articleId` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL, 
  `description` varchar(5000) NOT NULL,
  `postDate` datetime (6) NOT NULL,
PRIMARY KEY (`articleId`)
);

select * from article;

insert into article values
(null, 'Trip Jepang Autumn: Tokyo – Kyoto – Osaka','/images/trip autumn.jpg',
'Musim gugur atau autumn adalah salah satu periode terbaik untuk liburan ke Jepang.\nBooking dari sekarang untuk menikmati paket liburan hemat musim gugur \n di tiga kota: Tokyo, Kyoto, dan Osaka bersama Fun Adventure.',
'<p>PERIODE TRIP</p>'),
(null, 'Trip Vietnam: Hanoi – Halong Bay','/images/trip Halongbay.jpg',
'Liburan hemat empat hari tiga malam mengunjungi destinasi bersejarah di ibu kota Vietnam, Hanoi, sekaligus one day tour menikmati keindahan alam di Halong Bay.',
'<p>PERIODE TRIP</p>'),
(null, 'Kepulauan Kei Maluku','/images/Kepulauan-Kei.jpg',
'Kepulauan Kei Maluku akan menjadi sebuah pengalaman baru yang mungkin akan sangat jarang ditemukan di pantai-pantai lainnya di Indonesia. Butir pasir sehalus tepung akan memanjakan kulit kaki setelah menempuh perjalanan jauh menuju Ambon, dilanjutkan dengan penerbangan kedua dengan pesawat menuju kota Langgur-Tual.',
'<p>PERIODE TRIP</p>'),
(null, 'Sail Komodo dan Overland Flores','/images/flores-overland.jpg',
'Sail komodo dan overland flores adalah perpaduan Trip yang pas jika anda ingin explore semua keindahan di flores. Pulau komodo dikenal sebagai habitat asli dari hewan komodo, sejak ditemukan pada tahun 1910 Pulau komodo telah meraih banyak predikat dan penghargaan salah satunya adalah dari UNESCO yang menetapkan sebagai salah satu warisan dunia. Untuk menikmati keindahan Pulau Komodo kamu bisa mengikuti program sailing komodo.',
'<p>PERIODE TRIP</p>');
DROP TABLE `product`;

truncate table product;