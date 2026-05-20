# skills/ — Conhecimento Operacional para a IA

Pasta de skills no formato **[Agent Skills](https://agentskills.io)** — compatível com Claude Code, Codex CLI, GitHub Copilot, Gemini CLI e outros.

Cada skill é uma pasta com `SKILL.md` contendo:
- Frontmatter YAML (`name`, `description`)
- Conteúdo markdown com diretrizes, exemplos e checklists

## Skills disponíveis

| Skill | Quando ativar |
|---|---|
| [`bem-structure`](./bem-structure/SKILL.md) | Sempre que for escrever, revisar ou refatorar CSS / nomear classes |
| [`responsive-web-design`](./responsive-web-design/SKILL.md) | Ao criar layouts, escolher Grid vs Flexbox, definir breakpoints |
| [`accessibility-basics`](./accessibility-basics/SKILL.md) | Ao criar forms, botões, navegação, imagens e qualquer elemento interativo |
| [`landing-page-anatomy`](./landing-page-anatomy/SKILL.md) | Ao iniciar uma nova página ou decidir a ordem das seções |

## Como adicionar uma nova skill

1. Criar pasta `skills/[nome-da-skill]/`
2. Criar `SKILL.md` com frontmatter YAML e conteúdo markdown
3. Adicionar entrada na tabela acima
4. Referenciar a skill em `AGENTS.md` (seção 3) e `README.md` (seção 9)

## Formato mínimo de uma skill

```markdown
---
name: nome-da-skill
description: >
  Uma linha descrevendo quando ativar esta skill. Deve ser específico o suficiente
  para um agente decidir se precisa ler ou não.
---

# Título da Skill

Conteúdo markdown com diretrizes, exemplos e checklists.
```
