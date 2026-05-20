# AGENTS.md — Instruções para Agentes de IA

> Ponto de entrada **cross-agent** deste projeto. Compatível com Claude Code, Codex CLI, GitHub Copilot, Gemini CLI e qualquer ferramenta que siga o padrão aberto [AGENTS.md](https://agents.md/) ou [Agent Skills](https://agentskills.io).

Qualquer agente que abrir este projeto deve **ler este arquivo primeiro**.

---

## 1. Antes de qualquer tarefa — ordem de leitura obrigatória

Leia, nesta ordem, antes de gerar uma linha de código:

1. **`AGENTS.md`** (este arquivo) — instruções operacionais para a IA
2. **`README.md`** — visão geral do projeto, stack, estrutura de pastas, convenções técnicas
3. **`CONTEXT.md`** — estado vivo do projeto: o que já foi feito, decisões, pendências
4. **`skills/README.md`** — catálogo de skills disponíveis
5. **As skills relevantes** ao tipo de tarefa (ver seção 3 abaixo)

> Se `CONTEXT.md` estiver vazio ou ausente, este é um projeto novo — comece pela fase de setup descrita na seção 6.

---

## 2. Princípios não-negociáveis

Estes valem para **todo** componente, página ou alteração no projeto:

1. **Apenas HTML semântico + CSS3 + JavaScript Vanilla** — sem frameworks, bundlers, SASS, Tailwind, ou qualquer dependência. O output precisa rodar em Webflow, HubSpot, Vercel e hospedagens estáticas.
2. **BEM obrigatório** em toda classe CSS — ver skill `bem-structure`.
3. **Mobile-first e responsivo** — ver skill `responsive-web-design`.
4. **WCAG AA mínimo** — ver skill `accessibility-basics`.
5. **Zero hardcoding de cores, fontes ou espaçamentos** — sempre `var(--token)`. Tokens vivem em `tokens/`.
6. **Imagens placeholder com `alt` descritivo** — descrevendo a imagem esperada, nunca `alt="placeholder"`.

Detalhes completos em `README.md`. Se algo em `README.md` conflitar com este arquivo, **`AGENTS.md` prevalece**.

---

## 3. Skills — quando ativar

Skills vivem em `skills/[nome]/SKILL.md` no formato Agent Skills (frontmatter YAML + markdown).

| Skill | Ativar quando... |
|---|---|
| `bem-structure` | For escrever, revisar ou refatorar qualquer CSS |
| `responsive-web-design` | For criar layouts, escolher Grid vs Flexbox, definir breakpoints |
| `accessibility-basics` | For criar forms, botões, navegação, modais, accordions, imagens |
| `landing-page-anatomy` | For iniciar uma página nova ou decidir a ordem das seções |

**Regra de bolso**: na dúvida, leia a skill. O custo de ler é baixo, o custo de gerar código errado é alto.

---

## 4. Descoberta de skills por agente

Cada agente tem um caminho de descoberta diferente. Use a estratégia apropriada:

### Claude Code
```bash
# Opção A: symlink (recomendado)
mkdir -p .claude/skills
for skill in skills/*/; do
  name=$(basename "$skill")
  ln -s "../../$skill" ".claude/skills/$name"
done

# Opção B: configurar additionalDirectories em .claude/settings.json
{
  "additionalDirectories": ["skills"]
}
```

### Codex CLI (OpenAI)
Codex lê `AGENTS.md` automaticamente. As skills são referenciadas a partir deste arquivo — nenhum setup adicional necessário.

### GitHub Copilot
```bash
mkdir -p .github/skills
for skill in skills/*/; do
  name=$(basename "$skill")
  ln -s "../../$skill" ".github/skills/$name"
done
```

### Outros agentes
A maioria suporta o padrão Agent Skills nativamente. Verifique a documentação do seu agente para o caminho de discovery esperado.

---

## 5. Workflow padrão para tarefas

### Ao criar um componente novo

1. Ler `AGENTS.md` + `README.md` + `CONTEXT.md`.
2. Ler `skills/bem-structure/SKILL.md` e `skills/responsive-web-design/SKILL.md` (sempre).
3. Ler `skills/accessibility-basics/SKILL.md` se houver interação (forms, botões, accordions, modais).
4. Verificar em `CONTEXT.md` e em `components/` se já existe variante parecida.
5. Criar a pasta do componente com `index.html`, `style.css`, `script.js` (se necessário) e `README.md`.
6. Validar contra o checklist da seção 13 do `README.md`.
7. Atualizar `CONTEXT.md` marcando o componente como concluído.

### Ao criar uma página para um cliente

1. Ler `skills/landing-page-anatomy/SKILL.md`.
2. Identificar o **tipo de oferta** (SaaS, infoproduto, agência, e-commerce, serviço local, captura) — isso define a estrutura de seções.
3. Duplicar `tokens/` para `tokens-[cliente]/` e ajustar cores, fontes, espaçamentos do cliente.
4. Compor a página combinando componentes existentes em `components/sections/`.
5. Trocar placeholders por imagens do cliente em `assets/images/clients/[cliente]/`, mantendo o `alt` descritivo.
6. Validar a página inteira contra o checklist de `landing-page-anatomy` (seção 10).

### Ao revisar / refatorar código existente

1. Ler `CONTEXT.md` para entender decisões prévias.
2. Ler as skills relevantes ao tipo de revisão.
3. **Nunca** quebrar APIs/classes de componentes já em uso por outros clientes sem versionamento.
4. Documentar a mudança em `CONTEXT.md`.

---

## 6. Setup inicial (executar apenas uma vez, em projeto novo)

Quando este é um repositório vazio, o agente deve, nesta ordem:

1. Criar toda a estrutura de pastas descrita na seção 3 do `README.md` (vazias, com `.gitkeep` onde necessário).
2. Criar `CONTEXT.md` usando o template da seção 10 do `README.md`.
3. Criar arquivos de tokens em `tokens/` com valores padrão neutros (paleta neutra, Inter como fonte, escala 4px).
4. Criar `base/reset.css` (reset moderno tipo Andy Bell), `base/base.css`, `base/utilities.css`.
5. Confirmar que `skills/` está populado (mínimo: `bem-structure`, `responsive-web-design`, `accessibility-basics`, `landing-page-anatomy`).
6. Criar symlinks de descoberta para o agente em uso (ver seção 4).
7. Adicionar `assets/images/placeholders/README.md` com a tabela de placeholders.
8. **Parar** e aguardar a próxima instrução. **Não criar componentes nessa fase.**

---

## 7. Manutenção do CONTEXT.md

`CONTEXT.md` é a **memória persistente** do projeto. Sem ele, cada nova sessão precisa re-ler todo o projeto, desperdiçando tokens e correndo risco de re-trabalho.

**Sempre atualize `CONTEXT.md`** ao final de uma tarefa significativa:

- Componentes criados/atualizados (marcar com `[x]`)
- Decisões importantes tomadas (escala de espaçamento, breakpoints, padrão de naming)
- Pendências identificadas
- Variantes ainda não implementadas

Use `CONTEXT.md` como **referência primária** em sessões seguintes, em vez de re-ler todos os arquivos.

---

## 8. Restrições de comportamento

### NÃO fazer

- ❌ Não usar frameworks (React, Vue, Alpine, Stimulus, etc.) — nem como "atom".
- ❌ Não importar CSS frameworks (Tailwind, Bootstrap, etc.) — nem parcialmente.
- ❌ Não hardcodar cores ou fontes — sempre via token.
- ❌ Não criar componente em local errado (atom em `sections/`, ou vice-versa).
- ❌ Não esconder conteúdo em mobile com `display: none` para "resolver responsividade" — reorganize.
- ❌ Não deixar `alt="placeholder"`, `alt=""` (em imagem informativa), ou `alt` ausente.
- ❌ Não pular níveis de heading (`h2` → `h4`).
- ❌ Não remover outline de foco sem repor com `:focus-visible`.
- ❌ Não usar `!important`.

### Pedir confirmação antes de

- Alterar tokens globais (afeta todos os componentes e clientes).
- Refatorar um componente já listado como `[x]` em `CONTEXT.md` (pode estar em uso por clientes).
- Adicionar uma nova categoria de pasta (atoms ou sections).
- Mudar convenções de naming, BEM ou estrutura.

---

## 9. Compatibilidade entre agentes — observações práticas

- O **conteúdo** dos componentes gerados é idêntico independente do agente — HTML/CSS/JS puro não tem dialeto de agente.
- A **descoberta de skills** difere (ver seção 4), mas o conteúdo das skills é o mesmo.
- `CONTEXT.md` é universal — pode ser lido e escrito por qualquer agente, mantendo continuidade entre sessões trocadas.
- Se trocar de agente no meio de um projeto, o novo agente lê `AGENTS.md` + `CONTEXT.md` e continua de onde parou, sem retrabalho.
