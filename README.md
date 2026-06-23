# 8020-DS

Sistema de design da **80 20 Marketing**. Standalone, sem build, sem dependência: HTML, CSS, JavaScript e SVG puros. Quando ligado ao Claude, faz gerar decks, books, páginas, componentes e textos no padrão da casa.

A casa fala em laranja. O `#fa4616` é o substrato, o branco é a voz, o preto é o chão, e a joia entra só quando precisa pesar. Montserrat em todo lugar.

## Para que serve

Abrir um arquivo do sistema e já saber como a marca fala: cor, tipografia, componentes, gráficos, diagramas e o tom de voz, tudo no mesmo lugar e tudo rodável no navegador. O cliente entra como conteúdo e co-marca dentro do frame laranja, nunca como troca de pele.

## Ordem de leitura

1. **[RULES.md](RULES.md)**: as regras inegociáveis. Comece aqui.
2. **[voice/](voice/)**: a plataforma da marca (`plataforma.md`), o tom de voz (`tom-de-voz.md`) e o vocabulário de evitar e usar (`vocabulario.md`).
3. **`tokens/`**: `8020.css` (variante canônica, campo-laranja), `8020-noite.css` (palco escuro) e `8020-claro.css` (papel claro), mais o `brand.json` com a paleta, as escalas de dado e a matriz de contraste.
4. **`patterns/`**: o catálogo vivo: cor, variantes, tipografia, elementos gráficos, imagens, cards e persona, facilitação visual, diagramas, gráficos, e os catálogos de deck e de book. Abra qualquer `.html` no navegador.
5. **`examples/`**: um deck e um book de exemplo, com conteúdo fictício, exercitando o sistema inteiro.
6. **`antipatterns/forbidden.html`**: o que o sistema recusa, errado ao lado de certo.

Para uma porta de entrada visual, abra `index.html` no navegador.

## Estrutura

```
8020-DS/
  README.md  RULES.md  index.html
  tokens/    8020.css  8020-noite.css  8020-claro.css  brand.json
  voice/     plataforma.md  tom-de-voz.md  vocabulario.md
  patterns/  colors  variants  typography  graphic-elements  images
             cards  facilitacao-visual  diagrams  charts
             layouts (deck)  book-layout (book)  + _docs.css (cromo do catalogo)
  examples/  8020-deck/deck.html   8020-book/index.html + partes/
  antipatterns/ forbidden.html
  assets/    deck.css  book.css  deck.js  book.js  fonts/  logos/
```

## As três variantes

Um sistema, três ambientes de cor. O componente nunca sabe em qual está: lê papéis semânticos, e cada variante só redefine o que cada papel vale.

- **Campo-laranja** (`tokens/8020.css`): a canônica. Abertura, capa, energia da marca em campo cheio.
- **Palco escuro** (`tokens/8020-noite.css`): apresentação ao vivo, sala escura. O laranja recua para acento.
- **Papel claro** (`tokens/8020-claro.css`): documento, leitura longa, peça sóbria.

Para um cliente ou ambiente novo, copia-se a base e redeclaram-se só os papéis. O componente segue intacto.

## Como a 80 20 gera com este sistema

1. Escolher o formato: deck (camada `assets/deck.css` + `deck.js`) ou book (camada `assets/book.css` + `book.js`).
2. Escolher a variante de cor pela pergunta de onde a peça será vista.
3. Compor as seções a partir dos catálogos em `patterns/`, copiando os componentes existentes em vez de inventar.
4. Gráfico e diagrama em SVG real, com as escalas de cor do `brand.json` (massa em branco e brancos esmaecidos, joia só no dado-herói).
5. Conferir contra o [RULES.md](RULES.md) e o [antipatterns/forbidden.html](antipatterns/forbidden.html).
6. Passar o texto pela última revisão de tom antes de entregar, conforme `voice/tom-de-voz.md`.

## Técnico

- **Zero build.** Abrir o `.html` direto no navegador.
- **Montserrat** self-hosted em `assets/fonts/` (licença OFL), sem chamada externa.
- **Export de PDF** de deck ou book via Chrome headless: as cores de fundo são preservadas e o deck pagina um slide por página.
- **Acessibilidade:** SVG de dado com `role`/`aria-label`, animação com `prefers-reduced-motion`, contraste pelos pares aprovados no `brand.json`.

---

*80 20 Marketing · São Paulo · Campo Grande · Cuiabá*
