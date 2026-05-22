# CONTEXT.md — Estado Vivo do Projeto

> Memória persistente do projeto entre sessões e entre agentes (Claude Code, Codex, etc.).
>
> **Atualize este arquivo ao final de cada tarefa significativa.**
>
> Antes de iniciar qualquer tarefa, **leia este arquivo primeiro** — ele é mais rápido que re-ler todo o projeto e contém decisões que não estão em outros lugares.

---

## Status geral

- **Última atualização**: 2026-05-21
- **Fase atual**: Atoms + Sections em construção — headers, heroes, features, footers, stats, blog e integrações adicionados
- **Próxima ação**: Inputs, pricing, forms, gallery-grid, logos-grid
- **Agente em uso**: Claude Code (claude-sonnet-4-6)

---

## Setup inicial — Concluído ✅

Executado em 2026-05-19:

- [x] Estrutura de pastas criada (components/atoms, components/sections, tokens, base, skills, assets, scripts, templates)
- [x] `.gitkeep` em todas as pastas de componentes vazias
- [x] `tokens/colors.css` — paleta neutra com primary #0066FF
- [x] `tokens/typography.css` — Inter como fonte, escala de 0.75rem até 4rem
- [x] `tokens/spacing.css` — escala base 4px (xs: 4px … 5xl: 128px), container-max: 1200px
- [x] `tokens/breakpoints.css` — sm:480, md:768, lg:1024, xl:1280, 2xl:1536
- [x] `tokens/radii.css` — none até full (9999px)
- [x] `tokens/shadows.css` — xs até 2xl + inner
- [x] `tokens/tokens.css` — ponto de entrada, importa tudo + Google Fonts (Inter)
- [x] `base/reset.css` — reset moderno Andy Bell + prefers-reduced-motion
- [x] `base/base.css` — estilos de html, body, headings, links, focus-visible
- [x] `base/utilities.css` — .container, .sr-only, .skip-link, .truncate, .flex-center
- [x] `skills/bem-structure/SKILL.md` — guia completo BEM com checklist
- [x] `skills/responsive-web-design/SKILL.md` — mobile-first, Grid vs Flexbox, breakpoints, imagens, clamp()
- [x] `skills/accessibility-basics/SKILL.md` — WCAG AA, HTML semântico, headings, imagens, forms, teclado, contraste
- [x] `skills/landing-page-anatomy/SKILL.md` — estrutura universal + 6 tipos de oferta + checklist
- [x] `skills/README.md` — catálogo das skills
- [x] `assets/images/placeholders/README.md` — tabela de dimensões, exemplos corretos e caminhos relativos
- [x] `templates/README.md` — catálogo dos templates
- [x] `.claude/settings.json` — `additionalDirectories: ["skills"]` configurado (discovery do Claude Code)
- [x] `SKILL.md` na raiz preservado (conteúdo movido para `skills/bem-structure/SKILL.md`)

---

## Componentes criados

> Marque com `[x]` ao concluir. Adicione novas variantes conforme forem criadas.

### Atoms

#### Buttons
- [x] `buttons/` — componente único com todos os tipos via BEM modifiers
  - Variantes: `--filled`, `--outline`, `--link`
  - Modifier de contexto: `--inverse` (para fundos escuros / cor da marca)
  - Tamanhos: `--lg` (56px), `--md` (48px), `--sm` (36px)
  - Layouts: texto, ícone-only (`--icon-only`), texto + ícone
  - Estados: enabled, disabled (nativo + `aria-disabled`)

#### Inputs
- [ ] `inputs/input-text`
- [ ] `inputs/input-email`
- [ ] `inputs/input-textarea`
- [ ] `inputs/input-select`
- [ ] `inputs/input-checkbox`
- [ ] `inputs/input-radio`

#### Outros atoms
- [ ] `cards/card-basic`
- [ ] `badges/badge-default`
- [ ] `accordions/accordion-basic`
- [ ] `tabs/tabs-horizontal`
- [ ] `icons/` (popular conforme demanda)

### Sections

#### Headers
- [x] `headers/header-simple` — sticky, logo + nav links + CTA. Modifier `--dark` para fundo escuro. Hamburger mobile com anim. X. (Yelly + EscolaWeb)
- [x] `headers/header-utility` — 2 fileiras: barra utilitária (links + ícones) + nav principal com dropdowns acessíveis. Accordeon mobile. (Suzano)
- [x] `headers/header-megamenu` — bar sticky + mega panel: <768px overlay full-screen com accordion, 768-1199px colunas abaixo da bar, ≥1200px nav inline + dropdown por item. CTAs + idioma + redes no mobile.
- [ ] `headers/header-transparent`

