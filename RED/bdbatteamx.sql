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



USE BATTEAMX;

CREATE TABLE IF NOT EXISTS equipos (
    id_equipo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    ciudad VARCHAR(80) NOT NULL,
    estadio VARCHAR(120) NOT NULL,
    logo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS estadisticas_equipos (
    id_estadistica INT AUTO_INCREMENT PRIMARY KEY,
    id_equipo INT NOT NULL,
    temporada YEAR NOT NULL,
    juegos_jugados INT NOT NULL DEFAULT 0,
    juegos_ganados INT NOT NULL DEFAULT 0,
    juegos_perdidos INT NOT NULL DEFAULT 0,
    carreras_anotadas INT NOT NULL DEFAULT 0,
    carreras_recibidas INT NOT NULL DEFAULT 0,
    UNIQUE (id_equipo, temporada),
    FOREIGN KEY (id_equipo) REFERENCES equipos(id_equipo)
);

CREATE TABLE IF NOT EXISTS partidos (
    id_partido INT AUTO_INCREMENT PRIMARY KEY,
    temporada YEAR NOT NULL,
    fecha DATE NOT NULL,
    id_local INT NOT NULL,
    id_visitante INT NOT NULL,
    carreras_local INT,
    carreras_visitante INT,
    estadio VARCHAR(120) NOT NULL,
    FOREIGN KEY (id_local) REFERENCES equipos(id_equipo),
    FOREIGN KEY (id_visitante) REFERENCES equipos(id_equipo),
    CHECK (id_local <> id_visitante)
);
  
INSERT INTO equipos (nombre, ciudad, estadio, logo)
VALUES
('Sultanes de Monterrey', 'Monterrey',
 'Estadio Mobil Super',
 './resources/Logos/logoSultan.png'),

('Saraperos de Saltillo', 'Saltillo',
 'Estadio Francisco I. Madero',
 './resources/Logos/logoSarape.png'),

('Toros de Tijuana', 'Tijuana',
 'Estadio Chevron',
 './resources/Logos/logoToros.png'),

('Algodoneros de Union Laguna', 'Torreon',
 'Estadio de la Revolucion',
 './resources/Logos/logoUnion.png');
 
 
 
SELECT
    e.nombre AS equipo,
    es.temporada,
    es.juegos_jugados,
    es.juegos_ganados,
    es.juegos_perdidos,
    es.carreras_anotadas,
    es.carreras_recibidas,
    ROUND(
        es.juegos_ganados /
        NULLIF(es.juegos_jugados, 0),
        3
    ) AS porcentaje
FROM estadisticas_equipos es
INNER JOIN equipos e
    ON es.id_equipo = e.id_equipo
WHERE es.temporada = 2025
ORDER BY porcentaje DESC;


SELECT * FROM equipos;

SELECT * FROM estadisticas_equipos;

INSERT INTO estadisticas_equipos (
    id_equipo,
    temporada,
    juegos_jugados,
    juegos_ganados,
    juegos_perdidos
)
SELECT
    id_equipo, 2025, 92, 55, 37
FROM equipos
WHERE nombre = 'Sultanes de Monterrey';

INSERT INTO estadisticas_equipos (
    id_equipo,
    temporada,
    juegos_jugados,
    juegos_ganados,
    juegos_perdidos
)
SELECT
    id_equipo, 2025, 92, 54, 38
FROM equipos
WHERE nombre = 'Toros de Tijuana';

INSERT INTO estadisticas_equipos (
    id_equipo,
    temporada,
    juegos_jugados,
    juegos_ganados,
    juegos_perdidos
)
SELECT
    id_equipo, 2025, 92, 50, 42
FROM equipos
WHERE nombre = 'Algodoneros de Union Laguna';

INSERT INTO estadisticas_equipos (
    id_equipo,
    temporada,
    juegos_jugados,
    juegos_ganados,
    juegos_perdidos
)
SELECT
    id_equipo, 2025, 92, 43, 49
FROM equipos
WHERE nombre = 'Saraperos de Saltillo';

SELECT
    p.fecha,
    local.nombre AS equipo_local,
    visitante.nombre AS equipo_visitante,
    p.carreras_local,
    p.carreras_visitante,
    p.estadio
FROM partidos p
INNER JOIN equipos local
    ON p.id_local = local.id_equipo
INNER JOIN equipos visitante
    ON p.id_visitante = visitante.id_equipo
WHERE p.temporada = 2025
ORDER BY p.fecha DESC;



USE BATTEAMX;

INSERT INTO partidos (
    temporada,
    fecha,
    id_local,
    id_visitante,
    carreras_local,
    carreras_visitante,
    estadio
)
SELECT
    2025,
    datos.fecha,
    local.id_equipo,
    visitante.id_equipo,
    datos.carreras_local,
    datos.carreras_visitante,
    datos.estadio
FROM (
    SELECT
        '2025-07-21' AS fecha,
        'Saraperos de Saltillo' AS local,
        'Sultanes de Monterrey' AS visitante,
        7 AS carreras_local,
        6 AS carreras_visitante,
        'Estadio Francisco I. Madero' AS estadio

    UNION ALL SELECT
        '2025-07-30',
        'Algodoneros de Union Laguna',
        'Toros de Tijuana',
        4, 3,
        'Estadio de la Revolucion'

    UNION ALL SELECT
        '2025-07-11',
        'Sultanes de Monterrey',
        'Toros de Tijuana',
        3, 2,
        'Walmart Park'

    UNION ALL SELECT
        '2025-07-27',
        'Toros de Tijuana',
        'Saraperos de Saltillo',
        2, 4,
        'Estadio Chevron'

    UNION ALL SELECT
        '2025-07-27',
        'Sultanes de Monterrey',
        'Algodoneros de Union Laguna',
        11, 6,
        'Walmart Park'

    UNION ALL SELECT
        '2025-08-06',
        'Algodoneros de Union Laguna',
        'Saraperos de Saltillo',
        6, 0,
        'Estadio de la Revolucion'
) AS datos
INNER JOIN equipos local
    ON local.nombre = datos.local
INNER JOIN equipos visitante
    ON visitante.nombre = datos.visitante
WHERE NOT EXISTS (
    SELECT 1
    FROM partidos p
    WHERE p.temporada = 2025
      AND p.fecha = datos.fecha
      AND p.id_local = local.id_equipo
      AND p.id_visitante = visitante.id_equipo
);


CREATE TABLE coleccion(
	id_col INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user INT NOT NULL,
    id_card INT NOT NULL,
    
    FOREIGN KEY (id_user) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_card) REFERENCES tarjetas(id_tarjeta),
	CONSTRAINT uq_card UNIQUE (id_user, id_card)
);

insert into coleccion(id_user, id_card) values (1,1);

select * from coleccion;

truncate table coleccion;
