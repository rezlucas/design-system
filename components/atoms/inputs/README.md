# Inputs — Atom

Conjunto de campos de formulário: texto, e-mail, telefone, textarea, select, checkbox e radio. Inspirado em padrões de formulário minimalista (Stripe Elements, Linear): borda fina, anel de foco suave, label sempre acima do campo, mensagens de ajuda/erro abaixo.

## Estrutura

```html
<div class="input-field">
  <label class="input-field__label" for="id">Rótulo</label>
  <input class="input-field__control" id="id" type="text">
  <span class="input-field__hint">Texto de ajuda opcional.</span>
</div>
```

`input-field__control` funciona em `<input>`, `<textarea>` e `<select>` — a classe é a mesma, o elemento muda.

## Estado de erro

Adicione `input-field--invalid` no wrapper e `aria-invalid="true"` + `aria-describedby` no campo. O `__hint` é escondido automaticamente e o `__error` aparece:

```html
<div class="input-field input-field--invalid">
  <label class="input-field__label" for="phone">Telefone</label>
  <input class="input-field__control" id="phone" type="tel" aria-invalid="true" aria-describedby="phone-error">
  <span class="input-field__error" id="phone-error">
    <svg aria-hidden="true">...</svg>
    Informe um telefone válido.
  </span>
</div>
```

## Checkbox e radio

Custom, mas construídos sobre `<input type="checkbox">` / `<input type="radio">` nativo (posicionado absoluto e transparente) — mantém navegação por teclado e leitor de tela nativos.

```html
<label class="input-check">
  <input class="input-check__input" type="checkbox" name="terms">
  <span class="input-check__box">
    <svg viewBox="0 0 24 24" ...><path d="M5 13l4 4L19 7"/></svg>
  </span>
  Aceito os termos
</label>

<label class="input-radio">
  <input class="input-radio__input" type="radio" name="plan" value="pro">
  <span class="input-radio__box"><span class="input-radio__dot"></span></span>
  Plano Pro
</label>
```

Agrupe múltiplos com `.input-group` (gap vertical consistente).

## Acessibilidade

- `<label for="...">` sempre associado ao `id` do campo — nunca apenas `placeholder`.
- Checkbox/radio usam input nativo real (não `<div>` decorativo) — preserva `Space`/`Tab`/leitor de tela.
- Estado de erro via `aria-invalid` + `aria-describedby`, nunca só cor.
- Foco visível via `:focus-visible` com anel de 3px (`--color-primary-light`).

## Dependências

- `tokens/tokens.css`, `base/reset.css`, `base/base.css`
- `atoms/buttons/style.css` (apenas para o botão de submit no demo)
- Este `style.css`
