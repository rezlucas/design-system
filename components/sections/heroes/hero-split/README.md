# Hero Split — Section

Hero com layout dividido: conteúdo à esquerda e imagem à direita no desktop; empilhado no mobile. Suporta dois estilos de conteúdo via elementos BEM opcionais.

## Estilos de conteúdo

| Estilo | Elementos | Quando usar |
|---|---|---|
| **Style=01 — Checklist** | `__title` + `__checklist` + `__actions` (1 botão) | Quando a proposta de valor tem múltiplos benefícios enumeráveis (SaaS, serviços, planos) |
| **Style=02 — Descrição** | `__title` + `__description` + `__actions` (2 botões) | Quando a proposta precisa de uma frase explicativa e oferece duas opções de ação |

> Os elementos são independentes — você pode combinar livremente (ex: checklist + 2 botões).

## Estrutura HTML de referência

### Style=01 — Checklist

```html
<section class="hero-split" aria-labelledby="hero-title">
  <div class="hero-split__inner container">

    <div class="hero-split__content">
      <h2 class="hero-split__title" id="hero-title">
        Título principal de até 2–3 linhas
      </h2>

      <ul class="hero-split__checklist" aria-label="Benefícios">
        <li class="hero-split__check-item">
          <svg class="hero-split__check-icon" aria-hidden="true" focusable="false">
            <use href="#icon-check-circle"/>
          </svg>
          <span>Benefício ou feature em uma linha</span>
        </li>
        <!-- repetir para cada item -->
      </ul>

      <div class="hero-split__actions">
        <a href="#" class="button button--filled button--md">
          CTA Principal
          <svg class="button__icon" aria-hidden="true" focusable="false">
            <use href="#icon-arrow"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="hero-split__media">
      <img
        class="hero-split__image"
        src="[caminho]"
        alt="descrição da imagem real"
        width="400" height="400"
        loading="eager" decoding="async"
      >
    </div>

  </div>
</section>
```

### Style=02 — Descrição

```html
<section class="hero-split" aria-labelledby="hero-title">
  <div class="hero-split__inner container">

    <div class="hero-split__content">
      <h2 class="hero-split__title" id="hero-title">
        Título principal de até 2–3 linhas
      </h2>

      <p class="hero-split__description">
        Subtítulo descritivo em 1 a 2 linhas explicando a proposta de valor.
      </p>

      <div class="hero-split__actions">
        <a href="#" class="button button--filled button--md">
          CTA Principal
          <svg class="button__icon" aria-hidden="true" focusable="false">
            <use href="#icon-arrow"/>
          </svg>
        </a>
        <a href="#" class="button button--outline button--md">
          CTA Secundário
          <svg class="button__icon" aria-hidden="true" focusable="false">
            <use href="#icon-arrow"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="hero-split__media">
      <img
        class="hero-split__image"
        src="[caminho]"
        alt="descrição da imagem real"
        width="400" height="400"
        loading="eager" decoding="async"
      >
    </div>

  </div>
</section>
```

## Comportamento responsivo

| Viewport | Layout |
|---|---|
| < 768px | Coluna única: conteúdo em cima, imagem (4:3) abaixo. Botões full-width. |
| 768px+ | Duas colunas iguais (1fr 1fr), alinhadas com `align-items: stretch`. Imagem preenche altura do conteúdo. |
| 1024px+ | Gap maior entre colunas, imagem com altura mínima maior. |

## Imagem

- **Placeholder**: `placeholder-image.png` (400×400, 1:1).
- Imagem real pode ter qualquer proporção — `object-fit: cover` adapta.
- `loading="eager"` se o hero for acima da dobra (primeira seção visível).
- `loading="lazy"` se vier abaixo de outro hero ou section.

## Ícone de check

O ícone `#icon-check-circle` (círculo preenchido + checkmark branco) deve ser declarado via `<svg style="display:none">` no início da página ou no layout principal.

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="icon-check-circle" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" style="fill: var(--color-text-strong)"/>
    <path d="M7 12.5l3.5 3.5 6.5-7"
      style="fill:none; stroke: var(--color-text-inverse); stroke-width:2; stroke-linecap:round; stroke-linejoin:round"/>
  </symbol>
</svg>
```

A cor do círculo segue `--color-text-strong` — ao trocar para a cor primária do cliente, basta ajustar no token.

## Dependências

- `tokens/tokens.css`
- `base/reset.css` · `base/base.css` · `base/utilities.css` (`.container`)
- `components/atoms/buttons/style.css`
