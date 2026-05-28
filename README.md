# Design System — Landing Pages

> Documentação do projeto para humanos. **Para agentes de IA (Claude Code, Codex, Copilot, etc.), o ponto de entrada é `AGENTS.md`** — ele contém o workflow operacional, restrições e instruções de setup. Este README é a referência técnica do projeto.

---

## 1. Visão Geral

Este é um **design system modular para criação de landing pages** que podem ser publicadas em Git/Vercel, Webflow, HubSpot ou qualquer plataforma que aceite HTML, CSS e JavaScript.

O objetivo é permitir que landing pages sejam montadas como **composição de componentes pré-existentes**, com variedade suficiente para que cada cliente receba uma página com identidade única, mas usando uma base de código consistente e testada.

### Princípios

1. **Variedade > Padrão único**: cada categoria de seção tem múltiplas variantes (hero centralizado, hero split, hero com vídeo, etc.). A IA escolhe e combina, não inventa do zero.
2. **Tokens por cliente, componentes universais**: o que muda entre clientes são as variáveis (cores, tipografia, espaçamentos). Os componentes em si são reutilizáveis.
3. **Zero dependências**: HTML semântico + CSS puro + JS vanilla. Nada de frameworks, bundlers ou build steps.
4. **Mobile-first e responsivo por padrão**: todo componente deve funcionar de 320px até 1920px+.
5. **Acessibilidade básica obrigatória**: HTML semântico, labels em forms, contraste mínimo AA, navegação por teclado.

---

## 2. Stack Tecnológica e Restrições

| Camada | Tecnologia | Restrição |
|---|---|---|
| Marcação | HTML5 semântico | Sem JSX, sem templating engines |
| Estilo | CSS3 (Custom Properties, Grid, Flexbox, Media Queries) | Sem SASS, sem Tailwind, sem CSS-in-JS |
| Comportamento | JavaScript Vanilla (ES6+) | Sem React, Vue, jQuery ou libs externas |
| Imagens | JPG, PNG, SVG, WebP | Sempre com `alt` descritivo |
| Fontes | Google Fonts ou self-hosted | Carregadas via `<link>` no `<head>` |

**Por que essas restrições?** As páginas precisam funcionar em Webflow, HubSpot, embeds em iframes, CMSs simples e hospedagem estática. Qualquer dependência de build quebra esse uso.

---

## 3. Estrutura de Pastas

