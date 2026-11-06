document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".tarjetas-track");
    const izq = document.querySelector(".flecha-izq");
    const der = document.querySelector(".flecha-der");
    const dots = document.querySelector(".tarjetas-dots");

    if (!track || !izq || !der || !dots) return;

    const tarjetas = [...track.querySelectorAll(".tarjeta-coleccion")];
    let indice = 0;

    // el track se desplaza por código: sin barra y sin que las tarjetas se encojan
    track.style.overflowX = "hidden";
    track.style.minWidth = "0";
    tarjetas.forEach(t => { t.style.flexShrink = "0"; });

    // distancia entre el inicio de una tarjeta y la siguiente (incluye el gap)
    function paso() {
        if (tarjetas.length === 0) return 0;
        if (tarjetas.length === 1) return tarjetas[0].offsetWidth;
        return tarjetas[1].offsetLeft - tarjetas[0].offsetLeft;
    }

    function limiteScroll() {
        return Math.max(0, track.scrollWidth - track.clientWidth);
    }

    // última posición a la que se puede llegar
    function maxIndice() {
        const p = paso();
        if (!p) return 0;
        return Math.max(0, Math.ceil((limiteScroll() - 1) / p));
    }

    function pintarDots() {
        const max = maxIndice();
        dots.innerHTML = "";

        for (let i = 0; i <= max; i++) {
            const punto = document.createElement("span");
            punto.className = "dot" + (i === indice ? " dot-activo" : "");
            punto.addEventListener("click", () => ir(i));
            dots.appendChild(punto);
        }

        // sin tarjetas de sobra no hacen falta flechas ni puntos
        const hayMovimiento = max > 0;
        izq.style.visibility = hayMovimiento ? "visible" : "hidden";
        der.style.visibility = hayMovimiento ? "visible" : "hidden";
        dots.style.visibility = tarjetas.length > 0 ? "visible" : "hidden";
    }

    function ir(i) {
        indice = Math.max(0, Math.min(i, maxIndice()));
        const destino = Math.min(indice * paso(), limiteScroll());
        track.scrollTo({ left: destino, behavior: "smooth" });
        pintarDots();
    }

   izq.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    ir(indice <= 0 ? maxIndice() : indice - 1);
}, true);

der.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    ir(indice >= maxIndice() ? 0 : indice + 1);
}, true);

    // deslizar con el dedo en celular
    let inicioX = null;
    track.addEventListener("touchstart", e => { inicioX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", e => {
        if (inicioX === null) return;
        const dif = e.changedTouches[0].clientX - inicioX;
        if (Math.abs(dif) > 40) ir(dif < 0 ? indice + 1 : indice - 1);
        inicioX = null;
    });

    // al cambiar el tamaño de la ventana cambia cuántas caben
    window.addEventListener("resize", () => {
        indice = Math.min(indice, maxIndice());
        track.scrollLeft = Math.min(indice * paso(), limiteScroll());
        pintarDots();
    });

    // las imágenes cargan después: se recalcula cuando terminan
    window.addEventListener("load", pintarDots);

    pintarDots();
});