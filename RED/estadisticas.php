<?php
require_once __DIR__ . "/PHP/consultar_estadisticas.php";
require_once __DIR__ . "/PHP/consultar_partidos.php";
?>


<!DOCTYPE HTML>
<HTML>
    <HEAD>
        <title>Estadisticas</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="./resources/ionicons/css/ionicons.min.css" rel="stylesheet">
			<link rel="preconnect" href="https://fonts.googleapis.com">
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
            <link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">

        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/distribucion.css">
        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/fondo.css">
        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/movil.css">
        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/menus.css">
        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/posts.css">
        <link rel="stylesheet" href="./CSS/estadisticas.css">
        <LINK REL="STYLESHEET" TYPE="TEXT/CSS" HREF="./CSS/footer.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@1.4.0/dist/driver.css">
        <link rel="stylesheet" href="./CSS/tour.css">
    </HEAD>
    <BODY>
        <div class="fondo-fijo">
            <div class="glow"></div>
            <div class="grano"></div>

            <div class="lineas">
                <div class="linea l-verde l1"></div>
                <div class="linea l-verde l7"></div>
                <div class="linea l-roja  l2"></div>
                <div class="linea l-roja  l3"></div>
                <div class="linea l-azul  l4"></div>
                <div class="linea l-azul  l5"></div>
                <div class="linea l-roja  l6"></div>
                <div class="linea l-verde l8"></div>
            </div>

            <div class="vineta"></div>

            <div class="particulas">
                <div class="particula" style="width:3px; height:3px; top:78%; left:12%; animation-duration:6s;   animation-delay:0s;"></div>
                <div class="particula" style="width:2px; height:2px; top:65%; left:22%; animation-duration:7.5s; animation-delay:1.2s;"></div>
                <div class="particula" style="width:4px; height:4px; top:90%; left:35%; animation-duration:5.5s; animation-delay:.5s;"></div>
                <div class="particula" style="width:2px; height:2px; top:60%; left:8%;  animation-duration:8s;   animation-delay:2s;"></div>
                <div class="particula" style="width:3px; height:3px; top:70%; left:48%; animation-duration:6.5s; animation-delay:.8s;"></div>
                <div class="particula" style="width:2px; height:2px; top:50%; left:60%; animation-duration:7s;   animation-delay:1.6s;"></div>
                <div class="particula" style="width:3px; height:3px; top:95%; left:65%; animation-duration:6s;   animation-delay:3s;"></div>
                <div class="particula" style="width:2px; height:2px; top:80%; left:75%; animation-duration:9s;   animation-delay:.2s;"></div>
            </div>
        </div>

     <DIV CLASS="menu">
            <ul class="menulist">
                <li><a href="index.html"><i class="icon ion-md-home"></i> Inicio</a></li>
                <li><a href="estadisticas.php"><i class="icon ion-md-stats"></i> Estadisticas</a></li>
                <li><a href="videos.html"><i class="icon ion-md-videocam"></i> Videos</a></li>
                <li><a href="trivia.html"><i class="icon ion-md-bulb"></i> Trivia</a></li>
                <li><a href="escaneo.html"><i class="icon ion-md-qr-scanner"></i> Escaneo</a></li>
                <li><a href="juego.html"><i class="icon ion-md-game-controller-b"></i> Minijuego</a></li>
                <li><a href="#" class="abrir-ayuda"><i class="icon ion-md-help-circle"></i> Ayuda</a></li>
            </ul>
        </DIV>
        
        <DIV CLASS="menu2">
            <ul class="menulist">
                <li>Perfil</li>
                <li>Configuracion</li>
            </ul>
            AQUI VAN LAS CONFIGURACIONES DEL PERFIL
        </DIV>

        <DIV CLASS="title">
            <button id="toggleMenu" class="hamburger" accesskey="M">☰</button>
           <img src="./resources/Logo.png"
     alt="Logo BatteaMx"
     class="titulo-imagen logo-oscuro">

