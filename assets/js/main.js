// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FUNCIONALIDAD MENÚ MÓVIL
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('#navbar');

    if(menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // Cambiar icono de hamburguesa a X
            if(navbar.classList.contains('active')) {
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
    }

    // 2. CERRAR MENÚ AL HACER CLICK EN UN ENLACE
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    });

    // 3. AÑO AUTOMÁTICO EN EL FOOTER
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 4. CONSOLE EASTER EGG (Para otros desarrolladores)
    console.log(
        "%c NeoInformática SpA ", 
        "background: #0b0f19; color: #00f2ea; font-size: 20px; padding: 10px; border-radius: 5px; border: 1px solid #00f2ea;"
    );
    console.log("Sistema cargado correctamente.");
});