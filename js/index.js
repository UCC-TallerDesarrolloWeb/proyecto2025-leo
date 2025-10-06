/**
 * Maneja el evento de envío del formulario de inicio de sesión.
 * @method handleLoginSubmit
 * @param {Event} event - Evento de envío del formulario.
 * @description
 * Valida que el email contenga '@' y que la contraseña tenga al menos una letra mayúscula, un número y 6 caracteres.
 * Si todo es correcto, redirige al usuario al catálogo.
 */

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // evita que se recargue la página

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Validar email
  if (!email.includes("@")) {
    alert("El email debe contener '@'.");
    return;
  }

  // Validar contraseña (mínimo 1 mayúscula y 1 número)
  let tieneMayuscula = /[A-Z]/.test(password);
  let tieneNumero = /[0-9]/.test(password);

  if (!tieneMayuscula) {
    alert("La contraseña debe contener al menos una letra mayúscula.");
    return;
  }

  if (!tieneNumero) {
    alert("La contraseña debe contener al menos un número.");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  // Si todo está bien, redirigir al catálogo
  alert("Inicio de sesión exitoso. Redirigiendo al catálogo...");
  window.location.href = "catalogo.html"; // cambialo por la ruta real de tu catálogo
});
