(function () {
  'use strict';

  document.querySelectorAll('[data-js="hero-countdown"]').forEach(function (section) {
    var daysEl    = section.querySelector('[data-js="cd-days"]');
    var hoursEl   = section.querySelector('[data-js="cd-hours"]');
    var minutesEl = section.querySelector('[data-js="cd-minutes"]');
    var secondsEl = section.querySelector('[data-js="cd-seconds"]');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    /* Lê a data-alvo do atributo data-end (ISO 8601 ou timestamp).
       Fallback: 35 dias a partir de agora (para demo).             */
    var raw = section.dataset.end;
    var endDate = raw ? new Date(raw) : new Date(Date.now() + 35 * 24 * 3600 * 1000);

    function pad(n) {
      return String(n).padStart(2, '0');
    }

    function tick() {
      var diff = endDate - Date.now();

      if (diff <= 0) {
        daysEl.textContent    = '00';
        hoursEl.textContent   = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      daysEl.textContent    = pad(Math.floor(diff / 86400000));
      hoursEl.textContent   = pad(Math.floor((diff % 86400000) / 3600000));
      minutesEl.textContent = pad(Math.floor((diff % 3600000) / 60000));
      secondsEl.textContent = pad(Math.floor((diff % 60000) / 1000));
    }

    tick();
    setInterval(tick, 1000);
  });
})();
