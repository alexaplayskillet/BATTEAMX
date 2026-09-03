/*menu hamburguesa */
const toggleBtn = document.getElementById("toggleMenu");
const menu = document.querySelector(".menu");
const bodyContainer = document.querySelector(".body");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  bodyContainer.classList.toggle("menu-active");
});
