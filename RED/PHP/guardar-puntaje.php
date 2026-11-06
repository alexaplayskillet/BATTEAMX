<?php
   /* session_start();
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

    echo json_encode(['ok' => true, 'mejor' => (int)$mejor]);*/
  
    session_start();
    require_once "conexion.php";
    require_once "funciones_tarjetas.php";
    header('Content-Type: application/json; charset=utf-8');

    // puntos necesarios para ganar (debe coincidir con PUNTOS_META en juego-bateo.js)
    const PUNTOS_META = 10;

    // solo usuarios con sesión iniciada
    if (!isset($_SESSION['id_usuario'])){
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'sin_sesion']);
        exit();
    }

    $id = $_SESSION['id_usuario'];
    $gano = false;

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

        $gano = ($puntos >= PUNTOS_META);
    }

    // mejor puntaje del usuario
    $consulta = mysqli_prepare($cone, "SELECT MAX(puntos) FROM puntajes WHERE Id_usuario = ?");
    mysqli_stmt_bind_param($consulta, "i", $id);
    mysqli_stmt_execute($consulta);
    mysqli_stmt_bind_result($consulta, $mejor);
    mysqli_stmt_fetch($consulta);
    mysqli_stmt_close($consulta); // se cierra antes de hacer otra consulta con la misma conexión

    $respuesta = ['ok' => true, 'mejor' => (int)$mejor];

    // si ganó, se le premia con una tarjeta al azar
   /* if ($gano){
        $resultado = mysqli_query($cone, "SELECT id_tarjeta, equipo FROM tarjetas ORDER BY RAND() LIMIT 1");
        $fila = $resultado ? mysqli_fetch_assoc($resultado) : null;
        if ($fila){
            $respuesta['tarjeta'] = [
                'id' => (int)$fila['id_tarjeta'],
                'equipo' => $fila['equipo']
            ];
        }
    }*/
            // si ganó, se le premia con una tarjeta que aún no tenga
    if ($gano){
        $tarjeta = otorgar_tarjeta($cone, (int)$id);
        if ($tarjeta){
            $respuesta['tarjeta'] = [
                'id'       => (int)$tarjeta['id_tarjeta'],
                'equipo'   => $tarjeta['equipo'],
                'nueva'    => $tarjeta['nueva'],
                'completa' => $tarjeta['completa']
            ];
        }
    }

    echo json_encode($respuesta);

?>