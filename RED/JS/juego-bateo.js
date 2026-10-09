(() => {
    // ===== AJUSTES (cambia estos números para modificar la dificultad) =====
    const VIDAS_INICIALES = 3;
    const VENTANA_MS = 100;      // margen para acertar: ±100 ms alrededor del momento exacto
    const DURACION_INICIAL = 1500; // ms que tarda la pelota en llegar (primer lanzamiento)
    const DURACION_MINIMA = 750;   // la pelota nunca será más rápida que esto
    const PAUSA_MS = 1100;         // pausa entre lanzamientos
    const RUTA_GUARDAR = 'PHP/guardar-puntaje.php';

    // ===== ELEMENTOS =====
    const canvas = document.getElementById('lienzo-bateo');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const elVidas = document.getElementById('vidas');
    const elPuntos = document.getElementById('puntos');
    const elMensaje = document.getElementById('mensaje');
    const pantalla = document.getElementById('pantalla');
    const pantallaTitulo = document.getElementById('pantalla-titulo');
    const pantallaTexto = document.getElementById('pantalla-texto');
    const btnJugar = document.getElementById('btn-jugar');

    // ===== ESTADO =====
    let estado = 'inicio'; // inicio | lanzando | pausa | fin
    let vidas = VIDAS_INICIALES;
    let puntos = 0;
    let lan = null;        // datos del lanzamiento actual
    let resultado = null;  // 'acierto' | 'pronto' | 'tarde'

    // ===== UTILIDADES =====
    const azar = (min, max) => min + Math.random() * (max - min);

    // punto sobre una curva (Bézier cuadrática) con t entre 0 y 1
    function puntoEn(t) {
        const u = 1 - t;
        return {
            x: u * u * lan.p0.x + 2 * u * t * lan.p1.x + t * t * lan.p2.x,
            y: u * u * lan.p0.y + 2 * u * t * lan.p1.y + t * t * lan.p2.y
        };
    }

    function pintarVidas() {
        elVidas.innerHTML = '';
        for (let i = 0; i < VIDAS_INICIALES; i++) {
            const v = document.createElement('span');
            v.className = 'vida' + (i >= vidas ? ' perdida' : '');
            elVidas.appendChild(v);
        }
    }

    function pintarPuntos() {
        elPuntos.textContent = 'PUNTOS: ' + puntos;
    }

    function mostrarMensaje(texto, tipo) {
        elMensaje.textContent = texto;
        elMensaje.className = 'visible ' + tipo;
        setTimeout(() => { elMensaje.className = ''; }, PAUSA_MS - 150);
    }

    // ===== FLUJO DEL JUEGO =====
    function empezar() {
        vidas = VIDAS_INICIALES;
        puntos = 0;
        pintarVidas();
        pintarPuntos();
        pantalla.classList.add('oculta');
        siguienteLanzamiento();
    }

    function siguienteLanzamiento() {
        estado = 'pausa';
        resultado = null;
        lan = null;
        // pequeña espera para que el jugador se prepare
        setTimeout(() => {
            const duracion = Math.max(DURACION_MINIMA, DURACION_INICIAL - puntos * 50);
            const p0 = { x: W * 0.62, y: H * 0.40 }; // mano del lanzador
            const p2 = { x: azar(W * 0.28, W * 0.72), y: azar(H * 0.58, H * 0.86) }; // destino al azar
            const p1 = {
                x: (p0.x + p2.x) / 2 + azar(-W * 0.12, W * 0.12),
                y: Math.min(p0.y, p2.y) - H * 0.10
            };
            lan = { p0, p1, p2, duracion, t0: performance.now(), tFinal: 0 };
            estado = 'lanzando';
        }, 600);
    }

    function golpear() {
        if (estado !== 'lanzando') return;
        const error = performance.now() - (lan.t0 + lan.duracion); // negativo = antes de tiempo
        if (Math.abs(error) <= VENTANA_MS) resolver('acierto');
        else resolver(error < 0 ? 'pronto' : 'tarde');
    }

    function resolver(res) {
        lan.tFinal = (performance.now() - lan.t0) / lan.duracion;
        resultado = res;
        estado = 'pausa';

        if (res === 'acierto') {
            puntos++;
            mostrarMensaje('¡PERFECTO!', 'bien');
        } else {
            vidas--;
            mostrarMensaje(res === 'pronto' ? '¡MUY PRONTO!' : '¡MUY TARDE!', 'mal');
        }
        pintarVidas();
        pintarPuntos();

        setTimeout(vidas <= 0 ? terminar : siguienteLanzamiento, PAUSA_MS);
    }

    function terminar() {
        estado = 'fin';
        lan = null;
        pantallaTitulo.textContent = 'FIN DEL JUEGO';
        pantallaTexto.textContent = 'Conectaste ' + puntos + ' bateos. Guardando puntaje...';
        btnJugar.textContent = 'JUGAR DE NUEVO';
        pantalla.classList.remove('oculta');
        guardarPuntaje();
    }

    function guardarPuntaje() {
        const datos = new FormData();
        datos.append('puntos', puntos);
        fetch(RUTA_GUARDAR, { method: 'POST', body: datos })
            .then(r => r.json().then(j => ({ status: r.status, json: j })))
            .then(({ status, json }) => {
                if (status === 403) {
                    pantallaTexto.textContent = 'Conectaste ' + puntos + ' bateos. Inicia sesión para guardar tu puntaje.';
                } else if (json.ok) {
                    pantallaTexto.textContent = 'Conectaste ' + puntos + ' bateos. Tu mejor puntaje: ' + json.mejor + '.';
                } else {
                    pantallaTexto.textContent = 'Conectaste ' + puntos + ' bateos. No se pudo guardar el puntaje.';
                }
            })
            .catch(() => {
                pantallaTexto.textContent = 'Conectaste ' + puntos + ' bateos. No se pudo guardar el puntaje.';
            });
    }

    // ===== DIBUJO =====
    function dibujarObjetivo(tp, color) {
        const { x, y } = lan.p2;
        const t = Math.min(Math.max(tp, 0), 1);
        const radio = 30;

        // círculo fijo: aquí debe estar la pelota cuando le pegues
        ctx.lineWidth = 4;
        ctx.strokeStyle = color;
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // aro que se encoge: cuando toca el círculo fijo, es el momento
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.35 + 0.65 * t;
        ctx.beginPath();
        ctx.arc(x, y, radio + (1 - t) * 110, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    function dibujarEstela(tp) {
        const hasta = Math.min(Math.max(tp, 0), 1);
        const pasos = 40;
        ctx.save();
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#e63946';
        ctx.shadowColor = 'rgba(230,57,70,0.8)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        for (let i = 0; i <= pasos; i++) {
            const p = puntoEn((hasta * i) / pasos);
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
        ctx.restore();
    }

    function dibujarPelota(tp) {
        const p = puntoEn(Math.min(Math.max(tp, 0), 1));
        // la pelota crece al acercarse a nosotros
        const r = 4 + 24 * Math.pow(Math.min(Math.max(tp, 0), 1.15), 1.7);

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.clip();
        ctx.strokeStyle = '#c1121f';
        ctx.lineWidth = Math.max(1, r * 0.12);
        ctx.beginPath();
        ctx.arc(p.x - r * 1.15, p.y, r * 0.95, -0.6, 0.6);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(p.x + r * 1.15, p.y, r * 0.95, Math.PI - 0.6, Math.PI + 0.6);
        ctx.stroke();
        ctx.restore();
    }

    function bucle(ahora) {
        ctx.clearRect(0, 0, W, H);

        if (lan) {
            let tp = estado === 'lanzando' ? (ahora - lan.t0) / lan.duracion : lan.tFinal;

            // si la pelota ya pasó y no golpeaste a tiempo, es "muy tarde"
            if (estado === 'lanzando' && (ahora - lan.t0) - lan.duracion > VENTANA_MS) {
                resolver('tarde');
                tp = lan.tFinal;
            }

            let color = '#e63946';
            if (resultado === 'acierto') color = '#3ddc84';

            dibujarObjetivo(tp, color);
            dibujarEstela(tp);
            dibujarPelota(tp);
        }
        requestAnimationFrame(bucle);
    }

    // ===== CONTROLES =====
    canvas.addEventListener('pointerdown', golpear);
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            golpear();
        }
    });
    btnJugar.addEventListener('click', empezar);

    pintarVidas();
    pintarPuntos();
    requestAnimationFrame(bucle);
})();
