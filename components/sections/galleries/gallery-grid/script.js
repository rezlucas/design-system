(function () {
  'use strict';

  document.querySelectorAll('[data-js="gallery-grid"]').forEach(function (gallery) {
    var triggers = Array.prototype.slice.call(gallery.querySelectorAll('[data-js="gallery-trigger"]'));
    var dialog   = gallery.querySelector('[data-js="lightbox"]');
    if (!dialog || !triggers.length) return;

    var image   = dialog.querySelector('[data-js="lightbox-image"]');
    var caption = dialog.querySelector('[data-js="lightbox-caption"]');
    var current = 0;

    function open(index) {
      current = index;
      render();
      dialog.showModal();
    }

    function render() {
      var trigger = triggers[current];
      image.src = trigger.dataset.full || trigger.querySelector('img').src;
      image.alt = trigger.querySelector('img').alt;
      caption.textContent = trigger.dataset.caption || '';
    }

    function next() {
      current = (current + 1) % triggers.length;
      render();
    }

    function prev() {
      current = (current - 1 + triggers.length) % triggers.length;
      render();
    }

    triggers.forEach(function (trigger, i) {
      trigger.addEventListener('click', function () { open(i); });
    });

    var closeBtn = dialog.querySelector('[data-js="lightbox-close"]');
    var nextBtn  = dialog.querySelector('[data-js="lightbox-next"]');
    var prevBtn  = dialog.querySelector('[data-js="lightbox-prev"]');

    if (closeBtn) closeBtn.addEventListener('click', function () { dialog.close(); });
    if (nextBtn)  nextBtn.addEventListener('click', next);
    if (prevBtn)  prevBtn.addEventListener('click', prev);

    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });

    dialog.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    });
  });

})();
