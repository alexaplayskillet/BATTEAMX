
let preguntas = [];
let indiceActual = 0;
let puntaje = 0;
let respondida = false;


async function cargarPreguntas() {
    // Aqui se va a conectar la base de datos. 

    preguntas = [
        {
            id: 1,
            pregunta: '¿Qué equipo es conocido como los "Sultanes de Monterrey"?',
            opciones: ["Liga Mexicana de Béisbol", "Liga Mexicana del Pacífico", "Liga del Pacífico", "Liga Nacional"],
            respuestaCorrecta: 0
        },
        {
            id: 2,
            pregunta: "¿En qué año se fundó la Liga Mexicana de Béisbol?",
            opciones: ["1925", "1935", "1945", "1955"],
            respuestaCorrecta: 0
        }
        
    ];

    iniciarTrivia();
}

function iniciarTrivia() {
    indiceActual = 0;
    puntaje = 0;
    generarIconosProgreso();
    mostrarPregunta();
}

function generarIconosProgreso() {
    const contenedor = document.getElementById('progresoIconos');
    contenedor.innerHTML = '';
    preguntas.forEach((_, i) => {
        const icono = document.createElement('i');
        icono.className = 'icon ion-md-baseball icono-pregunta';
        icono.dataset.index = i;
        contenedor.appendChild(icono);
    });
    actualizarIconosProgreso();
}

function actualizarIconosProgreso() {
    document.querySelectorAll('.icono-pregunta').forEach((icono, i) => {
        icono.classList.remove('actual', 'contestada');
        if (i < indiceActual) icono.classList.add('contestada');
        else if (i === indiceActual) icono.classList.add('actual');
    });
}

function mostrarPregunta() {
    respondida = false;
    const data = preguntas[indiceActual];

    document.getElementById('preguntaTexto').textContent = data.pregunta;
    document.getElementById('preguntaContador').innerHTML =
        `PREGUNTA <b>${indiceActual + 1}</b> DE <b>${preguntas.length}</b>`;

    const contenedorOpciones = document.getElementById('opcionesContenedor');
    contenedorOpciones.innerHTML = '';

    data.opciones.forEach((opcionTexto, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcion';
        btn.textContent = opcionTexto;
        btn.addEventListener('click', () => seleccionarRespuesta(i, btn));
        contenedorOpciones.appendChild(btn);
    });

    document.getElementById('btnSiguiente').disabled = true;
    actualizarIconosProgreso();
}

function seleccionarRespuesta(indiceSeleccionado, btnClickeado) {
    if (respondida) return;
    respondida = true;

    const data = preguntas[indiceActual];
    const botones = document.querySelectorAll('.btn-opcion');

    botones.forEach((btn, i) => {
        btn.disabled = true;
        if (i === data.respuestaCorrecta) btn.classList.add('correcta');
        else if (i === indiceSeleccionado) btn.classList.add('incorrecta');
    });

    if (indiceSeleccionado === data.respuestaCorrecta) {
        puntaje++;
        document.getElementById('puntajeActual').textContent = `${puntaje}/${preguntas.length}`;
    }

    document.getElementById('btnSiguiente').disabled = false;

   //Backend para mandar informacion y verificar si es correcta
}

document.getElementById('btnSiguiente').addEventListener('click', () => {
    indiceActual++;
    if (indiceActual < preguntas.length) {
        mostrarPregunta();
    } else {
        finalizarTrivia();
    }
});

function finalizarTrivia() {
    document.querySelector('.trivia-card').innerHTML = `
        <h2 class="trivia-pregunta">¡TRIVIA COMPLETADA!</h2>
        <p style="color:#c4c3d2; font-family:'Poppins',sans-serif;">
            Obtuviste <strong>${puntaje}/${preguntas.length}</strong> puntos
        </p>
        <button id="btnReiniciar" class="btn-reiniciar">
            <i class="icon ion-md-refresh"></i> VOLVER A JUGAR
        </button>
    `;

    document.getElementById('btnReiniciar').addEventListener('click', () => {
        // logica para generar preguntas aleatorias
        console.log('Reiniciar trivia - pendiente de conectar con backend');
    });

   
}

cargarPreguntas();