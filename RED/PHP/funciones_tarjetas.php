<?php
require_once __DIR__ . "/conexion.php";

function otorgar_tarjeta(mysqli $cone, int $id_usuario, ?string $equipo = null, bool $solo_equipo = false): ?array {

    for ($i = 0; $i < 3; $i++) {

        $sql = "SELECT t.id_tarjeta, t.equipo
                FROM tarjetas t
                LEFT JOIN coleccion c
                       ON c.id_card = t.id_tarjeta AND c.id_user = ?
                WHERE c.id_card IS NULL"
             . ($equipo !== null ? " AND t.equipo = ?" : "")
             . " ORDER BY RAND() LIMIT 1";

        $stm = mysqli_prepare($cone, $sql);
        if ($equipo !== null) mysqli_stmt_bind_param($stm, "is", $id_usuario, $equipo);
        else                  mysqli_stmt_bind_param($stm, "i",  $id_usuario);
        mysqli_stmt_execute($stm);
        $tarjeta = mysqli_fetch_assoc(mysqli_stmt_get_result($stm));
        mysqli_stmt_close($stm);

        if (!$tarjeta) break; // no le faltan (de ese equipo)

        $ins = mysqli_prepare($cone, "INSERT IGNORE INTO coleccion (id_user, id_card) VALUES (?, ?)");
        mysqli_stmt_bind_param($ins, "ii", $id_usuario, $tarjeta['id_tarjeta']);
        mysqli_stmt_execute($ins);
        $guardada = mysqli_stmt_affected_rows($ins) === 1;
        mysqli_stmt_close($ins);

        if ($guardada) {
            $tarjeta['nueva'] = true;
            $tarjeta['completa'] = false;
            return $tarjeta;
        }
    }

    /** ¿El usuario ya tiene esta tarjeta? */


    // completó el equipo y no es estricto: probar con cualquier equipo
    if ($equipo !== null && !$solo_equipo) {
        return otorgar_tarjeta($cone, $id_usuario);
    }

    // ya tiene todas: una repetida (del equipo si es estricto)
    if ($equipo !== null) {
        $stm = mysqli_prepare($cone, "SELECT id_tarjeta, equipo FROM tarjetas WHERE equipo = ? ORDER BY RAND() LIMIT 1");
        mysqli_stmt_bind_param($stm, "s", $equipo);
        mysqli_stmt_execute($stm);
        $tarjeta = mysqli_fetch_assoc(mysqli_stmt_get_result($stm));
        mysqli_stmt_close($stm);
    } else {
        $res = mysqli_query($cone, "SELECT id_tarjeta, equipo FROM tarjetas ORDER BY RAND() LIMIT 1");
        $tarjeta = mysqli_fetch_assoc($res);
    }

    if (!$tarjeta) return null; // no existen tarjetas de ese equipo
    $tarjeta['nueva'] = false;
    $tarjeta['completa'] = true;
    return $tarjeta;
}


function usuario_tiene_tarjeta(mysqli $cone, int $id_usuario, int $id_tarjeta): bool {
    $stm = mysqli_prepare($cone, "SELECT 1 FROM coleccion WHERE id_user = ? AND id_card = ? LIMIT 1");
    mysqli_stmt_bind_param($stm, "ii", $id_usuario, $id_tarjeta);
    mysqli_stmt_execute($stm);
    $existe = mysqli_fetch_row(mysqli_stmt_get_result($stm)) !== null;
    mysqli_stmt_close($stm);
    return $existe;
}

/** Elige (sin guardar) una tarjeta del equipo que el usuario no tenga. null = ya las tiene todas. */
function elegir_tarjeta_nueva(mysqli $cone, int $id_usuario, string $equipo): ?array {
    $sql = "SELECT t.id_tarjeta, t.equipo
            FROM tarjetas t
            LEFT JOIN coleccion c ON c.id_card = t.id_tarjeta AND c.id_user = ?
            WHERE c.id_card IS NULL AND t.equipo = ?
            ORDER BY RAND() LIMIT 1";
    $stm = mysqli_prepare($cone, $sql);
    mysqli_stmt_bind_param($stm, "is", $id_usuario, $equipo);
    mysqli_stmt_execute($stm);
    $tarjeta = mysqli_fetch_assoc(mysqli_stmt_get_result($stm));
    mysqli_stmt_close($stm);
    return $tarjeta ?: null;
}

/** Guarda la tarjeta. true = se guardó, false = ya la tenía. */
function guardar_en_coleccion(mysqli $cone, int $id_usuario, int $id_tarjeta): bool {
    $ins = mysqli_prepare($cone, "INSERT IGNORE INTO coleccion (id_user, id_card) VALUES (?, ?)");
    mysqli_stmt_bind_param($ins, "ii", $id_usuario, $id_tarjeta);
    mysqli_stmt_execute($ins);
    $guardada = mysqli_stmt_affected_rows($ins) === 1;
    mysqli_stmt_close($ins);
    return $guardada;
}
?>