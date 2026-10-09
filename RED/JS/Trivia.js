
document.addEventListener("DOMContentLoaded", () => {

    const TOTAL_PREGUNTAS = 10;

    const bancoPreguntas = [
        {
            id: 1,
            pregunta: "¿En qué año se fundó la Liga Mexicana de Béisbol?",
            opciones: ["1925", "1935", "1945", "1955"],
            respuestaCorrecta: 0
        },
        {
            id: 2,
            pregunta: "¿En qué ciudad juegan los Sultanes?",
            opciones: ["Saltillo", "Monterrey", "Tijuana", "Torreón"],
            respuestaCorrecta: 1
        },
        {
            id: 3,
            pregunta: "¿Cuál es el nombre del equipo de béisbol de Tijuana?",
            opciones: ["Saraperos", "Algodoneros", "Toros", "Sultanes"],
            respuestaCorrecta: 2
        },
        {
            id: 4,
            pregunta: "¿De qué ciudad son los Saraperos?",
            opciones: ["Saltillo", "Monclova", "Durango", "Puebla"],
            respuestaCorrecta: 0
        },
        {
            id: 5,
            pregunta: "¿Qué equipo representa a Unión Laguna?",
            opciones: ["Leones", "Rieleros", "Acereros", "Algodoneros"],
            respuestaCorrecta: 3
        },
        {
            id: 6,
            pregunta: "¿Qué equipo ganó la Serie del Rey de 2021?",
            opciones: ["Toros de Tijuana", "Sultanes", "Saraperos", "Pericos"],
            respuestaCorrecta: 0
        },
        {
            id: 7,
            pregunta: "¿Qué equipo consiguió el bicampeonato de la LMB en 2009 y 2010?",
            opciones: ["Toros", "Saraperos", "Algodoneros", "Rieleros"],
            respuestaCorrecta: 1
        },
        {
            id: 8,
            pregunta: "¿Cómo se llama la serie final de la Liga Mexicana de Béisbol?",
            opciones: ["Serie Mundial", "Serie del Caribe", "Serie del Rey", "Serie Nacional"],
            respuestaCorrecta: 2
        },
        {
            id: 9,
            pregunta: "¿Cuántos strikes producen un ponche?",
            opciones: ["2", "3", "4", "5"],
            respuestaCorrecta: 1
        },
        {
            id: 10,
            pregunta: "¿Cuántas bases debe recorrer un jugador para anotar una carrera?",
            opciones: ["2", "3", "5", "4"],
            respuestaCorrecta: 3
        },
        {
            id: 11,
            pregunta: "¿Cuántos outs necesita un equipo para terminar su turno defensivo en una entrada?",
            opciones: ["2", "3", "4", "5"],
            respuestaCorrecta: 1
        },
        {
            id: 12,
            pregunta: "¿Cuántas entradas tiene normalmente un partido profesional de béisbol?",
            opciones: ["7", "8", "9", "10"],
            respuestaCorrecta: 2
        },
        {
            id: 13,
            pregunta: "¿Qué jugador lanza la pelota hacia el bateador?",
            opciones: ["Receptor", "Jardinero", "Lanzador", "Campocorto"],
            respuestaCorrecta: 2
        },
        {
            id: 14,
            pregunta: "¿Qué significa conectar un home run?",
            opciones: [
                "Recibir cuatro bolas",
                "Completar una jugada que permite al bateador anotar una carrera",
                "Robar una base",
                "Conseguir un ponche"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 15,
            pregunta: "¿Cuántos jugadores tiene normalmente un equipo a la defensiva en el campo?",
            opciones: ["7", "8", "9", "10"],
            respuestaCorrecta: 2
        },
        {
            id: 16,
            pregunta: "¿Qué equipo tiene su sede en Monclova?",
            opciones: ["Acereros", "Toros", "Leones", "Pericos"],
            respuestaCorrecta: 0
        },
        {
            id: 17,
            pregunta: "¿Qué equipo de la LMB representa a Aguascalientes?",
            opciones: ["Saraperos", "Rieleros", "Sultanes", "Diablos Rojos"],
            respuestaCorrecta: 1
        },
        {
            id: 18,
            pregunta: "¿Cuál de estos equipos juega en Puebla?",
            opciones: ["Toros", "Algodoneros", "Pericos", "Saraperos"],
            respuestaCorrecta: 2
        },
        {
            id: 19,
            pregunta: "¿Qué equipo representa a Yucatán en la LMB?",
            opciones: ["Leones", "Tigres", "Toros", "Rieleros"],
            respuestaCorrecta: 0
        },
        {
            id: 20,
            pregunta: "¿Cuántas bolas permiten al bateador obtener una base por bolas?",
            opciones: ["3", "4", "5", "6"],
            respuestaCorrecta: 1
        },
        {
            id: 21,
            pregunta: "¿Qué posición ocupa el jugador que recibe los lanzamientos detrás del bateador?",
            opciones: ["Primera base", "Receptor", "Jardinero central", "Campocorto"],
            respuestaCorrecta: 1
        },
        {
            id: 22,
            pregunta: "¿Cómo se llama el área elevada desde donde lanza el pitcher?",
            opciones: ["Caja de bateo", "Montículo", "Dugout", "Bullpen"],
            respuestaCorrecta: 1
        },
        {
            id: 23,
            pregunta: "¿Qué ocurre cuando un bateador conecta una pelota de foul con dos strikes, sin tocarla de toque?",
            opciones: [
                "Es ponche automáticamente",
                "Anota una carrera",
                "Conserva los dos strikes",
                "Avanza a primera base"
            ],
            respuestaCorrecta: 2
        },
        {
            id: 24,
            pregunta: "¿Cuál es el nombre del equipo de la LMB de la Ciudad de México?",
            opciones: [
                "Diablos Rojos del México",
                "Sultanes",
                "Algodoneros",
                "Saraperos"
            ],
            respuestaCorrecta: 0
        },
        {
            id: 25,
            pregunta: "¿Qué equipo ganó la Serie del Rey de 2023?",
            opciones: [
                "Algodoneros Unión Laguna",
                "Sultanes de Monterrey",
                "Pericos de Puebla",
                "Toros de Tijuana"
            ],
            respuestaCorrecta: 2
        },
        {
            id: 26,
            pregunta: "¿Cuál es el estadio de los Sultanes de Monterrey?",
            opciones: [
                "Estadio Revolución",
                "Estadio Mobil Super",
                "Estadio Chevron",
                "Estadio Francisco I. Madero"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 27,
            pregunta: "¿En qué estadio juegan los Saraperos de Saltillo?",
            opciones: [
                "Estadio Francisco I. Madero",
                "Estadio Revolución",
                "Estadio Mobil Super",
                "Estadio Hermanos Serdán"
            ],
            respuestaCorrecta: 0
        },
        {
            id: 28,
            pregunta: "¿En qué estadio juegan los Toros de Tijuana?",
            opciones: [
                "Estadio Revolución",
                "Estadio Alfredo Harp Helú",
                "Estadio Chevron",
                "Estadio Kukulcán"
            ],
            respuestaCorrecta: 2
        },
        {
            id: 29,
            pregunta: "¿Cuál es el estadio de los Algodoneros de Unión Laguna?",
            opciones: [
                "Estadio Mobil Super",
                "Estadio Revolución",
                "Estadio Francisco I. Madero",
                "Estadio Hermanos Serdán"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 30,
            pregunta: "¿En qué ciudad se encuentra el Estadio Revolución?",
            opciones: ["Monterrey", "Saltillo", "Torreón", "Tijuana"],
            respuestaCorrecta: 2
        },
        {
            id: 31,
            pregunta: "¿Qué equipo de la LMB tiene como mascota a un toro?",
            opciones: [
                "Sultanes de Monterrey",
                "Toros de Tijuana",
                "Saraperos de Saltillo",
                "Algodoneros de Unión Laguna"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 32,
            pregunta: "¿En qué estado de México se encuentra Saltillo?",
            opciones: ["Nuevo León", "Tamaulipas", "Coahuila", "Durango"],
            respuestaCorrecta: 2
        },
        {
            id: 33,
            pregunta: "¿En qué estado juegan los Toros de Tijuana?",
            opciones: ["Sonora", "Baja California", "Sinaloa", "Chihuahua"],
            respuestaCorrecta: 1
        },
        {
            id: 34,
            pregunta: "¿Qué equipo fue subcampeón de la Serie del Rey 2023?",
            opciones: [
                "Sultanes de Monterrey",
                "Toros de Tijuana",
                "Algodoneros de Unión Laguna",
                "Saraperos de Saltillo"
            ],
            respuestaCorrecta: 2
        },
        {
            id: 35,
            pregunta: "¿Contra qué equipo ganaron los Toros de Tijuana la Serie del Rey 2021?",
            opciones: [
                "Leones de Yucatán",
                "Sultanes de Monterrey",
                "Pericos de Puebla",
                "Diablos Rojos del México"
            ],
            respuestaCorrecta: 0
        },
        {
            id: 36,
            pregunta: "¿Qué equipo ganó la Serie del Rey de 2022?",
            opciones: [
                "Sultanes de Monterrey",
                "Leones de Yucatán",
                "Toros de Tijuana",
                "Algodoneros de Unión Laguna"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 37,
            pregunta: "¿Qué significa LMB?",
            opciones: [
                "Liga Mundial de Béisbol",
                "Liga Metropolitana de Béisbol",
                "Liga Mexicana de Béisbol",
                "Liga Mayor de Bateadores"
            ],
            respuestaCorrecta: 2
        },
        {
            id: 38,
            pregunta: "¿Cuál es el objetivo principal del equipo que está bateando?",
            opciones: [
                "Conseguir carreras",
                "Eliminar a tres jugadores",
                "Lanzar strikes",
                "Evitar que se roben bases"
            ],
            respuestaCorrecta: 0
        },
        {
            id: 39,
            pregunta: "¿Qué es un doble en béisbol?",
            opciones: [
                "Un batazo que permite llegar a segunda base",
                "Dos ponches consecutivos",
                "Dos carreras en una entrada",
                "Una jugada con dos outs"
            ],
            respuestaCorrecta: 0
        },
        {
            id: 40,
            pregunta: "¿Qué es un triple en béisbol?",
            opciones: [
                "Tres strikes consecutivos",
                "Un batazo que permite llegar a tercera base",
                "Tres carreras en un lanzamiento",
                "Tres outs en una jugada"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 41,
            pregunta: "¿Qué significa robar una base?",
            opciones: [
                "Avanzar a otra base sin depender de un batazo",
                "Cambiar una base de lugar",
                "Anotar automáticamente una carrera",
                "Golpear la pelota fuera del estadio"
            ],
            respuestaCorrecta: 0
        },
        {
            id: 42,
            pregunta: "¿Qué es una doble matanza o doble play?",
            opciones: [
                "Conectar dos hits",
                "Eliminar a dos corredores o bateadores en una misma jugada",
                "Anotar dos carreras",
                "Conseguir dos bases por bolas"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 43,
            pregunta: "¿Qué es el bullpen en un estadio de béisbol?",
            opciones: [
                "La zona de calentamiento de los lanzadores",
                "La caja de bateo",
                "El área de los aficionados",
                "La zona de primera base"
            ],
            respuestaCorrecta: 0
        },
        {
            id: 44,
            pregunta: "¿Qué es el dugout?",
            opciones: [
                "El montículo del lanzador",
                "El área donde permanecen jugadores y entrenadores",
                "La zona detrás del jardín central",
                "El espacio entre primera y segunda base"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 45,
            pregunta: "¿Qué posición defensiva se conoce como shortstop?",
            opciones: [
                "Jardinero derecho",
                "Receptor",
                "Campocorto",
                "Primera base"
            ],
            respuestaCorrecta: 2
        },
        {
            id: 46,
            pregunta: "¿Qué ocurre cuando un bateador recibe cuatro bolas?",
            opciones: [
                "Es declarado out",
                "Obtiene una base por bolas",
                "Debe repetir su turno",
                "Se termina la entrada"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 47,
            pregunta: "¿Qué significa que un lanzador consiga un juego sin hit ni carrera?",
            opciones: [
                "Que su equipo no conectó hits",
                "Que el equipo rival no conectó hits ni anotó carreras",
                "Que lanzó únicamente strikes",
                "Que el partido terminó empatado"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 48,
            pregunta: "¿Qué es una carrera impulsada?",
            opciones: [
                "Una carrera que se produce gracias a la acción ofensiva de un bateador",
                "Una carrera anotada exclusivamente mediante robo de base",
                "Una carrera que siempre vale dos puntos",
                "Una carrera anotada después de un ponche"
            ],
            respuestaCorrecta: 0
        },
        {
            id: 49,
            pregunta: "¿Qué es un grand slam en béisbol?",
            opciones: [
                "Un ponche con las bases llenas",
                "Un home run con las bases llenas",
                "Un triple en la última entrada",
                "Una doble matanza con tres corredores"
            ],
            respuestaCorrecta: 1
        },
        {
            id: 50,
            pregunta: "¿Cuántas carreras produce un grand slam?",
            opciones: ["Una", "Dos", "Tres", "Cuatro"],
            respuestaCorrecta: 3
        }
    ];

    let preguntas = [];
    let indiceActual = 0;
    let puntaje = 0;
    let respondida = false;
    let idsPartidaAnterior = [];

    const tarjeta = document.querySelector(".trivia-card");
    const contenidoOriginal = tarjeta.innerHTML;

    
function mostrarBienvenida() {

    document.getElementById("puntajeActual").textContent = "0/10";

    document.getElementById("preguntaContador").textContent =
        "¿ESTÁS LISTO?";

    document.getElementById("progresoIconos").innerHTML = "";

    tarjeta.innerHTML = `
        <div class="trivia-bienvenida">

            <i class="icon ion-md-trophy trivia-icono-bienvenida"></i>

            <h2 class="trivia-pregunta">
                ¿ESTÁS LISTO PARA EL DESAFÍO?
            </h2>

            <p class="trivia-mensaje">
                ¡Demuestra cuánto sabes sobre el béisbol mexicano!
                Responde 10 preguntas y consigue
                la mayor puntuación posible.
            </p>

            <p class="trivia-instrucciones">
                10 PREGUNTAS · 4 OPCIONES · 1 RESPUESTA CORRECTA
            </p>

            <button id="btnComenzar" class="btn-reiniciar">
                <i class="icon ion-md-play"></i>
                COMENZAR TRIVIA
            </button>

        </div>
    `;

    document.getElementById("btnComenzar")
        .addEventListener("click", iniciarTrivia);
}


    function mezclar(array) {
        const resultado = [...array];

        for (let i = resultado.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [resultado[i], resultado[j]] =
                [resultado[j], resultado[i]];
        }

        return resultado;
    }

    function generarPreguntas() {
        if (bancoPreguntas.length < TOTAL_PREGUNTAS) {
            throw new Error("Se necesitan al menos 10 preguntas.");
        }

        let seleccion = [];

        const disponibles = bancoPreguntas.filter(pregunta =>
            !idsPartidaAnterior.includes(pregunta.id)
        );

        if (disponibles.length >= TOTAL_PREGUNTAS) {
            seleccion = mezclar(disponibles).slice(0, TOTAL_PREGUNTAS);
        } else {
            seleccion = mezclar(bancoPreguntas).slice(0, TOTAL_PREGUNTAS);
        }

        idsPartidaAnterior = seleccion.map(pregunta => pregunta.id);

        preguntas = seleccion.map(pregunta => {

            const opcionesMezcladas = mezclar(
                pregunta.opciones.map((texto, indice) => ({
                    texto,
                    esCorrecta: indice === pregunta.respuestaCorrecta
                }))
            );

            return {
                id: pregunta.id,
                pregunta: pregunta.pregunta,
                opciones: opcionesMezcladas.map(opcion => opcion.texto),
                respuestaCorrecta: opcionesMezcladas.findIndex(
                    opcion => opcion.esCorrecta
                )
            };
        });
    }

    function iniciarTrivia() {
        tarjeta.innerHTML = contenidoOriginal;

        generarPreguntas();

        indiceActual = 0;
        puntaje = 0;
        respondida = false;

        document.getElementById("puntajeActual").textContent =
            `0/${TOTAL_PREGUNTAS}`;

        generarIconosProgreso();
        mostrarPregunta();
    }

    function generarIconosProgreso() {
        const contenedor = document.getElementById("progresoIconos");

        contenedor.innerHTML = "";

        preguntas.forEach((_, i) => {
            const icono = document.createElement("i");

            icono.className = "icon ion-md-baseball icono-pregunta";
            icono.dataset.index = i;

            contenedor.appendChild(icono);
        });

        actualizarIconosProgreso();
    }

    function actualizarIconosProgreso() {
        document.querySelectorAll(".icono-pregunta").forEach(
            (icono, i) => {
                icono.classList.remove("actual", "contestada");

                if (i < indiceActual) {
                    icono.classList.add("contestada");
                } else if (i === indiceActual) {
                    icono.classList.add("actual");
                }
            }
        );
    }

    function mostrarPregunta() {
        respondida = false;

        const data = preguntas[indiceActual];

        document.getElementById("preguntaTexto").textContent =
            data.pregunta;

        document.getElementById("preguntaContador").innerHTML =
            `PREGUNTA <b>${indiceActual + 1}</b> DE <b>${TOTAL_PREGUNTAS}</b>`;

        const contenedor = document.getElementById("opcionesContenedor");

        contenedor.innerHTML = "";

        data.opciones.forEach((texto, i) => {
            const boton = document.createElement("button");

            boton.className = "btn-opcion";
            boton.textContent = texto;

            boton.addEventListener("click", () => {
                seleccionarRespuesta(i);
            });

            contenedor.appendChild(boton);
        });

        const botonSiguiente = document.getElementById("btnSiguiente");

        botonSiguiente.disabled = true;
        botonSiguiente.textContent =
            indiceActual === TOTAL_PREGUNTAS - 1
                ? "FINALIZAR"
                : "SIGUIENTE";

        actualizarIconosProgreso();
    }

    function seleccionarRespuesta(indiceSeleccionado) {
        if (respondida) return;

        respondida = true;

        const data = preguntas[indiceActual];
        const botones = document.querySelectorAll(".btn-opcion");

        botones.forEach((boton, i) => {
            boton.disabled = true;

            if (i === data.respuestaCorrecta) {
                boton.classList.add("correcta");
            } else if (i === indiceSeleccionado) {
                boton.classList.add("incorrecta");
            }
        });

        if (indiceSeleccionado === data.respuestaCorrecta) {
            puntaje++;

            document.getElementById("puntajeActual").textContent =
                `${puntaje}/${TOTAL_PREGUNTAS}`;
        }

        document.getElementById("btnSiguiente").disabled = false;
    }

    function siguientePregunta() {
        if (!respondida) return;

        indiceActual++;

        if (indiceActual < preguntas.length) {
            mostrarPregunta();
        } else {
            finalizarTrivia();
        }
    }

    function finalizarTrivia() {
        const mensaje =
            puntaje === 10
                ? "¡INCREÍBLE! ERES UN EXPERTO EN BÉISBOL."
                : puntaje >= 7
                    ? "¡MUY BIEN! CONOCES MUCHO DE BÉISBOL."
                    : puntaje >= 4
                        ? "¡BUEN INTENTO! SIGUE APRENDIENDO."
                        : "¡SIGUE PRACTICANDO Y VUELVE A INTENTARLO!";

        tarjeta.innerHTML = `
            <h2 class="trivia-pregunta">¡TRIVIA COMPLETADA!</h2>

            <p class="trivia-resultado">
                OBTUVISTE
                <strong>${puntaje}/${TOTAL_PREGUNTAS}</strong>
                PUNTOS
            </p>

            <p class="trivia-mensaje">${mensaje}</p>

            <button id="btnReiniciar" class="btn-reiniciar">
                <i class="icon ion-md-refresh"></i>
                VOLVER A JUGAR
            </button>
        `;

        document.getElementById("preguntaContador").innerHTML =
            "TRIVIA FINALIZADA";

        actualizarIconosProgreso();

        document.getElementById("btnReiniciar")
            .addEventListener("click", iniciarTrivia);
    }

    tarjeta.addEventListener("click", evento => {
        if (evento.target.closest("#btnSiguiente")) {
            siguientePregunta();
        }
    });

    mostrarBienvenida();

});
