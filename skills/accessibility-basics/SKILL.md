---
name: accessibility-basics
description: >
  Diretrizes de acessibilidade básica (WCAG AA) para HTML semântico, contraste,
  navegação por teclado, ARIA e formulários. Ative sempre que criar forms,
  botões, navegação, modais, accordions, imagens, ou qualquer elemento interativo.
---

# Acessibilidade Básica (WCAG AA)

Acessibilidade não é opcional — é requisito mínimo de todo componente. Aplique estas diretrizes antes de marcar qualquer componente como pronto.

## 1. HTML semântico primeiro

Use o elemento HTML correto para cada função. ARIA só complementa — nunca substitui semântica nativa.

| Função | Elemento correto | ❌ Evitar |
|---|---|---|
| Botão de ação | `<button>` | `<div onclick>`, `<span onclick>` |
| Navegação | `<nav>` | `<div class="nav">` |
| Formulário | `<form>` | `<div class="form">` |
| Lista de itens | `<ul>/<ol>/<li>` | `<div>` com classes |
| Citação | `<blockquote>` | `<p class="quote">` |
| Tabela de dados | `<table>` | `<div>` em grade |
| Artigo independente | `<article>` | `<section>` genérico |
| Seção com heading | `<section>` + `<h2>` | `<div class="section">` |

## 2. Hierarquia de headings

- Cada página começa com **um único `<h1>`** (geralmente o hero).
- Nunca pule níveis: `<h2>` → `<h3>` → `<h4>`. Nunca `<h2>` → `<h4>`.
- Headings descrevem o conteúdo da seção, não apenas o estilo.

```html
<!-- ✅ Hierarquia correta -->
<h1>Título da Página</h1>
  <h2>Sobre Nós</h2>
    <h3>Nossa Missão</h3>
  <h2>Serviços</h2>
    <h3>Consultoria</h3>
    <h3>Treinamento</h3>

<!-- ❌ Pular nível -->
<h1>Título</h1>
<h3>Subtítulo</h3>   <!-- h3 sem h2 anterior -->
```

## 3. Imagens

Todo `<img>` precisa de `alt`. O conteúdo do `alt` depende do contexto:

```html
<!-- Imagem informativa: descreva o que ela comunica -->
<img src="ceo.jpg" alt="Maria Silva, CEO da Empresa XYZ, sorrindo em frente ao escritório">

<!-- Imagem decorativa: alt vazio (não omitir o atributo!) -->
<img src="background-wave.svg" alt="">

<!-- Ícone com texto adjacente: alt vazio (o texto já descreve) -->
<button>
  <img src="icon-check.svg" alt=""> Confirmar
</button>

<!-- Ícone sem texto: alt descritivo -->
<button aria-label="Fechar modal">
  <img src="icon-close.svg" alt="">
</button>

<!-- Logo da empresa: nome da empresa -->
<img src="logo.svg" alt="Empresa XYZ">
```

**Nunca**: `alt="imagem"`, `alt="foto"`, `alt="placeholder"`, `alt` ausente em imagem informativa.

## 4. Botões e links

```html
<!-- Botão: ação (sem href) -->
<button type="button">Abrir menu</button>

<!-- Link: navegação (com href real) -->
<a href="/sobre">Sobre nós</a>

<!-- Link com ícone: precisa de texto acessível -->
<a href="https://twitter.com/empresa" aria-label="Siga-nos no Twitter">
  <img src="twitter.svg" alt="">
</a>

<!-- Botão com ícone apenas -->
<button type="button" aria-label="Fechar">
  <img src="close.svg" alt="">
</button>
```

**Nunca**: `<a href="#">` como botão de ação. Use `<button>`.

## 5. Formulários

Todo campo precisa de label associado:

