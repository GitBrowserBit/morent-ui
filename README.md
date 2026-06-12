# 🚗 Morent UI

Morent UI é uma implementação front-end de uma plataforma de aluguel de veículos desenvolvida com React, TypeScript e Chakra UI.

O projeto tem como objetivo transformar um design profissional do Figma em uma aplicação real, aplicando conceitos de componentização, Design System, responsividade, acessibilidade e integração com APIs.

Além de servir como projeto de estudo e portfólio, o objetivo é simular um ambiente de desenvolvimento próximo ao utilizado em aplicações modernas de mercado.

---

## Objetivos do Projeto

- Construir uma interface moderna e responsiva.
- Aplicar boas práticas de desenvolvimento Front-End.
- Desenvolver componentes reutilizáveis.
- Implementar um Design System próprio baseado no Figma.
- Integrar a interface com uma API REST.
- Consolidar conhecimentos em React e TypeScript.

---

## Tecnologias Utilizadas

### Front-End

- React
- TypeScript
- Chakra UI
- Vite

### Ferramentas

- Git
- GitHub
- ESLint
- Figma

---

## Backend

A API utilizada neste projeto está disponível em:

🔗 Repository: :contentReference[oaicite:0]{index=0}

---

## Status do Projeto

🚧 Em desenvolvimento

Atualmente o projeto encontra-se na fase de construção do Design System e componentização da interface.

---

# 🎨 Morent UI - Design System

## Paleta de Cores

### Primary

| Token | Cor |
|---------|---------|
| primary.900 | #0A196F |
| primary.800 | #102587 |
| primary.700 | #1A37A7 |
| primary.600 | #264BC8 |
| primary.500 | #3563E9 |
| primary.400 | #658DF1 |
| primary.300 | #85A8F8 |
| primary.200 | #AEC8FC |
| primary.100 | #D6E4FD |
| primary.0 | #FFFFFF |

### Secondinary

| Token | Cor |
|---------|---------|
| secondinary.900 | #040815 |
| secondinary.800 | #080C19 |
| secondinary.700 | #0D121F |
| secondinary.600 | #131825 |
| secondinary.500 | #1A202C |
| secondinary.400 | #596780 |
| secondinary.300 | #90A3BF |
| secondinary.200 | #C3D4E9 |
| secondinary.100 | #E0E9F4 |

### Success

| Token | Cor |
|---------|---------|
| success.900 | #3B6506 |
| success.800 | #4C7A0B |
| success.700 | #659711 |
| success.600 | #7FB519 |
| success.500 | #9CD323 |
| success.400 | #BCE455 |
| success.300 | #D3F178 |
| success.200 | #E8FAA6 |
| success.100 | #F5FCD2 |

### Error

| Token | Cor |
|---------|---------|
| error.900 | #7A0619 |
| error.800 | #930B16 |
| error.700 | #B71112 |
| error.600 | #DB2719 |
| error.500 | #FF4423 |
| error.400 | #FF7F59 |
| error.300 | #FFA37A |
| error.200 | #FFC8A6 |
| error.100 | #FFE7D3 |

### Warning

| Token | Cor |
|---------|---------|
| warning.900 | #7A4D0B |
| warning.800 | #936312 |
| warning.700 | #B7821D |
| warning.600 | #DBA32A |
| warning.500 | #FFC73A |
| warning.400 | #FFD96B |
| warning.300 | #FFE488 |
| warning.200 | #FFEFB0 |
| warning.100 | #FFF8D7 |

### Information

| Token | Cor |
|---------|---------|
| information.900 | #102E7A |
| information.800 | #1A4393 |
| information.700 | #2A60B7 |
| information.600 | #3D81DB |
| information.500 | #54A6FF |
| information.400 | #7EC2FF |
| information.300 | #98D3FF |
| information.200 | #BAE5FF |
| information.100 | #DCF3FF |

---

# 📝 Tipografia

## Font Sizes

| Token | Tamanho |
|---------|---------|
| text_xs | 12px |
| text_sm | 14px |
| text_base | 16px |
| text_lg | 18px |
| text_2lg | 20px |
| text_xl | 24px |
| text_xxl | 32px |
| text_2xl | 36px |
| text_2xxl | 40px |
| text_3xl | 72px |

---

## Font Weight

Utilizar os pesos nativos do Chakra UI.

| Nome | Valor |
|---------|---------|
| normal | 400 |
| medium | 500 |
| semibold | 600 |
| bold | 700 |

---

# 💻 Exemplos de Uso

## Cor

```tsx
<Text color="primary.500">
  Morent
</Text>
```

```tsx
<Box bg="secondary.900">
  Content
</Box>
```

## Tipografia

```tsx
<Text
  fontSize="text_sm"
  fontWeight="normal"
>
  Description
</Text>
```

```tsx
<Text
  fontSize="text_2xl"
  fontWeight="bold"
>
  Sports Car
</Text>
```

---
# 🔘 Primary Button

Botão principal do sistema Morent UI.

---

## 📦 Uso básico

```tsx
<PrimaryButton
  label="Button"
  aria-label="button"
/>
```

---

## 📏 Sizes

### sm

```tsx
<PrimaryButton
  label="Button"
  size="sm"
  aria-label="button"
/>
```

### md (default)

```tsx
<PrimaryButton
  label="Button"
  size="md"
  aria-label="button"
/>
```

### lg

```tsx
<PrimaryButton
  label="Button"
  size="lg"
  aria-label="button"
/>
```

---

## 🎯 Ícones

### Left icon

```tsx
<PrimaryButton
  label="Button"
  leftIcon={<Wechat />}
  size="md"
  aria-label="button"
/>
```

### Right icon

```tsx
<PrimaryButton
  label="Button"
  rightIcon={<Wechat />}
  size="md"
  aria-label="button"
/>
```

### Icon only

```tsx
<PrimaryButton
  iconOnly
  icon={<Wechat />}
  aria-label="button"
/>
```

---

## ⚙️ Estados

- hover
- active
- focus-visible
- disabled

---

## 🧠 Regras

- `iconOnly` exige `aria-label`
- Usar apenas para ações principais
- Sempre usar tokens do sistema

## Convenções
> Os nomes dos tokens seguem exatamente a nomenclatura definida no Figma para manter consistência entre design e desenvolvimento.
- Todas as cores devem ser consumidas através dos tokens do Chakra.
- Evitar cores hardcoded (`#3563E9`, `#FFFFFF`, etc.) nos componentes.
- Evitar tamanhos de fonte hardcoded (`14px`, `16px`, `32px`, etc.).
- Utilizar sempre os tokens definidos no Design System.
- Utilizar os pesos nativos do Chakra UI para tipografia.
