/*document.addEventListener('DOMContentLoaded', () => {
    const nftEntity = document.querySelector('a-nft');

    nftEntity.addEventListener('targetFound', () => {
        lanzarConfeti();
    });

    nftEntity.addEventListener('targetLost', () => {
        // opcional
    });
});

function lanzarConfeti() {
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 }
    });
}*/
document.addEventListener('DOMContentLoaded', () => {
    const nftEntity = document.querySelector('a-nft');
    console.log('a-nft encontrado:', nftEntity);

    // Escucha TODOS los eventos disparados por el a-nft para ver el nombre real
    ['targetFound', 'markerFound', 'nft-found', 'target-found'].forEach(nombre => {
        nftEntity.addEventListener(nombre, () => {
            console.log('¡Evento disparado!:', nombre);
            lanzarConfeti();
        });
    });
});

function lanzarConfeti() {
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
}