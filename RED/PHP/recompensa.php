<?php
session_start();
require_once __DIR__ . "/funciones_tarjetas.php";
header("Content-Type: application/json");

const PUNTOS_TRIVIA = 7; // debe coincidir con PUNTOS_PARA_TARJETA del JS

if (!isset($_SESSION['id_usuario'])) {
    http_response_code(403);
    echo json_encode(["ok" => false, "error" => "sin_sesion"]);
    exit();
}
$id_usuario = (int)$_SESSION['id_usuario'];

$origen = $_POST['origen'] ?? '';
$puntos = filter_var($_POST['puntos'] ?? null, FILTER_VALIDATE_INT);

if ($origen !== 'trivia' || $puntos === false || $puntos < PUNTOS_TRIVIA || $puntos > 10) {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "no_cumple"]);
    exit();
}

$tarjeta = otorgar_tarjeta($cone, $id_usuario);
if (!$tarjeta) {
    http_response_code(500);
    echo json_encode(["ok" => false]);
    exit();
}

echo json_encode([
    "ok"       => true,
    "id"       => (int)$tarjeta['id_tarjeta'],
    "equipo"   => $tarjeta['equipo'],
    "nueva"    => $tarjeta['nueva'],
    "completa" => $tarjeta['completa'],
    "src"      => "./PHP/tarjeta.php?id=" . (int)$tarjeta['id_tarjeta']
]);