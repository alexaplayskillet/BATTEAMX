
document.addEventListener("DOMContentLoaded", () => {

    const pista = document.getElementById("tarjetasPista");
    const ventana = document.querySelector(".tarjetas-ventana");
    const anterior = document.getElementById("tarjetasAnterior");
    const siguiente = document.getElementById("tarjetasSiguiente");
    const indicadores = document.getElementById("tarjetasIndicadores");

    if (!pista || !ventana || !anterior || !siguiente || !indicadores) {
        return;
    }

    const totalTarjetas = 12;
    const tarjetas = [];

    let posicionActual = 0;
    let intervalo;

    // CREAR LAS 12 TARJETAS
    for (let i = 1; i <= totalTarjetas; i++) {

        const slide = document.createElement("div");
        slide.className = "tarjeta-slide";

        const imagen = document.createElement("img");
        imagen.src = `./resources/tarjetas/${i}.png`;
        imagen.alt = `Tarjeta coleccionable ${i} de BatteaMX`;
        imagen.loading = "lazy";

        slide.appendChild(imagen);
        pista.appendChild(slide);
        tarjetas.push(slide);
    }

    // CANTIDAD DE TARJETAS VISIBLES
    function tarjetasVisibles() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 950) return 2;
        return 3;
    }

    function maxPosicion() {
        return Math.max(0, totalTarjetas - tarjetasVisibles());
    }

    // MOVER CARRUSEL
    function moverCarrusel() {

        const ancho = tarjetas[0].getBoundingClientRect().width;
        const estilos = getComputedStyle(pista);
        const espacio = parseFloat(estilos.gap) || 0;

        const desplazamiento = posicionActual * (ancho + espacio);

        pista.style.transform = `translateX(-${desplazamiento}px)`;

        actualizarIndicadores();
    }

    // INDICADORES
    function crearIndicadores() {

        indicadores.innerHTML = "";

        for (let i = 0; i <= maxPosicion(); i++) {

            const punto = document.createElement("button");
            punto.className = "tarjetas-punto";
            punto.type = "button";
            punto.setAttribute("aria-label", `Ir a la posicion ${i + 1}`);

            punto.addEventListener("click", () => {
                posicionActual = i;
                moverCarrusel();
                reiniciarAutomatico();
            });

            indicadores.appendChild(punto);
        }

        actualizarIndicadores();
    }

    function actualizarIndicadores() {
        const puntos = indicadores.querySelectorAll(".tarjetas-punto");

        puntos.forEach((punto, indice) => {
            punto.classList.toggle("activo", indice === posicionActual);
        });
    }

    // SIGUIENTE
    function avanzar() {
        posicionActual++;

        if (posicionActual > maxPosicion()) {
            posicionActual = 0;
        }

        moverCarrusel();
    }

    // ANTERIOR
    function retroceder() {
        posicionActual--;

        if (posicionActual < 0) {
            posicionActual = maxPosicion();
        }

        moverCarrusel();
    }

    siguiente.addEventListener("click", () => {
        avanzar();
        reiniciarAutomatico();
    });

    anterior.addEventListener("click", () => {
        retroceder();
        reiniciarAutomatico();
    });

    // REPRODUCCION AUTOMATICA
    function iniciarAutomatico() {
        detenerAutomatico();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        intervalo = setInterval(avanzar, 3500);
    }

    function detenerAutomatico() {
        clearInterval(intervalo);
    }

    function reiniciarAutomatico() {
        iniciarAutomatico();
    }

    // PAUSAR AL PASAR EL CURSOR
    ventana.addEventListener("mouseenter", detenerAutomatico);
    ventana.addEventListener("mouseleave", iniciarAutomatico);

    // PAUSAR SI EL USUARIO INTERACTUA CON EL CARRUSEL
    const carrusel = document.querySelector(".carrusel-tarjetas");

    carrusel.addEventListener("focusin", detenerAutomatico);
    carrusel.addEventListener("focusout", iniciarAutomatico);

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            detenerAutomatico();
        } else {
            iniciarAutomatico();
        }
    });

    // AJUSTAR AL CAMBIAR EL TAMANO DE PANTALLA
    window.addEventListener("resize", () => {
        posicionActual = Math.min(posicionActual, maxPosicion());
        crearIndicadores();
        moverCarrusel();
    });

    crearIndicadores();
    moverCarrusel();
    iniciarAutomatico();

});
