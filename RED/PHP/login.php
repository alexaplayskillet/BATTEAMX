<?php
    session_start();//para recordar quién inició sesión
    //que incluya la conexion antes de hacer nada
    include("conexion.php");

    //revisar si el formulario se envio
    if (isset($_POST['INGRESAR'])){
        //recupero los datos y quito espacios
        $usuario = trim($_POST['usuario'] ?? '');
        $password = $_POST['password'] ?? '';

        //validar que no esten vacios los inputs
        if ($usuario === '' || $password === ''){
            header("Location: ../login.html?error=vacios");
            exit();
        }

        //busco al usuario y traigo su contraseña encriptada
        $consulta = mysqli_prepare($cone, "SELECT Id_usuario, Contrasena FROM usuarios WHERE Usuario = ?");
        mysqli_stmt_bind_param($consulta, "s", $usuario);
        mysqli_stmt_execute($consulta);
        mysqli_stmt_bind_result($consulta, $id, $hash);

        //si el usuario existe y la contraseña coincide con el hash
        if (mysqli_stmt_fetch($consulta) && password_verify($password, $hash)){
            $_SESSION['id_usuario'] = $id;
            $_SESSION['usuario'] = $usuario;
            header("Location: ../index.html");
            exit();
        }

        //si llegó aquí, el usuario no existe o la contraseña es incorrecta
        header("Location: ../login.html?error=incorrecto");
        exit();
    }

    //si alguien entra directo a login.php sin enviar el formulario
    header("Location: ../login.html");
    exit();
?>