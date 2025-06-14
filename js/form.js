document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-contacto");
  const campos = ["nombre", "email", "asunto", "mensaje"];


  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Limpiar errores previos
    campos.forEach((id) =>
      document.getElementById(id).classList.remove("is-invalid")
    );

    const errores = [];
    const datos = {};

    campos.forEach((campo) => {
      const valor = document.getElementById(campo).value.trim();
      datos[campo] = valor;

      if (!valor) {
        errores.push(
          `El campo <strong>${capitalizar(campo)}</strong> es obligatorio`
        );
        document.getElementById(campo).classList.add("is-invalid");
      }
    });

    // Validación extra de email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email);
    if (datos.email && !emailValido) {
      errores.push("Ingresá un <strong>correo electrónico válido</strong>");
      document.getElementById("email").classList.add("is-invalid");
    }

    if (errores.length > 0) {
      mostrarErrores(errores);
      return;
    }

    // Si pasa la validación
    // Mostrar modal de éxito
    const modalExito = new bootstrap.Modal(document.getElementById("modalExito"));
    modalExito.show();
    formulario.reset();

  });

  // Modal con errores
  function mostrarErrores(errores) {
    const lista = document.getElementById("listaErrores");
    lista.innerHTML = errores
      .map(
        (error) =>
          `<li><i class="bi bi-x-circle me-2 text-danger"></i> ${error}</li>`
      )
      .join("");
    const modal = new bootstrap.Modal(document.getElementById("modalErrores"));
    modal.show();
  }

  // Capitalizar primeros nombres de los campos
  function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
