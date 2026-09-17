# Frontend Mentor - Interactive Pricing Component 💳

Solução completa e pixel-perfect para o desafio [Interactive pricing component do Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8).

---

## 📌 Sumário
- [Visão Geral](#-visão-geral)
  - [O Desafio](#o-desafio)
  - [Layout & Design](#layout--design)
- [Funcionalidades e Regras de Negócio](#-funcionalidades-e-regras-de-negócio)
  - [Tabela de Preços e Visualizações](#tabela-de-preços-e-visualizações)
  - [Desconto no Faturamento Anual](#desconto-no-faturamento-anual)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Acessibilidade (a11y)](#-acessibilidade-a11y)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar o Projeto Localmente](#-como-executar-o-projeto-localmente)
- [Autor](#-autor)

---

## 🎯 Visão Geral

### O Desafio
O objetivo deste projeto é construir um componente interativo de cálculo de preços baseado em volume de tráfego (pageviews), mantendo a fidelidade visual aos designs fornecidos (Desktop e Mobile) e garantindo ótima experiência do usuário em todas as resoluções de tela.

### Layout & Design
- **Desktop (1440px)**: Exibição horizontal equilibrada com contagem de pageviews à esquerda, preço à direita, slider de largura total, alternador de ciclo de faturamento e rodapé de benefícios com botão de ação (CTA).
- **Mobile (375px)**: Layout reordenado verticalmente de forma fluida (Pageviews → Slider → Preço → Faturamento Anual com badge `-25%` → Benefícios centralizados → Botão CTA).
- **Estados Ativos**: Efeitos visuais suaves de hover em botões, foco acessível via teclado, efeito glow neon ciano (`0 15px 30px hsla(174, 86%, 45%, 0.6)`) no slider e mudança para cursor `grabbing` ao arrastar.

---

## 💡 Funcionalidades e Regras de Negócio

### Tabela de Preços e Visualizações
O componente disponibiliza 5 faixas (tiers) de tráfego com preços mensais pré-configurados:

| Faixa (Tier) | Volume de Pageviews | Preço Mensal Base | Preço Anual (c/ 25% desc.) |
| :---: | :---: | :---: | :---: |
| 0 | **10K** | $8.00 / mês | $6.00 / mês |
| 1 | **50K** | $12.00 / mês | $9.00 / mês |
| 2 | **100K** *(padrão)* | $16.00 / mês | $12.00 / mês |
| 3 | **500K** | $24.00 / mês | $18.00 / mês |
| 4 | **1M** | $36.00 / mês | $27.00 / mês |

### Desconto no Faturamento Anual
- Ao ativar a chave seletora (**Yearly Billing**), é aplicado automaticamente um **desconto de 25%** sobre o valor mensal de qualquer faixa de tráfego selecionada:
  $$\text{Preço Final} = \text{Preço Base} \times (1 - 0.25)$$
- No desktop, a etiqueta exibe `25% discount`. No mobile, adapta-se para `-25%` de forma responsiva.
- A barra de progresso do slider é preenchida dinamicamente via JavaScript alterando a variável CSS `--progress`.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura organizada com `<header>`, `<main>`, `<article>`, `<ul role="list">`, e metadados completos de SEO.
- **CSS3 Puro (Vanilla CSS)**:
  - Variáveis CSS (Custom Properties) para paleta de cores, tipografia e sombras.
  - Flexbox e CSS Grid para alinhamento e reordenação responsiva.
  - Estilização cross-browser de inputs do tipo range (`::-webkit-slider-thumb`, `::-moz-range-thumb`).
  - Fontes externas: [Manrope](https://fonts.google.com/specimen/Manrope) (600 e 800) importada do Google Fonts.
- **JavaScript Moderno (ES6+)**:
  - Manipulação limpa do DOM baseada em eventos (`input`, `change`, `DOMContentLoaded`).
  - Cálculo dinâmico de valores e preenchimento da barra de progresso.
  - Formatação monetária com duas casas decimais (`.toFixed(2)`).

---

## ♿ Acessibilidade (a11y)

- **Leitores de Tela**:
  - Inclusão de `aria-label`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow` e atualização dinâmica do atributo `aria-valuetext` no slider.
  - Rótulos ocultos visivelmente via classe `.sr-only` para manter contexto sem poluição visual.
- **Navegação por Teclado**:
  - Slider operável com as setas do teclado (`←` e `→` para decrementar/incrementar).
  - Toggle operável via `Tab` e `Espaço`.
  - Indicadores visíveis de foco com alto contraste (`:focus-visible`).

---

## 📁 Estrutura do Projeto

```text
advice-generator-app-main/
│
├── css/
│   └── style.css            # Variáveis globais, reset, tipografia, componentes e responsividade
├── js/
│   └── script.js            # Lógica dos tiers de preços, cálculo de descontos e progresso do slider
├── images/
│   ├── bg-pattern.svg       # Padrão curvo de fundo superior
│   ├── favicon-32x32.png    # Favicon da aplicação
│   ├── icon-check.svg       # Ícone de verificação dos benefícios
│   ├── icon-slider.svg      # Ícone de setas duplas do thumb do slider
│   └── pattern-circles.svg  # Círculos concêntricos do cabeçalho
├── design/                  # Guias visuais (Desktop, Mobile e Active States)
├── index.html               # Estrutura principal da página
├── style-guide.md           # Especificação oficial de cores e tipografia
└── README.md                # Documentação técnica completa
```

---

## 💻 Como Executar o Projeto Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Caiokl3i/front-challenge.git
   cd front-challenge
   ```

2. **Abra o projeto**:
   - Basta abrir o arquivo `index.html` diretamente em seu navegador favorito (Google Chrome, Edge, Firefox, etc.).
   - Ou utilize qualquer servidor local de desenvolvimento, como:
     - **Extensão Live Server** do VS Code.
     - **Python**:
       ```bash
       python -m http.server 5500
       ```
     - **Node / npx**:
       ```bash
       npx serve .
       ```
3. Acesse `http://localhost:5500` no seu navegador.

---

## 👤 Autor

- GitHub - [@Caiokl3i](https://github.com/Caiokl3i)
- Desafio - [Frontend Mentor](https://www.frontendmentor.io)