<img src="./resources/logoModoclaro.png"
     alt="Logo BatteaMx"
     class="titulo-imagen logo-claro">

             <ul class="menuhor">
                <li><a href="index.html"><i class="icon ion-md-home"></i> Inicio</a></li>
                <li><a href="estadisticas.php"><i class="icon ion-md-stats"></i> Estadisticas</a></li>
                <li><a href="videos.html"><i class="icon ion-md-videocam"></i> Videos</a></li>
                <li><a href="trivia.html"><i class="icon ion-md-bulb"></i> Trivia</a></li>
                <li><a href="escaneo.html"><i class="icon ion-md-qr-scanner"></i> Escaneo</a></li>
                <li><a href="juego.html"><i class="icon ion-md-game-controller-b"></i> Minijuego</a></li>
                <li><a href="#" class="abrir-ayuda"><i class="icon ion-md-help-circle"></i> Ayuda</a></li>
            </ul>
            
           
<div class="theme-toggle">

    <input type="checkbox"
           id="themeSwitch"
           class="theme-toggle-input">

    <label for="themeSwitch" class="theme-toggle-track">

        <span class="theme-toggle-thumb">

            <svg class="theme-toggle-icon icon-luna"
                 viewBox="0 0 24 24"
                 fill="currentColor">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>

            <svg class="theme-toggle-icon icon-sol"
                 viewBox="0 0 24 24"
                 fill="currentColor">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"/>
            </svg>

        </span>

        <span class="theme-toggle-texto texto-claro">
            MODO OSCURO
        </span>

        <span class="theme-toggle-texto texto-oscuro">
            MODO CLARO
        </span>

    </label>

</div>

            
        
<a href="config.php" class="profile">
    <img
        src="./PHP/foto.php"
        alt="Foto de perfil del usuario"
        class="profile-img"
        onerror="this.onerror=null; this.src='./resources/usuario.png';"
    >
