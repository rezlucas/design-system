(function () {
  'use strict';

  /* ─── Tab switching ─────────────────────────────── */
  document.querySelectorAll('[data-js="tabs-section"]').forEach(function (section) {
    var tabs   = section.querySelectorAll('[data-js="tab"]');
    var panels = section.querySelectorAll('[data-js="panel"]');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var targetId = tab.getAttribute('data-target');

        tabs.forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
        panels.forEach(function (p) { p.hidden = true; });

        tab.setAttribute('aria-selected', 'true');
        var target = section.querySelector('#' + targetId);
        if (target) {
          target.hidden = false;
          /* re-init carousels de painéis que estavam ocultos */
          initCarouselsIn(target);
        }
      });
    });

    /* Teclado: ← → Home End no tablist */
    var tabList = section.querySelector('[data-js="tablist"]');
    if (tabList) {
      tabList.addEventListener('keydown', function (e) {
        var idx = Array.from(tabs).indexOf(document.activeElement);
        if (idx === -1) return;
        var next = idx;
        if      (e.key === 'ArrowRight') next = (idx + 1) % tabs.length;
        else if (e.key === 'ArrowLeft')  next = (idx - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home')       next = 0;
        else if (e.key === 'End')        next = tabs.length - 1;
        else return;
        e.preventDefault();
        tabs[next].click();
        tabs[next].focus();
      });
    }
  });

  /* ─── Carousel ───────────────────────────────────── */
  function initCarouselsIn(container) {
    container.querySelectorAll('[data-js="carousel"]').forEach(initCarousel);
  }

  function initCarousel(carousel) {
    if (carousel.dataset.carouselInit) return;
    carousel.dataset.carouselInit = '1';

    var track   = carousel.querySelector('[data-js="track"]');
    var cards   = carousel.querySelectorAll('[data-js="card"]');
    var dots    = carousel.querySelectorAll('[data-js="dot"]');
    var prevBtn = carousel.querySelector('[data-js="prev"]');
    var nextBtn = carousel.querySelector('[data-js="next"]');
    var current = 0;
    var total   = cards.length;

    if (!track || !total) return;

    /* Lê o gap do track em px (column-gap é mais confiável que gap) */
    function getGap() {
      var styles = getComputedStyle(track);
      var v = parseFloat(styles.columnGap);
      if (!isNaN(v) && v > 0) return v;
      v = parseFloat(styles.gap);
      return isNaN(v) ? 0 : v;
    }

    /* Largura renderizada do primeiro card em px */
    function getCardWidth() {
      return cards[0].offsetWidth;
    }

    /* Quantos cards cabem visivelmente no slider */
    function visibleCount() {
      var sliderW = track.parentElement.offsetWidth;
      var gap     = getGap();
      var step    = getCardWidth() + gap;
      if (step <= 0) return 1;
      /* +gap porque o último card visível não tem gap à direita */
      return Math.max(1, Math.floor((sliderW + gap) / step));
    }

    /* Índice máximo para o qual podemos rolar */
    function maxIndex() {
      return Math.max(0, total - visibleCount());
    }

    function goTo(index) {
      var max = maxIndex();
      current = Math.max(0, Math.min(index, max));

      var step = getCardWidth() + getGap();
      track.style.transform = 'translateX(-' + (current * step) + 'px)';

      dots.forEach(function (d, i) {
        d.classList.toggle('tabs-section__dot--active', i === current);
        d.setAttribute('aria-current', i === current ? 'true' : 'false');
      });

      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current >= max;
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

    /* Swipe touch */
    var touchStartX = 0;
    track.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });

    /* Recalcula posição ao redimensionar */
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { goTo(current); }, 150);
    });

    goTo(0);
  }

  /* Inicia todos os carousels visíveis ao carregar */
  document.querySelectorAll('[data-js="carousel"]').forEach(initCarousel);

})();
