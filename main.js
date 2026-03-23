// Handle Mobile Menu
const menuToggle = document.querySelector('.boton-menu');
const mobileMenu = document.querySelector('.menu-movil');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('oculto');
  mobileMenu.classList.toggle('activo');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('oculto');
    mobileMenu.classList.remove('activo');
  });
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.revelar');

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('activo');
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach(el => {
  revealOnScroll.observe(el);
});

// Sticky Navbar Background Blur
const navbar = document.querySelector('.barra-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(9, 14, 23, 0.85)';
    navbar.style.boxShadow = 'var(--shadow-glass)';
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.6)';
    navbar.style.boxShadow = 'none';
  }
});
