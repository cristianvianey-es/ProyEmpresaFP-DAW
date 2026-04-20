// Selecciona el botón que abre el menú 
const menuToggle = document.querySelector('.boton-menu');

// Selecciona el contenedor del menú
const mobileMenu = document.querySelector('.menu-movil');

// Añade un evento al clicar
menuToggle.addEventListener('click', () => {
  // Muestra u oculta el menú
  mobileMenu.classList.toggle('oculto');

  // Activa o desactiva la clase activo
  mobileMenu.classList.toggle('activo');
});

// Selecciona todos los enlaces dentro del menú 
document.querySelectorAll('.mobile-menu a').forEach(link => {

  // Añade un evento click a cada enlace
  link.addEventListener('click', () => {
    // Oculta el menú al clicar
    mobileMenu.classList.add('oculto');

    // Elimina el estado activo
    mobileMenu.classList.remove('activo');
  });
});

// ==Ahora es una serie de sentencias para cuando se hace scroll==

// Los elementos que se revelan se seleccionan
const revealElements = document.querySelectorAll('.revelar');

// Requisitos para que los elementos seleccionados se activen
const revealOptions = {
  threshold: 0.15, // Se activa cuando el 15% del elemento es visible
  rootMargin: "0px 0px -50px 0px" // Ajusta el punto de activación
};

// Detecta cuándo un elemento entra en pantalla
const revealOnScroll = new IntersectionObserver(function(entries, observer) {

  entries.forEach(entry => {

    // Si el elemento no es visible no sucede nada
    if (!entry.isIntersecting) {
      return;
    } else {
      // Si el elemento aparece en pantalla:

      // Activa la clase 'activo' 
      entry.target.classList.add('activo');

      // Impide que el objeto animado pueda volverse a activar
      observer.unobserve(entry.target);
    }
  });

}, revealOptions);

// Aplica el observer a cada elemento revelado
revealElements.forEach(el => {
  revealOnScroll.observe(el);
});

// Selecciona la barra de navegación
const navbar = document.querySelector('.barra-nav');

// Agrega el evento scroll de la ventana
window.addEventListener('scroll', () => {

  // Si el usuario ha bajado más de 50 píxeles
  if (window.scrollY > 50) {

    // Cambia el fondo
    navbar.style.background = 'rgba(9, 14, 23, 0.85)';

    // Añade sombreado
    navbar.style.boxShadow = 'var(--shadow-glass)';

  } else {

    // Vuelve al estado inicial
    navbar.style.background = 'rgba(15, 23, 42, 0.6)';

    // Elimina la sombra
    navbar.style.boxShadow = 'none';
  }
});
