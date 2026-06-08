# Card — Atom

Contêiner com slots de cabeçalho, conteúdo e rodapé, inspirado no componente `Card` do shadcn/ui, recriado em HTML e CSS puro (sem JavaScript).

## Anatomia (slots)

| Classe | Uso |
|---|---|
| `card__media` | Faixa de mídia no topo (imagem, ilustração, thumbnail). Opcional. |
| `card__header` | Título (`card__title`) e descrição curta (`card__description`). |
| `card__content` | Corpo livre: texto, métricas (`card__stat`), listas, etc. |
| `card__footer` | Ações, badges ou metadados, alinhados horizontalmente. |

## Modifier

| Modificador | Uso |
|---|---|
| `card--interactive` | Eleva e adiciona sombra no hover/focus, sinalizando que o card todo é clicável. Use em `<a>` ou `<button>`. |

## HTML de referência

```html
<!-- Card simples -->
<article class="card">
  <div class="card__header">
    <h3 class="card__title">Relatório de performance</h3>
    <p class="card__description">Resumo semanal de métricas</p>
  </div>
  <div class="card__content">
    <p>Conteúdo livre do card.</p>
  </div>
  <div class="card__footer">
    <button class="button button--outline button--sm" type="button">Ver relatório</button>
  </div>
</article>

<!-- Card clicável -->
<a class="card card--interactive" href="/relatorios">
  <div class="card__header">
    <h3 class="card__title">Documentação da API</h3>
    <p class="card__description">Referência completa de endpoints e exemplos.</p>
  </div>
</a>
```

## Acessibilidade

- Use `<article>` para cards autônomos de conteúdo e `<a>`/`<button>` (com `card--interactive`) quando o card inteiro for uma ação.
- Nunca aninhe elementos interativos (botões, links) dentro de um `<a class="card">`: prefira um único alvo de clique por card.
- `:focus-visible` já está coberto pelo modifier `--interactive`.

## Dependências

Nenhuma. Requer apenas:
- `tokens/tokens.css`
- `base/reset.css`
- `base/base.css`
- Este `style.css`
- Opcional: `components/atoms/buttons/style.css` e `components/atoms/badges/badge-shadcn/style.css` para os exemplos com ações e badges
