
document.addEventListener("DOMContentLoaded", () => {

    const videoWrapper = document.getElementById("videoWrapper");

    const botonesFiltro = document.querySelectorAll(
        ".pagina-reproductor .btn-filtro"
    );

    const botonLimpiar = document.querySelector(
        ".pagina-reproductor .btn-limpiar"
    );

    if (!videoWrapper || !botonesFiltro.length || !botonLimpiar) {
        return;
    }

    const filtrosDisponibles = [
        "filtro-desenfoque",
        "filtro-termico",
        "filtro-verde",
        "filtro-retro"
    ];

    function limpiarFiltros() {

        videoWrapper.classList.remove(...filtrosDisponibles);

        botonesFiltro.forEach(boton => {
            boton.classList.remove("activo");
            boton.setAttribute("aria-pressed", "false");
        });

    }

    botonesFiltro.forEach(boton => {

        boton.setAttribute("aria-pressed", "false");

        boton.addEventListener("click", () => {

            const filtro = boton.dataset.filtro;

            if (!filtro) return;

            const claseFiltro = "filtro-" + filtro;

            if (!filtrosDisponibles.includes(claseFiltro)) {
                return;
            }

            const estabaActivo = boton.classList.contains("activo");

            limpiarFiltros();

            if (!estabaActivo) {
                videoWrapper.classList.add(claseFiltro);
                boton.classList.add("activo");
                boton.setAttribute("aria-pressed", "true");
            }

        });

    });

    botonLimpiar.addEventListener("click", limpiarFiltros);

});
