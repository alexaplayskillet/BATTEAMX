<?php
    session_start();
    include("conexion.php");

    if (!isset($_SESSION['id_usuario'])){
        http_response_code(403);
        exit();
    }

    $id = $_SESSION['id_usuario'];
    $stm = mysqli_prepare($cone, "SELECT foto, foto_tipo FROM usuarios WHERE Id_usuario = ?");
    mysqli_stmt_bind_param($stm, "i", $id);
    mysqli_stmt_execute($stm);
    mysqli_stmt_bind_result($stm, $foto, $tipo);
    mysqli_stmt_fetch($stm);

    if ($foto){
        header("Content-Type: " . $tipo);
        echo $foto;
    } else {
        // sin foto: mandar la imagen por defecto
        header("Location: ../resources/usuario.png");
    }
?>