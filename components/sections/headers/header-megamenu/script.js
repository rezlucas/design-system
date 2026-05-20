/**
 * header-megamenu — interatividade
 *
 * Desktop (≥ 1200px):
 *   - Clique no nav-trigger → dropdown individual por item
 *   - Clique fora / Escape → fecha dropdown
 *
 * Tablet (768–1199px):
 *   - Clique no hambúrguer → mega panel em colunas
 *
 * Mobile (< 768px):
 *   - Clique no hambúrguer → overlay full-screen
 *   - Clique no cat-title → accordion do sub-menu
 */
(function () {
  'use strict';

  var header      = document.querySelector('.header-megamenu');
  if (!header) return;

  var toggle      = header.querySelector('[data-js="mega-toggle"]');
  var mega        = header.querySelector('[data-js="mega-panel"]');
  var closeBtn    = header.querySelector('[data-js="mega-close"]');
  var navTriggers = header.querySelectorAll('[data-js="nav-trigger"]');
  var catTitles   = header.querySelectorAll('[data-js="cat-title"]');

  /* ── Utilitários ── */

  function isDesktop() {
    return window.innerWidth >= 1200;
  }

  /* ── Dropdowns individuais (desktop) ── */

  function closeAllDropdowns(except) {
    navTriggers.forEach(function (t) {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      var dp = t.getAttribute('aria-controls')
               ? document.getElementById(t.getAttribute('aria-controls'))
               : null;
      if (dp) dp.hidden = true;
    });
  }

  navTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      if (!isDesktop()) return; /* no tablet/mobile, usar o mega panel */
      e.stopPropagation();

      var panelId = trigger.getAttribute('aria-controls');
      var panel   = panelId ? document.getElementById(panelId) : null;
      var isOpen  = trigger.getAttribute('aria-expanded') === 'true';

      closeAllDropdowns(trigger);

      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        if (panel) panel.hidden = false;
      } else {
        trigger.setAttribute('aria-expanded', 'false');
        if (panel) panel.hidden = true;
      }
    });
  });

  /* Fecha dropdown ao clicar fora */
  document.addEventListener('click', function () {
    if (isDesktop()) closeAllDropdowns(null);
  });

  /* ── Mega panel (tablet + mobile) ── */

  function openMega() {
    toggle.setAttribute('aria-expanded', 'true');
    mega.hidden = false;
    /* Bloqueia scroll da página no mobile */
    if (!isDesktop()) {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMega() {
    toggle.setAttribute('aria-expanded', 'false');
    mega.hidden = true;
    document.body.style.overflow = '';
  }

  if (toggle && mega) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMega(); else openMega();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMega);
  }

  /* ── Accordion de categorias (mobile) ── */

  catTitles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (isDesktop()) return; /* no desktop não há accordion */

      var cat    = btn.closest('.header-megamenu__mega-cat');
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', String(!isOpen));
      if (cat) cat.classList.toggle('header-megamenu__mega-cat--open', !isOpen);
    });
  });

  /* ── Escape fecha tudo ── */

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeAllDropdowns(null);
    closeMega();
  });

  /* ── Resize: fecha mega se passar para desktop ── */

  window.addEventListener('resize', function () {
    if (isDesktop()) {
      closeMega();
    }
  });

})();
