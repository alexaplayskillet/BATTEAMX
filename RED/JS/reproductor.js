document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("mainVideo");
    const wrapper = document.getElementById("videoWrapper");
    const btnPlay = document.getElementById("btnPlayPause");
    const btnMute = document.getElementById("btnMute");
    const btnFull = document.getElementById("btnFullscreen");
    const barra = document.getElementById("barraProgreso");
    const tActual = document.getElementById("tiempoActual");
    const tTotal = document.getElementById("tiempoTotal");

    if (!video) return;

    const fmt = s => {
        if (!isFinite(s)) return "0:00";
        const m = Math.floor(s / 60);
        const seg = Math.floor(s % 60).toString().padStart(2, "0");
        return `${m}:${seg}`;
    };

    const setIcono = (btn, clase) => {
        const i = btn.querySelector("i");
        if (i) i.className = "icon " + clase;
    };

    function alternarPlay() {
        if (video.paused) {
            video.play().catch(e => console.error("Error al reproducir:", e));
        } else {
            video.pause();
        }
    }

    btnPlay.addEventListener("click", alternarPlay);
    video.addEventListener("click", alternarPlay);

    video.addEventListener("play", () => setIcono(btnPlay, "ion-md-pause"));
    video.addEventListener("pause", () => setIcono(btnPlay, "ion-md-play"));
    video.addEventListener("ended", () => setIcono(btnPlay, "ion-md-play"));

    video.addEventListener("loadedmetadata", () => {
        tTotal.textContent = fmt(video.duration);
    });

    video.addEventListener("timeupdate", () => {
        tActual.textContent = fmt(video.currentTime);
        if (video.duration) barra.value = (video.currentTime / video.duration) * 100;
    });

    barra.addEventListener("input", () => {
        if (video.duration) video.currentTime = (barra.value / 100) * video.duration;
    });

    btnMute.addEventListener("click", () => {
        video.muted = !video.muted;
        setIcono(btnMute, video.muted ? "ion-md-volume-off" : "ion-md-volume-high");
    });

    btnFull.addEventListener("click", () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            wrapper.requestFullscreen?.();
        }
    });
});