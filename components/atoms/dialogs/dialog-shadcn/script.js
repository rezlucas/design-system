(function () {
  'use strict';

  /*
   * <dialog> nativo já cuida de: foco inicial, ciclo de Tab dentro do
   * modal, tecla Esc para fechar e bloqueio de scroll/interação atrás
   * via ::backdrop. Aqui só ligamos os gatilhos, o botão de fechar e
   * o clique fora (no backdrop) para fechar — padrão usual de modais.
   */
  document.querySelectorAll('[data-dialog-target]').forEach(function (trigger) {
    var dialog = document.getElementById(trigger.getAttribute('data-dialog-target'));
    if (!dialog) return;

    trigger.addEventListener('click', function () {
      dialog.showModal();
    });

    dialog.querySelectorAll('[data-dialog-close]').forEach(function (closeEl) {
      closeEl.addEventListener('click', function () {
        dialog.close();
      });
    });

    /* Clique no backdrop (fora do conteúdo) fecha o modal */
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });
  });

})();
