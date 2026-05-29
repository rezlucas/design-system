# Tegrus Design System — Apresentação do Projeto

> Um sistema de design modular para criação de landing pages de alta qualidade, com componentes reutilizáveis, ferramentas de composição assistida por IA e uma biblioteca visual navegável.

---

## O que é este projeto

O **Tegrus Design System** é uma biblioteca de componentes de interface construída para acelerar a criação de landing pages para clientes da Tegrus. Ele funciona como um catálogo vivo: cada componente é um bloco visual isolado e reutilizável que pode ser combinado com outros para montar páginas completas.

O sistema foi projetado com três premissas centrais:

**1. Variedade sem reinvenção.** Cada tipo de seção (hero, features, FAQ, footer...) tem múltiplas variantes visuais. Em vez de criar algo do zero para cada cliente, escolhe-se a combinação certa de componentes existentes.

**2. Adaptação por tokens.** O que muda entre clientes são variáveis CSS — cores, fontes, espaçamentos. Os componentes em si são universais e não precisam ser reescritos.

**3. Zero dependências.** HTML semântico + CSS puro + JavaScript Vanilla. Nenhum framework, nenhum build step. O resultado funciona em Vercel, Webflow, HubSpot, ou qualquer hospedagem estática.

---

## O que foi construído

### Navigator (`index.html`)

A raiz do projeto é uma **single-page app interna** que serve de hub para todo o sistema. Ela lista todos os componentes, demos e templates em um layout de sidebar + grade de cards. Cada card abre a página de demonstração do componente correspondente.

Funcionalidades do navigator:
- Busca em tempo real por nome de componente
- Navegação por categoria com ícones únicos
- Sidebar sticky com contagem de componentes, templates e demos
- Mobile: sidebar se torna drawer off-screen com hamburger flutuante

### Construtor de Página

Ferramenta interativa integrada ao navigator para montar landing pages sem escrever código.

Como funciona:
1. Ativar o modo construtor pelo botão flutuante
2. Clicar nos componentes desejados — cada um recebe um número de posição (1, 2, 3...)
3. Escolher a variante de cada componente (V1, V2, V3...)
4. Usar **🎲 Sortear** para gerar uma estrutura de página aleatória entre 6 padrões pré-definidos (Landing SaaS, Agência Digital, Startup/MVP, Portfólio, E-commerce, Enterprise)
5. Reordenar as seções com os botões ↑/↓ na lista do tray
6. Clicar em "Configurar Marca" para definir cores, fontes e textos de cada seção
7. Gerar o JSON e usar no chat do Claude para montar a página completa

### Componentes (33 no total)

#### Navegação
| Componente | Variantes | Descrição |
|---|---|---|
| Header Simple | 3 | Sticky dark com hamburger mobile |
| Header Utility | 3 | 2 fileiras: barra utilitária + nav com dropdowns |
| Header Megamenu | 3 | 3 breakpoints: mobile full-screen / tablet / desktop inline |
| Header Light | 3 | Fundo branco, tema claro |
| Announcement Bar | 3 | Faixa de aviso com countdown e dismiss |

#### Abertura
| Componente | Variantes | Descrição |
|---|---|---|
| Hero Background | 3 | Imagem full-bleed com overlay e conteúdo sobreposto |
| Hero Split | 3 | Duas colunas: texto e imagem |
| Hero Centered | 3 | Conteúdo 100% centralizado, overlay uniforme |
| Hero Personal | 3 | Para portfólios e consultores |
| Hero Countdown | 3 | Contagem regressiva para lançamento |
| Hero SaaS | 3 | Copy + mockup de dashboard flutuante |

#### Apresentação e Features
| Componente | Variantes | Descrição |
|---|---|---|
| Feature Split | 4 | Texto e imagem lado a lado, com modifier --reverse |
| Feature Overview | 4 | Header centralizado + checklist + imagem |
| Feature Cards | 3 | Grade de cards com ícone + título + descrição |
| Feature Accordion | 4 | Imagem + accordion expansível lado a lado |
| Feature Cards Large | 3 | Cards maiores com imagem de destaque |
| Feature Split Media | 3 | Variante split com mídia em destaque |
| Tabs Section | 5 | Conteúdo em abas: carousel, split, cards, steps |
| Services Grid | 6 | Grade de serviços em 6 estilos visuais |

