---
name: landing-page-anatomy
description: >
  Estrutura e ordem das seções em uma landing page de alta conversão, por tipo
  de oferta (SaaS, infoproduto, agência, e-commerce, serviço local, captura).
  Ative ao iniciar uma nova página, decidir a ordem das seções, ou verificar
  se a narrativa da página está completa.
---

# Anatomia de Landing Pages

Uma landing page eficiente segue uma **narrativa de conversão**: capta atenção → cria desejo → derruba objeções → leva à ação. A ordem das seções importa tanto quanto o conteúdo de cada uma.

## 1. Estrutura universal (base para qualquer tipo)

Todo landing page começa com esta espinha dorsal, na ordem abaixo:

| Posição | Seção | Obrigatória? | Pergunta que responde |
|---|---|---|---|
| 1 | **Header / Nav** | Sim | Onde estou? Como navego? |
| 2 | **Hero** | Sim | O que é isso e por que me importa? |
| 3 | **Social Proof rápido** | Recomendada | Quem mais usa? Posso confiar? |
| 4 | **Features / Benefícios** | Sim | Como resolve meu problema? |
| 5 | **Como funciona / Steps** | Recomendada | É fácil de usar? |
| 6 | **Prova social aprofundada** | Recomendada | Tem resultados reais? |
| 7 | **Pricing** | Se aplicável | Quanto custa? Vale a pena? |
| 8 | **FAQ** | Recomendada | Minhas dúvidas? |
| 9 | **CTA final** | Sim | O que eu faço agora? |
| 10 | **Footer** | Sim | Informações legais / contato |

> A ordem pode variar por tipo de oferta. Veja as variações abaixo.

## 2. Variações por tipo de oferta

### SaaS (Software as a Service)

**Ordem**: Header → Hero (com free trial / demo) → Logos de clientes → Features (grid ou tabs) → Como funciona (steps) → Depoimentos → Pricing (toggle mensal/anual) → FAQ → CTA final → Footer

**Foco**: clareza do produto, prova de que funciona, remoção de risco (free trial, sem cartão).

**Seções obrigatórias**: hero, features, pricing, FAQ.

---

### Infoproduto (curso, ebook, mentoria)

**Ordem**: Header → Hero (dor + promessa) → Para quem é → O que você vai aprender (lista) → Sobre o especialista → Depoimentos de alunos → Conteúdo do produto → Pricing (urgência/escassez se aplicável) → Garantia → FAQ → CTA final → Footer

**Foco**: conexão emocional com a dor, autoridade do criador, prova de resultado.

**Seções obrigatórias**: hero, "para quem é", depoimentos, garantia.

---

### Agência (marketing, design, desenvolvimento)

**Ordem**: Header → Hero (resultado esperado, não serviço) → Logos de clientes → Serviços → Cases / Portfólio → Sobre a equipe → Depoimentos → Processo de trabalho (steps) → CTA (formulário de contato ou agendamento) → Footer

**Foco**: portfólio, credibilidade, processo claro, contato fácil.

**Seções obrigatórias**: hero, portfólio/cases, formulário de contato.

---

### E-commerce (produto físico)

**Ordem**: Header → Hero (produto em uso) → Benefícios do produto → Social proof (avaliações, reviews) → Galeria de produto → Como funciona / diferenciais → Depoimentos → Garantia + frete → Pricing / CTA → FAQ → Footer

**Foco**: produto em contexto real, confiança na compra, remoção de risco (garantia, devolução).

**Seções obrigatórias**: hero, reviews, garantia.

---

### Serviço local (clínica, restaurante, escola, academia)

**Ordem**: Header → Hero (localização + proposta) → Serviços → Fotos do espaço → Depoimentos locais → Equipe → Horários / localização → Formulário de agendamento ou contato → FAQ → Footer

**Foco**: proximidade, confiança, facilitar o contato.

**Seções obrigatórias**: hero, contato/agendamento, localização.

---

### Captura (lead gen, lista de espera, webinar)

**Ordem**: Header mínimo → Hero com formulário inline → O que você vai receber → Quem sou eu → Prova social → FAQ (curto) → CTA de reforço → Footer mínimo

**Foco**: mínimo de fricção, formulário acima da dobra, proposta de valor crystal clear.

**Seções obrigatórias**: hero com form, confirmação do que o lead recebe.

---

## 3. Regras de composição

### Acima da dobra (above the fold)
O que aparece sem rolar deve responder: **o que é, para quem é, e o que fazer agora**. Header + Hero geralmente são suficientes.

### Ritmo visual
Alterne fundos para criar separação visual entre seções:
- `--color-background` (branco) → `--color-background-alt` (cinza claro) → `--color-background` → etc.
- Seções dark (`--color-background-dark`) com moderação — geralmente apenas CTA ou hero.

### CTAs
- **CTA primário** aparece no hero e no CTA final (mínimo). Pode repetir após seções longas.
- **CTA secundário** (ex: "ver demo" / "saiba mais") coexiste com o primário no hero.
- Todo CTA deve ser específico: "Comece grátis" > "Clique aqui".

### Prova social — quantidade mínima
- Logos de clientes: mínimo 5, idealmente 8-12.
- Depoimentos: mínimo 3, com nome, cargo, empresa e foto.
- Reviews: mínimo 5, com estrelas e texto.
- Stats: pelo menos 3 métricas relevantes.

## 4. O que nunca fazer

- ❌ Falar só sobre a empresa no hero — fale sobre o **resultado do cliente**.
- ❌ Ter apenas um CTA em toda a página (muito longa → usuário perde).
- ❌ Seção de "Sobre nós" como segunda seção — ela mata o momentum. Coloque depois de features.
- ❌ Formulário sem indicar o que acontece após o envio.
- ❌ Preço escondido — se tem pricing, mostre na página.
- ❌ FAQ genérico ("Qual é o prazo?") sem respostas específicas.

## 5. Checklist antes de declarar uma página pronta

- [ ] Hero responde: o que é, para quem é, o que fazer agora
- [ ] CTA principal aparece no mínimo 2x (hero + CTA final)
- [ ] Seções em ordem narrativa coerente com o tipo de oferta
- [ ] Prova social presente (logos, depoimentos, reviews ou stats)
- [ ] FAQ com as objeções reais do público-alvo
- [ ] Footer com links legais (privacidade, termos) e contato
- [ ] Formulários têm labels e mensagem de confirmação
- [ ] Nenhuma seção usa `display: none` em mobile para "simplificar"
- [ ] Ritmo visual alternado entre seções (claro / cinza / claro)
- [ ] Heading hierarchy correta em toda a página (h1 no hero, h2 em seções, h3 em sub-itens)
