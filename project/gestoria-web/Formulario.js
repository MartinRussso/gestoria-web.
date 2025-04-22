document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-contacto");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        alert("¡Formulario enviado con éxito! (simulado)");
        form.reset(); // Limpia el formulario
    });

    function validateEmail(email) {
        // Validación simple de email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-principal");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});