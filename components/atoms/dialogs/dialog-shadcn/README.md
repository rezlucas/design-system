# Dialog — Atom

Modal centralizado sobre overlay, inspirado no componente `Dialog` do shadcn/ui, recriado com o elemento `<dialog>` nativo do HTML, em CSS e JavaScript vanilla.

## Por que `<dialog>` nativo

O elemento `<dialog>` já resolve, sem JavaScript extra, os pontos mais delicados de um modal acessível:

- Foco move para dentro do modal ao abrir (`showModal()`) e retorna ao gatilho ao fechar.
- Ciclo de Tab (focus trap) fica contido dentro do modal automaticamente.
- A tecla `Esc` fecha o modal nativamente.
- O `::backdrop` bloqueia interação com o restante da página.

O `script.js` deste componente apenas conecta gatilhos (`data-dialog-target`), o botão de fechar (`data-dialog-close`) e o clique fora do conteúdo (no backdrop).

## HTML de referência

```html
<button type="button" class="button button--filled button--md" data-dialog-target="dialog-confirm">
  Excluir conta
</button>

<dialog class="dialog" id="dialog-confirm" aria-labelledby="dialog-confirm-title" aria-describedby="dialog-confirm-desc">
  <div class="dialog__header">
    <div>
      <h2 class="dialog__title" id="dialog-confirm-title">Excluir esta conta?</h2>
      <p class="dialog__description" id="dialog-confirm-desc">Essa ação não pode ser desfeita.</p>
    </div>
    <button class="dialog__close" type="button" data-dialog-close aria-label="Fechar">×</button>
  </div>
  <div class="dialog__footer">
    <button class="button button--outline button--sm" type="button" data-dialog-close>Cancelar</button>
    <button class="button button--filled button--sm" type="button" data-dialog-close>Sim, excluir</button>
  </div>
</dialog>
```

## Variantes de conteúdo

| Slot | Uso |
|---|---|
| `dialog__header` + `dialog__title`/`dialog__description` | Título e contexto da ação. |
| `dialog__body` | Corpo livre: texto, formulário (`dialog__field`, `label`, `input`). |
| `dialog__footer` | Ações alinhadas à direita (cancelar + confirmar). |

## Acessibilidade

- `aria-labelledby`/`aria-describedby` apontam para o título e a descrição.
- `data-dialog-close` em qualquer botão fecha o modal preservando o retorno de foco ao gatilho original.
- Nunca remova o botão de fechar visível: ele é o ponto de saída para quem navega por teclado ou leitor de tela.

## Dependências

Nenhuma. Requer apenas:
- `tokens/tokens.css`
- `base/reset.css`
- `base/base.css`
- Este `style.css` e `script.js`
- Opcional: `components/atoms/buttons/style.css` para os exemplos de gatilho e ações
