# Regras do 8020-DS

As regras inegociáveis do sistema de design da 80 20 Marketing. Quem gera uma peça com este sistema segue tudo o que está aqui. Quando houver conflito entre uma vontade pontual e uma regra, a regra vence.

## Marca

1. O laranja `#fa4616` é o substrato, não o enfeite. É o fundo da peça na variante canônica, nunca um detalhe de borda. Nunca outro laranja.
2. O branco é a voz. Texto sempre em par aprovado pela matriz de contraste (`tokens/brand.json`). Título e display em branco sobre o laranja; corpo denso em preto sobre o laranja, ou na variante de papel claro.
3. A imagem é sempre reta: retângulo com raio e borda fina, nunca máscara orgânica nem recorte. Nos modos documentados (retangular, full-bleed ou com texto sobreposto), nunca solta sem tratamento. Ver `patterns/images.html`.
4. O gradiente é só de marca (laranja, laranja aprofundado, chumbo), aparece só como superfície de destaque e nunca sob texto corrido.
5. Montserrat é a única família, do corpo ao display. O salto do último termo para o itálico é assinatura, marcado no HTML com `<em>`, não acaso.
6. A paleta é fechada: laranja, laranja aprofundado, branco, preto e chumbos profundos. Sem azul, verde, ouro, areia ou vermelho. O acento (branco sobre o laranja, laranja sobre o escuro e o claro) é escasso: no máximo três momentos por página ou slide em peça cliente. A escassez é o que dá impacto.
7. A logo 80 20 está sempre presente e nunca recolorida: assume a tinta da variante, branca no campo-laranja e no palco escuro, escura no papel claro. Topo à esquerda na peça; co-marca do cliente topo à direita; contracapa com a logo e os três endereços (São Paulo, Campo Grande, Cuiabá).

## Construção e acessibilidade

8. Gráfico e diagrama em SVG real (`<rect>`, `<path>`, `<polyline>`, `<circle>`, `<polygon>`), nunca uma `div` com largura em porcentagem.
8a. Diagramas usam ângulos retos: conectores em segmentos retos, com dobra em ângulo reto quando mudam de direção, nunca curva. Espaço generoso entre as linhas e os rótulos.
8b. Sem sombras em parte alguma. A profundidade vem da cor (superfície, chumbo) e da borda fina, nunca de `box-shadow`.
8c. Em SVG, cor de texto via `style` inline, nunca via atributo `fill`: atributo de apresentação perde para regra de classe CSS, e o texto some sobre a caixa de acento (foi o bug do texto invisível no deck de exemplo).
8d. Bloco de slide com `height: 100%` e padding leva `box-sizing: border-box`, senão o padding soma à altura, o conteúdo estoura a zona segura e o rodapé engole texto.
8e. Animação em dois registros, ambos sob `@media screen and (prefers-reduced-motion: no-preference)` para a impressão sair estática: entrada quando o slide abre (fade e subida em cascata, linha que se desenha, ponto que surge) e movimento constante só onde ele ajuda a leitura (rede com conexões fluindo em tracejado, referências pulsando, conectores de esquema em fluxo).
8f. O visualizador de deck é a casa: moldura escura com o slide 100% visível no centro, controles fora do slide (setas, contador, miniaturas na tecla `o`, tela cheia na tecla `f`), navegação pelas setas do teclado, sem dots de progresso e sem avanço por clique no slide.
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
21. O título atiça a curiosidade sem inventariar ("Os seis segmentos") e sem virar enigma: título que precisa ser decifrado é título errado. O título afirma o aprendizado de forma direta.
22. Sem autorreferência ao próprio documento. O texto lidera pelo assunto, não pelo veículo.
23. Prosa fluida, não staccato. Toda afirmação forte tem lastro na fonte. Quando não há dado que sustente, suaviza-se ou remove-se.
24. A voz fala para o cliente final, em registro consultivo. Observa e sugere; não acusa nem crava conclusão sem evidência.
25. **Clareza radical, sem figura de linguagem.** Nada de paradoxo ("quem tenta mudar tudo não muda nada"), nada de metáfora ou figura difusa (terreno, palco, espinha, guardião, mapa, anatomia, zona cinzenta, matéria-prima, contrato como imagem), nada de personificação de conceito ("a estatística conta", "a leitura sabe"). Dizer o que é, literalmente. Explicar e educar vence impressionar.
26. **Peça funcional tem nome funcional.** Sumário chama-se Sumário, índice chama-se Índice, conclusão chama-se conclusão. Sem título criativo para seção de navegação.
27. **Palavra difícil ou pouco usada no contexto sai.** "Eleitos" vira "escolhidos", "declarada" vira "definida". O leitor de chão de fábrica e o conselheiro leem a mesma frase sem tropeço. O termo "declarada" e derivações não entram em peça.

## Didática (deck longo)

28. Todo capítulo fecha com um slide de conclusão rotulado "O que aprendemos no capítulo NN", com cada aprendizado escrito por inteiro, compreensível se lido isoladamente, e a fonte do método junto.
29. O deck é sequencial e numerado: número do slide e capítulo no rodapé de todos os slides, separatriz numerada por capítulo, sumário no início e página única de fechamento com a estratégia inteira em um esquema com hierarquia (tese no topo, desdobramentos abaixo, acordo entre as partes na base, conectores anotados).
