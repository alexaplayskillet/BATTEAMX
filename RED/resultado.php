<?php
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
                <button id="btnGuardarColeccion" class="btn-resultado btn-outline">
                    <i class="icon ion-md-bookmark"></i> GUARDAR EN MI COLECCIÓN
                </button>
            </DIV>

        </DIV>
    <SCRIPT SRC="./JS/resultado-escaneo.js"></SCRIPT>
    <script src="./JS/confeti.js"></script>
    <script src="./LIBS/aframe.min.js"></script>
    <script src="./LIBS/aframe-extras.min.js"></script>
    <script src="./LIBS/confetti.browser.min.js"></script>
    <script src="./JS/resultado-escaneo.js"></script>
    </BODY>
    <FOOTER>
        
    </FOOTER>
</HTML>