#### Credibilidade
| Componente | Variantes | Descrição |
|---|---|---|
| Testimonials Cards | 5 | Depoimentos em 5 layouts (aspas, estrelas, media, fullquote, grid) |
| Stats Grid | 2 | Métricas em destaque — Big Number Cascade |
| Stats Highlighted | 2 | Split com imagens + métricas grandes |
| Client Band | 3 | Faixa de logos de clientes |
| Integrations Grid | 3 | Grade de integrações com cards tracejados |
| Team Grid | 3 | Equipe com foto, nome, cargo e redes sociais |
| Blog Posts | 2 | Carousel de posts e versão editorial |
| Image Carousel | 3 | Galeria de imagens com setas e indicadores |

#### Conversão
| Componente | Variantes | Descrição |
|---|---|---|
| CTA Banner | 4 | Chamadas para ação (card-split, overlay, split branco) |
| CTA Image | 3 | CTA com imagem de fundo |
| CTA Chat | 3 | Widget de chat flutuante, seção embedded e barra multi-canal |
| Pricing Grid | 3 | Tabela de preços com toggle e destaque |
| Pricing Two Col | 3 | Preços em duas colunas |
| FAQ Accordion | 4 | Perguntas frequentes (enclosed, dark, cards, split) |

#### Rodapé
| Componente | Variantes | Descrição |
|---|---|---|
| Footer Simple | 3 | Rodapé compacto com nav centralizada ou direita |
| Footer Full | 5 | Rodapé completo com colunas, CTA e newsletter |
| Footer Dark Nav | 3 | Rodapé escuro com navegação destacada |

### Demos (8 páginas completas)

Páginas reais ou fictícias que mostram o design system aplicado a contextos específicos. Não são reutilizáveis como componentes — são referências visuais.

| Demo | Segmento |
|---|---|
| Nexio | Automação de vendas B2B (dark premium) |
| BRSamor | Logística e transporte |
| Fluxo | SaaS financeiro |
| Kova (Tappa) | Maquininhas de cartão |
| Wine4Friends | Clube de vinhos |
| Wine4Friends 2 | Wine4Friends versão redesign |
| Prime | Motorista privado por assinatura |
| Fitz | Recrutamento especializado em Revenue |

### Templates (4 páginas base)

Composições completas prontas para adaptar. No construtor, selecionar um template limpa toda a seleção anterior — são para replicar por inteiro, não misturar.

| Template | Descrição |
|---|---|
| Kota | Benefícios para equipes (dark, tom editorial) |
| Zenify | Produto digital, tema verde e clean |
| SaaS Template | Landing page SaaS completa e genérica |
| 404 | Página de erro elegante com navegação de retorno |

---

## Os arquivos `.md` do projeto

Este projeto usa uma convenção de documentação estruturada pensada para ser lida tanto por humanos quanto por agentes de IA. Cada arquivo tem um papel específico.

---

### `AGENTS.md` — O ponto de entrada para qualquer IA

**Para quem:** Claude Code, Codex, GitHub Copilot, Gemini CLI — qualquer agente de IA.

**O que contém:**
- Ordem obrigatória de leitura antes de qualquer tarefa
- Princípios não-negociáveis do projeto (sem frameworks, BEM obrigatório, zero hardcoding de valores)
- Tabela de skills e quando ativá-las
- Workflow passo a passo para criar componentes, criar páginas de cliente, e revisar código
- Instruções de setup inicial para projetos novos
- Lista de comportamentos proibidos e o que requer confirmação antes de executar
- Instruções de compatibilidade entre agentes diferentes