</a>

        <!-- cerrado provicional
            <button class="profile">
                <img src="./resources/usuario.png" alt="Perfil de usuario" class="profile-img">
            </button>-->

        </DIV>

        <DIV CLASS="body">
            <main class="ctr w100 estadisticas-contenido">
                <header class="estadisticas-encabezado">
                    <h1 class="titulo-historia titulo-centrado">ESTAS SON LAS <span class="verde">ESTAD</span>IST<span class="rojo">ICAS</span></h1>
                    <p class="estadisticas-subtitulo">Conoce las posiciones y los enfrentamientos de tus equipos favoritos de la LMB.</p>
                </header>

                <section class="estadisticas-seccion" aria-labelledby="titulo-posiciones">
                    <h2 class="estadisticas-seccion-titulo" id="titulo-posiciones">Tabla de posiciones · 2025</h2>
                    <div class="estadisticas-panel">
                        <p class="estadisticas-panel-intro">Comparativa de los cuatro equipos seleccionados de BATTEAMX.</p>
                        <div class="estadisticas-tabla-scroll">
                            <table class="estadisticas-tabla">
                                <thead><tr><th>Equipo</th><th>JJ</th><th>JG</th><th>JP</th><th>PCT</th></tr></thead>
                                <tbody>
                                    <?php if (!empty($estadisticas)): ?>
                                        <?php foreach ($estadisticas as $indice => $equipo): ?>
                                            <tr>
                                                <td><div class="estadisticas-equipo-celda">
                                                    <span class="estadisticas-posicion"><?= $indice + 1 ?></span>
                                                    <img class="estadisticas-logo-tabla" src="<?= htmlspecialchars($equipo['logo'] ?? '', ENT_QUOTES, 'UTF-8') ?>" alt="">
                                                    <span><?= htmlspecialchars($equipo['nombre'], ENT_QUOTES, 'UTF-8') ?></span>
                                                </div></td>
                                                <td><?= (int)$equipo['juegos_jugados'] ?></td>
                                                <td><?= (int)$equipo['juegos_ganados'] ?></td>
                                                <td><?= (int)$equipo['juegos_perdidos'] ?></td>
                                                <td class="estadisticas-porcentaje"><?= $equipo['porcentaje'] === null ? '—' : number_format((float)$equipo['porcentaje'], 3) ?></td>
                                            </tr>
                                        <?php endforeach; ?>
                                    <?php else: ?>
                                        <tr><td colspan="5">No hay estadísticas registradas para 2025.</td></tr>
                                    <?php endif; ?>
                                </tbody>
                            </table>
                        </div>
                        <p class="estadisticas-nota">JJ: Juegos jugados · JG: Ganados · JP: Perdidos · PCT: Porcentaje de victorias. Datos cargados en BATTEAMX, pendientes de verificación final.</p>
                    </div>
                </section>

                <section class="estadisticas-seccion" aria-labelledby="titulo-enfrentamientos">
                    <h2 class="estadisticas-seccion-titulo" id="titulo-enfrentamientos">Enfrentamientos · 2025</h2>
                    <?php if (!empty($partidos)): ?>
                        <div class="estadisticas-partidos-grid">
                            <?php foreach ($partidos as $partido): ?>
                                <?php
                                    $marcadorLocal = $partido['carreras_local'];
                                    $marcadorVisitante = $partido['carreras_visitante'];
                                    $localGana = $marcadorLocal !== null && $marcadorVisitante !== null && (int)$marcadorLocal > (int)$marcadorVisitante;
                                    $visitanteGana = $marcadorLocal !== null && $marcadorVisitante !== null && (int)$marcadorVisitante > (int)$marcadorLocal;
                                ?>
                                <article class="estadisticas-panel estadisticas-partido">
                                    <div class="estadisticas-partido-top">
                                        <span class="estadisticas-etiqueta">Temporada 2025</span>
                                        <time class="estadisticas-fecha" datetime="<?= htmlspecialchars($partido['fecha'], ENT_QUOTES, 'UTF-8') ?>"><?= date('d/m/Y', strtotime($partido['fecha'])) ?></time>
                                    </div>
                                    <div class="estadisticas-marcador">
                                        <div class="estadisticas-lado <?= $visitanteGana ? 'estadisticas-ganador' : '' ?>">
                                            <img class="estadisticas-logo-partido" src="<?= htmlspecialchars($partido['logo_visitante'] ?? '', ENT_QUOTES, 'UTF-8') ?>" alt="">
                                            <span class="estadisticas-nombre"><?= htmlspecialchars($partido['equipo_visitante'], ENT_QUOTES, 'UTF-8') ?></span>
                                            <span class="estadisticas-condicion">Visitante</span>
                                        </div>
                                        <div class="estadisticas-resultado" aria-label="Marcador">
                                            <span class="estadisticas-puntos <?= $visitanteGana ? 'estadisticas-ganador' : '' ?>"><?= $marcadorVisitante === null ? '—' : (int)$marcadorVisitante ?></span>
                                            <span class="estadisticas-guion">:</span>
                                            <span class="estadisticas-puntos <?= $localGana ? 'estadisticas-ganador' : '' ?>"><?= $marcadorLocal === null ? '—' : (int)$marcadorLocal ?></span>
                                        </div>
                                        <div class="estadisticas-lado <?= $localGana ? 'estadisticas-ganador' : '' ?>">
                                            <img class="estadisticas-logo-partido" src="<?= htmlspecialchars($partido['logo_local'] ?? '', ENT_QUOTES, 'UTF-8') ?>" alt="">
                                            <span class="estadisticas-nombre"><?= htmlspecialchars($partido['equipo_local'], ENT_QUOTES, 'UTF-8') ?></span>
                                            <span class="estadisticas-condicion">Local</span>
                                        </div>
                                    </div>
                                    <div class="estadisticas-partido-bottom"><i class="icon ion-md-pin" aria-hidden="true"></i><span><?= htmlspecialchars($partido['estadio'], ENT_QUOTES, 'UTF-8') ?></span></div>
                                </article>
                            <?php endforeach; ?>
                        </div>
                    <?php else: ?>
                        <div class="estadisticas-panel estadisticas-vacio">No hay partidos registrados para 2025.</div>
                    <?php endif; ?>
                </section>
            </main>
        </DIV>
    <FOOTER class="footer-battea">

    <DIV class="footer-contenido">

        <DIV class="footer-columna footer-info">

            <h2 class="footer-logo">
                BATTEA<span>MX</span>
            </h2>

            <DIV class="footer-redes">

                <a href="https://www.facebook.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Facebook">
                    <i class="icon ion-logo-facebook"></i>
                </a>

                <a href="https://www.instagram.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Instagram">
                    <i class="icon ion-logo-instagram"></i>
                </a>

                <a href="https://www.youtube.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="YouTube">
                    <i class="icon ion-logo-youtube"></i>
                </a>

            </DIV>
              