#### Heroes
- [x] `heroes/hero-background` — imagem full-bleed. Desktop: conteúdo sobreposto à esquerda com gradiente. Mobile: empilhado (conteúdo escuro em cima, imagem embaixo).
- [x] `heroes/hero-split` — duas colunas. 3 estilos: checklist (Style=01), descrição+2CTAs (Style=02), reverse imagem esq. (Style=03, modifier `--reverse`).
- [x] `heroes/hero-centered` — imagem full-bleed, overlay escuro uniforme, todo conteúdo centralizado (eyebrow + h1 + descrição + 2 CTAs inverse).
- [ ] `heroes/hero-with-form`
- [ ] `heroes/hero-with-video`
- [ ] `heroes/hero-minimal`

#### Features
- [x] `features/feature-split` — 2 colunas (conteúdo + imagem). Modifier `--reverse` para trocar o lado da imagem. Inclui checklist rico (ícone + subtítulo bold + corpo). Style=01 Direita e Esquerda.
- [x] `features/feature-overview` — header centralizado (eyebrow + título + descrição) acima + checklist+imagem abaixo. Modifier `--reverse` e `__checklist--two-col`. Cobre Style=02, 03 e 04.
- [x] `features/feature-cards` — 3 cards com ícone-escudo + título + corpo + link + imagem. Grade 1→2→3 colunas. Style=07.
- [x] `tabs/tabs-section` — 5 variantes: carousel imagem+dots, peek carousel, split texto+imagem, 2-col cards CTA, steps numerados
- [x] `features/feature-accordion` — 4 variantes: imagem esq. contida, header centralizado + imagem dir. contida, imagem esq. full-bleed, imagem dir. full-bleed
- [ ] `features/features-bento`

#### Text Blocks
- [ ] `text-blocks/text-simple`
- [ ] `text-blocks/text-with-image`
- [ ] `text-blocks/text-two-column`

#### Social Proof
- [ ] `social-proof/logos-grid`
- [x] `social-proof/testimonials-cards` — 5 variantes: aspas 4-col, estrelas+logo 3-col, media split, fullquote bold peek, grid estático 3×2+CTA

#### Integrations
- [x] `integrations/integrations-grid` — grade 3-col cards com borda tracejada, badge "Popular", ícones SVG inline, botão "Conectar"

#### Stats
- [ ] `stats/stats-grid`
- [x] `stats/stats-highlighted` — split 2-col: 2 imagens com label chip (esq.) + 4 métricas grandes + rodapé CTA (dir.)

#### Services
- [x] `services/services-grid` — 6 variantes: cards-seta, pastel, icon-box horizontal, bento assimétrico, centered 4-col+CTA, circular media
- [ ] `services/services-list`

#### Pricing
- [ ] `pricing/pricing-simple`
- [ ] `pricing/pricing-comparison`
- [ ] `pricing/pricing-toggle-annual`

#### Steps
- [ ] `steps/steps-horizontal`
- [ ] `steps/steps-vertical`
- [ ] `steps/steps-numbered`

#### Team
- [ ] `team/team-grid`
- [ ] `team/team-detailed`

#### Galleries
- [ ] `galleries/gallery-grid`
- [ ] `galleries/gallery-masonry`

#### FAQ
#### Blog
- [x] `blog/blog-posts` — carousel de posts: eyebrow + título + divider + cards (imagem portrait + categoria colorida + título). Setas prev (dark) / next (acento). Script reutiliza padrão testimonials.

- [x] `faq/faq-accordion` — 4 variantes: enclosed (+/−), dark 3-colunas (chevron), cards (chevron), split heading+lista (+/−). CSS-only via details/summary.
- [ ] `faq/faq-grouped`

#### Forms
- [ ] `forms/form-contact`
- [ ] `forms/form-newsletter`
- [ ] `forms/form-lead-capture`
- [ ] `forms/form-multi-step`

#### CTAs
- [x] `ctas/cta-banner` — 4 variantes: card-split (imagem|painel colorido), overlay-left (gradiente esq.), overlay-center (overlay uniforme centralizado), split (branco 2-col)
- [ ] `ctas/cta-with-form`

