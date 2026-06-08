(function () {
  'use strict';

  /*
   * Padrão WAI-ARIA "Tabs": só o gatilho selecionado fica no fluxo do
   * Tab (tabindex 0), os demais ficam em -1 e a navegação entre eles
   * acontece pelas setas esquerda/direita (e Home/End).
   */
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    var triggers = Array.from(tabs.querySelectorAll('.tabs__trigger'));
    var panels = Array.from(tabs.querySelectorAll('.tabs__panel'));

    function select(index) {
      triggers.forEach(function (trigger, i) {
        var isSelected = i === index;
        trigger.setAttribute('aria-selected', String(isSelected));
        trigger.setAttribute('tabindex', isSelected ? '0' : '-1');
      });

      panels.forEach(function (panel, i) {
        if (i === index) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });
    }

    triggers.forEach(function (trigger, index) {
      trigger.addEventListener('click', function () {
        select(index);
      });

      trigger.addEventListener('keydown', function (e) {
        var lastIndex = triggers.length - 1;
        var nextIndex = null;

        switch (e.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            nextIndex = index === lastIndex ? 0 : index + 1;
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            nextIndex = index === 0 ? lastIndex : index - 1;
            break;
          case 'Home':
            nextIndex = 0;
            break;
          case 'End':
            nextIndex = lastIndex;
            break;
          default:
            return;
        }

        e.preventDefault();
        select(nextIndex);
        triggers[nextIndex].focus();
      });
    });
  });

})();
