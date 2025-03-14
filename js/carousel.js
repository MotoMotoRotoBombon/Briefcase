const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let isMoving = false; // Variable para controlar el estado de movimiento

// Función para actualizar el estado de los botones
function updateButtons() {
    const items = track.children;
    prevBtn.disabled = currentIndex === 0; // Deshabilita el botón anterior si estamos en el primer elemento
    nextBtn.disabled = currentIndex === items.length - 1; // Deshabilita el botón siguiente si estamos en el último elemento
}

// Avanza el carrusel
nextBtn.addEventListener('click', () => {
    if (isMoving) return; // Si ya se está moviendo, no hacer nada
    isMoving = true; // Establece el estado de movimiento

    const items = track.children;
    const itemWidth = items[0].getBoundingClientRect().width;

    // Verifica si hay más elementos para avanzar
    if (currentIndex < items.length - 1) {
        currentIndex++;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        updateButtons(); // Actualiza el estado de los botones
    }

    // Restablece el estado de movimiento después de un breve retraso
    setTimeout(() => {
        isMoving = false;
    }, 300); // Ajusta el tiempo según sea necesario
});

// Retrocede el carrusel
prevBtn.addEventListener('click', () => {
    if (isMoving) return; // Si ya se está moviendo, no hacer nada
    isMoving = true; // Establece el estado de movimiento

    const items = track.children;
    const itemWidth = items[0].getBoundingClientRect().width;

    // Verifica si hay elementos para retroceder
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        updateButtons(); // Actualiza el estado de los botones
    }

    // Restablece el estado de movimiento después de un breve retraso
    setTimeout(() => {
        isMoving = false;
    }, 300); // Ajusta el tiempo según sea necesario
});

// Inicializa el estado de los botones al cargar
updateButtons();