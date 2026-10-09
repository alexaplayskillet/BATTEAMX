CREATE DATABASE BATTEAMX;

USE BATTEAMX;

CREATE TABLE usuarios(
	Id_usuario INT PRIMARY KEY NOT NULL auto_increment,
    Usuario varchar(50),
    Correo varchar(50) unique,
    Contrasena varchar(50)
);

ALTER TABLE usuarios MODIFY Contrasena VARCHAR(255) NOT NULL;

ALTER TABLE usuarios MODIFY Usuario VARCHAR(50) NOT NULL, ADD UNIQUE (Usuario);

SELECT * FROM usuarios

ALTER TABLE usuarios ADD foto BLOB;

ALTER TABLE usuarios MODIFY foto MEDIUMBLOB;

ALTER TABLE usuarios ADD foto_tipo VARCHAR(30);


CREATE TABLE tarjetas(
    id_tarjeta INT AUTO_INCREMENT PRIMARY KEY,
    equipo VARCHAR(50),
    imagen BLOB
);


CREATE TABLE puntajes(
    Id_puntaje INT PRIMARY KEY AUTO_INCREMENT,
    Id_usuario INT NOT NULL,
    puntos INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Id_usuario) REFERENCES usuarios(Id_usuario)
);