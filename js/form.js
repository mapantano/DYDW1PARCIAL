document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");
  const mensajeDiv = document.getElementById("mensaje-formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Reset mensaje
    mensajeDiv.innerHTML = "";

    // Validación de compos completos
    if (!nombre || !email || !asunto || !mensaje) {
      mensajeDiv.innerHTML =
        '<p class="text-danger">Por favor completá todos los campos</p>';
      return;
    }

    // Validación formato de email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      mensajeDiv.innerHTML =
        '<p class="text-danger">Ingresá un correo electrónico válido</p>';
      return;
    }

    // Mensaje de éxito
    mensajeDiv.innerHTML =
      `<p class="text-success">Gracias por tu mensaje, <strong>${nombre}</strong>. Pronto te estaré respondiendo.</p>`;

    // Reset del formulario
    formulario.reset();
  });
});
