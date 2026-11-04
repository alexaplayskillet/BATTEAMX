
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Mi Perfil - BatteaMX</title>



    <link href="./resources/ionicons/css/ionicons.min.css" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@1.4.0/dist/driver.css">

    <link rel="stylesheet" href="./CSS/distribucion.css">
    <link rel="stylesheet" href="./CSS/fondo.css">
    <link rel="stylesheet" href="./CSS/movil.css">
    <link rel="stylesheet" href="./CSS/menus.css">
    <link rel="stylesheet" href="./CSS/posts.css">
    <link rel="stylesheet" href="./CSS/tour.css">
    <link rel="stylesheet" href="./CSS/menu_movil.css">
    <link rel="stylesheet" href="./CSS/perfil.css?v=2">
</head>

<body class="pagina-perfil">

    <div class="fondo-fijo">

        <div class="glow"></div>
        <div class="grano"></div>

        <div class="lineas">
            <div class="linea l-verde l1"></div>
            <div class="linea l-verde l7"></div>
            <div class="linea l-roja l2"></div>
            <div class="linea l-roja l3"></div>
            <div class="linea l-azul l4"></div>
            <div class="linea l-azul l5"></div>
            <div class="linea l-roja l6"></div>
            <div class="linea l-verde l8"></div>
        </div>

        <div class="vineta"></div>

        <div class="particulas">
            <div class="particula" style="width:3px;height:3px;top:78%;left:12%;animation-duration:6s;animation-delay:0s;"></div>
            <div class="particula" style="width:2px;height:2px;top:65%;left:22%;animation-duration:7.5s;animation-delay:1.2s;"></div>
            <div class="particula" style="width:4px;height:4px;top:90%;left:35%;animation-duration:5.5s;animation-delay:.5s;"></div>
            <div class="particula" style="width:2px;height:2px;top:60%;left:8%;animation-duration:8s;animation-delay:2s;"></div>
            <div class="particula" style="width:3px;height:3px;top:70%;left:48%;animation-duration:6.5s;animation-delay:.8s;"></div>
            <div class="particula" style="width:2px;height:2px;top:50%;left:60%;animation-duration:7s;animation-delay:1.6s;"></div>
            <div class="particula" style="width:3px;height:3px;top:95%;left:65%;animation-duration:6s;animation-delay:3s;"></div>
            <div class="particula" style="width:2px;height:2px;top:80%;left:75%;animation-duration:9s;animation-delay:.2s;"></div>
        </div>

    </div>

    <div class="menu-overlay" id="menuOverlay"></div>

    <nav class="menu" id="menuMovil" aria-label="Navegación móvil">

        <div class="menu-cabecera">

            <div class="menu-marca">

                <img
                    src="./resources/Logo.png"
                    alt="BatteaMX"
                    class="menu-logo logo-oscuro">

                <img
                    src="./resources/logoModoclaro.png"
                    alt="BatteaMX"
                    class="menu-logo logo-claro">

            </div>

            <button
                type="button"
                id="cerrarMenu"
                class="menu-cerrar"
                aria-label="Cerrar menú">

                <i class="icon ion-md-close"></i>

            </button>

        </div>

        <ul class="menulist">

            <li>
                <a href="index.html">
                    <i class="icon ion-md-home"></i>
                    Inicio
                </a>
            </li>

            <li>
                <a href="estadisticas.php">
                    <i class="icon ion-md-stats"></i>
                    Estadísticas
                </a>
            </li>

            <li>
                <a href="videos.html">
                    <i class="icon ion-md-videocam"></i>
                    Videos
                </a>
            </li>

            <li>
                <a href="trivia.html">
                    <i class="icon ion-md-bulb"></i>
                    Trivia
                </a>
            </li>

            <li>
                <a href="escaneo.html">
                    <i class="icon ion-md-qr-scanner"></i>
                    Escaneo
                </a>
            </li>

            <li>
                <a href="juego.html">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8abf94"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style="display:inline-block;flex-shrink:0;"
                        aria-hidden="true">

                        <path d="M6 12h4M8 10v4"/>

                        <circle
                            cx="15.5"
                            cy="11"
                            r="1"
                            fill="#8abf94"
                            stroke="none"/>

                        <circle
                            cx="18"
                            cy="13.5"
                            r="1"
                            fill="#8abf94"
                            stroke="none"/>

                        <path d="M6.5 6.5h11a4 4 0 0 1 3.9 3.1l1.1 5.2a3 3 0 0 1-4.7 3.1l-2.3-1.8h-7l-2.3 1.8a3 3 0 0 1-4.7-3.1l1.1-5.2a4 4 0 0 1 3.9-3.1z"/>

                    </svg>

                    <span>Minijuego</span>

                </a>
            </li>

            <li>
                <a href="#" class="abrir-ayuda">
                    <i class="icon ion-md-help-circle"></i>
                    Ayuda
                </a>
            </li>

        </ul>

        <div class="menu-inferior">

            <a
                href="config.php"
                class="menu-perfil activo"
                aria-current="page">

                <img
                    src="./PHP/foto.php"
                    alt="Foto de perfil"
                    onerror="this.onerror=null;this.src='./resources/usuario.png';">

                <span>Mi perfil</span>

                <i class="icon ion-md-arrow-forward"></i>

            </a>

            <div class="menu-apariencia">
                <div
                    class="tema-movil-contenedor"
                    id="temaMovil">
                </div>
            </div>

        </div>

    </nav>

    <div class="title">

        <button
            id="toggleMenu"
            class="hamburger"
            type="button"
            aria-label="Abrir menú"
            aria-controls="menuMovil"
            aria-expanded="false">

            <i class="icon ion-md-menu"></i>

        </button>

        <div class="logo-contenedor">

            <img
                src="./resources/Logo.png"
                alt="Logo BatteaMX"
                class="titulo-imagen logo-oscuro">

            <img
                src="./resources/logoModoclaro.png"
                alt="Logo BatteaMX"
                class="titulo-imagen logo-claro">

        </div>

        <ul class="menuhor">

            <li>
                <a href="index.html">
                    <i class="icon ion-md-home"></i>
                    Inicio
                </a>
            </li>

            <li>
                <a href="estadisticas.php">
                    <i class="icon ion-md-stats"></i>
                    Estadísticas
                </a>
            </li>

            <li>
                <a href="videos.html">
                    <i class="icon ion-md-videocam"></i>
                    Videos
                </a>
            </li>

            <li>
                <a href="trivia.html">
                    <i class="icon ion-md-bulb"></i>
                    Trivia
                </a>
            </li>

            <li>
                <a href="escaneo.html">
                    <i class="icon ion-md-qr-scanner"></i>
                    Escaneo
                </a>
            </li>

            <li>
                <a href="juego.html">

                    <i class="icon ion-md-game-controller-b"></i>
                    Minijuego

                </a>
            </li>

            <li>
                <a href="#" class="abrir-ayuda">

                    <i class="icon ion-md-help-circle"></i>
                    Ayuda

                </a>
            </li>

        </ul>

        <div
            id="temaEscritorio"
            class="tema-escritorio-contenedor">

            <div class="theme-toggle">

                <input
                    type="checkbox"
                    id="themeSwitch"
                    class="theme-toggle-input">

                <label
                    for="themeSwitch"
                    class="theme-toggle-track">

                    <span class="theme-toggle-thumb">

                        <svg
                            class="theme-toggle-icon icon-luna"
                            viewBox="0 0 24 24"
                            fill="currentColor">

                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>

                        </svg>

                        <svg
                            class="theme-toggle-icon icon-sol"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round">

                            <circle cx="12" cy="12" r="4"/>

                            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/>

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

        </div>

        <a href="config.php" class="profile">

            <img
                src="./PHP/foto.php"
                alt="Foto de perfil del usuario"
                class="profile-img"
                onerror="this.onerror=null;this.src='./resources/usuario.png';">

        </a>

    </div>

    <main class="body">

        <div class="perfil-layout">

            <section class="perfil-card">

                <h2 class="perfil-titulo">
                    MI PERFIL
                </h2>

                <img
                    src="./PHP/foto.php"
                    alt="Foto de perfil"
                    class="perfil-avatar"
                    onerror="this.onerror=null;this.src='./resources/usuario.png';">

                <h3 class="perfil-nombre">
                    NOMBRE USUARIO
                </h3>

                <div class="perfil-botones-fila">

                    <form
                        action="./PHP/subirfoto.php"
                        method="POST"
                        enctype="multipart/form-data"
                        class="ima">

                        <input
                            type="file"
                            name="imagen"
                            id="imagen"
                            accept="image/*"
                            class="input-oculto">

                        <label
                            for="imagen"
                            class="btn-perfil btn-perfil-verde">

                            <i class="icon ion-md-cloud-upload"></i>

                            <span id="nombre-archivo">
                                CARGAR IMAGEN
                            </span>

                        </label>

                        <button
                            type="submit"
                            class="btn-perfil btn-perfil-verde"
                            name="CARGAR">

                            <i class="icon ion-md-camera"></i>

                            CAMBIAR FOTO DE PERFIL

                        </button>

                    </form>

                </div>

                <div class="perfil-botones-fila">

                    <button
                        type="button"
                        class="btn-perfil btn-perfil-rojo"
                        id="btnCerrarSesion">

                        <i class="icon ion-md-log-out"></i>

                        CERRAR SESIÓN

                    </button>

                    <button
                        type="button"
                        class="btn-perfil btn-perfil-outline"
                        id="btnEscanear">

                        <i class="icon ion-md-qr-scanner"></i>

                        ESCANEAR

                    </button>

                </div>

                <div class="perfil-pelota">
                    <i class="icon ion-md-baseball"></i>
                </div>

            </section>

            <section class="tarjetas-card">

                <h2 class="tarjetas-titulo">
                    MIS TARJETAS COLECCIONADAS
                </h2>

                <div class="tarjetas-carrusel-contenedor">

                    <button
                        type="button"
                        class="carrusel-flecha flecha-izq"
                        aria-label="Tarjeta anterior">

                        <i class="icon ion-md-arrow-back"></i>

                    </button>

                    <div class="tarjetas-track">

                        <div class="tarjeta-coleccion">

                            <img
                                src="./resources/historiaSarape.png"
                                alt="Tarjeta de Saraperos"
                                loading="lazy">

                        </div>

                        <div class="tarjeta-coleccion tarjeta-coleccion-grande">

                            <img
                                src="./resources/historiaToros.png"
                                alt="Tarjeta de Toros"
                                loading="lazy">

                        </div>

                        <div class="tarjeta-coleccion">

                            <img
                                src="./resources/historiaSulta.png"
                                alt="Tarjeta de Sultanes"
                                loading="lazy">

                        </div>

                    </div>

                    <button
                        type="button"
                        class="carrusel-flecha flecha-der"
                        aria-label="Siguiente tarjeta">

                        <i class="icon ion-md-arrow-forward"></i>

                    </button>

                </div>

                <div class="tarjetas-dots">

                    <span class="dot dot-activo"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>

                </div>

            </section>

        </div>

    </main>

    <div
        class="modal-logout"
        id="modalLogout"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tituloLogout">

        <div class="modal-logout-contenido">

            <div class="modal-logout-icono">

                <i class="icon ion-md-log-out"></i>

            </div>

            <h2 id="tituloLogout">
                ¿CERRAR SESIÓN?
            </h2>

            <p>
                ¿Estás seguro de que quieres cerrar tu sesión?
            </p>

            <div class="modal-logout-botones">

                <button
                    type="button"
                    class="btn-cancelar"
                    id="cancelarLogout">

                    CANCELAR

                </button>

                <form
                    action="./PHP/cerrarsesion.php"
                    method="POST">

                    <button
                        type="submit"
                        class="btn-confirmar">

                        CERRAR SESIÓN

                    </button>

                </form>

            </div>

        </div>

    </div>

    <div
        class="ayuda-overlay"
        id="ayudaOverlay">

        <div class="ayuda-modal">

            <button
                class="ayuda-cerrar"
                id="cerrarAyuda"
                type="button"
                aria-label="Cerrar ayuda">

                <i class="icon ion-md-close"></i>

            </button>

            <div class="ayuda-icono">

                <i class="icon ion-md-person"></i>

            </div>

            <h2>
                Conoce tu perfil
            </h2>

            <p>
                Descubre cómo cambiar tu foto,
                consultar tus tarjetas coleccionadas
                y administrar tu sesión en BATTEAMX.
            </p>

            <button
                class="ayuda-iniciar"
                id="iniciarTour"
                type="button">

                <i class="icon ion-md-play"></i>

                Comenzar recorrido

            </button>

            <span class="ayuda-nota">
                Puedes cerrar el recorrido cuando quieras.
            </span>

        </div>

    </div>

    <script src="./JS/buttons.js?v=4" defer></script>
    <script src="./JS/tema.js" defer></script>

    <script
        src="https://cdn.jsdelivr.net/npm/driver.js@1.4.0/dist/driver.js.iife.js"
        defer>
    </script>

    <script src="./JS/tour.js?v=10" defer></script>

</body>

</html>
