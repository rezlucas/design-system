# Button — Atom

Componente de botão com 3 variantes, 3 tamanhos e suporte a ícone-only.

## Variantes

| Modificador | Uso |
|---|---|
| `button--filled` | Ação principal. Preenchido com `--color-text-strong` (preto neutro, substituir pelo `--color-primary` do cliente). |
| `button--outline` | Ação secundária. Borda + texto, sem fundo. |
| `button--link` | Ação terciária ou link inline. Sem borda nem fundo. |

## Modifier de contexto: `--inverse`

Combina com qualquer variante para **inverter o esquema de cor** em fundos escuros ou com a cor da marca como background.

| Combinação | Resultado visual |
|---|---|
| `button--filled button--inverse` | Fundo branco, texto escuro. CTAs principais em heroes dark, banners de marca. |
| `button--outline button--inverse` | Borda + texto brancos, fundo transparente. Ação secundária em contexto escuro. |
| `button--link button--inverse` | Texto branco. Links em rodapés escuros, seções dark. |

```html
<!-- Hero com fundo escuro -->
<a href="#" class="button button--filled button--lg button--inverse">Garantir minha vaga</a>

<!-- Ação secundária em seção dark -->
<a href="#" class="button button--outline button--md button--inverse">Ver mais</a>
```

## Tamanhos

| Modificador | Altura | Fonte | Radius |
|---|---|---|---|
| `button--lg` | 56px | 18px (`--font-size-lg`) | 16px (`--radius-xl`) |
| `button--md` | 48px | 16px (`--font-size-base`) | 12px (`--radius-lg`) |
| `button--sm` | 36px | 14px (`--font-size-sm`) | 8px (`--radius-md`) |

## Layouts

- **Texto**: label diretamente dentro de `<button>`.
- **Ícone-only**: adicione `button--icon-only` + `aria-label` obrigatório.
- **Texto + ícone**: coloque `<svg class="button__icon">` ao lado do label.

## HTML de referência

```html
<!-- Filled — tamanhos -->
<button class="button button--filled button--lg" type="button">Get stuff done</button>
<button class="button button--filled button--md" type="button">Get stuff done</button>
<button class="button button--filled button--sm" type="button">Get stuff done</button>

<!-- Outline -->
<button class="button button--outline button--lg" type="button">Get stuff done</button>

<!-- Link -->
<button class="button button--link button--lg" type="button">Get stuff done</button>

<!-- Icon-only (aria-label obrigatório) -->
<button class="button button--filled button--lg button--icon-only" type="button" aria-label="Continuar">
  <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</button>

<!-- Texto + ícone -->
<button class="button button--filled button--lg" type="button">
  Get stuff done
  <svg class="button__icon" ...>...</svg>
</button>

<!-- Desabilitado (nativo) -->
<button class="button button--filled button--lg" type="button" disabled>Get stuff done</button>

<!-- Desabilitado num <a> -->
<a class="button button--filled button--lg" href="#" aria-disabled="true" tabindex="-1">Get stuff done</a>
```

## Customização por cliente

O `button--filled` usa `--color-text-strong` (#0A0A0A) como fundo neutro padrão. Para usar a cor da marca do cliente, sobrescreva apenas no arquivo de tokens do cliente:

```css
/* tokens-cliente/colors.css */
:root {
  --color-text-strong: #your-brand-color;
}
```

Ou crie um modifier específico no arquivo de tokens do cliente:

```css
.button--filled {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
.button--filled:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}
```

## Acessibilidade

- `<button type="button">` para ações (nunca `<div>` ou `<span>`).
- `<a href="...">` com as mesmas classes para links reais de navegação.
- Icon-only **sempre** com `aria-label` descrevendo a ação.
- Ícone SVG com `aria-hidden="true"` e `focusable="false"`.
- Estado disabled em `<a>`: `aria-disabled="true"` + `tabindex="-1"`.
- Foco visível via `:focus-visible` — nunca remova sem repor.

## Dependências

Nenhuma. Requer apenas:
- `tokens/tokens.css`
- `base/reset.css`
- `base/base.css`
- Este `style.css`
