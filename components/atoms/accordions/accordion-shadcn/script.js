(function () {
  'use strict';

  /*
   * Abertura única: ao clicar num gatilho, fecha os demais itens do
   * mesmo .accordion antes de abrir o selecionado. Estado refletido
   * em aria-expanded (acessibilidade) e na classe is-open (animação).
   */
  document.querySelectorAll('.accordion').forEach(function (accordion) {
    var items = Array.from(accordion.querySelectorAll('.accordion__item'));

    items.forEach(function (item) {
      var trigger = item.querySelector('.accordion__trigger');
      if (!trigger) return;

      trigger.addEventListener('click', function () {
        var willOpen = !item.classList.contains('is-open');

        items.forEach(function (other) {
          other.classList.remove('is-open');
          var otherTrigger = other.querySelector('.accordion__trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        });

        if (willOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });

})();
