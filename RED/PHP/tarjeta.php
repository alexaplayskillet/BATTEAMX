<?php
    // uso: PHP/tarjeta.php?id=3  -> devuelve la imagen de esa tarjeta
   /* include("conexion.php");

    $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
    if (!$id){
        http_response_code(400);
        exit();
    }

    $stm = mysqli_prepare($cone, "SELECT imagen FROM tarjetas WHERE id_tarjeta = ?");
    mysqli_stmt_bind_param($stm, "i", $id);
    mysqli_stmt_execute($stm);
    mysqli_stmt_bind_result($stm, $imagen);
    $hay = mysqli_stmt_fetch($stm);

    header('Cache-Control: public, max-age=86400');

    if ($hay && $imagen){
        header("Content-Type: image/png");
        echo $imagen;
    } else {
        // sin imagen en la BD: usa el archivo de la carpeta (1.png, 2.png...)
        header("Location: ../resources/tarjetas/" . $id . ".png");
    }*/
    session_start();
    // uso: PHP/tarjeta.php?id=3  -> devuelve la imagen de esa tarjeta
    require_once "conexion.php";

    $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
    if (!$id){
        http_response_code(400);
        exit();
    }

    $stm = mysqli_prepare($cone, "SELECT imagen FROM tarjetas WHERE id_tarjeta = ?");
    mysqli_stmt_bind_param($stm, "i", $id);
    mysqli_stmt_execute($stm);
    mysqli_stmt_bind_result($stm, $imagen);
    $hay = mysqli_stmt_fetch($stm);
    mysqli_stmt_close($stm);

    if ($hay && $imagen){
        $finfo = new finfo(FILEINFO_MIME_TYPE);
        header("Content-Type: " . $finfo->buffer($imagen));
        header("Content-Length: " . strlen($imagen));
        header("X-Content-Type-Options: nosniff");
        header("Cache-Control: public, max-age=86400");
        echo $imagen;
    } else {
        // sin imagen en la BD: usa el archivo de la carpeta (1.png, 2.png...)
        header("Cache-Control: no-cache");
        header("Location: ../resources/tarjetas/" . $id . ".png");
    }
    exit();

?>