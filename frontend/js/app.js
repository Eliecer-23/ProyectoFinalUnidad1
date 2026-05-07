// ============================================================
// app.js — Lógica de navegación DOM del Colegio Gandhy
// ============================================================

// Usuario simulado para el login (en el backend esto vendrá de MongoDB)
const USUARIO_DEMO = {
    email: "admin@gandhy.edu.co",
    password: "1234",
    nombre: "Jorge Pérez"
};

// ── FUNCIÓN PRINCIPAL: cambiar de vista ──────────────────────
function mostrarVista(vistaId) {
    // Lista de todas las vistas
    const vistas = [
        "vista-login",
        "vista-inicio",
        "vista-pagina",
        "vista-dashboard"
    ];

    // Oculta todas las vistas
    vistas.forEach(function(id) {
        document.getElementById(id).classList.add("d-none");
    });

    // Muestra solo la vista solicitada
    document.getElementById(vistaId).classList.remove("d-none");

    // Navbar y footer: ocultos en login, visibles en las demás
    const esLogin = vistaId === "vista-login";
    document.getElementById("navbar-principal").classList.toggle("d-none", esLogin);
    document.getElementById("footer-principal").classList.toggle("d-none", esLogin);
}

// ── LOGIN ────────────────────────────────────────────────────
function iniciarSesion() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-pass").value.trim();

    // Limpiar errores anteriores
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-pass").textContent = "";
    document.getElementById("login-error").classList.add("d-none");

    // Validación de campos vacíos
    let valido = true;

    if (email === "") {
        document.getElementById("error-email").textContent = "El correo es obligatorio.";
        valido = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("error-email").textContent = "Formato de correo inválido.";
        valido = false;
    }

    if (password === "") {
        document.getElementById("error-pass").textContent = "La contraseña es obligatoria.";
        valido = false;
    }

    if (!valido) return;

    // Verificar credenciales contra el usuario demo
    if (email === USUARIO_DEMO.email && password === USUARIO_DEMO.password) {
        // Guardar nombre en la navbar
        document.getElementById("usuario-nombre").textContent = USUARIO_DEMO.nombre;
        document.getElementById("dashboard-saludo").textContent =
            "Hola, " + USUARIO_DEMO.nombre + ". Bienvenido al panel institucional.";

        // Ir al inicio
        mostrarVista("vista-inicio");
    } else {
        document.getElementById("login-error").classList.remove("d-none");
    }
}

// ── CERRAR SESIÓN ─────────────────────────────────────────────
function cerrarSesion() {
    // Limpiar campos del login
    document.getElementById("login-email").value = "";
    document.getElementById("login-pass").value = "";

    // Volver al login
    mostrarVista("vista-login");
}

// ── FORMULARIO DE CONTACTO ────────────────────────────────────
function enviarContacto() {
    const nombre = document.getElementById("contact-nombre").value.trim();
    const email  = document.getElementById("contact-email").value.trim();
    const msg    = document.getElementById("contact-msg").value.trim();

    // Limpiar errores
    document.getElementById("err-nombre").textContent = "";
    document.getElementById("err-contact-email").textContent = "";
    document.getElementById("err-msg").textContent = "";

    let valido = true;

    if (nombre === "") {
        document.getElementById("err-nombre").textContent = "El nombre es obligatorio.";
        valido = false;
    }

    if (email === "") {
        document.getElementById("err-contact-email").textContent = "El correo es obligatorio.";
        valido = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("err-contact-email").textContent = "Formato de correo inválido.";
        valido = false;
    }

    if (msg === "") {
        document.getElementById("err-msg").textContent = "El mensaje no puede estar vacío.";
        valido = false;
    }

    if (!valido) return;

    // Mostrar mensaje de éxito
    document.getElementById("contacto-ok").classList.remove("d-none");

    // Limpiar el formulario
    document.getElementById("contact-nombre").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-msg").value = "";
}

// ── INICIO: mostrar login al cargar la página ─────────────────
document.addEventListener("DOMContentLoaded", function() {
    mostrarVista("vista-login");
});