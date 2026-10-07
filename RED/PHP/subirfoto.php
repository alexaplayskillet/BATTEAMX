<?php
    session_start();
    include("conexion.php");

    // si no hay sesión, mandarlo al login
    if (!isset($_SESSION['id_usuario'])){
        header("Location: ../login.html");
        exit();
    }

    if (isset($_POST['CARGAR'])){
        $id = $_SESSION['id_usuario'];

        if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK){
            $archivo = $_FILES['imagen'];

            // validar tamaño (máx 2 MB)
            if ($archivo['size'] > 2 * 1024 * 1024){
                header("Location: ../config.php?error=pesada");
                exit();
            }

            // validar que sea una imagen real
            $permitidos = ['image/jpeg', 'image/png', 'image/webp'];
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mime = finfo_file($finfo, $archivo['tmp_name']);
            finfo_close($finfo);

            if (!in_array($mime, $permitidos)){
                header("Location: ../config.php?error=formato");
                exit();
            }

            // leer los bytes de la imagen
            $contenido = file_get_contents($archivo['tmp_name']);

            $stm = mysqli_prepare($cone, "UPDATE usuarios SET foto = ?, foto_tipo = ? WHERE Id_usuario = ?");
            $null = null;
            mysqli_stmt_bind_param($stm, "bsi", $null, $mime, $id);
            mysqli_stmt_send_long_data($stm, 0, $contenido);

            if (mysqli_stmt_execute($stm) && mysqli_stmt_affected_rows($stm) > 0){
                header("Location: ../config.php?ok=1");
            } else {
                header("Location: ../config.php?error=bd");
            }
            exit();
        }

        // no se seleccionó archivo o hubo error de subida
        header("Location: ../config.php?error=sinarchivo");
        exit();
    }
?>