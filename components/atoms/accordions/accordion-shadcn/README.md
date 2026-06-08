# Accordion — Atom

Lista vertical de itens expansíveis, inspirada no componente `Accordion` do shadcn/ui, recriada em HTML, CSS e JavaScript vanilla.

## Variantes

| Modificador | Uso |
|---|---|
| `accordion` | Lista com divisores horizontais entre os itens. |
| `accordion--bordered` | Cada item em um card próprio, com borda e raio. |

## Comportamento

- Abertura única por padrão: ao abrir um item, os demais fecham.
- Animação do painel via `grid-template-rows` (0fr → 1fr), sem medir alturas em JS.
- Chevron gira 180° no item aberto.

## HTML de referência

```html
<div class="accordion" data-accordion>
  <div class="accordion__item">
    <h3 class="accordion__heading">
      <button class="accordion__trigger" type="button" aria-expanded="false" aria-controls="acc-1-panel" id="acc-1-trigger">
        <span class="accordion__trigger-text">É acessível?</span>
        <svg class="accordion__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
    </h3>
    <div class="accordion__panel" id="acc-1-panel" role="region" aria-labelledby="acc-1-trigger">
      <div class="accordion__panel-inner">
        <p class="accordion__answer">Sim, segue o padrão WAI-ARIA.</p>
      </div>
    </div>
  </div>
</div>
```

## Acessibilidade

- `<button aria-expanded>` controla `<div role="region">` via `aria-controls`/`aria-labelledby`.
- Navegação por teclado nativa do `<button>` (Tab, Enter, Espaço).
- Foco visível via `:focus-visible`.

## Permitir múltiplos itens abertos

Por padrão a abertura é exclusiva. Para permitir vários itens abertos ao mesmo tempo, remova em `script.js` o trecho que fecha os demais itens antes de abrir o selecionado.

## Dependências

Nenhuma. Requer apenas:
- `tokens/tokens.css`
- `base/reset.css`
- `base/base.css`
- Este `style.css` e `script.js`
