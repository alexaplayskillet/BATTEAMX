
document.addEventListener("DOMContentLoaded", function () {

    const visor = document.getElementById("visorAR");
    const escena = document.querySelector(".escaneo-ar");
    const btnActivar = document.getElementById("btnActivarCamara");
    const resultadoDiv = document.getElementById("resultadoEscaneo");

    if (!visor || !escena || !btnActivar || !resultadoDiv) {
        return;
    }

    let vistaCamara = null;
    let camaraPreparada = false;

    function buscarVideoAR() {
        return [...document.querySelectorAll("video")]
            .find(video => video.srcObject instanceof MediaStream);
    }

    function prepararVista() {

        if (camaraPreparada) return;

        const videoOriginal = buscarVideoAR();

        if (!videoOriginal) return;

        vistaCamara = document.createElement("video");

        vistaCamara.autoplay = true;
        vistaCamara.muted = true;
        vistaCamara.playsInline = true;
        vistaCamara.className = "camara-vista-visor";
        vistaCamara.srcObject = videoOriginal.srcObject;

        visor.prepend(vistaCamara);

        videoOriginal.style.setProperty(
            "visibility", "hidden", "important"
        );

        camaraPreparada = true;

        vistaCamara.play().catch(console.error);

        btnActivar.innerHTML =
            '<i class="icon ion-md-checkmark"></i> CÁMARA ACTIVA';

        btnActivar.disabled = true;

        resultadoDiv.textContent =
            "Apunta la cámara hacia la tarjeta";
    }

    const observer = new MutationObserver(prepararVista);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    const intervalo = setInterval(function () {
        prepararVista();

        if (camaraPreparada) {
            clearInterval(intervalo);
            observer.disconnect();
        }
    }, 500);

    btnActivar.addEventListener("click", prepararVista);

    escena.addEventListener("camera-error", function () {
        resultadoDiv.textContent =
            "No se pudo acceder a la cámara. Revisa los permisos.";
    });

});
