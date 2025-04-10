document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card-img-top").forEach((img) => {
    img.addEventListener("click", () => {
      const modalImg = document.getElementById("modalImagen");
      modalImg.src = img.src;
      const modal = new bootstrap.Modal(document.getElementById("imagenModal"));
      modal.show();
    });
  });
});
