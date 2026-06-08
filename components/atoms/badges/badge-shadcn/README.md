# Badge — Atom

Rótulo curto para status, contagem ou categoria, inspirado no componente `Badge` do shadcn/ui, recriado em HTML e CSS puro (sem JavaScript).

## Variantes

| Modificador | Uso |
|---|---|
| `badge--default` | Destaque com a cor da marca (`--color-primary`), fundo sólido. |
| `badge--secondary` | Neutro, fundo `--color-background-alt`. |
| `badge--outline` | Apenas borda, sem preenchimento. |
| `badge--success` | Estado positivo (ativo, conectado, aprovado). |
| `badge--warning` | Estado de atenção (pendente, em revisão). |
| `badge--error` | Estado negativo (falhou, bloqueado, expirado). |

## HTML de referência

```html
<!-- Simples -->
<span class="badge badge--default">Novo</span>
<span class="badge badge--secondary">Beta</span>
<span class="badge badge--outline">Rascunho</span>

<!-- Com indicador de status -->
<span class="badge badge--success">
  <span class="badge__dot" aria-hidden="true"></span>
  Ativo
</span>
```

## Acessibilidade

- É um elemento puramente visual: use `<span>`, nunca um elemento interativo (`<button>`/`<a>`) só para exibir um rótulo.
- O `.badge__dot` é decorativo e leva `aria-hidden="true"`; o estado deve estar descrito no texto do badge.
- Para badges que comuniquem contagens dinâmicas (ex.: notificações), prefira `aria-label` no elemento pai descrevendo o significado completo.

## Dependências

Nenhuma. Requer apenas:
- `tokens/tokens.css`
- `base/reset.css`
- `base/base.css`
- Este `style.css`
