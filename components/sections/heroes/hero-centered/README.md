# Hero Centered — Section

Hero com imagem full-bleed e todo o conteúdo centralizado (horizontalmente e verticalmente). Overlay escuro uniforme garante legibilidade do texto branco sobre qualquer imagem de fundo.

## Quando usar

- Primeira dobra de landing pages com foco no título e proposta de valor.
- Quando a imagem é apenas decorativa/atmosférica (abstract, gradiente, cenário genérico) e não há um sujeito principal posicionado lateralmente.
- Quando se quer máximo impacto visual com conteúdo centralizado.

## Diferença dos outros heróis

| Componente | Layout do conteúdo | Overlay | Uso típico |
|---|---|---|---|
| `hero-background` | Esquerda (~50%) | Gradiente esq→dir | Foto com sujeito à direita |
| `hero-centered` | **Centralizado (100%)** | **Escuro uniforme** | Imagem decorativa/abstrata |
| `hero-split` | Esquerda (50%) + imagem direita | Sem overlay | Fundo branco |

## Estrutura de conteúdo

| Elemento | Tag | Obrigatório |
|---|---|---|
| Eyebrow / tag | `<span>` | Não |
| Título | `<h1>` | Sim |
| Descrição | `<p>` | Não |
| CTAs | `.button--inverse` × 1 ou 2 | Sim |

## HTML de referência

```html
<section class="hero-centered" aria-labelledby="hero-title">

  <div class="hero-centered__media">
    <img
      class="hero-centered__image"
      src="[caminho-da-imagem]"
      alt="descrição do que a imagem representa visualmente"
      width="1920" height="579"
      loading="eager" decoding="async"
    >
  </div>

  <div class="hero-centered__overlay">
    <div class="hero-centered__container container">
      <div class="hero-centered__content">

        <span class="hero-centered__eyebrow">TAG / CATEGORIA</span>

        <h1 class="hero-centered__title" id="hero-title">
          Título principal centralizado de até 3 linhas
        </h1>

        <p class="hero-centered__description">
          Subtítulo de 1 a 2 linhas explicando a proposta de valor.
        </p>

        <div class="hero-centered__actions">
          <a href="#" class="button button--filled button--md button--inverse">
            CTA Principal
            <svg class="button__icon" aria-hidden="true" focusable="false">
              <use href="#icon-arrow"/>
            </svg>
          </a>
          <a href="#" class="button button--outline button--md button--inverse">
            CTA Secundário
            <svg class="button__icon" aria-hidden="true" focusable="false">
              <use href="#icon-arrow"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  </div>

</section>
```

## Comportamento responsivo

| Viewport | Comportamento |
|---|---|
| < 480px | Botões empilhados em coluna, full-width, centralizados (max-width 360px). Título menor via `clamp()`. |
| 480px+ | Botões em linha, centralizados. Descrição em `font-size-lg`. |
| 768px+ | `min-height` do overlay aumenta para 500px. Padding maior. |
| 1024px+ | `min-height` 580px. |

## Botões

Por estar sempre sobre fundo escuro, os botões **devem usar `--inverse`**:
- `button--filled button--inverse` → branco com texto escuro (ação primária)
- `button--outline button--inverse` → borda + texto brancos (ação secundária)

## Imagem recomendada

- **Placeholder**: `placeholder-background-image-section.png` (1920×579)
- **Tipo**: imagem decorativa — abstract, gradiente, textura, paisagem
- O `object-position: center` mantém o centro visível em todos os tamanhos de tela

## Overlay

O `rgba(0, 0, 0, 0.42)` no overlay é estrutural (garantia de legibilidade), não cor de marca. Se a imagem já for muito escura, pode reduzir a opacidade do overlay via CSS no arquivo de tokens do cliente:

```css
/* tokens-cliente/colors.css */
.hero-centered__overlay {
  background-color: rgba(0, 0, 0, 0.20); /* imagem mais visível */
}
```

## Dependências

- `tokens/tokens.css`
- `base/reset.css` · `base/base.css` · `base/utilities.css` (`.container`, `.skip-link`)
- `components/atoms/buttons/style.css`
