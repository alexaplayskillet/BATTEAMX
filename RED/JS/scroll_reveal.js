
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // CONFIGURACIÓN GENERAL
    // =====================================

    const reducirMovimiento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const selectores = [

        // INDEX
        ".historia-header",
        ".w50 > p",
        ".historia-imagenes",
        ".img-lateral",
        ".seccion-equipos > .titulo-historia",
        ".equipo-card",
        ".tarjetas-encabezado",
        ".carrusel-tarjetas",

        // ESTADÍSTICAS
        ".estadisticas-encabezado",
        ".estadisticas-seccion-titulo",
        ".estadisticas-seccion > .estadisticas-panel",
        ".estadisticas-partido",
        ".estadisticas-vacio",

        // VIDEOS
        ".pagina-videos .titulo-videos",
        ".pagina-videos .parrafo-videos",
        ".pagina-videos .carrusel-contenedor",

        // FOOTER
        ".footer-columna"
    ];

    const elementos = document.querySelectorAll(
        selectores.join(", ")
    );

    // =====================================
    // FUNCIÓN PARA MOSTRAR ELEMENTOS
    // =====================================

    function mostrarElemento(elemento) {

        if (!elemento) return;

        elemento.classList.add("visible");

        if (observer) {
            observer.unobserve(elemento);
        }
    }

    // =====================================
    // COMPATIBILIDAD CON DRIVER.JS
    // =====================================

    window.mostrarElementoTour = function(selector) {

        const elemento = typeof selector === "string"
            ? document.querySelector(selector)
            : selector;

        if (!elemento) return;

        mostrarElemento(elemento);

        // Mostrar contenedores animados
        let padre = elemento.parentElement;

        while (padre) {

            if (padre.classList.contains("scroll-reveal")) {
                mostrarElemento(padre);
            }

            padre = padre.parentElement;
        }
    };

    // =====================================
    // OBSERVADOR DE SCROLL
    // =====================================

    let observer = null;

    if (
        !reducirMovimiento &&
        "IntersectionObserver" in window
    ) {

        observer = new IntersectionObserver((entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {
                    mostrarElemento(entrada.target);
                }

            });

        }, {
            threshold: 0,
            rootMargin: "0px 0px -30px 0px"
        });
    }

    // =====================================
    // ANIMACIÓN DE BIENVENIDA
    // =====================================

    const bienvenida = document.querySelectorAll(
        ".hero-texto .titulo-principal, " +
        ".hero-texto .w80, " +
        ".hero-animacion"
    );

    if (!reducirMovimiento) {

        bienvenida.forEach((elemento, indice) => {

            elemento.classList.add("scroll-reveal");

            elemento.style.transitionDelay =
                `${indice * 180}ms`;
        });
    }

    // Mostrar bienvenida al cargar
    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            bienvenida.forEach((elemento) => {
                elemento.classList.add("visible");
            });

        });

    });

    // =====================================
    // PREPARAR ELEMENTOS DE SCROLL
    // =====================================

    elementos.forEach((elemento) => {

        if (reducirMovimiento || !observer) {

            elemento.classList.add("visible");
            return;
        }

        elemento.classList.add("scroll-reveal");

        observer.observe(elemento);
    });

    // =====================================
    // MOSTRAR ELEMENTOS DURANTE EL TOUR
    // =====================================

    document.addEventListener(
        "driverTourMostrar",
        (evento) => {

            if (evento.detail?.selector) {
                window.mostrarElementoTour(
                    evento.detail.selector
                );
            }
        }
    );

});
