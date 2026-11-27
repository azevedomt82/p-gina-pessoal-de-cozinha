/* Caderno de Receitas — dados
   Cada receita:
   id, titulo, cozinha, tipo, resumo, doses, tempo, origem, feita (true/false), vinho
   ingredientes: [{q: número ou null (q.b.), u: unidade, n: nome, grupo: opcional}]
     unidades: g, ml, l, cs (colher de sopa), cc (colher de chá), pitada, un (unidades), dente, folha, raminho
   passos: [{t: título, x: texto, s: segundos do temporizador (opcional)}]
     no texto, {3} mostra o ingrediente 3 (a contar do 0) já com a quantidade ajustada
   porque, notas: listas de frases
*/
window.RECEITAS = [
{
  id: "risotto-de-cogumelos",
  titulo: "Risotto de Cogumelos e Espargos",
  cozinha: "Italiana",
  tipo: "Prato principal",
  resumo: "Três cogumelos (marron, shiitake e pleurotos) e espargos verdes, com um caldo aromatizado pelos pés dos shiitake e as pontas dos espargos.",
  doses: 2,
  tempo: "45 min",
  origem: "Criada aqui no caderno, novembro de 2026",
  feita: true,
  vinho: "Vinha da Curia (Bairrada tinto), aprovado à mesa. Alternativas: Quinta do Crasto Branco ou um Alvarinho.",
  ingredientes: [
    {q:160,u:"g",n:"arroz carnaroli ou arbóreo"},
    {q:100,u:"g",n:"cogumelos marron, laminados"},
    {q:100,u:"g",n:"cogumelos shiitake (pés à parte, chapéus laminados)"},
    {q:100,u:"g",n:"pleurotos, desfiados à mão"},
    {q:200,u:"g",n:"espargos verdes"},
    {q:1,u:"un",n:"cebola pequena, picada fina",np:"cebolas pequenas, picadas finas"},
    {q:2,u:"dente",n:"alho, picados"},
    {q:100,u:"ml",n:"vinho branco seco"},
    {q:1,u:"l",n:"caldo de legumes (sobra sempre um pouco)"},
    {q:3,u:"cs",n:"azeite"},
    {q:40,u:"g",n:"manteiga fria, em cubos"},
    {q:50,u:"g",n:"parmesão ralado na hora"},
    {q:4,u:"raminho",n:"tomilho"},
    {q:1,u:"cc",n:"sal"},
    {q:1,u:"pitada",n:"pimenta preta moída"}
  ],
  passos: [
    {t:"Preparar os legumes", x:"Dobra os espargos para partirem onde acaba a parte lenhosa e guarda essas pontas. Corta bicos de 4 cm e o resto dos talos em rodelas de 1 cm. Tira os pés aos shiitake e guarda-os."},
    {t:"Caldo", x:"Põe {8} a ferver em lume brando com os pés dos shiitake e as pontas dos espargos. Coa e mantém quente.", s:900},
    {t:"Cogumelos, 1.ª leva", x:"Marron e chapéus de shiitake numa frigideira bem quente com um fio de azeite. Não mexas durante 3 a 4 min, depois salteia mais 1 min. Retira.", s:240},
    {t:"Pleurotos e bicos", x:"Pleurotos 3 min sem mexer, junta os bicos de espargo e salteia 2 min. Junta aos outros cogumelos com o tomilho e só agora tempera com metade do sal.", s:300},
    {t:"Refogado", x:"No tacho, azeite e {5} durante 5 min em lume médio. Junta {6} e deixa mais 1 min.", s:360},
    {t:"Tostar e deglaçar", x:"Junta {0} e tosta 2 min, a mexer. Junta {7} e deixa evaporar.", s:120},
    {t:"Caldo, concha a concha", x:"Junta o caldo concha a concha, a mexer, com a indução em potência média. Conta 18 a 20 min desde a primeira concha.", s:1140},
    {t:"Espargos", x:"Aos 12 min, junta as rodelas de espargo."},
    {t:"Cogumelos", x:"Nos últimos 3 min, junta 2 partes em 3 da mistura de cogumelos. Prova grãos de vários sítios do tacho antes de tirar do lume."},
    {t:"Mantecatura", x:"Fora do lume, junta {10} e {11} e mexe com energia. Rectifica o sal, junta a pimenta, tapa e deixa repousar.", s:120},
    {t:"Servir", x:"Deve ficar all'onda, a ondular no prato. Por cima, os cogumelos que guardaste, os bicos de espargo e o tomilho."}
  ],
  porque: [
    "Cogumelos salgados no início largam água e cozem em vez de dourar. Duas levas para não encher a frigideira.",
    "Os pleurotos são os mais finos e ficam estaladiços se não lhes mexeres.",
    "A cremosidade vem do amido que a fricção solta do bago, não das natas."
  ],
  notas: [
    "1.ª vez (14 nov 2026): sucesso total. Com caneca e meia de arbóreo deu para 4 e não sobrou quase nada.",
    "Com 15 min de caldo alguns grãos ficaram demasiado al dente. Deixar ir aos 18 a 20 min e provar."
  ]
},
{
  id: "strapatsada",
  titulo: "Strapatsada do Peloponeso",
  cozinha: "Grega",
  tipo: "Prato rápido",
  resumo: "Ovos mexidos com tomate maduro ralado e feta. Simples e rústica; o segredo é o tomate e a paciência ao lume.",
  doses: 2,
  tempo: "20 min",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:4,u:"un",n:"tomates maduros grandes"},
    {q:4,u:"un",n:"ovos"},
    {q:3,u:"cs",n:"azeite virgem extra"},
    {q:80,u:"g",n:"queijo feta"},
    {q:3,u:"g",n:"sal"},
    {q:1,u:"pitada",n:"pimenta preta moída na hora"},
    {q:1,u:"cc",n:"orégãos secos (gregos, se houver)"},
    {q:6,u:"folha",n:"manjericão fresco (opcional)"}
  ],
  passos: [
    {t:"Ralar o tomate", x:"Rala {0} no lado grosso do ralador para uma tigela. As cascas ficam na mão e deitam-se fora. Sem pelar nem escaldar: é assim que se faz na Grécia."},
    {t:"Reduzir o tomate", x:"Aquece {2} numa frigideira larga em lume médio-alto e junta a polpa. Tempera com {4} e {6}. Deixa reduzir, a mexer de vez em quando, até quase não ter líquido e começar a caramelizar.", s:480},
    {t:"Bater os ovos", x:"Enquanto o tomate reduz, bate levemente {1} com um garfo, só para misturar gema e clara, sem meter ar."},
    {t:"Juntar os ovos", x:"Baixa para médio-baixo e deita os ovos sobre o tomate. Mexe devagar com uma espátula, em dobras grandes e lentas. Queremos pedaços cremosos, não uma mistura uniforme.", s:120},
    {t:"Finalizar", x:"Tira do lume com os ovos ainda mal passados, porque acabam com o calor que fica. Espalha {3} em pedaços irregulares, {5} e {7} rasgado à mão. Um fio de azeite cru por cima e pão torrado ao lado."}
  ],
  porque: [
    "O feta não vai ao lume: entra no fim para manter textura e sabor.",
    "Mexer devagar dá pedaços grandes e cremosos; mexer depressa dá ovos mexidos comuns."
  ],
  notas: [
    "Tomate muito maduro, nunca de lata. No verão, coração-de-boi é perfeito.",
    "Pão de aldeia ou broa para limpar o prato."
  ]
},
{
  id: "pataniscas",
  titulo: "Pataniscas de Bacalhau",
  cozinha: "Portuguesa",
  tipo: "Petisco",
  resumo: "Achatadas, estaladiças por fora e macias por dentro, feitas na frigideira.",
  doses: 4,
  tempo: "30 min (com o bacalhau já demolhado)",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:300,u:"g",n:"bacalhau demolhado e desfiado, sem peles nem espinhas"},
    {q:150,u:"g",n:"farinha de trigo"},
    {q:2,u:"un",n:"ovos"},
    {q:150,u:"ml",n:"cerveja (ou água com gás)"},
    {q:1,u:"un",n:"cebola picada fina",np:"cebolas picadas finas"},
    {q:2,u:"dente",n:"alho picados"},
    {q:3,u:"cs",n:"salsa picada"},
    {q:1,u:"cc",n:"sal (acertar ao bacalhau)"},
    {q:1,u:"cc",n:"pimenta preta moída"},
    {q:5,u:"cs",n:"azeite ou óleo para fritar"}
  ],
  passos: [
    {t:"Bacalhau", x:"Confirma que {0} está bem demolhado (pelo menos 24 h a mudar a água). Desfia em lascas pequenas, mas sem fazer pasta."},
    {t:"Massa", x:"Numa tigela, mistura {1} com {2} e vai juntando {3} aos poucos, com uma vara de arames, até ficar sem grumos e com textura de iogurte espesso."},
    {t:"Aromáticos", x:"Junta {4}, {5} e {6}. Tempera com o sal e a pimenta. Prova: deve saber bem a salsa e estar bem temperada."},
    {t:"Bacalhau na massa", x:"Envolve o bacalhau. A massa deve ser grossa para não escorrer, mas fluida para achatar sozinha. Se estiver muito grossa, mais uma colher de cerveja."},
    {t:"Fritar", x:"Aquece {9} numa frigideira larga em lume médio-alto. Deita colheradas de massa e achata com as costas da colher até terem 1 cm. Deixa espaço entre elas.", s:180},
    {t:"Virar", x:"Quando as bordas douram e o cimo já não parece cru, vira e frita mais 2 a 3 min. Escorre em papel absorvente.", s:150}
  ],
  porque: [
    "As bolhas da cerveja ou da água com gás deixam a patanisca leve por dentro e estaladiça por fora.",
    "Azeite frio dá pataniscas encharcadas: se a massa não chiar logo, espera mais."
  ],
  notas: [
    "Prova o bacalhau antes e acerta o sal da massa.",
    "Clássico com arroz de feijão e salada. Como petisco, com limão e azeitonas."
  ]
},
{
  id: "tarte-de-lima-paulinha",
  titulo: "Tarte de Lima da Paulinha",
  cozinha: "Portuguesa",
  tipo: "Sobremesa",
  resumo: "Sem forno: base de bolacha Maria e recheio cremoso de natas, leite condensado e lima.",
  doses: 8,
  tempo: "30 min + 4 h de frigorífico",
  origem: "Paulinha, do café do estúdio. Forma de fundo amovível com uns 26 cm.",
  feita: true,
  ingredientes: [
    {q:300,u:"g",n:"bolacha Maria",grupo:"Base"},
    {q:190,u:"g",n:"manteiga amolecida",grupo:"Base"},
    {q:400,u:"ml",n:"natas para bater, bem frias",grupo:"Recheio"},
    {q:400,u:"g",n:"leite condensado (1 lata, por confirmar com a Paulinha)",grupo:"Recheio"},
    {q:4,u:"un",n:"limas (sumo e raspa)",grupo:"Recheio"}
  ],
  passos: [
    {t:"Base", x:"Tritura {0} até ficar em pó fino. Junta {1} e mistura com as mãos até parecer areia molhada."},
    {t:"Forrar a forma", x:"Calca bem a mistura no fundo e nas laterais da forma, com as costas de uma colher ou o fundo de um copo."},
    {t:"Firmar a base", x:"Frigorífico enquanto fazes o recheio.", s:1800},
    {t:"Limas", x:"Tira primeiro a raspa de {4}, só a parte verde, e guarda. Depois espreme."},
    {t:"Natas", x:"Bate {2} até ficarem em chantilly firme."},
    {t:"Leite condensado", x:"Junta {3} aos poucos, a bater em velocidade baixa."},
    {t:"Lima", x:"Junta o sumo aos poucos, sem parar de mexer. O ácido faz o creme engrossar e ganhar presa."},
    {t:"Encher e frio", x:"Deita o recheio sobre a base, alisa e leva ao frigorífico.", s:14400},
    {t:"Finalizar", x:"Antes de servir, espalha a raspa de lima por cima."}
  ],
  porque: [
    "O ácido da lima faz as proteínas do leite condensado coagular: é isso que dá presa ao recheio sem gelatina nem forno."
  ],
  notas: [
    "1.ª vez (14 nov 2026): recheio genial. Com 400 g de bolacha e 250 g de manteiga a base ficou grossa; as quantidades aqui já são as corrigidas.",
    "Para fatias limpas, passa a faca por água quente e seca entre cortes."
  ]
},
{
  id: "molho-de-limao-frito",
  titulo: "Molho de Limão Frito",
  cozinha: "Americana",
  tipo: "Molho",
  resumo: "Limão caramelizado na frigideira e triturado com azeite, vinagre e mostarda. Cremoso, ácido e ligeiramente tostado. Vegan.",
  doses: 6,
  tempo: "15 min",
  origem: "eatsomethingvegan.com, «Fried Lemon Sauce»",
  feita: false,
  ingredientes: [
    {q:1,u:"un",n:"limão grande de casca fina, em rodelas",np:"limões grandes de casca fina, em rodelas"},
    {q:1,u:"cs",n:"azeite (para fritar)"},
    {q:3,u:"cs",n:"azeite (para triturar)"},
    {q:2,u:"cs",n:"vinagre de sidra"},
    {q:1,u:"cs",n:"xarope de ácer (ou mel, ou agave)"},
    {q:2,u:"cc",n:"mostarda Dijon"},
    {q:3,u:"cs",n:"água fria"},
    {q:3,u:"g",n:"sal"},
    {q:1,u:"pitada",n:"pimenta preta moída"}
  ],
  passos: [
    {t:"Fritar o 1.º lado", x:"Aquece {1} na frigideira em lume médio-alto e frita as rodelas de {0} até ficarem douradas escuras e caramelizadas.", s:180},
    {t:"Fritar o 2.º lado", x:"Vira e frita o outro lado. Dourado escuro sim, preto não: o queimado traz o amargo de volta.", s:180},
    {t:"Arrefecer", x:"Tira do lume e deixa arrefecer um pouco.", s:120},
    {t:"Tirar as grainhas", x:"Remove todas as grainhas, uma a uma. A casca fica."},
    {t:"Triturar", x:"No copo da varinha: o limão, {2}, {3}, {4}, {5}, {6}, {7} e {8}. Tritura em velocidade alta até ficar liso e cremoso.", s:45},
    {t:"Servir ou guardar", x:"Serve logo ou passa para um frasco fechado. Fica melhor de véspera."}
  ],
  porque: [
    "O amargo vem da parte branca da casca e das grainhas: limões de casca fina e grainha nenhuma.",
    "Fritar carameliza os açúcares da casca; queimar a sério volta a amargar.",
    "A mostarda é o emulsionante que segura azeite e água juntos."
  ],
  notas: [
    "Mais líquido, para salada: mais 1 colher de sopa de água fria.",
    "Variações: ervas nos últimos 10 segundos, 1 a 2 dentes de alho fritos com o limão, ou metade do limão trocada por laranja.",
    "Frigorífico 5 a 7 dias; congela bem em cuvetes de gelo.",
    "Vai bem com legumes assados, couve-flor, espargos, batatas, ovos ou peixe grelhado."
  ]
}
];