<DIV class="footer-contacto">

    <h3 class="footer-titulo-contacto">CONTÁCTANOS</h3>

    <DIV class="footer-integrante">

        <h4>Arantza De La Vega</h4>
        <span class="footer-rol">Diseñadora UI/UX y Artista 3D</span>

        <a href="arantza.deg@unal.edu.mx">
            <i class="icon ion-md-mail"></i>
           arantza.deg@uanl.edu.mx
        </a>

        <a href="tel:+528343094868">
            <i class="icon ion-md-call"></i>
            +52 83 4309 4868
        </a>

    </DIV>

    <DIV class="footer-integrante">

        <h4>Alexandra Cardenas</h4>
        <span class="footer-rol">Desarrolladora Web y Artista 3D</span>

        <a href="correo2@ejemplo.com">
            <i class="icon ion-md-mail"></i>
            correo2@ejemplo.com
        </a>

        <a href="tel:+528100000002">
            <i class="icon ion-md-call"></i>
            +52 81 0000 0002
        </a>

    </DIV>


</DIV>


        </DIV>

        <DIV class="footer-columna">

            <h3 class="footer-titulo">EXPLORA</h3>

            <ul class="footer-enlaces">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="estadisticas.php">Estadísticas</a></li>
                <li><a href="videos.html">Videos</a></li>
                <li><a href="trivia.html">Trivia</a></li>
                <li><a href="juego.html">Minijuego</a></li>
            </ul>

        </DIV>

        <DIV class="footer-columna">

            <h3 class="footer-titulo">MÁS SOBRE BATTEAMX</h3>

            <ul class="footer-enlaces">
                <li><a href="index.html">Historia del béisbol</a></li>
                <li><a href="estadisticas.php">Equipos mexicanos</a></li>
                <li><a href="escaneo.html">Escaneo</a></li>
                <li><a href="#" class="abrir-ayuda">Ayuda</a></li>
            </ul>

        </DIV>

    </DIV>

    <button class="footer-subir"
            id="btnSubir"
            aria-label="Volver arriba">
        <i class="icon ion-md-arrow-up"></i>
    </button>

    </FOOTER>

    <!-- Ayuda flotante de Estadisticas -->
    <div class="ayuda-overlay" id="ayudaOverlay">
        <div class="ayuda-modal" role="dialog" aria-modal="true" aria-labelledby="tituloAyuda">
            <button class="ayuda-cerrar" id="cerrarAyuda" aria-label="Cerrar ayuda">
                <i class="icon ion-md-close"></i>
            </button>
            <div class="ayuda-icono"><i class="icon ion-md-help-circle"></i></div>
            <h2 id="tituloAyuda">Ayuda de Estadisticas</h2>
            <p>Aprende a interpretar las posiciones de los equipos, los resultados y los enfrentamientos de la temporada.</p>
            <button class="ayuda-iniciar" id="iniciarTour">
                <i class="icon ion-md-play"></i> Comenzar recorrido
            </button>
            <span class="ayuda-nota">Puedes cerrar el recorrido cuando quieras.</span>
        </div>
    </div>

    <script src="./JS/buttons.js" defer></script>
<script src="./JS/tema.js" defer></script>
<script src="./JS/tarjetaCarrusel.js" defer></script>

<script src="https://cdn.jsdelivr.net/npm/driver.js@1.4.0/dist/driver.js.iife.js" defer></script>

<script src="./JS/scroll_reveal.js" defer></script>
<script src="./JS/tour.js" defer></script>
</BODY>
</HTML>
