/*const modelo = document.getElementById('modeloMascota');
const btnReproducir = document.getElementById('btnReproducir');
let reproduciendo = false;

// Cuando la animación termina, se quita el mixer y el modelo vuelve a su pose original
modelo.addEventListener('animation-finished', () => {
    modelo.removeAttribute('animation-mixer');
    reproduciendo = false;
    btnReproducir.disabled = false;
});

btnReproducir.addEventListener('click', () => {
    if (reproduciendo) return;          // evita que se encimen varios clics
    reproduciendo = true;
    btnReproducir.disabled = true;

    // loop: once = se reproduce una sola vez
    modelo.setAttribute('animation-mixer', 'clip: *; loop: once');

    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
});*/
document.addEventListener('DOMContentLoaded', () => {

    const modelo        = document.getElementById('modeloMascota');
    const btnReproducir = document.getElementById('btnReproducir');
    const btnDetener    = document.getElementById('btnDetener');
    const btnConfeti    = document.getElementById('btnConfeti');

    if (!modelo) return;

    let reproduciendo = false;

    // Animación en bucle
    btnReproducir.addEventListener('click', () => {
        if (reproduciendo) return;
        reproduciendo = true;
        modelo.setAttribute('animation-mixer', 'clip: *; loop: repeat');
    });

    // Detener: quita el mixer y el modelo vuelve a su pose original
    btnDetener.addEventListener('click', () => {
        modelo.removeAttribute('animation-mixer');
        reproduciendo = false;
    });

    // Confeti independiente de la animación
    btnConfeti.addEventListener('click', () => {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    });

});