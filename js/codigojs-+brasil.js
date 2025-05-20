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

// === Traducción dinámica ===

const selectorIdioma = document.getElementById("selector-idioma");

function traducir(idioma) {
  const traducciones = {
    es: {
      "menu-turismo": "TURISMO",
      "menu-galeria": "GALERÍA",
      "menu-brasil": "+BRASIL",
      "titulo-principal": "¡Delicias y fiestas!",
      "titulo-gastronomia": "GASTRONOMÍA",
      "titulo-eventos": "EVENTOS-FESTIVALES",
      "evento1": "Carnaval de Brasil",
      "evento2": "Fiestas juninas",
      "evento3": "Festival de Parintins (Boi-Bumbá)",
      "evento4": "Carnaval de Olinda",
      "evento5": "Festival de São João de Campina Grande",
      "contacto": "Contacto",
      "siguenos": "Síguenos"
    },
    en: {
      "menu-turismo": "TOURISM",
      "menu-galeria": "GALLERY",
      "menu-brasil": "+BRAZIL",
      "titulo-principal": "Delights and celebrations!",
      "titulo-gastronomia": "GASTRONOMY",
      "titulo-eventos": "EVENTS - FESTIVALS",
      "evento1": "Brazil Carnival",
      "evento2": "June Festivals",
      "evento3": "Parintins Festival (Boi-Bumbá)",
      "evento4": "Olinda Carnival",
      "evento5": "São João Festival in Campina Grande",
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