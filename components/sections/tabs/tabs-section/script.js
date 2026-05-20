(function () {
  'use strict';

  /* ─── Tab switching ─────────────────────────────── */
  document.querySelectorAll('[data-js="tabs-section"]').forEach(function (section) {
    var tabs   = section.querySelectorAll('[data-js="tab"]');
    var panels = section.querySelectorAll('[data-js="panel"]');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var targetId = tab.getAttribute('data-target');

        tabs.forEach(function (t) {
          t.setAttribute('aria-selected', 'false');
        });
        panels.forEach(function (p) {
          p.hidden = true;
        });

        tab.setAttribute('aria-selected', 'true');
        var target = section.querySelector('#' + targetId);
        if (target) {
          target.hidden = false;
          /* Re-init carousels inside newly visible panel */
          initCarouselsIn(target);
        }
      });
    });

    /* Keyboard nav: ← → Home End on tablist */
    var tabList = section.querySelector('[data-js="tablist"]');
    if (tabList) {
      tabList.addEventListener('keydown', function (e) {
        var current = Array.from(tabs).indexOf(document.activeElement);
        if (current === -1) return;
        var next = current;
        if (e.key === 'ArrowRight') next = (current + 1) % tabs.length;
        else if (e.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = tabs.length - 1;
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
    if (carousel.dataset.carouselInit) return; /* prevent double-init */
    carousel.dataset.carouselInit = '1';

    var track  = carousel.querySelector('[data-js="track"]');
    var cards  = carousel.querySelectorAll('[data-js="card"]');
    var dots   = carousel.querySelectorAll('[data-js="dot"]');
    var prevBtn = carousel.querySelector('[data-js="prev"]');
    var nextBtn = carousel.querySelector('[data-js="next"]');
    var current = 0;
    var total   = cards.length;

    if (!track || !total) return;

    function getCardStep() {
      var cardWidth = cards[0].getBoundingClientRect().width;
      var gap = parseFloat(getComputedStyle(track).gap) || 0;
      return cardWidth + gap;
    }

    function visibleCount() {
      var trackWidth = track.parentElement.getBoundingClientRect().width;
      var step = getCardStep();
      return step > 0 ? Math.round(trackWidth / step) : 1;
    }

    function maxIndex() {
      return Math.max(0, total - visibleCount());
    }

    function goTo(index) {
      current = Math.max(0, Math.min(index, maxIndex()));

      var offset = current * getCardStep();
      track.style.transform = 'translateX(-' + offset + 'px)';

      dots.forEach(function (d, i) {
        d.classList.toggle('tabs-section__dot--active', i === current);
        d.setAttribute('aria-current', i === current ? 'true' : 'false');
      });

      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current >= maxIndex();
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

    /* Swipe support */
    var touchStartX = 0;
    track.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });

    /* Recalc on resize */
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { goTo(current); }, 150);
    });

    goTo(0);
  }

  /* Init all visible carousels on load */
  document.querySelectorAll('[data-js="carousel"]').forEach(initCarousel);

})();
