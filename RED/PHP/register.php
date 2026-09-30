<?php
    //que incluya la conexion antes de hacer nada
    include("conexion.php");

    //revisa si el formulario se envió, con el name del boton
    if (isset($_POST['Registrar'])){
        //recupero los datos y quito espacios
        $usuario = trim($_POST['usuario'] ?? '');
        $email = trim($_POST['email'] ?? '');
        $password = $_POST['password'] ?? '';

        //validar que no esten vacios los inputs
        if ($usuario === '' || $email === '' || $password === ''){
            header("Location: ../register.html?error=vacios");
            exit();
        }

        //validar formato (las mismas reglas que el JS)
        if (!preg_match('/^[a-zA-Z0-9_-]{4,16}$/', $usuario) || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 4){
            header("Location: ../register.html?error=formato");
            exit();
        }

        //revisar que el usuario o el correo no existan ya
        $consulta = mysqli_prepare($cone, "SELECT Id_usuario FROM usuarios WHERE Usuario = ? OR Correo = ?");
        mysqli_stmt_bind_param($consulta, "ss", $usuario, $email);
        mysqli_stmt_execute($consulta);
        mysqli_stmt_store_result($consulta);

        if (mysqli_stmt_num_rows($consulta) > 0){
            header("Location: ../register.html?error=existe");
            exit();
        }

        //encriptar la contraseña y guardar
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $insertar = mysqli_prepare($cone, "INSERT INTO usuarios (Usuario, Correo, Contrasena) VALUES (?, ?, ?)");
        mysqli_stmt_bind_param($insertar, "sss", $usuario, $email, $hash);
        mysqli_stmt_execute($insertar);

        //todo bien, mando al login
        header("Location: ../login.html");
        exit();
    }
?>