```
design-system/
│
├── AGENTS.md                    ← Entry point para qualquer agente de IA
├── CLAUDE.md                    ← Pointer para AGENTS.md (compat. Claude Code antigo)
├── README.md                    ← Este arquivo (documentação para humanos)
├── CONTEXT.md                   ← Estado vivo do projeto (criado pelo agente no setup)
│
├── skills/                      ← Conhecimento para a IA (formato Agent Skills)
│   ├── README.md
│   ├── bem-structure/
│   │   └── SKILL.md
│   ├── responsive-web-design/
│   │   └── SKILL.md
│   ├── accessibility-basics/
│   │   └── SKILL.md
│   └── landing-page-anatomy/
│       └── SKILL.md
│
├── tokens/                      ← Variáveis CSS globais (mudam por cliente)
│   ├── tokens.css               ← Arquivo principal que importa todos os outros
│   ├── colors.css               ← --color-primary, --color-secondary, etc.
│   ├── typography.css           ← --font-heading, --font-body, escalas, pesos
│   ├── spacing.css              ← --space-xs até --space-3xl
│   ├── breakpoints.css          ← --bp-mobile, --bp-tablet, --bp-desktop
│   ├── radii.css                ← --radius-sm, --radius-md, etc.
│   └── shadows.css              ← --shadow-sm, --shadow-md, etc.
│
├── base/                        ← Reset + estilos base globais
│   ├── reset.css                ← Reset CSS moderno
│   ├── base.css                 ← Estilos base de html, body, headings, links
│   └── utilities.css            ← Classes utilitárias mínimas (container, sr-only, etc.)
│
├── components/
│   │
│   ├── atoms/                   ← Peças pequenas, reutilizáveis dentro de seções
│   │   ├── buttons/
│   │   ├── inputs/
│   │   ├── cards/
│   │   ├── badges/
│   │   ├── icons/
│   │   ├── accordions/
│   │   └── tabs/
│   │
│   └── sections/                ← Blocos full-width de uma landing page
│       ├── headers/             ← Cabeçalho fixo, transparente, com menu mobile, etc.
│       ├── heroes/              ← Primeira dobra (centralizado, split, com mockup, com vídeo, com form)
│       ├── features/            ← Benefícios e funcionalidades (grid, alternado, tabs, bento)
│       ├── text-blocks/         ← Seções de texto puro (sobre, história, manifesto)
│       ├── social-proof/        ← Logos de clientes, depoimentos, reviews
│       ├── stats/               ← Números e métricas em destaque
│       ├── services/            ← Lista de serviços ou produtos
│       ├── pricing/             ← Tabelas de preços (simples, comparativa, toggle mensal/anual)
│       ├── steps/               ← Como funciona, processo, timeline
│       ├── team/                ← Equipe / sobre nós
│       ├── galleries/           ← Portfólio, galeria de imagens
│       ├── faq/                 ← Perguntas frequentes (accordion, colunas, agrupado)
│       ├── forms/               ← Captação de lead, contato, newsletter, multi-step
│       ├── ctas/                ← Chamadas para ação standalone
│       └── footers/             ← Rodapés (simples, completo, com newsletter)
│
├── assets/
│   └── images/
│       ├── placeholders/        ← Imagens genéricas usadas até o cliente entregar as reais
│       │   ├── placeholder-square.jpg
│       │   ├── placeholder-portrait.jpg
│       │   ├── placeholder-landscape.jpg
│       │   ├── placeholder-wide.jpg
│       │   ├── placeholder-hero.jpg
│       │   ├── placeholder-avatar.jpg
│       │   ├── placeholder-logo.svg
│       │   └── README.md        ← Tabela de dimensões e quando usar cada uma
│       ├── icons/               ← Ícones SVG do design system
│       ├── logos/               ← Logos genéricos ou da agência
│       └── clients/             ← Imagens reais dos clientes (uma subpasta por projeto)
│           └── [nome-do-cliente]/
│
├── scripts/
│   ├── shared/                  ← JS reutilizável (menu mobile, accordion, form validation, etc.)
│   └── components/              ← JS específico de componentes (vai junto da pasta do componente)
│
└── templates/                   ← "Receitas" de landing pages completas para a IA usar como referência
    ├── README.md
    ├── saas-template/
    ├── infoproduto-template/
    ├── agencia-template/
    ├── ecommerce-template/
    └── servico-local-template/
```

---

## 4. Estrutura de Cada Componente

Cada componente (atom ou section) é uma **pasta isolada e autocontida** com este formato:

```
hero-split/
├── index.html        ← Marcação HTML do componente
├── style.css         ← Estilos isolados, usando tokens globais
├── script.js         ← Comportamento (se houver — opcional)
└── README.md         ← Quando usar, variantes, props/customizações
```

### Regras de cada arquivo

**`index.html`** — Markup do componente apenas (sem `<html>`, `<head>` ou `<body>`). Comece direto na tag raiz da seção. Inclua imagens placeholder com `alt` descritivo.

**`style.css`** — Estilos escopados pela classe raiz do componente (BEM). **Nunca** use seletores globais (`body`, `*`, etc.) aqui. Sempre referencie variáveis de `tokens/`.

**`script.js`** — Apenas se o componente tiver interatividade própria. Encapsule em IIFE ou módulo para não vazar para o escopo global.

**`README.md`** — Documentação mínima do componente:
- Print ou descrição visual
- Quando usar / quando não usar
- Variantes disponíveis
- Customizações possíveis via tokens
- Dependências (atoms que usa)

### Exemplo de componente: `components/sections/heroes/hero-split/`

```html
<!-- index.html -->
<section class="hero-split">
  <div class="hero-split__container">
    <div class="hero-split__content">
      <span class="hero-split__eyebrow">Tagline curta</span>
      <h1 class="hero-split__title">Título principal de até 2 linhas</h1>
      <p class="hero-split__description">Subtítulo descritivo de 1 a 2 linhas explicando a proposta de valor.</p>
      <div class="hero-split__actions">
        <a href="#" class="button button--primary">CTA Principal</a>
        <a href="#" class="button button--ghost">CTA Secundário</a>
      </div>
    </div>
    <div class="hero-split__media">
      <img
        src="../../../../assets/images/placeholders/placeholder-portrait.jpg"
        alt="imagem do produto principal em uso por uma pessoa em ambiente real"
        class="hero-split__image"
        loading="eager"
      >
    </div>
  </div>
</section>
```

