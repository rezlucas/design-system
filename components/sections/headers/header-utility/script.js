(function () {
  'use strict';

  /* ── Hamburger mobile ── */
  var toggle = document.querySelector('[data-js="nav-toggle"]');
  var panel  = document.querySelector('[data-js="nav-panel"]');

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      var next   = !isOpen;
      toggle.setAttribute('aria-expanded', String(next));
      panel.classList.toggle('header-utility__mobile-panel--open', next);
    });
  }

  /* ── Dropdowns desktop ── */
  var triggers = document.querySelectorAll('[data-js="dropdown-trigger"]');

  function closeAll(except) {
    triggers.forEach(function (t) {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      var dp = document.getElementById(t.getAttribute('aria-controls'));
      if (dp) dp.hidden = true;
    });
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen    = trigger.getAttribute('aria-expanded') === 'true';
      var panelId   = trigger.getAttribute('aria-controls');
      var dropPanel = panelId ? document.getElementById(panelId) : null;

      closeAll(trigger);

      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        if (dropPanel) dropPanel.hidden = false;
      } else {
        trigger.setAttribute('aria-expanded', 'false');
        if (dropPanel) dropPanel.hidden = true;
      }
    });
  });

  /* Fecha ao clicar fora */
  document.addEventListener('click', function () { closeAll(null); });

  /* Fecha ao pressionar Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAll(null);
      /* Devolve foco ao trigger que estava aberto */
      var openTrigger = document.querySelector('[data-js="dropdown-trigger"][aria-expanded="true"]');
      if (openTrigger) openTrigger.focus();
    }
  });

  /* ── Acordeão mobile (subitems) ── */
  var mobileTriggers = document.querySelectorAll('[data-js="mobile-accordion"]');

  mobileTriggers.forEach(function (mt) {
    mt.addEventListener('click', function () {
      var parentItem = mt.closest('.header-utility__mobile-item');
      if (!parentItem) return;
      parentItem.classList.toggle('header-utility__mobile-item--open');
      var isNowOpen = parentItem.classList.contains('header-utility__mobile-item--open');
      mt.setAttribute('aria-expanded', String(isNowOpen));
    });
  });
})();
