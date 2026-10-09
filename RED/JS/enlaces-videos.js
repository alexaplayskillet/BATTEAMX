
document.addEventListener("DOMContentLoaded", () => {

    const enlaces = document.querySelectorAll(
        ".pagina-videos .video-card .play-btn"
    );

    enlaces.forEach(enlace => {
        const urlOriginal = enlace.getAttribute("href");

        if (!urlOriginal) return;

        try {
            const url = new URL(urlOriginal, window.location.href);

            let videoId = null;

            if (
                url.hostname === "youtube.com" ||
                url.hostname === "www.youtube.com" ||
                url.hostname === "m.youtube.com"
            ) {
                videoId = url.searchParams.get("v");

                if (!videoId && url.pathname.startsWith("/shorts/")) {
                    videoId = url.pathname.split("/")[2];
                }
            }

            if (url.hostname === "youtu.be") {
                videoId = url.pathname.split("/")[1];
            }

            if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
                return;
            }

            enlace.href =
                "filtros.html?video=" + encodeURIComponent(videoId);

            enlace.removeAttribute("target");
            enlace.removeAttribute("rel");

        } catch (error) {
            console.warn("Enlace de video no válido:", urlOriginal);
        }
    });

});
