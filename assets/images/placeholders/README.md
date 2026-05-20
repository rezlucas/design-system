# assets/images/placeholders/ — Catálogo de Placeholders

Imagens genéricas usadas nos componentes até o cliente entregar as imagens reais.
O `alt` de cada `<img>` que usa um placeholder deve **descrever a imagem esperada**, não o placeholder.

---

## Catálogo completo

### Imagem de fundo para seções

| Arquivo | Dimensões | Proporção | Uso |
|---|---|---|---|
| `placeholder-background-image-section.png` | 1920×579 | ~10:3 | Hero backgrounds, banners full-width, qualquer seção com imagem de fundo |

### Imagens de conteúdo (1:1 — 400×400)

| Arquivo | Variante | Uso |
|---|---|---|
| `placeholder-image.png` | Fundo cinza | Imagem genérica — foto de produto, ambiente, cena |
| `placeholder-image-transparent.png` | Fundo transparente | Idem, quando o container já tem fundo |
| `placeholder-avatar.png` | Fundo cinza | Foto de pessoa — depoimento, equipe, autor |
| `placeholder-avatar-transparent.png` | Fundo transparente | Idem, sobre fundos coloridos |
| `placeholder-object.png` | Fundo cinza | Produto / objeto / ícone grande |
| `placeholder-object-transparent.png` | Fundo transparente | Idem, sobre fundos coloridos |
| `placeholder-video.png` | Fundo cinza | Thumbnail de vídeo (ícone play) |
| `placeholder-video-transparent.png` | Fundo transparente | Idem, sobre fundos coloridos |
| `placeholder-pattern.png` | Fundo cinza | Textura / padrão decorativo tileable |
| `placeholder-pattern-transparent.png` | Fundo transparente | Idem, sobre fundos coloridos |

### Logos

| Arquivo | Dimensões | Uso |
|---|---|---|
| `placeholder-dark-logo.png` | 73×46 | Logo escura — em fundos claros (headers, social proof em fundo branco) |
| `placeholder-white-logo.png` | 73×46 | Logo branca — em fundos escuros ou coloridos (footer dark, hero dark) |

---

## Regras de uso

```html
<!-- ❌ alt genérico -->
<img src="placeholder-avatar.png" alt="placeholder">
<img src="placeholder-avatar.png" alt="">

<!-- ✅ alt descreve o que deve entrar -->
<img
  src="../../../../assets/images/placeholders/placeholder-avatar.png"
  alt="foto de perfil de João Silva, CEO da Empresa ABC, sorrindo em ambiente corporativo"
  width="400"
  height="400"
  loading="lazy"
  decoding="async"
>

<!-- ✅ background-image-section no hero -->
<img
  src="../../../../assets/images/placeholders/placeholder-background-image-section.png"
  alt="empreendedor(a) sorrindo no seu estabelecimento comercial com maquininha de pagamento"
  width="1920"
  height="579"
  loading="eager"
  decoding="async"
>

<!-- ✅ logo em fundo escuro -->
<img
  src="../../../../assets/images/placeholders/placeholder-white-logo.png"
  alt="logo da Empresa XYZ"
  width="73"
  height="46"
  loading="lazy"
  decoding="async"
>
```

---

## Caminhos relativos por profundidade de componente

| Componente em | Caminho para placeholders |
|---|---|
| `components/atoms/[atom]/` | `../../../../assets/images/placeholders/` |
| `components/sections/[secao]/[variante]/` | `../../../../../assets/images/placeholders/` |

---

## Substituindo por imagens reais

1. Imagens reais do cliente vão em `assets/images/clients/[nome-do-cliente]/`
2. Troque apenas o `src` — o `alt` já está pronto e descritivo
3. Ajuste `width` e `height` para as dimensões reais
4. Mantenha `loading="eager"` apenas em imagens above the fold (hero)
