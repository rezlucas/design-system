(function () {
  'use strict';

  document.querySelectorAll('[data-js="blog-posts"]').forEach(function (section) {
    var track   = section.querySelector('[data-js="track"]');
    var cards   = section.querySelectorAll('[data-js="card"]');
    var prevBtn = section.querySelector('[data-js="prev"]');
    var nextBtn = section.querySelector('[data-js="next"]');
    var current = 0;
    var total   = cards.length;

    if (!track || !total) return;

    function getGap() {
      var styles = getComputedStyle(track);
      var v = parseFloat(styles.columnGap);
      if (!isNaN(v) && v > 0) return v;
      return parseFloat(styles.gap) || 0;
    }

    function visibleCount() {
      var sliderW = track.parentElement.offsetWidth;
      var gap     = getGap();
      var step    = cards[0].offsetWidth + gap;
      if (step <= 0) return 1;
      return Math.max(1, Math.floor((sliderW + gap) / step));
    }

    function maxIndex() {
      return Math.max(0, total - visibleCount());
    }

    function goTo(index) {
      var max = maxIndex();
      current = Math.max(0, Math.min(index, max));
      var step = cards[0].offsetWidth + getGap();
      track.style.transform = 'translateX(-' + (current * step) + 'px)';
      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current >= max;
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

    var touchStartX = 0;
    track.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { goTo(current); }, 150);
    });

    goTo(0);
  });

})();
