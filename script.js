if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const burguerBtn = document.querySelector('#burguer');
const enlaces = document.querySelector('.nav__list'); 


burguerBtn.addEventListener('click', () => {
    enlaces.classList.toggle('show');
});


document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion__item');

    accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion__header');

      header.addEventListener('click', () => {
        const isActive = accordion.classList.contains('accordion__item--active');

        // Primero cerramos TODOS los acordeones
        accordions.forEach(item => {
          item.classList.remove('accordion__item--active');
          item.querySelector('.accordion__header').setAttribute('aria-expanded', 'false');
        });

        // Si el que clickeamos NO estaba activo, lo abrimos
        if (!isActive) {
          accordion.classList.add('accordion__item--active');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuramos el "vigilante"
    const observerOptions = {
      root: null, // Usa el viewport (la pantalla) como referencia
      rootMargin: '0px',
      threshold: 0.2 // Se dispara cuando el 20% del elemento es visible
    };

    // 2. Creamos la lógica de qué hacer cuando ve el elemento
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Si entró en pantalla, le agregamos la clase modificadora BEM
          entry.target.classList.add('admission__item--visible');
          
          // Opcional y recomendado: dejamos de observarlo para ahorrar recursos
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // 3. Buscamos todos los pasos y le asignamos un "vigilante" a cada uno
    const admissionSteps = document.querySelectorAll('.admission__item');
    admissionSteps.forEach(step => {
      observer.observe(step);
    });
  });

