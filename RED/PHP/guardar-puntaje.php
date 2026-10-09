<?php
    session_start();
    include("conexion.php");
    header('Content-Type: application/json; charset=utf-8');

    // solo usuarios con sesión iniciada
    if (!isset($_SESSION['id_usuario'])){
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'sin_sesion']);
        exit();
    }

    $id = $_SESSION['id_usuario'];

    // guardar el puntaje si llegó por POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        $puntos = filter_var($_POST['puntos'] ?? null, FILTER_VALIDATE_INT, [
            'options' => ['min_range' => 0, 'max_range' => 1000]
        ]);

        if ($puntos === false){
            http_response_code(400);
            echo json_encode(['ok' => false, 'error' => 'puntos_invalidos']);
            exit();
        }

        $insertar = mysqli_prepare($cone, "INSERT INTO puntajes (Id_usuario, puntos) VALUES (?, ?)");
        mysqli_stmt_bind_param($insertar, "ii", $id, $puntos);

        if (!mysqli_stmt_execute($insertar)){
            http_response_code(500);
            echo json_encode(['ok' => false, 'error' => 'bd']);
            exit();
        }
    }

    // devolver el mejor puntaje del usuario
    $consulta = mysqli_prepare($cone, "SELECT MAX(puntos) FROM puntajes WHERE Id_usuario = ?");
    mysqli_stmt_bind_param($consulta, "i", $id);
    mysqli_stmt_execute($consulta);
    mysqli_stmt_bind_result($consulta, $mejor);
    mysqli_stmt_fetch($consulta);

    echo json_encode(['ok' => true, 'mejor' => (int)$mejor]);
?>