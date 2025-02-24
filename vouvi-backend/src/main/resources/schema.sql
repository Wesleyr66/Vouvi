DROP TABLE IF EXISTS tb_user;

CREATE TABLE tb_user (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    email_user VARCHAR(30) NOT NULL UNIQUE,
    password_user VARCHAR(30) NOT NULL,
    cep_user CHAR(8) NOT NULL,
    birthdate_user DATE NOT NULL,
    gender_user ENUM('f', 'm', 'o', 'n'),
    pronoun_user VARCHAR(20) NOT NULL,
    username_user VARCHAR(30) NOT NULL UNIQUE,
    name_user VARCHAR(30) NOT NULL,
    lastname_user VARCHAR(20) NOT NULL,
    xp_user INT DEFAULT 0,
    vcoin_user INT DEFAULT 0
);