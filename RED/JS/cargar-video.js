
document.addEventListener("DOMContentLoaded", () => {

    // Catalogo de los 13 videos
    const catalogo = {

        1: {
            titulo: "TOROS DE TIJUANA - CAMPEONATO 2021",
            descripcion: "Revive el campeonato de los Toros de Tijuana en la temporada 2021 de la Liga Mexicana de Béisbol, uno de los grandes momentos de la historia reciente del equipo."
        },

        2: {
            titulo: "SULTANES DE MONTERREY - SERIE DEL REY 2022",
            descripcion: "Disfruta los momentos del quinto juego de la Serie del Rey 2022, donde Sultanes de Monterrey se enfrentó a Leones de Yucatán."
        },

        3: {
            titulo: "ALGODONEROS - SERIE DEL REY 2023",
            descripcion: "Revive la emoción del quinto juego de la Serie del Rey 2023 entre Algodoneros de Unión Laguna y Pericos de Puebla."
        },

        4: {
            titulo: "SARAPEROS VS SULTANES - 2025",
            descripcion: "Un enfrentamiento entre Saraperos de Saltillo y Sultanes de Monterrey, dos equipos representativos del béisbol del norte de México."
        },

        5: {
            titulo: "TOROS DE TIJUANA - SERIE DEL REY 2021",
            descripcion: "Vuelve a disfrutar las emociones del sexto juego de la Serie del Rey 2021, parte de la histórica remontada de Toros de Tijuana."
        },

        6: {
            titulo: "SULTANES VS LEONES - FINAL 2022",
            descripcion: "Los mejores momentos del segundo juego de la Serie del Rey 2022 entre Sultanes de Monterrey y Leones de Yucatán."
        },

        7: {
            titulo: "SULTANES DE MONTERREY VS SARAPEROS",
            descripcion: "Revive las jugadas destacadas del enfrentamiento de 2025 entre Sultanes de Monterrey y Saraperos de Saltillo."
        },

        8: {
            titulo: "SARAPEROS DE SALTILLO VS RIELEROS",
            descripcion: "Disfruta las acciones destacadas de Saraperos de Saltillo durante su enfrentamiento contra Rieleros de Aguascalientes."
        },

        9: {
            titulo: "SULTANES - REMONTADA CONTRA ACEREROS",
            descripcion: "Un emocionante encuentro donde Sultanes de Monterrey consiguió recuperarse en el marcador frente a Acereros de Monclova."
        },

        10: {
            titulo: "SULTANES - SERIE DE CAMPEONATO 2025",
            descripcion: "Revive el camino de Sultanes de Monterrey hacia la Serie de Campeonato durante la postemporada de 2025."
        },

        11: {
            titulo: "TOROS DE TIJUANA VS CALIENTE DE DURANGO",
            descripcion: "Disfruta las jugadas destacadas del enfrentamiento entre Toros de Tijuana y Caliente de Durango durante la temporada 2025."
        },

        12: {
            titulo: "TOROS DE TIJUANA - SERIE DEL REY 2026",
            descripcion: "Revive las acciones del segundo juego de la Serie del Rey 2026."
        },

        13: {
            titulo: "SARAPEROS DE SALTILLO - BICAMPEONATO 2010",
            descripcion: "Recuerda el histórico bicampeonato de Saraperos de Saltillo en 2009 y 2010, uno de los logros más importantes de la franquicia."
        }

    };

    // Obtener el numero del video desde la URL
    const parametros = new URLSearchParams(window.location.search);
    const numeroVideo = Number(parametros.get("video"));

    // Elementos de la pagina
    const video = document.getElementById("mainVideo");
    const titulo = document.getElementById("tituloVideo");
    const descripcion = document.getElementById("descripcionVideo");

    const wrapper = document.getElementById("videoWrapper");
    const youtubeContenedor = document.getElementById("youtubeContenedor");

    if (!video || !titulo || !descripcion || !wrapper) {
        return;
    }

    // Ocultar el reproductor de YouTube anterior
    if (youtubeContenedor) {
        youtubeContenedor.replaceChildren();
        youtubeContenedor.style.display = "none";
    }

    wrapper.classList.remove("video-youtube");

    // Validar el video seleccionado
    if (!Number.isInteger(numeroVideo) ||
        !catalogo[numeroVideo]) {

        titulo.textContent = "SELECCIONA UN VIDEO";

        descripcion.textContent =
            "Regresa al carrusel y selecciona un momento del béisbol mexicano.";

        video.removeAttribute("src");
        video.querySelectorAll("source").forEach(source => {
            source.removeAttribute("src");
        });
        video.load();

        return;
    }

    const datos = catalogo[numeroVideo];

    // Actualizar titulo y descripcion
    titulo.textContent = datos.titulo;
    descripcion.textContent = datos.descripcion;

    // Crear la ruta del video local
    const rutaVideo =
        `./resources/videos/vid${numeroVideo}.mp4`;

    // Actualizar el video MP4
    video.pause();

    const source = video.querySelector("source");

    if (source) {
        source.src = rutaVideo;
    } else {
        video.src = rutaVideo;
    }

    // Eliminar poster anterior si no existe localmente
    video.removeAttribute("poster");

    // Cargar el archivo seleccionado
    video.load();

    // Mostrar el reproductor HTML5
    video.style.display = "block";

    console.log("Video cargado:", rutaVideo);

});
