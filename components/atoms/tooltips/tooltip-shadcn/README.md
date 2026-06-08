# Tooltip — Atom

Rótulo flutuante exibido ao passar o mouse ou focar um elemento de referência, inspirado no componente `Tooltip` do shadcn/ui, recriado em HTML, CSS e JavaScript vanilla.

## Posições

| Modificador | Uso |
|---|---|
| `tooltip--top` | Acima da referência (padrão). |
| `tooltip--bottom` | Abaixo da referência. |
| `tooltip--right` | À direita da referência. |
| `tooltip--left` | À esquerda da referência. |

## Comportamento

- Exibida via CSS puro em `:hover` e `:focus-within`, sem JavaScript no caminho principal.
- `script.js` cobre apenas os casos que o CSS não resolve sozinho: toque em telas sensíveis ao toque (alterna `.is-visible`) e tecla `Esc` para fechar.

## HTML de referência

```html
<span class="tooltip tooltip--top">
  <button class="tooltip__ref tooltip__ref--icon" type="button" aria-describedby="tip-copy">
    <svg width="16" height="16" aria-hidden="true" focusable="false"><!-- ícone --></svg>
  </button>
  <span class="tooltip__bubble" role="tooltip" id="tip-copy">Copiar link</span>
</span>

<!-- Sobre texto -->
<span class="tooltip tooltip--top">
  <span class="tooltip__ref tooltip__ref--dotted" tabindex="0" aria-describedby="tip-info">Termo técnico</span>
  <span class="tooltip__bubble" role="tooltip" id="tip-info">Explicação do termo</span>
</span>
```

## Acessibilidade

- A referência usa `aria-describedby` apontando para o `id` do `.tooltip__bubble` (`role="tooltip"`), associando a dica ao elemento sem duplicar texto para leitores de tela.
- Referências não interativas (`<span>`) precisam de `tabindex="0"` para receber foco e disparar `:focus-within`.
- A dica nunca deve conter a única forma de acessar uma informação ou ação crítica: é um complemento, não um substituto de rótulo.

## Dependências

Nenhuma. Requer apenas:
- `tokens/tokens.css`
- `base/reset.css`
- `base/base.css`
- Este `style.css` e `script.js`
