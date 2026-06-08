# Tabs — Atom

Conjunto de gatilhos e painéis alternáveis, inspirado no componente `Tabs` do shadcn/ui, recriado em HTML, CSS e JavaScript vanilla, seguindo o padrão WAI-ARIA "Tabs".

## Variantes

| Modificador | Uso |
|---|---|
| `tabs` | Gatilhos com sublinhado deslizante sobre uma linha divisória. |
| `tabs--pill` | Gatilhos em cápsula, fundo sólido no item ativo. |

## Comportamento

- Clique seleciona a aba e exibe o painel correspondente.
- Navegação por teclado: `←`/`→` (ou `↑`/`↓`) movem entre abas, `Home`/`End` vão para a primeira/última.
- Apenas o gatilho ativo fica no fluxo do `Tab` (`tabindex="0"`); os demais usam `tabindex="-1"` e roving focus.

## HTML de referência

```html
<div class="tabs" data-tabs>
  <div class="tabs__list" role="tablist" aria-label="Planos">
    <button class="tabs__trigger" type="button" role="tab" id="tab-conta" aria-controls="panel-conta" aria-selected="true" tabindex="0">Conta</button>
    <button class="tabs__trigger" type="button" role="tab" id="tab-senha" aria-controls="panel-senha" aria-selected="false" tabindex="-1">Senha</button>
  </div>

  <div class="tabs__panel" id="panel-conta" role="tabpanel" aria-labelledby="tab-conta" tabindex="0">
    <p class="tabs__panel-title">Conta</p>
    <p>Conteúdo da aba.</p>
  </div>
  <div class="tabs__panel" id="panel-senha" role="tabpanel" aria-labelledby="tab-senha" tabindex="0" hidden>
    <p class="tabs__panel-title">Senha</p>
    <p>Conteúdo da aba.</p>
  </div>
</div>
```

## Acessibilidade

- `role="tablist"` no contêiner dos gatilhos, `role="tab"` em cada botão e `role="tabpanel"` em cada painel.
- `aria-controls`/`aria-labelledby` ligam gatilho e painel; `aria-selected` reflete o estado.
- Painéis inativos recebem `hidden`, removendo-os da árvore de acessibilidade e do layout.

## Dependências

Nenhuma. Requer apenas:
- `tokens/tokens.css`
- `base/reset.css`
- `base/base.css`
- Este `style.css` e `script.js`