```html
<!-- Label explícito (preferencial) -->
<div class="form__field">
  <label for="email" class="form__label">E-mail</label>
  <input
    type="email"
    id="email"
    name="email"
    class="form__input"
    required
    autocomplete="email"
    aria-describedby="email-hint"
  >
  <span id="email-hint" class="form__hint">Nunca compartilhamos seu e-mail.</span>
</div>

<!-- Mensagem de erro -->
<div class="form__field form__field--error">
  <label for="name" class="form__label">Nome</label>
  <input
    type="text"
    id="name"
    name="name"
    aria-invalid="true"
    aria-describedby="name-error"
  >
  <span id="name-error" class="form__error" role="alert">Nome é obrigatório.</span>
</div>
```

**Nunca**: `placeholder` como único label. Placeholder some quando o usuário digita.

## 6. Navegação por teclado

- Todos os elementos interativos (links, botões, inputs, selects) devem ser acessíveis via `Tab`.
- A ordem de `Tab` deve seguir a ordem visual da página.
- **Nunca remova o `outline` de foco sem repor com `:focus-visible`**:

```css
/* ❌ RUIM: remove foco completamente */
* { outline: none; }
button:focus { outline: none; }

/* ✅ BOM: reestiliza mantendo visibilidade */
button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

## 7. Contraste mínimo (WCAG AA)

| Tipo de texto | Contraste mínimo |
|---|---|
| Texto normal (< 18px ou < 14px bold) | 4.5:1 |
| Texto grande (≥ 18px ou ≥ 14px bold) | 3:1 |
| Componentes UI e gráficos | 3:1 |
| Texto decorativo / logo | Sem requisito |

Com os tokens padrão:
- `--color-text-strong` (#0A0A0A) sobre `--color-background` (#FFF): **21:1** ✅
- `--color-text-body` (#333333) sobre `--color-background` (#FFF): **12.6:1** ✅
- `--color-primary` (#0066FF) como fundo com texto branco: verifique antes de usar.

Ferramentas: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## 8. Acordeons (accordions)

```html
<div class="faq-accordion">
  <h3 class="faq-accordion__item">
    <button
      class="faq-accordion__trigger"
      aria-expanded="false"
      aria-controls="faq-1-panel"
      id="faq-1-trigger"
      type="button"
    >
      Qual é o prazo de entrega?
      <span class="faq-accordion__icon" aria-hidden="true">+</span>
    </button>
  </h3>
  <div
    id="faq-1-panel"
    role="region"
    aria-labelledby="faq-1-trigger"
    hidden
  >
    <p class="faq-accordion__content">O prazo padrão é de 5 dias úteis.</p>
  </div>
</div>
```

- `aria-expanded` muda para `"true"` quando aberto.
- `hidden` é removido quando o painel abre.
- O ícone `+`/`-` deve ter `aria-hidden="true"`.

## 9. Modais

```html
<dialog id="modal-contato" aria-labelledby="modal-title" aria-modal="true">
  <h2 id="modal-title">Entre em contato</h2>
  <button type="button" aria-label="Fechar modal" data-js="close-modal">×</button>
  <!-- conteúdo -->
</dialog>
```

- Use o elemento nativo `<dialog>` — acessibilidade nativa no browser moderno.
- Ao abrir: mover foco para o modal (`dialog.showModal()`).
- Ao fechar: retornar foco ao elemento que abriu.
- `Escape` deve fechar (comportamento nativo do `<dialog>`).

## 10. Checklist de acessibilidade

- [ ] HTML semântico (section, nav, article, header, main, footer, etc.)
- [ ] Um único `<h1>` por página
- [ ] Hierarquia de headings sem pulos
- [ ] Todas as imagens informativas têm `alt` descritivo
- [ ] Imagens decorativas têm `alt=""`
- [ ] Labels associados a todos os campos de formulário
- [ ] Contraste ≥ 4.5:1 para texto normal, ≥ 3:1 para texto grande
- [ ] `:focus-visible` visível e estilizado (não removido)
- [ ] Navegação por Tab funciona em ordem lógica
- [ ] Botões têm `type="button"` (exceto submit de form)
- [ ] Ícones standalone têm `aria-label` ou texto alternativo
- [ ] Sem `aria-*` desnecessário onde semântica HTML já resolve
