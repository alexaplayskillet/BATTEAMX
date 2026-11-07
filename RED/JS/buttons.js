
document.addEventListener("DOMContentLoaded", () => {

    // Menú hamburguesa

    const toggleBtn = document.getElementById("toggleMenu");
    const menu = document.getElementById("menuMovil");
    const cerrarBtn = document.getElementById("cerrarMenu");
    const overlay = document.getElementById("menuOverlay");
    const bodyContainer = document.querySelector(".body");

    function actualizarMenu(abierto) {

        if (!menu || !toggleBtn) return;

        menu.classList.toggle("active", abierto);

        bodyContainer?.classList.toggle("menu-active", abierto);

        document.body.classList.toggle("menu-abierto", abierto);

        toggleBtn.setAttribute("aria-expanded", String(abierto));

        toggleBtn.setAttribute(
            "aria-label",
            abierto ? "Cerrar menú" : "Abrir menú"
        );

        menu.setAttribute("aria-hidden", String(!abierto));
    }

    if (toggleBtn && menu) {

        toggleBtn.addEventListener("click", (event) => {

            event.preventDefault();

            const abierto = menu.classList.contains("active");

            actualizarMenu(!abierto);
        });

        // Cerrar con la X

        cerrarBtn?.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            actualizarMenu(false);
        });

        // Cerrar al tocar fuera del menú

        overlay?.addEventListener("click", () => {
            actualizarMenu(false);
        });

        // Cerrar con Escape

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                actualizarMenu(false);
            }
        });

        // Cerrar al seleccionar una opción

        const enlaces = menu.querySelectorAll(".menulist a");

        enlaces.forEach((enlace) => {

            enlace.addEventListener("click", () => {
                actualizarMenu(false);
            });
        });

        // Resaltar página actual

        const paginaActual =
            window.location.pathname.split("/").pop() || "index.html";

        enlaces.forEach((enlace) => {

            const destino = enlace.getAttribute("href");

            enlace.classList.remove("activo");
            enlace.removeAttribute("aria-current");

            if (destino === paginaActual) {

                enlace.classList.add("activo");
                enlace.setAttribute("aria-current", "page");
            }
        });
    }

    // Mover el interruptor de tema

    const tema = document.querySelector(
        ".tema-escritorio-contenedor .theme-toggle, " +
        ".tema-movil-contenedor .theme-toggle"
    );

    const contenedorEscritorio = document.querySelector(
        "#temaEscritorio, .tema-escritorio-contenedor"
    );

    const contenedorMovil = document.querySelector(
        "#temaMovil, .tema-movil-contenedor"
    );

    const media = window.matchMedia("(max-width: 768px)");

    function actualizarUbicacionTema() {

        if (!tema || !contenedorEscritorio || !contenedorMovil) {
            return;
        }

        if (media.matches) {

            contenedorMovil.appendChild(tema);

        } else {

            contenedorEscritorio.appendChild(tema);
            actualizarMenu(false);
        }
    }

    actualizarUbicacionTema();

    media.addEventListener("change", actualizarUbicacionTema);


    // Cargar imagen

    const inputImagen = document.getElementById("imagen");
    const nombreArchivo = document.getElementById("nombre-archivo");

    if (inputImagen && nombreArchivo) {

        inputImagen.addEventListener("change", () => {

            nombreArchivo.textContent = inputImagen.files.length
                ? inputImagen.files[0].name
                : "CARGAR IMAGEN";
        });
    }


    // Cerrar sesión

    const btnCerrarSesion = document.getElementById("btnCerrarSesion");
    const modalLogout = document.getElementById("modalLogout");
    const cancelarLogout = document.getElementById("cancelarLogout");

    if (btnCerrarSesion && modalLogout && cancelarLogout) {

        btnCerrarSesion.addEventListener("click", () => {
            modalLogout.classList.add("activo");
        });

        cancelarLogout.addEventListener("click", () => {
            modalLogout.classList.remove("activo");
        });

        modalLogout.addEventListener("click", (event) => {

            if (event.target === modalLogout) {
                modalLogout.classList.remove("activo");
            }
        });
    }


    // Botón subir footer

    const botonSubir = document.getElementById("btnSubir");

    if (botonSubir) {

        function actualizarBoton() {

            if (window.scrollY > 250) {
                botonSubir.classList.add("visible");
            } else {
                botonSubir.classList.remove("visible");
            }
        }

        window.addEventListener("scroll", actualizarBoton);

        botonSubir.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        actualizarBoton();
    }

    // Botón escanear

const btnEscanear = document.getElementById("btnEscanear");

if (btnEscanear) {
    btnEscanear.addEventListener("click", () => {
        window.location.href = "escaneo.html";
    });
}
});
