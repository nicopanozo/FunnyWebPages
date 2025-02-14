// Botón "No" que esquiva al tocarlo o hacer click
const noBtn = document.getElementById('noBtn');
let isMoving = false;

// Función que mueve el botón y crea un corazón flotante
function moveNoButton(e) {
    e.preventDefault();
    if (isMoving) return;
    isMoving = true;
    
    // Calcular posiciones aleatorias dentro del viewport
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    
    // Obtener la posición del toque o click
    const posX = e.touches ? e.touches[0].clientX : e.clientX;
    const posY = e.touches ? e.touches[0].clientY : e.clientY;
    
    // Clonar el corazón oculto y posicionarlo en el punto de interacción
    const corazon = document.querySelector('.corazon-oculto').cloneNode(true);
    corazon.style.position = 'fixed';
    corazon.style.left = `${posX}px`;
    corazon.style.top = `${posY}px`;
    corazon.style.opacity = '1';
    corazon.style.animation = 'heartFloat 1.5s ease-out forwards';
    document.body.appendChild(corazon);
    
    setTimeout(() => {
        corazon.remove();
        isMoving = false;
    }, 1500);
}

// Agregar eventos para dispositivos táctiles y para click en escritorio
noBtn.addEventListener('touchstart', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

// Animación del botón "Sí"
document.getElementById('siBtn').addEventListener('click', () => {
    // Efecto de confeti minimalista
    for (let i = 0; i < 30; i++) {
        const corazon = document.querySelector('.corazon-oculto').cloneNode(true);
        corazon.style.left = `${Math.random() * 100}%`;
        corazon.style.top = `${Math.random() * 100}%`;
        corazon.style.opacity = '1';
        corazon.style.animation = `heartFloat ${Math.random() * 2 + 1}s ease-out`;
        document.body.appendChild(corazon);
        setTimeout(() => corazon.remove(), 2000);
    }
    
    // Mensaje final
    const mensaje = document.createElement('div');
    mensaje.innerHTML = `
        <h2 style="text-align: center; color:rgb(218, 70, 97); margin-top: 2rem; font-family: 'Dancing Script', cursive;">
            ¡Será una noche perfecta! 🌸<br>
            Te amo más que a mi taza de ramen favorita 🍜
        </h2>
    `;
    document.querySelector('.content').appendChild(mensaje);
});