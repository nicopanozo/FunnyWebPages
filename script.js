// Corazones flotantes
function crearCorazones() {
    const corazones = ['❤️', '💖', '💘', '💝', '💗'];
    const contenedor = document.querySelector('.hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = corazones[Math.floor(Math.random() * corazones.length)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
        heart.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
        contenedor.appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }, 300);
}

// Botón "No" que huye
function huirBoton() {
    const boton = document.getElementById('noButton');
    boton.style.transition = 'all 0.5s ease';
    boton.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
    setTimeout(() => boton.style.transform = '', 1000);
}

// Efecto de fuegos artificiales al aceptar
document.getElementById('siButton').addEventListener('click', () => {
    // Fuegos artificiales
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
        document.querySelector('.fireworks').appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
    
    // Mensaje épico
    const mensaje = document.createElement('div');
    mensaje.innerHTML = '<h2 style="font-size: 4rem; color: #ff4d6d; margin-top: 2rem;">¡TE AMO! 💖<br>¡Nos vemos en Chotto Matte! 🍣</h2>';
    document.querySelector('.container').appendChild(mensaje);
});

// Inicializar
crearCorazones();