(function () {
  'use strict';

  /*
   * Accordion exclusivo: quando um <details> abre, fecha todos os outros
   * dentro do mesmo .faq-accordion__list.
   *
   * removeAttribute('open') dispara a saída da regra CSS
   * details[open] > .faq-accordion__panel, permitindo que a transição
   * grid-template-rows 1fr → 0fr anime o fechamento normalmente.
   */
  document.querySelectorAll('.faq-accordion__list').forEach(function (list) {
    var items = Array.from(list.querySelectorAll('.faq-accordion__item'));

    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return; /* ignora eventos de fechamento */

        items.forEach(function (other) {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      });
    });
  });

})();
