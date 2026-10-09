/* MENU HAMBURGUESA */
const toggleBtn = document.getElementById("toggleMenu");
const menu = document.querySelector(".menu");
const bodyContainer = document.querySelector(".body");

if (toggleBtn && menu && bodyContainer) {
    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        bodyContainer.classList.toggle("menu-active");
    });
}


/* CARGAR IMAGEN */
const inputImagen = document.getElementById("imagen");
const nombreArchivo = document.getElementById("nombre-archivo");

if (inputImagen && nombreArchivo) {
    inputImagen.addEventListener("change", () => {
        nombreArchivo.textContent = inputImagen.files.length
            ? inputImagen.files[0].name
            : "CARGAR IMAGEN";
    });
}


/* CERRAR SESIÓN */
const btnCerrarSesion = document.getElementById("btnCerrarSesion");
const modalLogout = document.getElementById("modalLogout");
const cancelarLogout = document.getElementById("cancelarLogout");

if (btnCerrarSesion && modalLogout && cancelarLogout) {

    btnCerrarSesion.addEventListener("click", function () {
        modalLogout.classList.add("activo");
    });

    cancelarLogout.addEventListener("click", function () {
        modalLogout.classList.remove("activo");
    });

    modalLogout.addEventListener("click", function (e) {
        if (e.target === modalLogout) {
            modalLogout.classList.remove("activo");
        }
    });

}

/*btn subir footer*/

document.addEventListener("DOMContentLoaded", () => {

    const botonSubir = document.getElementById("btnSubir");

    if (!botonSubir) return;

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

});
