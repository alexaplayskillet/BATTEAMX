<?php
session_start();
require_once "./PHP/conexion.php";
require_once "./PHP/funciones_tarjetas.php";

$equipos = [
    'sultanes'  => ['nombre' => 'Sultanes de Monterrey', 'mascota' => 'Perro Sultán', 'glb' => './resources/mascotas/Sultanes/sultanes.glb'],
    'saraperos' => ['nombre' => 'Saraperos de Saltillo', 'mascota' => 'Kike Conejo', 'glb' => './resources/mascotas/Saraperos/saraperos.glb'],
    'algodoneros' => ['nombre' => 'Algodoneros de Union Laguna', 'mascota' => 'Pollo Algodonero', 'glb' => './resources/mascotas/UnionLaguna/algodoneros.glb'],
    'toros' => ['nombre' => 'Toros de Tijuana', 'mascota' => 'Torín Toro', 'glb' => './resources/mascotas/Toros/toros.glb'],
];

$id = $_GET['equipo'] ?? '';
if (!isset($equipos[$id])) {
    header('Location: escaneo.html');
    exit;
}
$equipo = $equipos[$id];

// ===== recompensa: se elige la tarjeta, pero se guarda con el botón =====
$premio = null;
$con_sesion = isset($_SESSION['id_usuario']);
$equipo_completo = false;

if ($con_sesion) {
    $uid = (int)$_SESSION['id_usuario'];
    $clave = 'pendiente_' . $id; // $id ya está validado contra $equipos
    $pend = $_SESSION[$clave] ?? null;

    if ($pend && !usuario_tiene_tarjeta($cone, $uid, (int)$pend['id_tarjeta'])) {
        $premio = $pend; // recarga: se muestra la misma tarjeta pendiente
    } else {
        $premio = elegir_tarjeta_nueva($cone, $uid, $id);
        $_SESSION[$clave] = $premio; // null si ya completó el equipo
    }
    $equipo_completo = ($premio === null);
}  
?>

<!DOCTYPE HTML>
<HTML>
    <HEAD>
        <title>Resultado del Escaneo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="./resources/ionicons/css/ionicons.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800&display=swap" rel="stylesheet">
        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/distribucion.css">
        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/fondo2.css">
        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/escaneo.css">
        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/result-escan.css">
    </HEAD>
    <BODY class="pagina-escaneo">

       
        <div class="fondo-difuminado"></div>

        <button class="btn-volver" onclick="window.history.back()">
            <i class="icon ion-md-arrow-back"></i> VOLVER
        </button>

        <DIV class="resultado-contenedor">
            <DIV CLASS="resultado-fila">
            <DIV class="resultado-tarjeta">

                <!-- Aqui ira el modelo 3D  -->
                <DIV class="resultado-visor-ar">
                    <!--<img id="mascotaImagen" src="./resources/mascotas/perritoSultan.png" alt="Mascota escaneada" class="mascota-imagen">-->
                    <a-scene embedded vr-mode-ui="enabled: false">
                        <a-gltf-model id="modeloMascota" src="<?= htmlspecialchars($equipo['glb']) ?>"
                                    position="0 0 -3" scale="3 3 3"></a-gltf-model>
                    </a-scene>
                    <DIV class="resultado-aro-brillo"></DIV>
                </DIV>

                <h2 id="mascotaNombre" class="resultado-nombre">
                    <i class="icon ion-md-star"></i> <?= htmlspecialchars($equipo['mascota']) ?><i class="icon ion-md-star"></i>
                </h2>
                <p id="mascotaEquipo" class="resultado-equipo"><?= htmlspecialchars($equipo['nombre']) ?></p>

            </DIV>
            <?php if ($premio): ?>
    <DIV class="resultado-recompensa">
        <img src="./PHP/tarjeta.php?id=<?= (int)$premio['id_tarjeta'] ?>"
             alt="Tarjeta de <?= htmlspecialchars($equipo['nombre']) ?>">
        <p>¡Encontraste una tarjeta de <?= htmlspecialchars($equipo['nombre']) ?>!
           Pulsa «Guardar en mi colección».</p>
    </DIV>
<?php elseif ($equipo_completo): ?>
    <DIV class="resultado-recompensa">
        <p>Ya tienes todas las tarjetas de <?= htmlspecialchars($equipo['nombre']) ?>.</p>
    </DIV>
<?php elseif (!$con_sesion): ?>
    <DIV class="resultado-recompensa">
        <p>Inicia sesión para ganar la tarjeta de este equipo.</p>
    </DIV>
<?php endif; ?>
</DIV>
            <DIV class="resultado-botones">

                <a href="historiaEquipo.html?equipo=<?= urlencode($id) ?>" class="btn-resultado btn-outline">
                    <i class="icon ion-md-search"></i> VER HISTORIA DEL EQUIPO
                </a>
                <!--Boton final pero comentado para realizar pruebas
                <button id="btnVerCoincidencias" class="btn-resultado btn-outline">
                    <i class="icon ion-md-search"></i> VER COINCIDENCIAS
                </button>
                -->
                <button id="btnReproducir" class="btn-resultado btn-outline">
                    <i class="icon ion-md-arrow-dropright-circle"></ion-icon></i> REPRODUCIR ANIMACIÓN
                </button>
                <button id="btnDetener" class="btn-resultado btn-outline">
                    <i class="icon ion-md-arrow-dropright-circle"></ion-icon></i> DETENER ANIMACIÓN
                </button>
                <button id="btnConfeti" class="btn-resultado btn-outline">
                    <i class="icon ion-md-arrow-dropright-circle"></ion-icon></i> MOSTRAR CONFETI
                </button>
                <button id="btnGuardarColeccion" class="btn-resultado btn-outline"
        data-equipo="<?= htmlspecialchars($id) ?>"
        <?= $premio ? '' : 'disabled' ?>>
    <i class="icon ion-md-bookmark"></i> GUARDAR EN MI COLECCIÓN
</button>
<p id="msgGuardado" class="msg-guardado" role="status"></p>
            </DIV>

        </DIV>
    
    <script src="./LIBS/aframe.min.js"></script>
    <script src="./LIBS/aframe-extras.min.js"></script>
    <script src="./LIBS/confetti.browser.min.js"></script>
    <script src="./JS/confeti.js"></script>
    <script src="./JS/resultado-escaneo.js"></script>
   
    </BODY>
</HTML>