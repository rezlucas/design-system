# templates/ — Receitas de Landing Pages

Referências de estrutura para a IA usar ao compor páginas completas para clientes. Cada template é uma combinação sugerida de seções existentes em `components/sections/`, não código de produção.

## Templates disponíveis

| Template | Tipo de oferta |
|---|---|
| `saas-template/` | Software as a Service — produto digital com trial ou freemium |
| `infoproduto-template/` | Cursos, ebooks, mentorias, comunidades |
| `agencia-template/` | Agências de marketing, design, desenvolvimento, consultoria |
| `ecommerce-template/` | Produtos físicos com foco em conversão direta |
| `servico-local-template/` | Clínicas, restaurantes, escolas, academias, serviços presenciais |

## Como usar

1. Ao receber um briefing de cliente, identificar o **tipo de oferta** acima.
2. Ler o `README.md` do template correspondente para ver a ordem de seções sugerida.
3. Consultar `skills/landing-page-anatomy/SKILL.md` para a lógica narrativa por trás da ordem.
4. Compor a página usando os componentes em `components/sections/`.

## Como criar um novo template

1. Criar pasta `templates/[tipo]-template/`
2. Criar `README.md` com: descrição do tipo, ordem de seções sugerida, variações, exemplos de referência
3. Adicionar entrada na tabela acima
