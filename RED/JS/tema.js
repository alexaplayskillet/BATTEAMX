document.addEventListener("DOMContentLoaded", function () {

    const themeSwitch = document.getElementById("themeSwitch");

    const temaGuardado = localStorage.getItem("tema") || "oscuro";

    const modoClaro = temaGuardado === "claro";

    document.body.classList.toggle("modo-claro", modoClaro);

    if (themeSwitch) {

        themeSwitch.checked = modoClaro;

        themeSwitch.addEventListener("change", function () {

            const activarClaro = themeSwitch.checked;

            document.body.classList.toggle("modo-claro", activarClaro);

            localStorage.setItem(
                "tema",
                activarClaro ? "claro" : "oscuro"
            );

        });

    }

});
