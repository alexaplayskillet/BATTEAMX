<?php
session_start();
require_once __DIR__ . "/funciones_tarjetas.php";
header("Content-Type: application/json; charset=utf-8");

if (!isset($_SESSION['id_usuario'])) {
    http_response_code(403);
    echo json_encode(["ok" => false, "error" => "sin_sesion"]);
    exit();
}

$uid = (int)$_SESSION['id_usuario'];
$equipo = $_POST['equipo'] ?? '';
$clave = 'pendiente_' . preg_replace('/[^a-z0-9_]/i', '', $equipo);

// solo se guarda la tarjeta que el servidor eligió; el cliente no manda ningún id
$pend = $_SESSION[$clave] ?? null;
if (!$pend) {
    http_response_code(409);
    echo json_encode(["ok" => false, "error" => "nada_pendiente"]);
    exit();
}

$nueva = guardar_en_coleccion($cone, $uid, (int)$pend['id_tarjeta']);
unset($_SESSION[$clave]);

echo json_encode(["ok" => true, "nueva" => $nueva]);