// Mostrar u ocultar el botón
window.addEventListener("scroll", function () {
  const btn = document.getElementById("btnScrollTop");
  if (window.scrollY > 200) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

// Al hacer clic, volver al inicio
document.getElementById("btnScrollTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
