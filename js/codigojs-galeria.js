// ==== Galería Interactiva (modal) ====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const imagenes = document.querySelectorAll(".galeria img");
let currentIndex = 0;

function mostrarImagen(index) {
  const img = imagenes[index];
  modalImg.src = img.src;
  modalImg.alt = img.alt;
}

imagenes.forEach((imagen, index) => {
  imagen.addEventListener("click", () => {
    currentIndex = index;
    mostrarImagen(currentIndex);
    modal.style.display = "block";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imagenes.length;
  mostrarImagen(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(currentIndex);
});

window.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % imagenes.length;
      mostrarImagen(currentIndex);
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(currentIndex);
    } else if (e.key === "Escape") {
      modal.style.display = "none";
    }
  }
});

let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

modal.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  const swipeThreshold = 50;
  if (touchEndX < touchStartX - swipeThreshold) {
    currentIndex = (currentIndex + 1) % imagenes.length;
    mostrarImagen(currentIndex);
  } else if (touchEndX > touchStartX + swipeThreshold) {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(currentIndex);
  }
}

// ==== Ocultar header al hacer scroll ====
let lastScrollTop = 0;
const header = document.querySelector('.div1');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > scrollThreshold) {
    header.classList.toggle('hide', scrollTop > lastScrollTop);
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==== Traducción dinámica ====
const selectorIdioma = document.getElementById("selector-idioma");

function traducir(idioma) {
  const traducciones = {
    es: {
      "menu-turismo": "TURISMO",
      "menu-galeria": "GALERÍA",
      "menu-brasil": "+BRASIL",
      "titulo-principal": "¡MARAVILLAS!",
      "contacto": "Contacto",
      "siguenos": "Síguenos"
    },
    en: {
      "menu-turismo": "TOURISM",
      "menu-galeria": "GALLERY",
      "menu-brasil": "+BRAZIL",
      "titulo-principal": "WONDERS!",
      "contacto": "Contact",
      "siguenos": "Follow us"
    }
  };

  Object.keys(traducciones[idioma]).forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.textContent = traducciones[idioma][id];
  });
}

selectorIdioma.addEventListener("change", (e) => {
  traducir(e.target.value);
});