/*menu hamburguesa */
const toggleBtn = document.getElementById("toggleMenu");
const menu = document.querySelector(".menu");
const bodyContainer = document.querySelector(".body");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  bodyContainer.classList.toggle("menu-active");
});

const inputImagen = document.getElementById('imagen');
const nombreArchivo = document.getElementById('nombre-archivo');

inputImagen.addEventListener('change', () => {
    nombreArchivo.textContent = inputImagen.files.length
        ? inputImagen.files[0].name
        : 'CARGAR IMAGEN';
});