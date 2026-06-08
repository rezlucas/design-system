(function () {
  'use strict';

  /*
   * O CSS já resolve hover (:hover) e foco por teclado (:focus-within).
   * Este script cobre os dois casos que o CSS sozinho não cobre bem:
   *   1) Toque em telas sensíveis ao toque, que não disparam :hover
   *      de forma confiável — alterna uma classe .is-visible no tap.
   *   2) Tecla Esc, para fechar a tooltip aberta por toque/foco.
   */
  var OPEN_CLASS = 'is-visible';

  function closeAll() {
    document.querySelectorAll('.tooltip.' + OPEN_CLASS).forEach(function (tip) {
      tip.classList.remove(OPEN_CLASS);
    });
  }

  document.querySelectorAll('.tooltip').forEach(function (tooltip) {
    var ref = tooltip.querySelector('.tooltip__ref');
    if (!ref) return;

    ref.addEventListener('click', function (e) {
      if (!('ontouchstart' in window)) return;
      e.preventDefault();
      var willOpen = !tooltip.classList.contains(OPEN_CLASS);
      closeAll();
      if (willOpen) tooltip.classList.add(OPEN_CLASS);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.tooltip')) closeAll();
  });

})();
