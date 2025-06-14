const botonesModo = document.querySelectorAll("#toggle-mode, #toggle-mode-desktop");

function aplicarModoGuardado() {
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    document.body.classList.add("modo-oscuro");
    botonesModo.forEach(boton => {
      const icon = boton.querySelector("i");
      icon.classList.remove("bi-moon-fill");
      icon.classList.add("bi-sun-fill");
    });
  }
}

aplicarModoGuardado();

botonesModo.forEach(boton => {
  boton.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    const esOscuro = document.body.classList.contains("modo-oscuro");

    botonesModo.forEach(b => {
      const icon = b.querySelector("i");
      if (esOscuro) {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
        localStorage.setItem("modo", "oscuro");
      } else {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");
        localStorage.setItem("modo", "claro");
      }
    });
  });
});
