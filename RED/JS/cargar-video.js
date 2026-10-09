
document.addEventListener("DOMContentLoaded", () => {

    const catalogo = {
        "TkjgRKC6O9Q": {
            titulo: "TOROS DE TIJUANA - CAMPEONATO 2021",
            descripcion: "Revive el campeonato de los Toros de Tijuana en la temporada 2021 de la Liga Mexicana de Béisbol, uno de los grandes momentos de la historia reciente del equipo."
        },

        "edlICqWt7Ww": {
            titulo: "SULTANES DE MONTERREY - SERIE DEL REY 2022",
            descripcion: "Disfruta los momentos del quinto juego de la Serie del Rey 2022, donde Sultanes de Monterrey se enfrentó a Leones de Yucatán."
        },

        "WrbC-dlFscc": {
            titulo: "ALGODONEROS - SERIE DEL REY 2023",
            descripcion: "Revive la emoción del quinto juego de la Serie del Rey 2023 entre Algodoneros de Unión Laguna y Pericos de Puebla."
        },

        "NP4Ena_0elw": {
            titulo: "SARAPEROS VS SULTANES - 2025",
            descripcion: "Un enfrentamiento entre Saraperos de Saltillo y Sultanes de Monterrey, dos equipos representativos del béisbol del norte de México."
        },

        "RGYF-9z3nhI": {
            titulo: "TOROS DE TIJUANA - SERIE DEL REY 2021",
            descripcion: "Vuelve a disfrutar las emociones del sexto juego de la Serie del Rey 2021, parte de la histórica remontada de Toros de Tijuana."
        },

        "DBQ4zsYzbjg": {
            titulo: "SULTANES VS LEONES - FINAL 2022",
            descripcion: "Los mejores momentos del segundo juego de la Serie del Rey 2022 entre Sultanes de Monterrey y Leones de Yucatán."
        },

        "HVAoQrLhZ7A": {
            titulo: "SULTANES DE MONTERREY VS SARAPEROS",
            descripcion: "Revive las jugadas destacadas del enfrentamiento de 2025 entre Sultanes de Monterrey y Saraperos de Saltillo."
        },

        "ISAHilze5Vw": {
            titulo: "SARAPEROS DE SALTILLO VS RIELEROS",
            descripcion: "Disfruta las acciones destacadas de Saraperos de Saltillo durante su enfrentamiento contra Rieleros de Aguascalientes."
        },

        "cW-9lNeG6Bc": {
            titulo: "SULTANES - REMONTADA CONTRA ACEREROS",
            descripcion: "Un emocionante encuentro donde Sultanes de Monterrey consiguió recuperarse en el marcador frente a Acereros de Monclova."
        },

        "rzR8_xEWmPA": {
            titulo: "SULTANES - SERIE DE CAMPEONATO 2025",
            descripcion: "Revive el camino de Sultanes de Monterrey hacia la Serie de Campeonato durante la postemporada de 2025."
        },

        "DV9e_LqYXrQ": {
            titulo: "TOROS DE TIJUANA VS CALIENTE DE DURANGO",
            descripcion: "Disfruta las jugadas destacadas del enfrentamiento entre Toros de Tijuana y Caliente de Durango durante la temporada 2025."
        },

        "MegI5_GHdN8": {
            titulo: "TOROS DE TIJUANA - SERIE DEL REY 2026",
            descripcion: "Revive las acciones del segundo juego de la Serie del Rey 2026."
        },

        "4jlIgfAeC0I": {
            titulo: "SARAPEROS DE SALTILLO - BICAMPEONATO 2010",
            descripcion: "Recuerda el histórico bicampeonato de Saraperos de Saltillo en 2009 y 2010, uno de los logros más importantes de la franquicia."
        }
    };

    const parametros = new URLSearchParams(window.location.search);
    const videoId = parametros.get("video");

    const contenedor = document.getElementById("youtubeContenedor");
    const wrapper = document.getElementById("videoWrapper");
    const titulo = document.getElementById("tituloVideo");
    const descripcion = document.getElementById("descripcionVideo");

    if (!contenedor || !wrapper || !titulo || !descripcion) {
        return;
    }

    if (!videoId) {
        titulo.textContent = "SELECCIONA UN VIDEO";
        descripcion.textContent =
            "Regresa al carrusel y selecciona un momento del béisbol mexicano.";

        return;
    }

    const datos = catalogo[videoId];

    if (!datos) {
        titulo.textContent = "VIDEO NO DISPONIBLE";
        descripcion.textContent =
            "No encontramos información para el video seleccionado.";

        return;
    }

    titulo.textContent = datos.titulo;
    descripcion.textContent = datos.descripcion;

    const iframe = document.createElement("iframe");

    iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(videoId) +
        "?rel=0&playsinline=1";

    iframe.title = datos.titulo;

    iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );

    iframe.setAttribute("allowfullscreen", "");

    contenedor.replaceChildren(iframe);

    wrapper.classList.add("video-youtube");

    const videoOriginal = document.getElementById("mainVideo");

    if (videoOriginal) {
        videoOriginal.pause();
    }

});
