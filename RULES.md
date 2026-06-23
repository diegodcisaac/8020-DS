# Regras do 8020-DS

As regras inegociáveis do sistema de design da 80 20 Marketing. Quem gera uma peça com este sistema segue tudo o que está aqui. Quando houver conflito entre uma vontade pontual e uma regra, a regra vence.

## Marca

1. O laranja `#fa4616` é o substrato, não o enfeite. É o fundo da peça na variante canônica, nunca um detalhe de borda. Nunca outro laranja.
2. O branco é a voz. Texto sempre em par aprovado pela matriz de contraste (`tokens/brand.json`). Título e display em branco sobre o laranja; corpo denso em preto sobre o laranja, ou na variante de papel claro.
3. A imagem entra em um dos modos documentados (recortada, retangular, full-bleed ou com texto sobreposto), nunca solta sem tratamento. Foto protagonista é recortada e sangra a borda. Ver `patterns/images.html`.
4. O gradiente aparece só como joia, em superfície de destaque, e nunca sob texto corrido.
5. Montserrat é a única família, do corpo ao display. O salto do último termo para o itálico é assinatura, marcado no HTML com `<em>`, não acaso.
6. A joia (azul, verde, ouro, areia) é acento escasso: no máximo três momentos por página ou slide em peça cliente. A escassez é o que dá impacto.
7. A logo 80 20 está sempre presente e nunca recolorida fora das três variantes aprovadas (branca, preta, original laranja e branco). Topo à esquerda na peça; co-marca do cliente topo à direita; contracapa preta com a logo e os três endereços (São Paulo, Campo Grande, Cuiabá).

## Construção e acessibilidade

8. Gráfico e diagrama em SVG real (`<rect>`, `<path>`, `<polyline>`, `<circle>`, `<polygon>`), nunca uma `div` com largura em porcentagem.
9. Toda seta vem de um `<marker>` em `<defs>`, com `orient="auto-start-reverse"`. O triângulo desenhado à mão não acompanha a curva.
10. SVG de dado leva `role="img"`, `aria-label` descritivo e `<title>`/`<desc>` internos. SVG decorativo leva `aria-hidden="true"`.
11. Toda animação respeita `prefers-reduced-motion`. O conteúdo essencial (número, texto, geometria do gráfico) vive no HTML e renderiza sem JavaScript: o valor final fica escrito no elemento, o `data-count` é só realce.
12. Os títulos seguem a hierarquia (`h1` antes de `h2` antes de `h3`), sem pular nível.
13. As camadas de layout (`assets/deck.css`, `assets/book.css`) consomem só papéis semânticos (`--paper`, `--ink`, `--accent` e companhia), nunca a cor crua `--8020-*`. Por isso qualquer variante de cor roda em qualquer layout.

## Facilitação visual (metodologia)

14. O número grande e a frase que o nomeia são um par indissociável. O número nunca aparece sozinho: ao lado dele, o rótulo diz o que se mede e o texto diz por que importa.
15. Toda declaração massiva vem acompanhada de texto que explica e de um gráfico ou dispositivo que mastiga. Densidade de livro digital, não de slides.
16. Toda peça tem arco: início, meio e fim. O ritmo alterna o denso e o leve.
17. A clareza inline é premissa, não acabamento: o leitor lê qualquer trecho solto e se localiza, porque a referência nomeia os itens na própria frase.

## Editorial

18. Português do Brasil com acentuação correta, sempre, inclusive em caixa-alta e em título de display.
19. Sem travessão (em-dash). No lugar dele: dois-pontos, vírgula, parênteses ou ponto.
20. Sem anglicismo evitável. Nomes próprios por extenso (Banco do Brasil, não a sigla). Sem abreviação em peça cliente.
21. O título atiça a curiosidade, não inventaria: nada de "Os seis segmentos" ou "As quatro fases".
22. Sem autorreferência ao próprio documento. O texto lidera pelo assunto, não pelo veículo.
23. Prosa fluida, não staccato. Toda afirmação forte tem lastro na fonte. Quando não há dado que sustente, suaviza-se ou remove-se.
24. A voz fala para o cliente final, em registro consultivo. Observa e sugere; não acusa nem crava conclusão sem evidência.