**Por que existe:** Segue o padrão aberto [agents.md](https://agents.md/) — um formato cross-agent que qualquer ferramenta reconhece como ponto de entrada. Garante que qualquer IA que abra este projeto receba as mesmas instruções, independente de qual ferramenta está sendo usada.

> Se algo em outro arquivo conflitar com `AGENTS.md`, **`AGENTS.md` prevalece**.

---

### `CLAUDE.md` — Compatibilidade com o Claude Code

**Para quem:** Versões antigas do Claude Code que procuram exclusivamente por `CLAUDE.md`.

**O que contém:** Apenas um redirecionamento — instrui o agente a ler `AGENTS.md` como ponto de entrada real.

**Por que existe:** Versões anteriores do Claude Code reconheciam apenas `CLAUDE.md`. Este arquivo garante retrocompatibilidade sem duplicar conteúdo. É um arquivo curto de propósito único.

---

### `CONTEXT.md` — A memória viva do projeto

**Para quem:** A IA que retoma o trabalho em uma nova sessão. Também útil para humanos que precisam saber o estado atual do projeto rapidamente.

**O que contém:**
- Status geral e fase atual do projeto
- Lista de todos os componentes com status concluído/pendente (`[x]` / `[ ]`)
- Decisões técnicas importantes com data (escala de espaçamento, breakpoints, fonte padrão)
- Descrição do navigator e do construtor de página
- Lista de demos e templates disponíveis
- Pendências e dívidas técnicas identificadas
- Convenções específicas deste projeto
- Histórico cronológico de atualizações com agente responsável

**Por que existe:** Sem `CONTEXT.md`, cada nova sessão de IA precisaria reler todos os arquivos do projeto para entender o estado atual — lento, caro em tokens e arriscado (pode chegar a conclusões erradas). Com `CONTEXT.md` atualizado, o agente lê um único arquivo e sabe exatamente onde o projeto está e quais decisões já foram tomadas.

> Deve ser atualizado ao final de cada tarefa significativa.

---

### `SKILL.md` / `skills/*/SKILL.md` — Conhecimento especializado

**Para quem:** A IA — são ativadas automaticamente antes de tarefas específicas.

**O que contém:** Cada skill é um guia de conhecimento especializado em formato Markdown com frontmatter YAML. O projeto tem 4 skills:

| Skill | Quando é ativada | O que ensina |
|---|---|---|
| `bem-structure` | Ao escrever ou revisar CSS | Anatomia BEM, antipadrões, checklist, mixagem de blocks |
| `responsive-web-design` | Ao criar layouts | Mobile-first, Grid vs Flexbox, breakpoints, `clamp()`, imagens responsivas |
| `accessibility-basics` | Ao criar interatividade | WCAG AA, HTML semântico, contraste, navegação por teclado, ARIA |
| `landing-page-anatomy` | Ao iniciar uma página | Estrutura universal de LP, 6 tipos de oferta, ordem de seções, checklist |

O `SKILL.md` na raiz do projeto (arquivo legado) contém o conteúdo da skill `bem-structure` e foi preservado por compatibilidade, mas o conteúdo canônico vive em `skills/bem-structure/SKILL.md`.

**Por que existem:** Skills seguem o padrão aberto [Agent Skills](https://agentskills.io) — compatível com múltiplos agentes. Em vez de incluir todo o conhecimento em cada prompt, as skills são ativadas sob demanda, mantendo o contexto focado na tarefa.

---

### `README.md` — Referência técnica para humanos

**Para quem:** Desenvolvedores e designers humanos que trabalham no projeto.

**O que contém:** Visão geral, stack tecnológica, estrutura de pastas, anatomia de um componente com exemplos, sistema de tokens com exemplos de código, convenção BEM, padrões de responsividade, convenção de imagens placeholder e workflow completo de criação.

**Por que existe:** É a documentação técnica principal do projeto — mais detalhada que `AGENTS.md` e sem as restrições de comportamento voltadas para IA. Serve como referência ao construir, revisar ou integrar componentes.

---

## Stack tecnológica

| Camada | Tecnologia |
|---|---|
| Marcação | HTML5 semântico |
| Estilo | CSS3 (Custom Properties, Grid, Flexbox) |
| Comportamento | JavaScript Vanilla (ES6+) |
| Hospedagem | Git + Vercel (deploy automático) |
| IA integrada | Claude Code (claude-sonnet-4-6) |

**Sem frameworks. Sem build steps. Sem dependências externas.** O output final funciona em qualquer plataforma que aceite HTML estático.

---

## Como colocar o projeto na sua máquina

Não há instalação de dependências nem processo de build. Basta clonar o repositório e abrir o arquivo `index.html` no navegador.

### Pré-requisitos

- **Git** instalado ([git-scm.com](https://git-scm.com/downloads))
- Um navegador moderno (Chrome, Firefox, Edge, Safari)
- Opcional: **VS Code** para editar os arquivos

---

### Opção A — Linha de comando

Abra o terminal (PowerShell no Windows, Terminal no Mac/Linux) e execute:

```bash
# 1. Clone o repositório
git clone https://github.com/rezlucas/design-system.git

# 2. Entre na pasta
cd design-system

# 3. Abra o navigator no navegador
#    Windows:
start index.html

#    Mac:
open index.html

#    Linux:
xdg-open index.html
```

Para manter o projeto atualizado com as últimas mudanças:

```bash
# Dentro da pasta do projeto:
git pull origin master
```

---

### Opção B — Usando o Claude Code (recomendado)

O Claude Code é o assistente de IA integrado ao terminal que já conhece todas as convenções deste projeto. Com ele você pode criar componentes, ajustar demos e trabalhar no design system conversando em linguagem natural.

#### 1. Instale o Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

> Requer Node.js 18+. Baixe em [nodejs.org](https://nodejs.org) se necessário.

#### 2. Clone o projeto e abra com Claude Code

```bash
# Clone o repositório
git clone https://github.com/rezlucas/design-system.git
cd design-system

# Inicie o Claude Code dentro da pasta
claude
```

Na primeira vez, o Claude Code vai pedir para autenticar com sua conta Anthropic. Siga as instruções no terminal.

#### 3. O que o Claude Code faz automaticamente

Ao abrir o projeto, o Claude Code lê `CLAUDE.md` → `AGENTS.md` → `CONTEXT.md` e já sabe:

- Todos os componentes existentes e seus estados
- As convenções de código (BEM, tokens CSS, zero frameworks)
- O histórico de decisões do projeto

Você pode simplesmente pedir o que precisa em português:

```
"Crie uma nova variante do hero-split com formulário inline"
"Adicione o componente de preços à demo do Nexio"
"Mostre quais componentes ainda estão pendentes"
```

---

### Opção C — Usando o Codex (OpenAI)

O Codex CLI lê `AGENTS.md` automaticamente ao entrar na pasta do projeto, garantindo o mesmo comportamento que o Claude Code.

#### 1. Instale o Codex CLI

```bash
npm install -g @openai/codex
```

#### 2. Clone e inicie

```bash
git clone https://github.com/rezlucas/design-system.git
cd design-system

# Inicie o Codex
codex
```

Na primeira vez, configure sua chave de API OpenAI:

```bash
export OPENAI_API_KEY="sua-chave-aqui"
```

O Codex vai detectar `AGENTS.md` automaticamente e seguir as mesmas convenções do projeto.

---

### Visualizando o projeto localmente

Por ser HTML puro, o projeto funciona simplesmente abrindo `index.html` no navegador, sem servidor local. Porém, alguns recursos (como os iframes de preview de variantes no construtor) funcionam melhor com um servidor local. Para isso:

**Com VS Code** — instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) e clique em "Go Live" no canto inferior direito.

**Com Python** (se instalado):
```bash
python -m http.server 3000
# Acesse: http://localhost:3000
```

**Com Node.js** (se instalado):
```bash
npx serve .
# Acesse: http://localhost:3000
```

---

### Contribuindo com o projeto

Depois de clonar e fazer alterações, suba as mudanças para o repositório:

```bash
# Veja o que mudou
git status

# Adicione os arquivos modificados
git add nome-do-arquivo.html
git add nome-do-arquivo.css

# Crie um commit descrevendo o que foi feito
git commit -m "feat: nova variante do hero-split com formulário"

# Envie para o GitHub (Vercel faz o deploy automaticamente)
git push origin master
```

> O Vercel está conectado ao repositório e publica qualquer push na branch `master` automaticamente em poucos segundos.
