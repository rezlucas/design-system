---
name: responsive-web-design
description: >
  Diretrizes para criar layouts mobile-first e responsivos usando CSS Grid,
  Flexbox, media queries e tipografia fluida. Ative sempre que for criar
  layouts, escolher entre Grid e Flexbox, definir breakpoints, ou garantir
  que um componente funcione de 320px até 1920px+.
---

# Responsive Web Design

Todo componente deste design system é **mobile-first e responsivo por padrão**. Leia este guia antes de criar qualquer layout.

## 1. Mobile-first: a regra fundamental

Escreva CSS base para o menor tamanho (320px). Adicione `@media (min-width: ...)` para expandir. Nunca use `max-width` para esconder ou simplificar layouts mobile.

```css
/* ✅ Mobile-first */
.hero__container {
  display: grid;
  grid-template-columns: 1fr;          /* 1 coluna no mobile */
  gap: var(--space-xl);
}

@media (min-width: 768px) {
  .hero__container {
    grid-template-columns: 1fr 1fr;    /* 2 colunas a partir de tablet */
  }
}

/* ❌ Desktop-first (ERRADO) */
.hero__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
  .hero__container {
    grid-template-columns: 1fr;
  }
}
```

## 2. Breakpoints padrão do projeto

| Token | Valor | Nome | Uso típico |
|---|---|---|---|
| `--bp-sm` | 480px | Small | Telefones grandes |
| `--bp-md` | 768px | Medium | Tablets, breakpoint principal |
| `--bp-lg` | 1024px | Large | Desktops pequenos |
| `--bp-xl` | 1280px | XLarge | Desktops |
| `--bp-2xl` | 1536px | 2XLarge | Telas largas |

> ⚠️ CSS não permite `var()` dentro de `@media`. Use o valor numérico diretamente: `@media (min-width: 768px)`.

**Na maioria dos componentes, dois breakpoints bastam**: `768px` e `1024px`.

## 3. Grid vs Flexbox — quando usar cada um

### CSS Grid → layouts bidimensionais

Use Grid quando precisar controlar linhas **e** colunas simultaneamente:

```css
/* Cards em grade responsiva */
.features__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 768px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**auto-fit + minmax** para grades que se ajustam sem breakpoints fixos:

```css
.logos__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--space-lg);
  align-items: center;
}
```

### Flexbox → layouts unidimensionais

Use Flexbox para fileiras (row) ou colunas (column) de itens com `flex-wrap`:

```css
/* Linha de botões que quebra no mobile */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

/* Nav horizontal */
.header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}
```

## 4. Padrões de imagens responsivas

```html
<!-- Above-the-fold (hero): eager, sem lazy -->
<img
  src="placeholder-hero.jpg"
  alt="descrição do que a imagem representa"
  width="1200"
  height="600"
  loading="eager"
  decoding="async"
>

<!-- Below-the-fold: sempre lazy -->
<img
  src="placeholder-landscape.jpg"
  alt="descrição do que a imagem representa"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
>
```

Sempre declare `width` e `height` para evitar layout shift (CLS).

## 5. Tipografia fluida com clamp()

Para headings grandes que precisam escalar suavemente entre mobile e desktop:

```css
/* Sintaxe: clamp(min, valor-ideal, max) */
.hero__title {
  font-size: clamp(var(--font-size-3xl), 5vw, var(--font-size-5xl));
}

.section__heading {
  font-size: clamp(var(--font-size-2xl), 3.5vw, var(--font-size-4xl));
}
```

Use `clamp()` com moderação — apenas em headings principais. Body text usa tokens fixos.

## 6. Container padrão

Todo componente full-width usa o `.container` de `utilities.css`:

```html
<section class="hero-centered">
  <div class="hero-centered__container container">
    <!-- conteúdo aqui -->
  </div>
</section>
```

O `container` tem `max-width: 1200px` e `padding-inline` para respiração lateral no mobile.

## 7. Ordem de propriedades no mobile-first

Para evitar override acidental, siga esta ordem no CSS:

1. **Base mobile** — propriedades que valem para todos os tamanhos
2. **`@media (min-width: 480px)`** — ajustes para telefones grandes (opcional)
3. **`@media (min-width: 768px)`** — layout tablet (geralmente onde muda o grid)
4. **`@media (min-width: 1024px)`** — refinamentos desktop
5. **`@media (min-width: 1280px)`** — ajustes de telas grandes (raramente necessário)

## 8. Nunca fazer

- ❌ `display: none` para esconder conteúdo em mobile — reorganize o layout.
- ❌ Larguras fixas em px em elementos de layout (use %, fr, ou `max-width`).
- ❌ `position: absolute` sem containment adequado no parent.
- ❌ `overflow: hidden` no `body` como solução para scroll horizontal — encontre a causa raiz.
- ❌ Breakpoints com `max-width` (desktop-first).

## 9. Checklist de responsividade

- [ ] Funciona em 320px (menor telefone comum)
- [ ] Funciona em 375px (iPhone SE)
- [ ] Funciona em 768px (tablet)
- [ ] Funciona em 1024px (desktop pequeno)
- [ ] Funciona em 1440px (desktop padrão)
- [ ] Sem scroll horizontal em nenhum tamanho
- [ ] Imagens têm `loading`, `decoding`, `width` e `height` definidos
- [ ] `alt` descritivo em todas as imagens
- [ ] Tipografia fluida em headings principais (opcional mas recomendado)
- [ ] CSS escrito mobile-first (base → `min-width`)