```css
/* style.css */
.hero-split {
  padding: var(--space-3xl) var(--space-lg);
  background-color: var(--color-background);
  font-family: var(--font-body);
}

.hero-split__container {
  max-width: var(--container-max);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

.hero-split__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  line-height: 1.1;
  color: var(--color-text-strong);
  margin-block: 0 var(--space-md);
}

.hero-split__description {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-block: 0 var(--space-xl);
}

.hero-split__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.hero-split__image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  object-fit: cover;
}

@media (min-width: 768px) {
  .hero-split__container {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3xl);
  }
}
```

---

## 5. Sistema de Tokens

Todas as cores, fontes, espaçamentos, raios e sombras vivem em `tokens/` como **CSS Custom Properties**. Trocar a identidade visual de um cliente é editar apenas esses arquivos.

### Exemplo de `tokens/colors.css`

```css
:root {
  /* Marca */
  --color-primary: #0066FF;
  --color-primary-hover: #0052CC;
  --color-secondary: #FF6B35;

  /* Texto */
  --color-text-strong: #0A0A0A;
  --color-text-body: #333333;
  --color-text-muted: #666666;
  --color-text-inverse: #FFFFFF;

  /* Fundos */
  --color-background: #FFFFFF;
  --color-background-alt: #F7F7F7;
  --color-background-dark: #0A0A0A;

  /* Estados */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* Bordas */
  --color-border: #E5E5E5;
  --color-border-strong: #CCCCCC;
}
```

### Exemplo de `tokens/typography.css`

```css
:root {
  /* Famílias */
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Escala (mobile-first; pode escalar em breakpoints) */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;
  --font-size-4xl: 2.5rem;
  --font-size-5xl: 3rem;
  --font-size-6xl: 4rem;

  /* Pesos */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line heights */
  --line-height-tight: 1.1;
  --line-height-snug: 1.3;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.7;
}
```

### Regra de ouro

> **Nenhum componente deve ter cor, fonte ou espaçamento hardcoded.** Tudo via variável. Se você precisa de um valor que não existe, primeiro adicione o token, depois use no componente.

---

## 6. Convenção de Nomenclatura — BEM

Todas as classes seguem **Block Element Modifier**:

```
.bloco                          → Block (componente raiz)
.bloco__elemento                → Element (parte interna)
.bloco--modificador             → Modifier do block
.bloco__elemento--modificador   → Modifier do element
```

### Regras essenciais

- Nomes em **kebab-case**: `hero-split`, não `heroSplit` ou `hero_split`.
- Block sempre prefixa o nome do componente: dentro de `hero-split`, **todas** as classes começam com `hero-split__` ou `hero-split--`.
- Nunca aninhe seletores além do necessário. Use a estrutura BEM em vez de seletores descendentes.
- ❌ `.hero h1 { ... }`
- ✅ `.hero__title { ... }`

> Detalhamento completo, antipadrões e checklist em `skills/bem-structure/SKILL.md`.

---

## 7. Responsividade

### Abordagem

- **Mobile-first**: escreva CSS base para mobile, depois adicione `@media (min-width: ...)` para telas maiores.
- **CSS Grid** para layouts bidimensionais (seções inteiras, cards em grade).
- **Flexbox** para layouts unidimensionais (linhas de botões, navs, itens de lista).
- **Container queries** quando o componente precisa responder ao próprio container, não à viewport (use com moderação).

### Breakpoints padrão (em `tokens/breakpoints.css`)

```css
:root {
  --bp-sm: 480px;    /* Telefones grandes */
  --bp-md: 768px;    /* Tablets */
  --bp-lg: 1024px;   /* Desktops pequenos */
  --bp-xl: 1280px;   /* Desktops */
  --bp-2xl: 1536px;  /* Telas grandes */
}
```

> ⚠️ CSS não permite usar `var()` dentro de `@media`. Os breakpoints ficam documentados como tokens, mas no media query use o valor: `@media (min-width: 768px)`.

### Padrão de imagens responsivas

```html
<img
  src="placeholder.jpg"
  alt="descrição"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
>
```

- `loading="eager"` apenas em imagens above-the-fold (hero).
- `loading="lazy"` em todas as outras.
- Sempre incluir `width` e `height` para evitar layout shift.

