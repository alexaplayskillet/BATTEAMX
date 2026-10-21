
<?php

// Reutilizar la conexion existente
require_once __DIR__ . "/conexion.php";

// Consultar partidos de la temporada 2025
$sqlPartidos = "
    SELECT
        p.id_partido,
        p.fecha,
        p.estadio,
        p.carreras_local,
        p.carreras_visitante,
        local.nombre AS equipo_local,
        local.logo AS logo_local,
        visitante.nombre AS equipo_visitante,
        visitante.logo AS logo_visitante
    FROM partidos p
    INNER JOIN equipos local
        ON p.id_local = local.id_equipo
    INNER JOIN equipos visitante
        ON p.id_visitante = visitante.id_equipo
    WHERE p.temporada = 2025
    ORDER BY p.fecha DESC, p.id_partido DESC
";

$resultadoPartidos = mysqli_query($cone, $sqlPartidos);

if (!$resultadoPartidos) {
    die("Error al consultar partidos: " . mysqli_error($cone));
}

$partidos = mysqli_fetch_all(
    $resultadoPartidos,
    MYSQLI_ASSOC
);
?>