#### Footers
- [x] `footers/footer-simple` — 3 variantes: nav centralizada+CTA, nav direita+CTA, banner CTA+nav+social
- [x] `footers/footer-full` — 5 variantes: brand+cols, brand+CTA+cols, banner+brand+cols, cols+contato, search bar
- [ ] `footers/footer-with-newsletter`

---

## Decisões importantes

- **[2026-05-19]** Escala de espaçamentos: base 4px. Sequência: 4, 8, 16, 24, 32, 48, 64, 96, 128. Tokens: xs → 5xl.
- **[2026-05-19]** Container max-width: 1200px.
- **[2026-05-19]** Fonte padrão: Inter (system-ui como fallback). Carregada via Google Fonts em `tokens/tokens.css`.
- **[2026-05-19]** Breakpoint mobile→tablet: 768px; tablet→desktop: 1024px.
- **[2026-05-19]** Discovery de skills no Claude Code via `additionalDirectories: ["skills"]` em `.claude/settings.json` (symlinks não usados por exigir admin no Windows).

---

## Navegador de componentes

- **Arquivo:** `index.html` na raiz do projeto
- **Finalidade:** utilitário interno de visualização — lista todos os componentes com links diretos para seus `index.html`
- **⚠️ NÃO é um componente do design system.** Não deve ser referenciado em projetos de clientes nem usado como base para componentes. Existe exclusivamente para facilitar a navegação entre demos durante o desenvolvimento.
- Cada card abre o componente em nova aba. Organizado por categoria com faixas coloridas e contagem de variantes.

---

## Pendências e dívidas técnicas

- `SKILL.md` na raiz do projeto é redundante — conteúdo já está em `skills/bem-structure/SKILL.md`. Pode ser removido quando conveniente.
- Imagens placeholder físicas (`placeholder-square.jpg` etc.) ainda não existem — serão criadas/fornecidas quando o primeiro componente que as usa for construído.

---

## Convenções específicas deste projeto

- **Tokens padrão**: paleta neutra (gray-scale) + primary azul #0066FF (a ser refinado por cliente)
- **Fonte padrão**: Inter (system-ui como fallback)
- **Escala de espaçamento**: base 4px
- **Container max-width**: 1200px
- **Breakpoint mobile → tablet**: 768px
- **Breakpoint tablet → desktop**: 1024px
- **Caminho de imagens nos componentes**: relativo, partindo da pasta do componente
- **JS hooks**: via `data-js="..."`, nunca via classe BEM

---

## Projetos de clientes ativos

_Nenhum cliente ativo ainda._

---

## Histórico de atualizações

- [2026-05-19] Claude Code (claude-sonnet-4-6) — setup inicial completo: estrutura de pastas, tokens, base CSS, 4 skills, placeholders README, settings.json
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado atoms/buttons: 3 variantes × 3 tamanhos × 2 estados × 2 layouts (style.css + index.html demo + README.md)
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado sections/heroes/hero-background: imagem full-bleed desktop / empilhado mobile (style.css + index.html + README.md)
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado sections/heroes/hero-split: 2 colunas com checklist (Style=01) e descrição+2CTAs (Style=02) num mesmo componente
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado sections/heroes/hero-centered: full-bleed com overlay uniforme, conteúdo 100% centralizado, botões inverse
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criados 3 components features: feature-split (Style=01), feature-overview (Style=02/03/04), feature-cards (Style=07)
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criados headers: header-simple (light+dark, hamburger) e header-utility (2 fileiras, dropdowns, accordeon mobile)
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado header-megamenu: 3 breakpoints (mobile full-screen / tablet dropdown / desktop inline), accordion mobile, CTAs + social
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criados footers: footer-simple (3 variantes) e footer-full (5 variantes), totalmente responsivos mobile/tablet/desktop
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado tabs/tabs-section: barra de abas + 5 variantes de painel (carousel, peek, split, cards CTA, steps numerados) com JS acessível
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado faq/faq-accordion: 4 variantes (enclosed, dark 3-col, cards, split) CSS-only via details/summary nativo, animação grid-row
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado features/feature-accordion: imagem+accordion split (contida e full-bleed), modifiers --reverse e --full
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado ctas/cta-banner: 4 variantes (card-split, overlay-left, overlay-center, split branco)
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado services/services-grid: 6 variantes (base, pastel, icon-box, bento, centered, circular)
- [2026-05-20] Claude Code (claude-sonnet-4-6) — criado social-proof/testimonials-cards: 5 variantes (aspas, estrelas+logo, media split, fullquote bold, grid estático)
