
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector(
        ".pagina-videos .carrusel-contenedor"
    );

    const track = contenedor?.querySelector(".carrusel-track");
    const izquierda = contenedor?.querySelector(".flecha-izq");
    const derecha = contenedor?.querySelector(".flecha-der");

    if (!track || !izquierda || !derecha) return;

    const originales = Array.from(
        track.querySelectorAll(".video-card")
    );

    if (originales.length < 2) return;

    // La tarjeta grande ahora solo se activa con hover.
    originales.forEach(tarjeta => {
        tarjeta.classList.remove("video-card-grande");
    });

    // Creamos una ventana para ocultar los extremos.
    let ventana = track.parentElement;

    if (!ventana.classList.contains("carrusel-ventana")) {
        ventana = document.createElement("div");
        ventana.className = "carrusel-ventana";
        track.parentNode.insertBefore(ventana, track);
        ventana.appendChild(track);
    }

    const cantidad = originales.length;
    const copias = Math.min(cantidad, 5);

    // Copias al principio.
    originales.slice(-copias).forEach(tarjeta => {
        const clon = tarjeta.cloneNode(true);
        clon.classList.remove("video-card-grande");
        clon.setAttribute("aria-hidden", "true");
        clon.querySelectorAll("a, button").forEach(elemento => {
            elemento.tabIndex = -1;
        });
        track.insertBefore(clon, track.firstChild);
    });

    // Copias al final.
    originales.slice(0, copias).forEach(tarjeta => {
        const clon = tarjeta.cloneNode(true);
        clon.classList.remove("video-card-grande");
        clon.setAttribute("aria-hidden", "true");
        clon.querySelectorAll("a, button").forEach(elemento => {
            elemento.tabIndex = -1;
        });
        track.appendChild(clon);
    });

    const tarjetas = Array.from(
        track.querySelectorAll(".video-card")
    );

    let indice = copias;
    let moviendo = false;

    function posicionar(animar = true) {
        const tarjeta = tarjetas[indice];
        if (!tarjeta) return;

        const centroTarjeta =
            tarjeta.offsetLeft + tarjeta.offsetWidth / 2;

        const centroVentana = ventana.clientWidth / 2;

        track.style.transition = animar
            ? "transform 0.45s ease"
            : "none";

        track.style.transform =
            `translate3d(${centroVentana - centroTarjeta}px, 0, 0)`;
    }

    function mover(direccion) {
        if (moviendo) return;

        moviendo = true;
        indice += direccion;
        posicionar(true);
    }

    derecha.addEventListener("click", () => mover(1));
    izquierda.addEventListener("click", () => mover(-1));

    track.addEventListener("transitionend", evento => {
        if (
            evento.target !== track ||
            evento.propertyName !== "transform"
        ) return;

        if (indice >= cantidad + copias) {
            indice -= cantidad;
            posicionar(false);
        } else if (indice < copias) {
            indice += cantidad;
            posicionar(false);
        }

        moviendo = false;
    });

    window.addEventListener("resize", () => {
        posicionar(false);
    });

    // Comenzamos mostrando la primera tarjeta.
    posicionar(false);
});
