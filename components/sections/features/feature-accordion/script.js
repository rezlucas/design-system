(function () {
  'use strict';

  /* Accordion exclusivo: abre um item, fecha os demais da mesma lista */
  document.querySelectorAll('.feature-accordion__list').forEach(function (list) {
    var items = Array.from(list.querySelectorAll('.feature-accordion__item'));

    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        items.forEach(function (other) {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      });
    });
  });

})();
