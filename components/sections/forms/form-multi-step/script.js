(function () {
  'use strict';

  document.querySelectorAll('[data-js="multi-step-form"]').forEach(function (form) {
    var card       = form.closest('.form-multi-step__card') || form.parentElement;
    var steps      = Array.prototype.slice.call(form.querySelectorAll('[data-js="step"]'));
    var total      = steps.length;
    var fill       = card.querySelector('[data-js="progress-fill"]');
    var label      = card.querySelector('[data-js="progress-current"]');
    var percent    = card.querySelector('[data-js="progress-percent"]');
    var success    = card.querySelector('[data-js="success"]');
    var progress   = card.querySelector('[data-js="progress"]');
    var current    = 0;

    function show(index) {
      steps.forEach(function (step, i) {
        step.hidden = i !== index;
      });
      var pct = Math.round(((index + 1) / total) * 100);
      if (fill)    fill.style.width = pct + '%';
      if (label)   label.textContent = index + 1;
      if (percent) percent.textContent = pct + '%';
      var firstField = steps[index].querySelector('input, select, textarea');
      if (firstField) firstField.focus();
    }

    form.querySelectorAll('[data-js="next"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var fields = steps[current].querySelectorAll('input[required], select[required], textarea[required]');
        for (var i = 0; i < fields.length; i++) {
          if (!fields[i].value) { fields[i].reportValidity(); return; }
        }
        if (current < total - 1) {
          current++;
          show(current);
        }
      });
    });

    form.querySelectorAll('[data-js="back"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (current > 0) {
          current--;
          show(current);
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (progress) progress.hidden = true;
      steps.forEach(function (step) { step.hidden = true; });
      if (success) success.hidden = false;
    });

    show(0);
  });

})();
