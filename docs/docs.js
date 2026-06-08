// ══════════════════════════════════════════════════════════════
// Tegrus Design System · Documentação · interações compartilhadas
// ══════════════════════════════════════════════════════════════
(function () {
  'use strict';

  var COLLAPSE_KEY = 'ds-docs-sidebar-collapsed';

  // ── Sidebar de navegação (drawer mobile + recolher/expandir) ──
  var sidebar = document.querySelector('.ds-sidebar');
  var toggle = document.querySelector('.docs-topbar__toggle');
  var collapseBtn = document.querySelector('.ds-sidebar__collapse');
  var backdrop = document.querySelector('.docs-backdrop');

  function closeNav() {
    if (!sidebar) return;
    sidebar.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      var open = sidebar.classList.toggle('is-open');
      if (backdrop) backdrop.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeNav);
  document.querySelectorAll('.ds-sidenav__item').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // ── Recolher/expandir sidebar (estado salvo entre páginas) ──
  if (collapseBtn && sidebar) {
    var collapsed = false;
    try { collapsed = localStorage.getItem(COLLAPSE_KEY) === '1'; } catch (e) {}
    if (collapsed) sidebar.classList.add('is-collapsed');
    collapseBtn.setAttribute('aria-pressed', String(collapsed));

    collapseBtn.addEventListener('click', function () {
      var isCollapsed = sidebar.classList.toggle('is-collapsed');
      collapseBtn.setAttribute('aria-pressed', String(isCollapsed));
      try { localStorage.setItem(COLLAPSE_KEY, isCollapsed ? '1' : '0'); } catch (e) {}
    });
  }

  // ── Marca o link ativo na navegação lateral pela página atual ──
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.ds-sidenav__item').forEach(function (link) {
    var href = (link.getAttribute('href') || '').split('/').pop();
    if (href === here) link.classList.add('is-active');
  });

  // ── Sumário in-page (TOC) com scroll-spy ──
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.docs-toc__list a'));
  var chapters = tocLinks
    .map(function (a) {
      var id = (a.getAttribute('href') || '').replace('#', '');
      return { link: a, el: document.getElementById(id) };
    })
    .filter(function (c) { return c.el; });

  if (chapters.length) {
    var spy = function () {
      var pos = window.scrollY + 140;
      var current = chapters[0];
      chapters.forEach(function (c) {
        if (c.el.offsetTop <= pos) current = c;
      });
      chapters.forEach(function (c) { c.link.classList.toggle('is-active', c === current); });
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();
  }

  // ── Botões de copiar código ──
  document.querySelectorAll('.docs-code__copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var block = btn.closest('.docs-code');
      var pre = block && block.querySelector('pre');
      if (!pre) return;
      var text = pre.textContent || '';
      var done = function () {
        var original = btn.dataset.label || btn.textContent;
        btn.dataset.label = original;
        btn.textContent = 'Copiado ✓';
        setTimeout(function () { btn.textContent = original; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  });

  // ── Checklist clicável (estado salvo por página) ──
  var checklistKey = 'ds-docs-checklist:' + here;
  var checklistState = {};
  try { checklistState = JSON.parse(localStorage.getItem(checklistKey) || '{}'); } catch (e) {}

  document.querySelectorAll('.docs-checklist li').forEach(function (item, idx) {
    var key = item.dataset.key || String(idx);
    if (checklistState[key]) item.classList.add('is-done');
    item.addEventListener('click', function () {
      var done = item.classList.toggle('is-done');
      checklistState[key] = done;
      try { localStorage.setItem(checklistKey, JSON.stringify(checklistState)); } catch (e) {}
    });
  });

  // ── Revelação suave dos capítulos ao rolar ──
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.docs-chapter, .docs-card, .docs-cardgrid').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
      io.observe(el);
    });
  }
})();
