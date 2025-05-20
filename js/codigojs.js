const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const cerrarBtn = document.querySelector(".cerrar");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imagenes = document.querySelectorAll(".galeria img");

let currentIndex = 0; // Índice de imagen actual

// Mostrar imagen en el modal
function mostrarImagen(index) {
  const img = imagenes[index];
  modalImg.src = img.src;
  modalImg.alt = img.alt;
}

// Al hacer clic en una imagen
imagenes.forEach((imagen, index) => {
  imagen.addEventListener("click", () => {
    currentIndex = index;          
    mostrarImagen(currentIndex); 
    modal.style.display = "block";
  });
});


// Cerrar modal haciendo clic fuera de la imagen
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Botón siguiente
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imagenes.length; 
  mostrarImagen(currentIndex);
});

// Botón anterior
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length; 
  mostrarImagen(currentIndex);
});

// Navegación con flechas del teclado
window.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") { // Solo si el modal está abierto
    if (e.key === "ArrowRight") {
      // Flecha derecha → siguiente imagen
      currentIndex = (currentIndex + 1) % imagenes.length;
      mostrarImagen(currentIndex);
    } else if (e.key === "ArrowLeft") {
      // Flecha izquierda ← imagen anterior
      currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(currentIndex);
    } else if (e.key === "Escape") {
      // Escape para cerrar el modal
      modal.style.display = "none";
    }
  }
});

// Variables para detectar el gesto táctil
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);
modal.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
}, false);

// Función para determinar la dirección del gesto
function handleGesture() {
  if (modal.style.display === "block") {
    const swipeThreshold = 50; 
    if (touchEndX < touchStartX - swipeThreshold) {
      currentIndex = (currentIndex + 1) % imagenes.length;
      mostrarImagen(currentIndex);
    } else if (touchEndX > touchStartX + swipeThreshold) {
      currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(currentIndex);
    }
  }
}

let lastScrollTop = 0;
  const header = document.querySelector('.div1');
  const scrollThreshold = 100;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
      if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo: ocultar
        header.classList.add('hide');
      } else {
        // Scroll hacia arriba: mostrar
        header.classList.remove('hide');
      }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });


  const mensajeElemento = document.getElementById("mensaje");

let mensajes = {
  es: {
    mañana: "¡Buenos días, bienvenido!",
    tarde: "¡Buenas tardes, bienvenido!",
    noche: "¡Buenas noches, bienvenido!"
  },
  eng: {
    mañana: "Good morning, welcome!",
    tarde: "Good afternoon, welcome!",
    noche: "Good evening, welcome!"
  }
};

function obtenerMensajeHoraActual(idioma) {
  const hora = new Date().getHours();
  if (hora < 12) return mensajes[idioma].mañana;
  if (hora < 18) return mensajes[idioma].tarde;
  return mensajes[idioma].noche;
}

let idiomaMensaje = "es";
let mensajeIndex = 0;
let letraIndex = 0;
let mensajeActual = obtenerMensajeHoraActual(idiomaMensaje);

function escribirMensaje() {
  if (letraIndex <= mensajeActual.length) {
    mensajeElemento.textContent = mensajeActual.substring(0, letraIndex);
    letraIndex++;
    setTimeout(escribirMensaje, 100);
  } else {
    setTimeout(borrarMensaje, 1500);
  }
}

function borrarMensaje() {
  if (letraIndex >= 0) {
    mensajeElemento.textContent = mensajeActual.substring(0, letraIndex);
    letraIndex--;
    setTimeout(borrarMensaje, 50);
  } else {
    mensajeActual = obtenerMensajeHoraActual(idiomaMensaje);
    setTimeout(escribirMensaje, 500);
  }
}

escribirMensaje();

// Vincular con el selector de idioma
document.querySelector('.idioma select').addEventListener('change', function (e) {
  idiomaMensaje = e.target.value;
  letraIndex = 0;
  mensajeActual = obtenerMensajeHoraActual(idiomaMensaje);
});

const traducciones = {
    es: {
      turismo: "TURISMO",
      galeria: "GALERÍA",
      brasil: "+BRASIL",
      titulo: "¡VEN Y DESCUBRE SUS MARAVILLAS!",
      donde_ir: "DONDE IR",
      elige_destino: "Puedes elegir <br> el destino que desees",
      descripcion_brasil: "Explora Brasil, donde la magia cobra vida. Desde las vibrantes playas de Copacabana hasta la selva amazónica llena de secretos, Brasil es un país de maravillas sin fin.Descubre su rica cultura, y déjate llevar por la alegría contagiosa de su gente",
      ver_mas: "Ver más",
      conoce_mas: "Conoce más",
      viaje_visual: "UN VIAJE VISUAL",
      contacto: "Contacto",
      email: "Email",
      siguenos: "Síguenos",
      facebook: "Facebook",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube"
    },
    eng: {
      turismo: "TOURISM",
      galeria: "GALLERY",
      brasil: "+BRAZIL",
      titulo: "COME AND DISCOVER ITS WONDERS!",
      donde_ir: "WHERE TO GO",
      elige_destino: "You can choose <br> the destination you want",
      descripcion_brasil: "Explore Brazil, where magic comes to life. From the vibrant beaches of Copacabana to the Amazon rainforest full of secrets, Brazil is a country of endless wonders. Discover its rich culture and be carried away by the contagious joy of its people.",
      ver_mas: "See more",
      conoce_mas: "Learn more",
      viaje_visual: "A VISUAL JOURNEY",
      contacto: "Contact",
      email: "Email",
      siguenos: "Follow us",
      facebook: "Facebook",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube"
    }
  };

  document.querySelector('.idioma select').addEventListener('change', function(e) {
    const idioma = e.target.value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (traducciones[idioma] && traducciones[idioma][key]) {
        if (el.tagName === "H2") {
          el.innerHTML = traducciones[idioma][key];
        } else {
          el.textContent = traducciones[idioma][key];
        }
      }
    });
  });