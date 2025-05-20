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

const mensajeElemento = document.getElementById("mensaje");
const selectorIdioma = document.getElementById("selector-idioma");

let mensajes = {
  es: ["¿Estás listo para conocer Brasil?"],
  en: ["Are you ready to discover Brazil?"]
};

let idiomaActual = "es";
let mensajeIndex = 0;
let letraIndex = 0;

function escribirMensaje() {
  const mensajeActual = mensajes[idiomaActual][mensajeIndex];
  if (letraIndex <= mensajeActual.length) {
    mensajeElemento.textContent = mensajeActual.substring(0, letraIndex);
    letraIndex++;
    setTimeout(escribirMensaje, 100);
  } else {
    setTimeout(borrarMensaje, 1500);
  }
}

function borrarMensaje() {
  const mensajeActual = mensajes[idiomaActual][mensajeIndex];
  if (letraIndex >= 0) {
    mensajeElemento.textContent = mensajeActual.substring(0, letraIndex);
    letraIndex--;
    setTimeout(borrarMensaje, 50);
  } else {
    mensajeIndex = (mensajeIndex + 1) % mensajes[idiomaActual].length;
    setTimeout(escribirMensaje, 500);
  }
}

function traducir(idioma) {
  idiomaActual = idioma;
  const traducciones = {
    es: {
      "menu-turismo": "TURISMO",
      "menu-galeria": "GALERÍA",
      "menu-brasil": "+BRASIL",
      "titulo-principal": "¡Puedes elegir el destino que desees!",
      "texto1": "Cristo Redentor: Monumento emblemático en el cerro del Corcovado con vistas panorámicas. (Río de Janeiro)",
      "texto2": "Pan de Azúcar: Cerro icónico con teleférico y vistas al mar. (Río de Janeiro)",
      "texto3": "Playa de Copacabana: Famosa playa urbana con un paseo marítimo ondulado. (Río de Janeiro)",
      "texto4": "Pelourinho: Centro histórico colonial lleno de música y cultura afrobrasileña. (Salvador de Bahía)",
      "texto5": "Museo de Arte de São Paulo (MASP): Museo con una de las mejores colecciones de arte de América Latina. (São Paulo)",
      "texto6": "Parque das Aves: Jardín Botánico de Río: Espacio natural con miles de especies tropicales. (Foz do Iguaçu)",
      "contacto": "Contacto",
      "siguenos": "Síguenos"
    },
    en: {
      "menu-turismo": "TOURISM",
      "menu-galeria": "GALLERY",
      "menu-brasil": "+BRAZIL",
      "titulo-principal": "You can choose the destination you want!",
      "texto1": "Christ the Redeemer: Iconic monument atop Corcovado hill with panoramic views. (Rio de Janeiro)",
      "texto2": "Sugarloaf Mountain: Iconic peak with cable car and ocean views. (Rio de Janeiro)",
      "texto3": "Copacabana Beach: Famous urban beach with a wave-patterned promenade. (Rio de Janeiro)",
      "texto4": "Pelourinho: Colonial historic center full of Afro-Brazilian culture and music. (Salvador, Bahia)",
      "texto5": "São Paulo Museum of Art (MASP): Museum with one of the best art collections in Latin America. (São Paulo)",
      "texto6": "Parque das Aves: Rio’s Botanical Garden with thousands of tropical species. (Foz do Iguaçu)",
      "contacto": "Contact",
      "siguenos": "Follow us"
    }
  };

  Object.keys(traducciones[idioma]).forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.textContent = traducciones[idioma][id];
  });

  // Reiniciar mensaje animado
  mensajeIndex = 0;
  letraIndex = 0;
  escribirMensaje();
}

selectorIdioma.addEventListener("change", (e) => {
  traducir(e.target.value);
});

// Iniciar
escribirMensaje();