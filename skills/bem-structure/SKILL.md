---
name: bem-structure
description: >
  Aplica a metodologia BEM (Block Element Modifier) para nomear classes CSS de
  forma consistente, previsível e sem conflitos. Use sempre que for escrever,
  revisar ou refatorar CSS, criar novos componentes, nomear classes HTML, ou
  quando perceber seletores CSS aninhados, !important, ou colisões de estilo.
  Ative também ao traduzir um layout Figma para HTML/CSS.
---

# BEM — Block Element Modifier

Convenção de nomenclatura de classes CSS adotada **obrigatoriamente** neste projeto. Todo componente segue BEM sem exceção.

## 1. Por que BEM

- **Escopo plano**: zero aninhamento de seletores → CSS rápido e previsível.
- **Sem colisão**: cada componente tem prefixo único; estilos não vazam.
- **Auto-documentável**: lendo a classe, você sabe o papel do elemento.
- **Portável**: o mesmo CSS funciona em Webflow, HubSpot, embeds.

## 2. Anatomia

```
.block                          → componente raiz
.block__element                 → parte interna do block
.block--modifier                → variante do block inteiro
.block__element--modifier       → variante de um element
```

### Regras

- **kebab-case** para nomes de bloco: `hero-split`, `card-pricing`, `faq-accordion`.
- **Dois underscores** (`__`) separam block de element.
- **Dois hífens** (`--`) separam o que está sendo modificado do modificador.
- Elements **não aninham**: `.card__title__icon` está ❌ errado. Use `.card__title-icon` se realmente fizer parte do título.

## 3. Como decidir block, element ou modifier

```
Esta peça funciona sozinha em qualquer contexto?
├── Sim → é um BLOCK
└── Não, só faz sentido dentro de outro componente → é um ELEMENT

A diferença é só visual (cor, tamanho, alinhamento)?
├── Sim → é um MODIFIER
└── Não, é uma estrutura diferente → é outro BLOCK
```

### Exemplos de decisão

| Peça | É o quê | Por quê |
|---|---|---|
| `hero-split` | Block | Seção autocontida |
| `hero-split__title` | Element | Só existe dentro do hero |
| `hero-split--dark` | Modifier | Variante visual do hero inteiro |
| `button` | Block | Reutilizável em qualquer lugar |
| `button--primary` | Modifier | Variante do botão |
| `hero-split__cta` | Element | É o lugar do CTA dentro do hero |
| (dentro do hero) `<button class="button button--primary">` | Block separado | Botão é seu próprio componente |

## 4. Exemplo completo

```html
<section class="hero-split hero-split--dark">
  <div class="hero-split__container">
    <div class="hero-split__content">
      <span class="hero-split__eyebrow hero-split__eyebrow--accent">Novo</span>
      <h1 class="hero-split__title">Título principal</h1>
      <p class="hero-split__description">Subtítulo descritivo.</p>
      <div class="hero-split__actions">
        <a href="#" class="button button--primary button--large">CTA</a>
        <a href="#" class="button button--ghost button--large">Saiba mais</a>
      </div>
    </div>
    <figure class="hero-split__media">
      <img class="hero-split__image" src="..." alt="...">
    </figure>
  </div>
</section>
```

```css
/* Block */
.hero-split { padding: var(--space-3xl) var(--space-lg); }

/* Modifier do block */
.hero-split--dark { background-color: var(--color-background-dark); }
.hero-split--dark .hero-split__title { color: var(--color-text-inverse); }

/* Elements */
.hero-split__container { max-width: var(--container-max); margin-inline: auto; }
.hero-split__title { font-family: var(--font-heading); font-size: var(--font-size-4xl); }
.hero-split__description { color: var(--color-text-muted); }

/* Modifier de element */
.hero-split__eyebrow--accent { color: var(--color-primary); }

/* Botão é OUTRO block, com modifiers próprios */
.button { /* base */ }
.button--primary { background: var(--color-primary); }
.button--ghost { background: transparent; border: 1px solid currentColor; }
.button--large { padding: var(--space-md) var(--space-xl); }
```

## 5. Antipadrões (NÃO fazer)

### ❌ Aninhar seletores
```css
/* RUIM */
.hero h1 { font-size: 3rem; }
.hero .cta { background: blue; }

/* BOM */
.hero__title { font-size: 3rem; }
.hero__cta { background: var(--color-primary); }
```

### ❌ Elements aninhados em mais de um nível
```css
/* RUIM */
.card__body__title__icon { ... }

/* BOM — flatten */
.card__title-icon { ... }
```

### ❌ Modificar element pelo block parent
```css
/* RUIM */
.hero--dark h1 { color: white; }

/* BOM */
.hero--dark .hero__title { color: var(--color-text-inverse); }
```

### ❌ Misturar BEM com seletores genéricos
```css
/* RUIM */
.faq h3 { font-weight: 700; }

/* BOM */
.faq__question { font-weight: 700; }
```

### ❌ Modifier sem block
```html
<!-- RUIM: --primary não diz de quê -->
<button class="--primary">CTA</button>

<!-- BOM -->
<button class="button button--primary">CTA</button>
```

### ❌ Reutilizar nome de element em blocks diferentes esperando que herdem
```css
/* RUIM: .__title aqui não existe sem o block */
.__title { font-weight: 700; }

/* BOM: cada block declara seus elements */
.hero__title { font-weight: 700; }
.card__title { font-weight: 600; }
```

## 6. Mixagem de blocks

Quando um block precisa aparecer dentro de outro, **use dois blocks na mesma tag**, não invente um element novo:

```html
<!-- ✅ Botão dentro do hero -->
<div class="hero__actions">
  <button class="button button--primary">CTA</button>
</div>

<!-- ❌ Não fazer -->
<div class="hero__actions">
  <button class="hero__button">CTA</button>
</div>
```

O CSS do `button` resolve o estilo dele. O CSS do `hero__actions` resolve só o posicionamento.

## 7. JavaScript hooks

Para JS, **não use classes BEM como seletor**. Use atributos `data-*`:

```html
<!-- BOM -->
<button class="button button--primary" data-js="open-modal">Abrir</button>

<script>
  document.querySelectorAll('[data-js="open-modal"]').forEach(...)
</script>
```

Isso separa estilo de comportamento — você pode renomear classes sem quebrar JS.

## 8. Checklist BEM (antes de finalizar um componente)

- [ ] O block tem nome único no projeto (não colide com outros)
- [ ] Todas as classes do componente começam com o nome do block
- [ ] Não há seletores aninhados no CSS (`.block .child`)
- [ ] Não há seletores de elemento HTML dentro do block (`.block h1`)
- [ ] Não há `!important`
- [ ] Modifiers existem só quando há variação real (não criar modifier "à toa")
- [ ] Blocks reutilizáveis (button, card, badge) não estão hardcoded no markup do componente — são blocks separados
- [ ] JS usa `data-*`, não classes BEM, como hook
