
<?php


require_once "conexion.php";

// Consultar estadisticas de la temporada 2025
$sql = "
    SELECT
        e.nombre,
        e.logo,
        es.temporada,
        es.juegos_jugados,
        es.juegos_ganados,
        es.juegos_perdidos,
        ROUND(
            es.juegos_ganados /
            NULLIF(es.juegos_jugados, 0),
            3
        ) AS porcentaje
    FROM estadisticas_equipos es
    INNER JOIN equipos e
        ON es.id_equipo = e.id_equipo
    WHERE es.temporada = 2025
    ORDER BY porcentaje DESC
";

$resultado = mysqli_query($cone, $sql);

if (!$resultado) {
    die("Error al consultar estadisticas: "
        . mysqli_error($cone));
}

$estadisticas = mysqli_fetch_all(
    $resultado,
    MYSQLI_ASSOC
);
?>
