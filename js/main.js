document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("abierto");
    });
  }

  document
    .querySelectorAll(".photo-frame img[data-nombre-archivo]")
    .forEach((img) => {
      img.addEventListener("error", () => {
        img.classList.add("img-missing");
        img.closest(".photo-frame").classList.add("sin-foto");
      });
    });
});

const WHATSAPP_NUMERO = "51965788902"; 

function enlaceWhatsapp(mensaje) {
  const texto = encodeURIComponent(
    mensaje || "Hola Sumaq Wasi, quisiera hacer una reserva 🍽️",
  );
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const mensaje = el.getAttribute("data-whatsapp") || undefined;
    el.setAttribute("href", enlaceWhatsapp(mensaje));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
});
