/**
 * header-simple — script de interatividade mobile
 * Suporta múltiplos headers na mesma página (demos).
 * Em produção haverá apenas um header por página.
 */
(function () {
  'use strict';

  /* Itera por cada instância de header na página */
  document.querySelectorAll('.header-simple').forEach(function (header) {
    var toggle = header.querySelector('[data-js="nav-toggle"]');
    var panel  = header.querySelector('[data-js="nav-panel"]');

    if (!toggle || !panel) return;

    /* Abre / fecha o painel ao clicar no hambúrguer */
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      var next   = !isOpen;

      toggle.setAttribute('aria-expanded', String(next));
      panel.classList.toggle('header-simple__mobile-panel--open', next);
    });

    /* Fecha com Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (toggle.getAttribute('aria-expanded') !== 'true') return;

      toggle.setAttribute('aria-expanded', 'false');
      panel.classList.remove('header-simple__mobile-panel--open');
      toggle.focus();
    });
  });
})();
