document.addEventListener("DOMContentLoaded", function() {
    // Inicialmente, cargamos el contenido de la página de inicio
    loadPage("home");

    // Manejador de eventos para cambiar el contenido al hacer clic en los enlaces del menú
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const pageId = this.getAttribute("id");
            loadPage(pageId);
        });
    });
});

function loadPage(pageId) {
    // Simulamos cargar el contenido del blog desde un servidor o una base de datos
    const contentSection = document.getElementById("content");
    let content = "";

    switch (pageId) {
        case "home":
            content = "<h2>Bienvenido a mi blog personal</h2><p>¡Explora mis publicaciones!</p>";
            break;
        case "about":
            content = "<h2>Acerca de mí</h2><p>Soy un apasionado de la tecnología y me encanta compartir mis experiencias en este blog.</p>";
            break;
        case "contact":
            content = "<h2>Contacto</h2><p>Puedes contactarme a través de mi correo electrónico: ejemplo@example.com</p>";
            break;
        default:
            content = "<h2>Página no encontrada</h2><p>Lo siento, la página solicitada no existe.</p>";
    }

    contentSection.innerHTML = content;
}
