(function () {
  'use strict';

  /*
   * Injeta, na #ds-nav-bar de cada página de demonstração de
   * componente, um grupo de botões "Desktop / Tablet / Celular".
   * Ao escolher um tamanho menor, abre um overlay com um <iframe>
   * carregando a própria página num viewport reduzido — assim os
   * media queries do componente respondem de verdade (diferente de
   * só encolher um <div>, que não muda o viewport real).
   *
   * Roda apenas no documento de topo: dentro do iframe de prévia
   * este mesmo script encontra a barra, mas não injeta nada de novo,
   * evitando barras aninhadas dentro da prévia.
   */
  if (window.self !== window.top) return;

  var bar = document.getElementById('ds-nav-bar');
  if (!bar || bar.querySelector('.dp-toolbar')) return;

  var DEVICES = [
    {
      id: 'desktop',
      label: 'Desktop',
      icon: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'
    },
    {
      id: 'tablet',
      label: 'Tablet',
      icon: '<rect x="6" y="3" width="12" height="18" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/>',
      frame: { width: 768, height: 880 }
    },
    {
      id: 'mobile',
      label: 'Celular',
      icon: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><line x1="11" y1="18.5" x2="13" y2="18.5"/>',
      frame: { width: 390, height: 780 }
    }
  ];

  var toolbar = document.createElement('div');
  toolbar.className = 'dp-toolbar';
  toolbar.setAttribute('role', 'group');
  toolbar.setAttribute('aria-label', 'Pré-visualizar este componente em outro tamanho de tela');

  var overlay = null;
  var current = 'desktop';
  var buttons = [];

  function closeOverlay() {
    if (!overlay) return;
    overlay.remove();
    overlay = null;
    document.documentElement.classList.remove('dp-is-previewing');
  }

  function openOverlay(device) {
    closeOverlay();

    var wrap = document.createElement('div');
    wrap.className = 'dp-frame-wrap';

    var label = document.createElement('p');
    label.className = 'dp-frame-label';
    label.textContent = device.label.toUpperCase() + ' · ' + device.frame.width + ' × ' + device.frame.height + 'px';

    var iframe = document.createElement('iframe');
    iframe.className = 'dp-frame dp-frame--' + device.id;
    iframe.style.width = device.frame.width + 'px';
    iframe.style.height = device.frame.height + 'px';
    iframe.src = location.href;
    iframe.title = 'Prévia do componente em tela de ' + device.label.toLowerCase();

    wrap.appendChild(label);
    wrap.appendChild(iframe);

    overlay = document.createElement('div');
    overlay.className = 'dp-overlay';
    overlay.appendChild(wrap);

    document.body.appendChild(overlay);
    document.documentElement.classList.add('dp-is-previewing');
  }

  function activate(device) {
    if (current === device.id) return;
    current = device.id;

    buttons.forEach(function (entry) {
      var isActive = entry.device.id === device.id;
      entry.btn.classList.toggle('is-active', isActive);
      entry.btn.setAttribute('aria-pressed', String(isActive));
    });

    if (device.id === 'desktop') {
      closeOverlay();
    } else {
      openOverlay(device);
    }
  }

  DEVICES.forEach(function (device) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'dp-btn' + (device.id === 'desktop' ? ' is-active' : '');
    btn.title = 'Ver como ' + device.label.toLowerCase();
    btn.setAttribute('aria-label', 'Ver como ' + device.label.toLowerCase());
    btn.setAttribute('aria-pressed', String(device.id === 'desktop'));
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      device.icon + '</svg>';

    btn.addEventListener('click', function () { activate(device); });

    buttons.push({ device: device, btn: btn });
    toolbar.appendChild(btn);
  });

  /* Esc volta para o modo desktop e fecha a prévia */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay) activate(DEVICES[0]);
  });

  var label = bar.querySelector('#ds-nav-label');
  bar.insertBefore(toolbar, label || null);
})();
