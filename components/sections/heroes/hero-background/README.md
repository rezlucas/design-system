# Hero Background — Section

Hero com imagem full-bleed. No **desktop**, a imagem ocupa toda a seção como fundo e o conteúdo fica sobreposto à esquerda com um gradiente escuro para garantir legibilidade. No **mobile**, o layout é empilhado: bloco escuro com o conteúdo em cima, imagem embaixo como bloco separado.

## Quando usar

- Primeira dobra de landing pages com foto de produto, pessoa ou ambiente como elemento visual principal.
- Quando a imagem tem o sujeito posicionado à direita (deixa a área esquerda limpa para o texto).
- Quando se quer alto impacto visual com mínimo de elementos.

## Quando NÃO usar

- Quando a imagem é informativa e não pode ser parcialmente ocultada pelo gradiente.
- Quando não há uma imagem de boa qualidade disponível (prefira `hero-centered` ou `hero-minimal`).

## Estrutura de conteúdo

| Elemento | Tag | Obrigatório |
|---|---|---|
| Eyebrow | `<span>` | Não |
| Título | `<h1>` | Sim |
| Subtítulo | `<p>` | Não |
| CTA principal | `<a class="button button--filled button--lg">` | Sim |
| CTA secundário | `<a class="button button--outline button--lg">` | Não |

## Comportamento responsivo

| Viewport | Layout |
|---|---|
| < 480px | Empilhado: overlay escuro sólido (cima) + imagem 4:3 (baixo). Botão full-width. |
| 480px–767px | Igual, mas com mais padding no overlay. |
| 768px+ | Imagem vira fundo absoluto full-bleed. Gradiente escuro→transparente da esquerda. Conteúdo em ~50% à esquerda. |
| 1024px+ | Overlay fica mais alto (560px) e conteúdo expande para 580px. |

## Imagem recomendada

- **Placeholder**: `placeholder-background-image-section.png` (1920×579).
- **Proporção real**: ~10:3 (mais larga que 16:9). O sujeito principal deve estar do **lado direito** para não ser coberto pelo gradiente.
- **Tamanho mínimo recomendado para produção**: 1440 × 480px.
- **loading**: `eager` (imagem above the fold).
- Substituir pelo arquivo real do cliente em `assets/images/clients/[cliente]/`.

## HTML de referência

```html
<section class="hero-background" aria-labelledby="hero-title">

  <div class="hero-background__media">
    <img
      class="hero-background__image"
      src="[caminho-da-imagem]"
      alt="descrição da imagem real que vai entrar aqui"
      width="1920"
      height="960"
      loading="eager"
      decoding="async"
    >
  </div>

  <div class="hero-background__overlay">
    <div class="hero-background__container container">
      <div class="hero-background__content">
        <span class="hero-background__eyebrow">TAGLINE CURTA!</span>
        <h1 class="hero-background__title" id="hero-title">Título de até 2 linhas</h1>
        <p class="hero-background__description">Subtítulo de 1 a 2 linhas explicando a proposta de valor.</p>
        <div class="hero-background__actions">
          <a href="#form" class="button button--filled button--lg">CTA Principal</a>
        </div>
      </div>
    </div>
  </div>

</section>
```

## Customização via tokens (por cliente)

```css
/* tokens-cliente/colors.css — ajuste a cor do eyebrow */
:root {
  --color-primary: #F5C518; /* amarelo → eyebrow e botão filled */
}
```

O gradiente (`rgba(0,0,0,...)`) é estrutural e intencional — não usa token pois é uma sombra técnica de legibilidade, não uma cor de marca.

## Acessibilidade

- `<section aria-labelledby="hero-title">` — landmark identificado pelo `<h1>`.
- `id` no `<h1>` deve ser **único por página** — ajuste se houver múltiplos heróis.
- `<a class="skip-link">` antes do hero — permite pular direto ao conteúdo via teclado.
- `alt` da imagem deve descrever o que o usuário veria se a imagem carregar.
- Verifique o contraste do eyebrow (`--color-primary`) contra `--color-background-dark` ao trocar a cor de marca.

## Dependências

- `tokens/tokens.css`
- `base/reset.css`
- `base/base.css`
- `base/utilities.css` (classe `.container`)
- `components/atoms/buttons/style.css`
