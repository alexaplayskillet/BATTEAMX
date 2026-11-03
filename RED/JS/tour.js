
document.addEventListener("DOMContentLoaded", () => {

    //ventana ayuda

    const ayudaOverlay = document.getElementById("ayudaOverlay");
    const cerrarAyuda = document.getElementById("cerrarAyuda");
    const iniciarTour = document.getElementById("iniciarTour");

    const pagina = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const esEstadisticas = pagina === "estadisticas.php" ||
                          pagina === "estadisticas.html";

    // recorrido inicio

    const pasosInicio = [
        {
            element: ".title",
            popover: {
                title: "Menu de navegacion",
                description: "Desde esta barra puedes acceder a las diferentes secciones de BATTEAMX, como Estadisticas, Videos, Trivia, Escaneo y Minijuego.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: ".equipos-grid",
            popover: {
                title: "Explora nuestros equipos",
                description: "En esta seccion encontraras los cuatro equipos seleccionados de la Liga Mexicana de Beisbol. Cada uno cuenta con su propia historia.",
                side: "top",
                align: "center"
            }
        },
        {
            element: ".equipo-card:first-child .btn-historia",
            popover: {
                title: "Consulta la historia de cada equipo",
                description: "Haz clic en el boton Ver historia del equipo que prefieras. Accederas a una pagina con informacion sobre su fundacion, trayectoria y momentos importantes.",
                side: "top",
                align: "center"
            }
        },
        {
            element: ".theme-toggle",
            popover: {
                title: "Modo claro y oscuro",
                description: "Personaliza la apariencia de BATTEAMX cambiando entre el modo claro y el modo oscuro.",
                side: "bottom",
                align: "end"
            }
        },
        {
            element: ".profile",
            popover: {
                title: "Tu perfil",
                description: "Desde aqui puedes acceder a la configuracion de tu cuenta.",
                side: "bottom",
                align: "end"
            }
        }
    ];

    //recorrido estadisticas

    const pasosEstadisticas = [
        {
            element: ".estadisticas-encabezado",
            popover: {
                title: "Bienvenido a Estadisticas",
                description: "Aqui puedes consultar el rendimiento de los equipos seleccionados de BATTEAMX y sus enfrentamientos durante la temporada 2025.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: "#titulo-posiciones",
            popover: {
                title: "Tabla de posiciones",
                description: "Esta seccion presenta la clasificacion de los cuatro equipos. Puedes comparar sus resultados y observar quien ocupa los primeros lugares.",
                side: "bottom",
                align: "start"
            }
        },
        {
            element: ".estadisticas-tabla tbody",
            popover: {
                title: "Posiciones de los equipos",
                description: "Cada fila representa un equipo. El numero de la izquierda indica su posicion dentro de esta comparativa.",
                side: "top",
                align: "start"
            }
        },
        {
            element: ".estadisticas-tabla thead",
            popover: {
                title: "¿Que significan JJ, JG, JP y PCT?",
                description: "JJ son los juegos jugados; JG, los juegos ganados; JP, los juegos perdidos; y PCT, la proporcion de victorias del equipo.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: ".estadisticas-tabla th:last-child",
            popover: {
                title: "Porcentaje de victorias",
                description: "PCT permite comparar el rendimiento de los equipos. Por ejemplo, un valor de 0.598 equivale aproximadamente al 59.8% de victorias.",
                side: "bottom",
                align: "end"
            }
        },
        {
            element: "#titulo-enfrentamientos",
            popover: {
                title: "Enfrentamientos",
                description: "Debajo de la tabla encontraras los partidos registrados de la temporada 2025.",
                side: "bottom",
                align: "start"
            }
        },
        {
            element: ".estadisticas-partido",
            popover: {
                title: "Tarjetas de partidos",
                description: "Cada tarjeta corresponde a un encuentro e incluye los equipos participantes y la informacion del resultado.",
                side: "top",
                align: "center"
            }
        },
        {
            element: ".estadisticas-marcador",
            popover: {
                title: "Marcador del partido",
                description: "Aqui se muestran las carreras anotadas por el equipo visitante y el local. El equipo con mas carreras es el ganador.",
                side: "top",
                align: "center"
            }
        },
        {
            element: ".estadisticas-partido-top",
            popover: {
                title: "Fecha del encuentro",
                description: "En la parte superior de la tarjeta puedes consultar la temporada y la fecha en que se disputo el partido.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: ".estadisticas-partido-bottom",
            popover: {
                title: "Estadio del encuentro",
                description: "En la parte inferior se indica el estadio donde se disputo el partido.",
                side: "top",
                align: "center"
            }
        }
    ];

    //recorrido videos

    const pasosVideos = [
        {
            element: ".titulo-videos",
            popover: {
                title: "Videos de BATTEAMX",
                description: "En esta seccion encontraras momentos destacados, campeonatos y jugadas importantes de los equipos del beisbol mexicano.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: ".carrusel-contenedor",
            popover: {
                title: "Carrusel de videos",
                description: "Explora nuestra coleccion de videos. Desliza el carrusel para descubrir diferentes partidos y momentos historicos.",
                side: "top",
                align: "center"
            }
        },
        {
            element: ".carrusel-contenedor .flecha-der",
            popover: {
                title: "Explorar mas videos",
                description: "Utiliza la flecha derecha para avanzar y descubrir mas videos de la coleccion.",
                side: "left",
                align: "center"
            }
        },
        {
            element: ".carrusel-contenedor .flecha-izq",
            popover: {
                title: "Regresar en el carrusel",
                description: "Utiliza la flecha izquierda para volver a los videos anteriores.",
                side: "right",
                align: "center"
            }
        },
        {
            element: ".carrusel-contenedor",
            popover: {
                title: "Selecciona un video y aplica filtros",
                description: "Haz clic en cualquiera de los videos del carrusel para acceder a una pagina donde podras aplicar diferentes filtros y personalizar la visualizacion de los videos.",
                side: "top",
                align: "center"
            }
        }
    ];

    //recorrido trivia

    const pasosTrivia = [
        {
            element: ".titulo-historia",
            popover: {
                title: "Demuestra tus conocimientos",
                description: "Pon a prueba cuanto sabes sobre beisbol mexicano respondiendo nuestra trivia de 10 preguntas.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: ".trivia-puntaje",
            popover: {
                title: "Tu puntaje",
                description: "Consulta tu puntuacion conforme respondes correctamente las preguntas.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: ".trivia-progreso",
            popover: {
                title: "Progreso de la trivia",
                description: "Observa en que pregunta te encuentras y cuanto te falta para terminar.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: "#preguntaTexto",
            popover: {
                title: "Lee la pregunta",
                description: "Lee atentamente cada pregunta antes de elegir una respuesta.",
                side: "top",
                align: "center"
            }
        },
        {
            element: "#opcionesContenedor",
            popover: {
                title: "Selecciona una respuesta",
                description: "Elige una de las cuatro opciones disponibles.",
                side: "top",
                align: "center"
            }
        },
        {
            element: "#btnSiguiente",
            popover: {
                title: "Siguiente pregunta",
                description: "Despues de responder, presiona este boton para continuar.",
                side: "top",
                align: "center"
            }
        }
    ];

      //recorrido minijuego

    const pasosMinijuego = [
        {
            element: ".minijuego-titulo",
            popover: {
                title: "Demuestra tus habilidades",
                description: "Pon a prueba tus reflejos en nuestro minijuego de bateo.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: ".minijuego-instrucciones",
            popover: {
                title: "Como jugar",
                description: "Presiona clic, toca la pantalla o usa la barra espaciadora en el momento justo. Tienes 3 intentos.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: ".minijuego-campo",
            popover: {
                title: "Campo de bateo",
                description: "Observa el aro rojo e intenta batear cuando coincida con el circulo.",
                side: "top",
                align: "center"
            }
        },
        {
            element: ".hud",
            popover: {
                title: "Puntos y vidas",
                description: "Consulta los puntos que has conseguido y las vidas restantes.",
                side: "bottom",
                align: "center"
            }
        },
        {
            element: "#pantalla",
            popover: {
                title: "Comienza a jugar",
                description: "Presiona JUGAR para iniciar tu partida.",
                side: "top",
                align: "center"
            }
        }
    ];

    //recorrido perfil

    const pasosPerfil = [
        {
            element: ".pagina-perfil .perfil-card",
            popover: {
                title: "Mi perfil",
                description: "Consulta tu informacion de usuario, carga o cambia tu foto, cierra sesion y encuentra la opcion de escaneo.",
                side: "right",
                align: "center"
            }
        },
        {
            element: ".pagina-perfil .tarjetas-card",
            popover: {
                title: "Mis tarjetas coleccionadas",
                description: "Consulta tus tarjetas y utiliza las flechas del carrusel para explorar tu coleccion.",
                side: "left",
                align: "center"
            }
        }
    ];

    //seleccionar el recorrido

    const esPerfil = document.body.classList.contains("pagina-perfil");
    const esVideos = pagina === "videos.html";
    const esTrivia = pagina === "trivia.html";

    const esMinijuego = pagina === "juego.html" ||
                        pagina === "minijuego.html";

    let pasos;

    if (esPerfil) {
        pasos = pasosPerfil;
    } else if (esEstadisticas) {
        pasos = pasosEstadisticas;
    } else if (esVideos) {
        pasos = pasosVideos;
    } else if (esTrivia) {
        pasos = pasosTrivia;
    } else if (esMinijuego) {
        pasos = pasosMinijuego;
    } else {
        pasos = pasosInicio;
    }

 

    const pasosDisponibles = pasos.filter(paso => {
        return document.querySelector(paso.element) !== null;
    });

    //driver js

    let recorrido = null;

    if (
        window.driver?.js?.driver &&
        pasosDisponibles.length > 0
    ) {

        recorrido = window.driver.js.driver({

            showProgress: true,
            progressText: "Paso {{current}} de {{total}}",

            nextBtnText: "Siguiente",
            prevBtnText: "Anterior",
            doneBtnText: "Finalizar",

            popoverClass: "tour-batteamx",

            overlayColor: "#000000",
            overlayOpacity: 0.65,

            stagePadding: 8,
            stageRadius: 10,

            animate: true,
            smoothScroll: true,
            allowClose: true,

            // Compatibilidad con Scroll Reveal
            onHighlightStarted: (elemento) => {

                if (!elemento) return;

                if (
                    typeof window.mostrarElementoTour === "function"
                ) {
                    window.mostrarElementoTour(elemento);
                } else {
                    elemento.classList.add("visible");

                    let padre = elemento.parentElement;

                    while (padre) {
                        if (padre.classList.contains("scroll-reveal")) {
                            padre.classList.add("visible");
                        }
                        padre = padre.parentElement;
                    }
                }
            },

            steps: pasosDisponibles
        });

    } else {
        console.warn(
            "No se pudo preparar el recorrido de ayuda."
        );
    }

    //abrir ventana ayuda

    document.querySelectorAll(".abrir-ayuda").forEach(boton => {

        boton.addEventListener("click", (evento) => {

            evento.preventDefault();

            if (ayudaOverlay) {
                ayudaOverlay.classList.add("activo");
            } else if (recorrido) {
                recorrido.drive();
            }

        });
    });

   //cerrar ventana ayuda

    if (cerrarAyuda && ayudaOverlay) {

        cerrarAyuda.addEventListener("click", () => {
            ayudaOverlay.classList.remove("activo");
        });
    }

    // Cerrar al hacer clic fuera
    if (ayudaOverlay) {

        ayudaOverlay.addEventListener("click", (evento) => {

            if (evento.target === ayudaOverlay) {
                ayudaOverlay.classList.remove("activo");
            }
        });
    }

  //inciar recorrido

    if (iniciarTour) {

        iniciarTour.addEventListener("click", () => {

            if (ayudaOverlay) {
                ayudaOverlay.classList.remove("activo");
            }

            if (recorrido) {
                recorrido.drive();
            } else {
                console.warn(
                    "El recorrido no está disponible. Revisa Driver.js."
                );
            }

        });
    }

  //Cerrar ventana

    document.addEventListener("keydown", (evento) => {

        if (
            evento.key === "Escape" &&
            ayudaOverlay &&
            ayudaOverlay.classList.contains("activo")
        ) {
            ayudaOverlay.classList.remove("activo");
        }
    });

});
