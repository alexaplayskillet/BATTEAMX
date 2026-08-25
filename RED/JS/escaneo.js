const video = document.getElementById('videoCamara');
const canvas = document.getElementById('canvasProcesamiento');
const contexto = canvas.getContext('2d', { willReadFrequently: true });
const resultadoDiv = document.getElementById('resultadoEscaneo');
const btnActivar = document.getElementById('btnActivarCamara');

let escaneando = false;

btnActivar.addEventListener('click', activarCamara);

async function activarCamara() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' } // usa la camara trasera si existe
        });

        video.srcObject = stream;
        await video.play();

        btnActivar.innerHTML = '<i class="icon ion-md-checkmark"></i> CÁMARA ACTIVA';
        btnActivar.disabled = true;

        escaneando = true;
        requestAnimationFrame(procesarFrame);

    } catch (error) {
        resultadoDiv.textContent = 'No se pudo acceder a la cámara. Revisa los permisos.';
        console.error('Error al acceder a la camara:', error);
    }
}

function procesarFrame() {
    if (!escaneando) return;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imagenData = contexto.getImageData(0, 0, canvas.width, canvas.height);
        const codigoQR = jsQR(imagenData.data, imagenData.width, imagenData.height);

        if (codigoQR) {
            resultadoDiv.textContent = `Código detectado: ${codigoQR.data}`;

            // Aqui va el backend para conectar la base de datos 
            // 
        }
    }

    requestAnimationFrame(procesarFrame);
}