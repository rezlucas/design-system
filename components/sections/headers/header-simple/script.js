(function () {
  'use strict';

  var toggle = document.querySelector('[data-js="nav-toggle"]');
  var panel  = document.querySelector('[data-js="nav-panel"]');

  if (!toggle || !panel) return;

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    var next   = !isOpen;

    toggle.setAttribute('aria-expanded', String(next));
    panel.classList.toggle('header-simple__mobile-panel--open', next);
  });

  /* Fecha ao pressionar Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      toggle.setAttribute('aria-expanded', 'false');
      panel.classList.remove('header-simple__mobile-panel--open');
      toggle.focus();
    }
  });
})();