> Padrões completos, `auto-fit/minmax`, `clamp()` para tipografia fluida e checklist em `skills/responsive-web-design/SKILL.md`.

---

## 8. Convenção de Imagens Placeholder

Enquanto o cliente não entrega as imagens reais, todo `<img>` usa uma imagem da pasta `assets/images/placeholders/`. O `alt` **descreve a imagem esperada**, não o placeholder.

### Tabela de placeholders disponíveis

| Arquivo | Proporção | Uso típico |
|---|---|---|
| `placeholder-square.jpg` | 1:1 | Avatares, cards quadrados, ícones grandes |
| `placeholder-portrait.jpg` | 3:4 | Imagens de pessoas, retratos, mockups verticais |
| `placeholder-landscape.jpg` | 4:3 | Fotos de produto, ambientes |
| `placeholder-wide.jpg` | 16:9 | Vídeos, screenshots, banners |
| `placeholder-hero.jpg` | 21:9 | Hero backgrounds, banners largos |
| `placeholder-avatar.jpg` | 1:1 (pequena) | Avatares de depoimentos, time |
| `placeholder-logo.svg` | Variável | Logos de clientes em seções de social proof |

### Exemplo de uso correto

```html
<!-- ❌ ERRADO: alt genérico -->
<img src="../assets/images/placeholders/placeholder-portrait.jpg" alt="placeholder">

<!-- ❌ ERRADO: alt vazio em imagem informativa -->
<img src="../assets/images/placeholders/placeholder-portrait.jpg" alt="">

<!-- ✅ CERTO: alt descreve a imagem que vai entrar -->
<img
  src="../assets/images/placeholders/placeholder-portrait.jpg"
  alt="imagem de uma pessoa segurando o produto principal da marca em ambiente externo"
>

<!-- ✅ CERTO: contexto de depoimento -->
<img
  src="../assets/images/placeholders/placeholder-avatar.jpg"
  alt="foto de rosto do cliente que dá o depoimento, sorrindo em fundo neutro"
>

<!-- ✅ CERTO: logo de cliente -->
<img
  src="../assets/images/placeholders/placeholder-logo.svg"
  alt="logo do cliente XYZ que usa o produto"
>
```

### Por que isso importa

1. Quando o cliente entrega a imagem real, basta trocar o `src` — o `alt` já está pronto e descritivo (bom para SEO e acessibilidade).
2. Briefing visual fica claro: lendo o HTML, o cliente entende qual imagem precisa enviar.
3. Evita placeholders esquecidos em produção: um `alt="placeholder"` em produção é vergonhoso, um `alt="imagem de pessoa usando o produto"` ainda funciona.

---

## 9. Pasta `skills/`

Espaço onde fica documentação **conceitual** que a IA deve revisar **antes** de gerar páginas ou componentes. Não é código de produção — é conhecimento operacional.

### Formato

