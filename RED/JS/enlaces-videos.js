
document.addEventListener("DOMContentLoaded", () => {

    const carrusel = document.querySelector(
        ".pagina-videos .carrusel-track"
    );

    if (!carrusel) {
        console.error("No se encontro el carrusel de videos");
        return;
    }

    // Relacion entre miniaturas y archivos MP4
    const videos = {
        "TkjgRKC6O9Q": 1,
        "edlICqWt7Ww": 2,
        "WrbC-dlFscc": 3,
        "NP4Ena_0elw": 4,
        "RGYF-9z3nhI": 5,
        "DBQ4zsYzbjg": 6,
        "HVAoQrLhZ7A": 7,
        "ISAHilze5Vw": 8,
        "cW-9lNeG6Bc": 9,
        "rzR8_xEWmPA": 10,
        "DV9e_LqYXrQ": 11,
        "MegI5_GHdN8": 12,
        "4jlIgfAeC0I": 13
    };

    // Obtener el numero a partir de la miniatura
    function obtenerNumeroVideo(tarjeta) {

        const imagen = tarjeta.querySelector(".video-media");

        if (!imagen) return null;

        const coincidencia = imagen.src.match(
            /youtube\.com\/vi\/([^/]+)\//
        );

        if (!coincidencia) return null;

        return videos[coincidencia[1]] || null;
    }

    // Configurar los enlaces de todas las tarjetas
    function configurarTarjetas() {

        const tarjetas = carrusel.querySelectorAll(".video-card");

        tarjetas.forEach(tarjeta => {

            const numero = obtenerNumeroVideo(tarjeta);

            if (!numero) return;

            const ruta = `./filtros.html?video=${numero}`;

            tarjeta.dataset.video = numero;
            tarjeta.style.cursor = "pointer";

            const botonPlay = tarjeta.querySelector(".play-btn");

            if (botonPlay) {
                botonPlay.href = ruta;
                botonPlay.removeAttribute("target");
                botonPlay.removeAttribute("rel");
            }

        });
    }

    configurarTarjetas();

    // Capturar el clic antes de que se abra el MP4
    carrusel.addEventListener("click", (evento) => {

        const tarjeta = evento.target.closest(".video-card");

        if (!tarjeta) return;

        const numero = obtenerNumeroVideo(tarjeta);

        if (!numero) return;

        evento.preventDefault();
        evento.stopPropagation();

        window.location.assign(
            `./filtros.html?video=${numero}`
        );

    }, true);

    console.log("Enlaces de videos configurados correctamente");

});
