const toggleButton = document.getElementById("toggle-mode");
const icon = toggleButton.querySelector("i");

// Función para aplicar el modo elegido en el resto de las páginas
function aplicarModoGuardado() {
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    document.body.classList.add("modo-oscuro");
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
  }
}

aplicarModoGuardado();

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");

  if (document.body.classList.contains("modo-oscuro")) {
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
    localStorage.setItem("modo", "oscuro");
  } else {
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");
    localStorage.setItem("modo", "claro");
  }
});