Skills seguem o padrão aberto **[Agent Skills](https://agentskills.io)** — compatível com Claude Code, Codex, GitHub Copilot, Gemini CLI e outros. Cada skill é uma pasta com um `SKILL.md` contendo frontmatter YAML (`name`, `description`) seguido de instruções markdown.

```
skills/[nome-da-skill]/
└── SKILL.md
```

### Skills disponíveis

| Skill | Quando é ativada |
|---|---|
| `bem-structure` | Sempre que for escrever ou revisar CSS / nomear classes |
| `responsive-web-design` | Ao criar layouts, escolher entre Grid/Flexbox, definir breakpoints |
| `accessibility-basics` | Ao criar forms, botões, navegação, imagens e qualquer componente interativo |
| `landing-page-anatomy` | Ao iniciar uma nova página ou decidir a ordem das seções |

> Detalhes de uso, regras e como adicionar novas skills em `skills/README.md`.

### Descoberta por agente

Cada agente tem seu próprio caminho de descoberta:

- **Claude Code**: symlinks de `skills/` em `.claude/skills/`
- **Codex CLI**: lê via `AGENTS.md` automaticamente
- **GitHub Copilot**: symlinks em `.github/skills/`

Scripts de setup estão em `AGENTS.md` (seção 4).

---

## 10. Navigator e Construtor de Página (`index.html`)

O arquivo `index.html` na raiz é o **hub central de navegação** do design system — uma single-page app interna que lista todos os componentes, demos e templates.

> **⚠️ Não é um componente do design system.** Não deve ser incorporado em projetos de clientes.

### Layout

```
┌─────────────────┬──────────────────────────────────────────┐
│   Sidebar 224px │  Área de conteúdo (flex: 1)              │
│                 │                                          │
│  [logo]         │  [Hero section com logo]                 │
│  [busca]        │                                          │
│  Navegação      │  Seção: Navegação                        │
│  ─ Navegação    │    [card] [card] [card] [card]           │
│  ─ Abertura     │  Seção: Abertura                         │
│  ─ Apresentação │    [card] [card] ...                     │
│  ─ Credibilidade│                                          │
│  ─ Conversão    │  ... (todas as categorias)               │
│  ─ Rodapé       │                                          │
│  ─ Base         │  Seção: Templates                        │
│  ─ Templates    │    [card] ...                            │
│  ─ Demos        │  Seção: Demos                            │
│                 │    [card--demo] ...                      │
│  [Construtor]   │                                          │
│  [versão/stats] │                                          │
└─────────────────┴──────────────────────────────────────────┘
```

Mobile (<900px): sidebar vira drawer off-screen com hamburger flutuante.

### Construtor de Página

Ferramenta integrada para montar landing pages combinando componentes.

**Ativação:** botão "Construtor de Página" no rodapé da sidebar (gradiente indigo/cyan).

**Como usar:**

1. Ative o construtor — cards ficam clicáveis
2. Clique nos componentes que deseja incluir (borda verde + checkmark ao selecionar)
3. Escolha a variante em cada card selecionado (botões numerados; hover mostra preview)
4. Clique "Gerar JSON" na tray inferior → abre modal de marca
5. Preencha nome, cores, fontes e textos específicos de cada seção
6. Copie o JSON gerado para usar com a IA na montagem da página

**Regras do construtor:**

| Tipo de card | Comportamento |
|---|---|
| Componente normal | Selecionável/deseleccionável, picker de variante |
| Demo (`nav-card--demo`) | **Bloqueado** — não selecionável (opacity 0.4, cursor not-allowed) |
| Template (`href` inicia com `templates/`) | Ao selecionar, **limpa toda a seleção anterior** — template é para replicar completo |

**Modal de marca (Brand Modal):**

- **Aba Marca**: nome da empresa, 5 cores (primary, secondary, accent, background, text), fontes (heading, body)
- **Aba Conteúdo**: campos específicos por tipo de seção — definidos em `COPY_SCHEMA` no JS do index.html

| Tipo de seção | Campos |
|---|---|
| Header | CTA, links de navegação |
| Hero | Headline (H1), subtítulo, CTA primário, CTA secundário |
| Features | Label, título, items (título\|descrição por linha) |
| FAQ | Título, Q&A (formato P:/R:) |
| Pricing | Título, subtítulo, planos |
| CTA Banner | Título, subtítulo, CTA |
| Footer | Slogan, links, rodapé |
| Demais | Título, subtítulo, CTA genérico |

**JSON exportado:**

```json
{
  "brand": {
    "name": "Acme Corp",
    "colors": { "primary": "#2563EB", "secondary": "#7C3AED", ... },
    "fonts": { "heading": "DM Serif Display", "body": "Inter" }
  },
  "page": [
    { "order": 1, "slug": "header-simple", "variant": "1", "copy": { "cta": "Começar grátis" } },
    { "order": 2, "slug": "hero-split", "variant": "2", "copy": { "headline": "...", "cta_primary": "..." } }
  ]
}
```

---

## 11. Demos e Templates

### Demos

Páginas completas de referência — mostram o design system aplicado. Ficam em `demos/[nome]/`.

| Demo | Segmento |
|---|---|
| `demos/nexio/` | Automação de vendas B2B (dark premium) |
| `demos/brsamor/` | Logística e transporte |
| `demos/fluxo/` | SaaS financeiro |
| `demos/kova/` (Tappa) | Maquininhas de cartão |
| `demos/wine4friends/` | Clube de vinhos |
| `demos/wine4friends-2/` | Wine4Friends v2 |
| `demos/prime/` | Motorista privado por assinatura |

> Demos não podem ser selecionados no Construtor de Página — são exemplos visuais, não blocos reutilizáveis.

### Templates

Composições completas de landing page para servir de base. Ficam em `templates/[nome]/`.

| Template | Descrição |
|---|---|
| `templates/saas-template/` | Landing page completa SaaS |

> Selecionar um template no Construtor de Página limpa toda a seleção anterior.

---

## 13. `CONTEXT.md` — Estado Vivo do Projeto

Arquivo de **manutenção contínua** que serve como memória persistente da IA entre sessões. Evita que o agente precise ler todos os arquivos do projeto a cada conversa.

### Template inicial

```markdown
# Contexto do Projeto

## Status geral
- Última atualização: [data]
- Fase atual: [setup inicial / construção de atoms / construção de sections / produção]
- Agente em uso: [Claude Code / Codex / outro]

## Componentes criados
### Atoms
- [x] buttons/button-primary
- [x] buttons/button-ghost
- [ ] inputs/input-text (pendente)

### Sections
- [x] heroes/hero-split
- [x] heroes/hero-centered
- [ ] heroes/hero-with-video (em andamento)
- [ ] features/features-grid

## Decisões importantes
- Tokens de cor seguem escala com sufixos -50 a -900 (em vez de -light/-dark)
- Espaçamentos em escala 4px (4, 8, 16, 24, 32, 48, 64, 96, 128)
- Mobile breakpoint: 768px (não 640px como sugerido inicialmente)

## Pendências e dívidas técnicas
- Hero-split precisa de variante com formulário inline
- FAQ-accordion não tem suporte a múltiplos abertos simultaneamente
- Footers ainda não foram iniciados

## Convenções específicas deste projeto
- Imagens de cliente vão sempre em assets/images/clients/[nome]/
- Cada projeto de cliente cria uma cópia de tokens/ com prefixo do cliente
```

### Como usar

- **Antes de qualquer tarefa**: ler `CONTEXT.md` para entender o estado atual.
- **Ao final de cada tarefa**: atualizar `CONTEXT.md` com o que foi feito, decisões e próximos passos.
- **Em sessões longas**: usar `CONTEXT.md` como referência primária em vez de ler todos os componentes.
- **Trocando de agente**: o novo agente lê `CONTEXT.md` e continua de onde o anterior parou.

---

## 14. Workflow de Criação

### Fase 1 — Setup inicial (uma vez)

Executado pelo agente seguindo `AGENTS.md` (seção 6). Cria estrutura de pastas, tokens base, reset CSS, popula `skills/` e inicializa `CONTEXT.md`.

### Fase 2 — Construção incremental de componentes

A cada nova solicitação:

1. **Ler** `AGENTS.md` (entry point), `CONTEXT.md` (estado) e as skills relevantes.
2. **Verificar** se já existe variante parecida (evitar duplicação).
3. **Criar** o componente seguindo a estrutura de pasta padrão.
4. **Documentar** no `README.md` do próprio componente.
5. **Atualizar** `CONTEXT.md` marcando o componente como concluído.

### Fase 3 — Criação de página para cliente

1. Criar branch / pasta do cliente.
2. Duplicar `tokens/` para `tokens-[cliente]/` e ajustar cores, fontes, espaçamentos.
3. Compor a página combinando seções existentes (consultar `templates/` para inspiração).
4. Substituir placeholders pelas imagens do cliente em `assets/images/clients/[cliente]/`.
5. Atualizar `alt` para refletir as imagens reais entregues.
6. Build final: concatenar CSS dos componentes usados ou linkar individualmente.

---

## 15. Checklist de Qualidade (aplicar a todo componente novo)

Antes de considerar um componente "pronto":

- [ ] HTML semântico (usa `<section>`, `<header>`, `<nav>`, `<article>` etc. corretamente)
- [ ] Todas as classes seguem BEM
- [ ] Nenhuma cor, fonte ou espaçamento hardcoded — tudo via `var(--token)`
- [ ] Funciona em 320px, 768px, 1024px e 1440px+
- [ ] Imagens têm `alt` descritivo (não "placeholder")
- [ ] Imagens têm `width`, `height` e `loading` apropriado
- [ ] Botões e links têm estado `:hover`, `:focus` e `:active`
- [ ] Forms têm `<label>` associado a cada input (ou `aria-label`)
- [ ] Contraste de cor mínimo AA (4.5:1 para texto normal)
- [ ] Navegável por teclado (Tab funciona em todos os elementos interativos)
- [ ] `README.md` do componente preenchido
- [ ] `CONTEXT.md` atualizado
