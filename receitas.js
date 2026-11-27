/* Caderno de Receitas — dados
   Cada receita:
   id, titulo, cozinha, tipo, resumo, doses, tempo, origem, feita (true/false), vinho
   ingredientes: [{q: número ou null (q.b.), u: unidade, n: nome, grupo: opcional}]
     unidades: g, ml, l, cs (colher de sopa), cc (colher de chá), ccafe (colher de café), chavena, pitada, un (unidades), dente, folha, raminho, vagem, pau
     q: null mostra «q.b.»; np: nome no plural para unidades
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
},
{
  id: "tiramisu-galbani",
  titulo: "Tiramisù Original Galbani",
  cozinha: "Italiana",
  tipo: "Sobremesa",
  resumo: "O clássico com mascarpone, ovos frescos, café e palitos La Reine. Fica muito melhor de um dia para o outro.",
  doses: 6,
  tempo: "30 min + 3 h de frio (ideal 12 h)",
  origem: "galbani.pt",
  feita: false,
  ingredientes: [
    {q:500,u:"g",n:"queijo mascarpone"},
    {q:5,u:"un",n:"ovos"},
    {q:5,u:"cs",n:"açúcar"},
    {q:40,u:"un",n:"palitos La Reine"},
    {q:2,u:"chavena",n:"café sem açúcar, frio"},
    {q:2,u:"cs",n:"Marsala (vinho doce italiano)"},
    {q:2,u:"cs",n:"cacau em pó sem açúcar, para polvilhar"}
  ],
  passos: [
    {t:"Separar os ovos", x:"Separa as gemas das claras de {1}."},
    {t:"Bater as gemas", x:"Bate as gemas com {2} até a mistura ficar esbranquiçada e cremosa.", s:300},
    {t:"Mascarpone", x:"Junta {0} às gemas e mexe até ficar um creme homogéneo."},
    {t:"Claras em castelo", x:"Bate as claras em castelo firme e envolve-as no creme com cuidado, de baixo para cima."},
    {t:"Café", x:"Mistura {4} com {5} numa tigela funda. Passa rapidamente {3} pelo café, sem os deixar ensopar."},
    {t:"Montar", x:"Numa travessa funda: metade dos palitos, metade do creme, o resto dos palitos e o resto do creme."},
    {t:"Frigorífico", x:"Tapa com película e leva ao frigorífico pelo menos 3 horas. O ideal são 12.", s:10800},
    {t:"Servir", x:"Antes de servir, polvilha com {6} por uma peneira fina."}
  ],
  porque: ["As claras em castelo são o que dá leveza ao creme: envolve-as devagar para não perderem o ar."],
  notas: [
    "Em vez de palitos: bolachas de manteiga, Speculoos ou brioche.",
    "Em vez de café: chocolate quente, sumo de frutos vermelhos ou caramelo salgado.",
    "Framboesas ou pera caramelizada entre camadas também ficam bem."
  ]
},
{
  id: "tataki-de-atum",
  titulo: "Tataki de Atum com Puré de Cenoura Assada",
  cozinha: "Japonesa",
  tipo: "Prato principal",
  resumo: "Atum selado com crosta de sésamo, puré de cenoura assada e azeite de coentros. Inspirado no Sétimo Ano, na Gafanha da Nazaré.",
  doses: 2,
  tempo: "1 h 15 min",
  origem: "Reconstruída a partir de um prato do restaurante Sétimo Ano (Gafanha da Nazaré)",
  feita: false,
  ingredientes: [
    {q:300,u:"g",n:"lombo de atum fresco (qualidade sushi)",grupo:"Atum"},
    {q:3,u:"cs",n:"molho de soja",grupo:"Atum"},
    {q:1,u:"cs",n:"óleo de sésamo",grupo:"Atum"},
    {q:1,u:"cc",n:"gengibre fresco ralado",grupo:"Atum"},
    {q:1,u:"cs",n:"sésamo preto",grupo:"Atum"},
    {q:1,u:"cs",n:"sésamo branco",grupo:"Atum"},
    {q:4,u:"un",n:"cenouras médias, descascadas",grupo:"Puré"},
    {q:2,u:"cs",n:"azeite (para assar)",grupo:"Puré"},
    {q:30,u:"g",n:"manteiga",grupo:"Puré"},
    {q:1,u:"cc",n:"sal",grupo:"Puré"},
    {q:1,u:"cc",n:"gengibre em pó",grupo:"Puré"},
    {q:50,u:"g",n:"coentros frescos (folhas e talos finos)",grupo:"Azeite de coentros"},
    {q:100,u:"ml",n:"azeite virgem extra",grupo:"Azeite de coentros"},
    {q:1,u:"cc",n:"sal (para o azeite)",grupo:"Azeite de coentros"},
    {q:20,u:"g",n:"microverdes",grupo:"Azeite de coentros"}
  ],
  passos: [
    {t:"Marinar o atum", x:"Mistura {1}, {2} e {3}. Mergulha {0} e deixa no frigorífico.", s:1800},
    {t:"Assar as cenouras", x:"Forno a 200 °C. Corta {6} em pedaços, envolve em {7} e {9} e assa até ficarem macias e com as bordas caramelizadas.", s:2400},
    {t:"Azeite de coentros", x:"Escalda {11} 20 segundos em água a ferver e passa logo para água com gelo. Escorre bem e tritura com {12} e {13}. Coa por um pano fino.", s:20},
    {t:"Puré", x:"Tritura as cenouras assadas com {8} e {10} até ficar liso e firme. Acerta o sal."},
    {t:"Crosta de sésamo", x:"Mistura {4} e {5} num prato. Tira o atum da marinada e passa-o pelas sementes de todos os lados, a pressionar."},
    {t:"Selar", x:"Frigideira de ferro em lume muito forte, sem gordura, até fumegar. Sela o atum 30 a 45 segundos de cada lado e deixa repousar 2 minutos.", s:45},
    {t:"Fatiar", x:"Com uma faca bem afiada, corta fatias de 1 cm num só gesto."},
    {t:"Empratar", x:"Uma espiral de puré com a saca, as fatias de atum por cima, o azeite de coentros ao lado e {14} a terminar."}
  ],
  porque: [
    "Escaldar e arrefecer os coentros fixa a clorofila: sem isso o azeite fica castanho-acinzentado.",
    "Assar a cenoura concentra os açúcares e dá um caramelo que a cenoura cozida não tem."
  ],
  notas: [
    "Sem saca de pasteleiro, um saco de congelação com a ponta cortada serve.",
    "Atum rabilho fresco: pede ao peixeiro qualidade para comer quase cru."
  ]
},
{
  id: "tacos-de-carne-picada",
  titulo: "Tacos de Carne Picada",
  cozinha: "Mexicana",
  tipo: "Prato rápido",
  resumo: "Na frigideira e prontos em cerca de 20 minutos.",
  doses: 4,
  tempo: "20 min",
  origem: "Criada aqui no caderno, outubro de 2026",
  feita: false,
  ingredientes: [
    {q:600,u:"g",n:"carne picada (vaca, ou vaca e porco)"},
    {q:1,u:"un",n:"cebola média, picada",np:"cebolas médias, picadas"},
    {q:3,u:"dente",n:"alho, picados"},
    {q:1,u:"cs",n:"óleo de girassol"},
    {q:2,u:"cc",n:"colorau fumado"},
    {q:2,u:"cc",n:"cominhos em pó"},
    {q:1,u:"cc",n:"orégãos secos"},
    {q:1,u:"cc",n:"piri-piri ou malagueta em pó (a gosto)"},
    {q:1,u:"cc",n:"sal"},
    {q:2,u:"cs",n:"concentrado de tomate"},
    {q:100,u:"ml",n:"água"},
    {q:1,u:"un",n:"lima",np:"limas"},
    {q:12,u:"un",n:"tortilhas pequenas"},
    {q:null,u:"",n:"alface às tiras, tomate em cubos, queijo ralado e coentros, para servir"}
  ],
  passos: [
    {t:"Alourar a carne", x:"Aquece {3} em lume forte. Espalha {0} e não mexas durante 2 a 3 minutos, para ganhar cor. Depois desfaz até estar toda alourada.", s:180},
    {t:"Cebola e alho", x:"Lume médio. Junta {1} e {2} e deixa a cebola amolecer.", s:180},
    {t:"Especiarias", x:"Junta {4}, {5}, {6}, {7} e {8}. Mexe 1 minuto para as especiarias tostarem na gordura.", s:60},
    {t:"Molho", x:"Junta {9} e {10} e deixa reduzir até não haver líquido solto.", s:300},
    {t:"Acertar", x:"Espreme meia lima por cima, prova e acerta o sal e o picante."},
    {t:"Montar", x:"Aquece {12} a seco noutra frigideira, 30 segundos de cada lado, e guarda-as num pano. Recheia e põe por cima {13}. Serve com o resto da lima aos gomos."}
  ],
  porque: ["Não mexer a carne no início cria a crosta tostada (reação de Maillard). Mexida cedo demais, coze nos próprios sucos."]
},
{
  id: "shot-de-limao-e-azeite",
  titulo: "Shot de Limão e Azeite",
  cozinha: "Bebidas",
  tipo: "Digestivo",
  resumo: "Um trago para depois de refeições pesadas: o limão limpa o palato e o azeite deixa um final ligeiramente picante.",
  doses: 4,
  tempo: "5 min + 15 min de frio",
  origem: "Criada aqui no caderno, agosto de 2026",
  feita: false,
  ingredientes: [
    {q:60,u:"ml",n:"azeite virgem extra, frutado e com carácter"},
    {q:60,u:"ml",n:"sumo de limão fresco, coado"},
    {q:1,u:"cc",n:"raspa de limão fina"},
    {q:1,u:"cc",n:"mel (opcional)"},
    {q:1,u:"pitada",n:"flor de sal"}
  ],
  passos: [
    {t:"Sumo", x:"Espreme os limões e coa {1}, sem polpa nem grainhas."},
    {t:"Misturar", x:"Junta {0} e o sumo. Se quiseres menos ácido, {3}. Mistura com um garfo; um pouco de separação é normal."},
    {t:"Temperar", x:"Junta {2} e {4} e mexe ligeiramente."},
    {t:"Frio e servir", x:"Frigorífico 15 a 20 minutos. Serve em copos de shot e mexe cada copo antes de beber.", s:900}
  ],
  notas: [
    "A base é 1 de azeite para 1 de limão; ajusta a acidez a gosto.",
    "Uma folha de hortelã esmagada no copo fica bem.",
    "Com azeite neutro perde-se a graça toda."
  ]
},
{
  id: "sangria-verde",
  titulo: "Sangria Verde",
  cozinha: "Bebidas",
  tipo: "Cocktail",
  resumo: "Gin, triple sec, vinho branco e manjericão. Dá 2 litros.",
  doses: 8,
  tempo: "10 min + 1 h no frigorífico",
  origem: "Receita do João",
  feita: true,
  ingredientes: [
    {q:200,u:"ml",n:"gin"},
    {q:200,u:"ml",n:"triple sec"},
    {q:400,u:"ml",n:"vinho branco seco e frutado"},
    {q:100,u:"ml",n:"sumo de limão fresco"},
    {q:1,u:"l",n:"água tónica bem fria"},
    {q:20,u:"g",n:"folhas de manjericão fresco"}
  ],
  passos: [
    {t:"Manjericão", x:"Lava e seca {5}. Guarda algumas inteiras para decorar e esmaga o resto com as mãos para soltar os óleos."},
    {t:"Base", x:"Numa jarra grande junta {0}, {1}, {2} e {3}. Mexe bem."},
    {t:"Macerar", x:"Junta o manjericão esmagado e deixa no frigorífico. Quanto mais tempo, mais aroma.", s:3600},
    {t:"Servir", x:"Na hora, junta {4} e mexe devagar para não perder o gás. Copos com gelo, folha de manjericão e rodela de limão."}
  ],
  notas: [
    "Um Vinho Verde fica excelente; evita vinhos com madeira.",
    "Gelo só nos copos, nunca na jarra, para não aguar."
  ]
},
{
  id: "salada-algarvia",
  titulo: "Salada Algarvia",
  cozinha: "Portuguesa",
  tipo: "Salada",
  resumo: "Tomate maduro, pimento assado, cebola e orégãos, com muito molhinho. Inspirada na do Walter, em Armação de Pêra.",
  doses: 4,
  tempo: "30 min + 30 min de repouso",
  origem: "Reconstruída a partir da salada do Walter, Armação de Pêra",
  feita: false,
  ingredientes: [
    {q:4,u:"un",n:"tomates maduros (coração-de-boi ou rama)"},
    {q:1,u:"un",n:"pimento vermelho",np:"pimentos vermelhos"},
    {q:1,u:"un",n:"cebola roxa",np:"cebolas roxas"},
    {q:1,u:"dente",n:"alho"},
    {q:4,u:"cs",n:"azeite"},
    {q:1,u:"cs",n:"vinagre de vinho tinto"},
    {q:1,u:"cc",n:"sal"},
    {q:1,u:"cc",n:"orégãos secos"},
    {q:1,u:"pitada",n:"pimenta preta moída"}
  ],
  passos: [
    {t:"Assar o pimento", x:"Assa {1} inteiro na chama do fogão ou no grelhador, a virar, até a pele estar toda negra.", s:600},
    {t:"Suar", x:"Fecha-o quente num saco ou tapa com um pano para a pele soltar.", s:600},
    {t:"Pimento em tiras", x:"Tira a pele (uns bocadinhos tostados dão sabor), as sementes e corta em tiras finas."},
    {t:"Tomate e cebola", x:"Corta {0} em gomos para uma saladeira, com o sumo todo. Junta {2} em meias-luas finas."},
    {t:"Temperar", x:"Junta o pimento, {3} picado ou esmagado, {6}, {7} e {8}. Mistura: o sal puxa o sumo do tomate e da cebola."},
    {t:"Regar e repousar", x:"Rega com {4} e {5}, mexe e deixa repousar à temperatura ambiente.", s:1800}
  ],
  porque: ["O molhinho vem do repouso com sal: o tomate e a cebola largam água sozinhos."],
  notas: ["Ótima com peixe grelhado ou só com pão para molhar."]
},
{
  id: "quindins",
  titulo: "Quindins",
  cozinha: "Portuguesa",
  tipo: "Sobremesa",
  resumo: "Doce de gemas, açúcar e coco, cozido em banho-maria em forminhas.",
  doses: 20,
  tempo: "1 h 30 min",
  origem: "Receita escrita à mão, transcrita aqui",
  feita: false,
  ingredientes: [
    {q:500,u:"g",n:"açúcar"},
    {q:375,u:"ml",n:"água"},
    {q:30,u:"g",n:"manteiga"},
    {q:16,u:"un",n:"gemas"},
    {q:80,u:"g",n:"coco ralado"},
    {q:null,u:"",n:"manteiga e açúcar para untar as forminhas"}
  ],
  passos: [
    {t:"Calda", x:"Leva {0} e {1} ao lume até ponto de fio brando (106 a 110 °C). Sem termómetro: uma gota entre o indicador e o polegar faz um fio que parte logo.", s:600},
    {t:"Manteiga", x:"Tira do lume e junta {2}, a mexer até derreter."},
    {t:"Arrefecer", x:"Deixa a calda arrefecer por completo. Quente, coze as gemas.", s:1800},
    {t:"Misturar", x:"Junta {3} e {4} à calda fria e mistura com colher de pau, sem bater, para não fazer espuma."},
    {t:"Forminhas", x:"Unta as forminhas com {5}, enche-as e põe-nas num tabuleiro com água quente até meio."},
    {t:"Forno", x:"Forno pré-aquecido a 180 °C, em banho-maria, até estarem firmes e dourados.", s:2400},
    {t:"Desenformar", x:"Deixa arrefecer por completo antes de tirar das forminhas. Serve em caixinhas de papel."}
  ],
  notas: [
    "A receita original não dava forno: 180 °C e 40 min são referência; forminhas pequenas precisam de menos.",
    "O «copo» foi lido como 250 ml e a «xícara» de coco como 80 g."
  ]
},
{
  id: "pudim-de-leite-condensado",
  titulo: "Pudim de Leite Condensado Individual",
  cozinha: "Portuguesa",
  tipo: "Sobremesa",
  resumo: "O pudim clássico em ramequins, denso, com caramelo escuro.",
  doses: 4,
  tempo: "1 h + 3 h de frio",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:397,u:"g",n:"leite condensado"},
    {q:3,u:"un",n:"ovos"},
    {q:2,u:"un",n:"gemas"},
    {q:200,u:"ml",n:"leite gordo"},
    {q:80,u:"g",n:"açúcar (caramelo)"},
    {q:2,u:"cs",n:"água (caramelo)"}
  ],
  passos: [
    {t:"Caramelo", x:"Leva {4} e {5} ao lume, sem mexer, até ficar âmbar escuro. Deita logo nos ramequins e roda para cobrir o fundo."},
    {t:"Creme", x:"Bate levemente {1} e {2} com um garfo, sem espuma. Junta {0}, depois {3}. Passa por um coador fino."},
    {t:"Banho-maria", x:"Enche os ramequins e põe-nos num tabuleiro fundo com água quente até meio."},
    {t:"Forno", x:"160 °C, calor em cima e em baixo, sem ventoinha. Prontos quando a borda está firme e o centro ainda treme.", s:2550},
    {t:"Frio", x:"Arrefece à temperatura ambiente e leva ao frigorífico, idealmente de véspera.", s:10800},
    {t:"Desenformar", x:"Faca fina à volta, prato por cima e vira com firmeza. Fica bem com gelado de baunilha, morangos e bolacha desfeita."}
  ],
  porque: [
    "Mais gemas dão mais densidade e riqueza.",
    "A ventoinha seca a superfície depressa demais."
  ],
  notas: ["Sem ramequins, forma de queques e uns 30 min de forno."]
},
{
  id: "petit-gateau-de-leite-condensado",
  titulo: "Petit Gâteau de Leite Condensado",
  cozinha: "Portuguesa",
  tipo: "Sobremesa",
  resumo: "Por fora cozido, por dentro um centro líquido de leite condensado. Tudo depende do tempo de forno.",
  doses: 4,
  tempo: "20 min + 30 min de frio + 12 min de forno",
  origem: "Reconstruída a partir de uma sobremesa de restaurante",
  feita: false,
  ingredientes: [
    {q:200,u:"g",n:"leite condensado"},
    {q:60,u:"g",n:"manteiga sem sal"},
    {q:2,u:"un",n:"ovos"},
    {q:2,u:"un",n:"gemas"},
    {q:40,u:"g",n:"farinha de trigo"},
    {q:15,u:"g",n:"manteiga (para untar)"},
    {q:10,u:"g",n:"farinha (para polvilhar)"}
  ],
  passos: [
    {t:"Formas", x:"Unta bem os ramequins com {5}, polvilha com {6} e sacode o excesso. Leva ao frigorífico."},
    {t:"Base", x:"Derrete {1} e junta {0} até ficar liso. Deixa amornar, senão coze os ovos."},
    {t:"Ovos", x:"Bate {2} e {3} e junta à mistura morna, sem meter ar."},
    {t:"Farinha", x:"Peneira {4} por cima e envolve devagar. É pouca de propósito: faz a casca e deixa o centro líquido."},
    {t:"Frio", x:"Enche os ramequins até 3 partes em 4 e leva ao frigorífico. A massa fria coze de fora para dentro.", s:1800},
    {t:"Forno", x:"200 °C, sem ventoinha. Borda firme, centro ainda a mexer. Não abras o forno antes dos 10 minutos.", s:660},
    {t:"Desenformar", x:"Espera 1 minuto, passa uma faca à volta, prato por cima e vira. Serve logo."}
  ],
  notas: [
    "Na primeira vez faz um de teste aos 10 min e ajusta 1 a 2 min ao teu forno.",
    "Os ramequins cheios aguentam até 24 h no frigorífico: vão diretos para o forno."
  ]
},
{
  id: "pesto-vermelho",
  titulo: "Pesto Vermelho (Pesto Rosso)",
  cozinha: "Italiana",
  tipo: "Molho",
  resumo: "Pesto de tomate seco para massas, bruschettas ou queijos.",
  doses: 4,
  tempo: "15 min",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:100,u:"g",n:"tomate seco em óleo, escorrido"},
    {q:30,u:"g",n:"pinhões"},
    {q:40,u:"g",n:"parmesão ralado"},
    {q:1,u:"dente",n:"alho"},
    {q:6,u:"cs",n:"azeite virgem extra"},
    {q:10,u:"folha",n:"manjericão fresco"},
    {q:1,u:"pitada",n:"sal fino"},
    {q:1,u:"pitada",n:"piri-piri ou pimenta-de-caiena"},
    {q:1,u:"cc",n:"vinagre balsâmico"}
  ],
  passos: [
    {t:"Torrar os pinhões", x:"Torra {1} numa frigideira sem gordura em lume médio, a mexer sempre, até dourarem. Deixa arrefecer.", s:150},
    {t:"Triturar", x:"No copo da varinha: {0}, os pinhões, {2}, {3} e {5}. Pulsos curtos até ficar grosseiro."},
    {t:"Azeite", x:"Em velocidade baixa, junta {4} em fio até ficar cremoso mas com alguma textura."},
    {t:"Temperar", x:"Junta {6}, {7} e {8}. Prova e acerta."},
    {t:"Guardar", x:"Frasco de vidro bem fechado, com um fio de azeite por cima, no frigorífico."}
  ],
  notas: [
    "Aguenta 1 semana no frigorífico, sempre coberto de azeite.",
    "Com massa, dilui com um pouco da água da cozedura.",
    "Misturado com queijo fresco dá uma pasta de barrar."
  ]
},
{
  id: "penne-de-salmao",
  titulo: "Penne de Salmão com Natas e Alcaparras",
  cozinha: "Italiana",
  tipo: "Massa",
  resumo: "Cremosa, rápida e pronta em menos de 30 minutos.",
  doses: 2,
  tempo: "25 min",
  origem: "Criada aqui no caderno, abril de 2026",
  feita: false,
  ingredientes: [
    {q:200,u:"g",n:"penne"},
    {q:300,u:"g",n:"lombos de salmão fresco"},
    {q:200,u:"ml",n:"natas para culinária"},
    {q:2,u:"dente",n:"alho"},
    {q:2,u:"cs",n:"alcaparras escorridas"},
    {q:2,u:"cs",n:"sumo de limão"},
    {q:2,u:"cs",n:"azeite"},
    {q:10,u:"g",n:"endro fresco"},
    {q:null,u:"",n:"sal e pimenta preta"},
    {q:30,u:"g",n:"parmesão ralado (opcional)"}
  ],
  passos: [
    {t:"Massa", x:"Coze {0} em água abundante com sal até al dente. Guarda uma chávena da água antes de escorrer.", s:600},
    {t:"Salmão", x:"Tempera {1} com sal, pimenta e {5}. Cozinha em {6} 3 a 4 min de cada lado. Retira e desfaz em lascas grandes.", s:210},
    {t:"Molho", x:"Na mesma frigideira, {3} picado 1 minuto. Junta {2} e {4} e deixa reduzir em lume médio."},
    {t:"Juntar", x:"Junta a massa ao molho; se estiver espesso, um pouco da água da cozedura. Envolve o salmão com cuidado."},
    {t:"Servir", x:"Desliga o lume, junta {7} picado e acerta o tempero. {9} por cima, se quiseres."}
  ],
  notas: [
    "Azeitonas pretas em vez de alcaparras também resultam.",
    "Um fio de vodka antes das natas intensifica o sabor.",
    "Com salmão fumado: salta o passo do peixe e junta-o no fim."
  ]
},
{
  id: "pate-de-sardinha",
  titulo: "Paté de Sardinha",
  cozinha: "Portuguesa",
  tipo: "Petisco",
  resumo: "Mais intenso e bem português. Em pão de mistura ou torradas.",
  doses: 4,
  tempo: "15 min + 30 min de frio",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:120,u:"g",n:"sardinhas em azeite, escorridas e sem espinhas"},
    {q:2,u:"un",n:"ovos cozidos"},
    {q:40,u:"g",n:"manteiga amolecida"},
    {q:50,u:"g",n:"queijo creme (tipo Philadelphia)"},
    {q:1,u:"cs",n:"sumo de limão"},
    {q:1,u:"cc",n:"mostarda Dijon"},
    {q:1,u:"cc",n:"piri-piri ou tabasco (opcional)"},
    {q:null,u:"",n:"sal e pimenta preta"},
    {q:1,u:"cs",n:"salsa picada (opcional)"}
  ],
  passos: [
    {t:"Preparar", x:"Escorre {0} e tira as espinhas que restem. Descasca {1} e parte-os grosseiramente."},
    {t:"Triturar", x:"Tritura as sardinhas, os ovos, {2}, {3}, {4} e {5} até ficar cremoso."},
    {t:"Temperar", x:"Prova e acerta sal, pimenta e limão; {6} se quiseres picante. A sardinha já tem sal."},
    {t:"Finalizar", x:"Envolve {8} sem triturar e leva ao frigorífico.", s:1800}
  ],
  porque: ["A manteiga, em vez de maionese, dá uma textura mais rica e um sabor mais clássico."]
},
{
  id: "pate-de-atum",
  titulo: "Paté de Atum",
  cozinha: "Portuguesa",
  tipo: "Petisco",
  resumo: "Cremoso, rápido e perfeito para torradas ou tostas.",
  doses: 4,
  tempo: "15 min + 30 min de frio",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:180,u:"g",n:"atum em azeite, escorrido"},
    {q:2,u:"un",n:"ovos cozidos"},
    {q:3,u:"cs",n:"maionese"},
    {q:50,u:"g",n:"queijo creme (tipo Philadelphia)"},
    {q:1,u:"cs",n:"sumo de limão"},
    {q:1,u:"cc",n:"mostarda Dijon"},
    {q:null,u:"",n:"sal e pimenta preta"},
    {q:1,u:"cs",n:"cebolinho picado (opcional)"}
  ],
  passos: [
    {t:"Preparar", x:"Escorre bem {0}. Descasca {1} e parte-os grosseiramente."},
    {t:"Triturar", x:"Tritura o atum, os ovos, {2}, {3}, {4} e {5} até ficar homogéneo."},
    {t:"Temperar", x:"Acerta sal, pimenta e limão. Muito espesso? Mais uma colher de maionese ou umas gotas de azeite."},
    {t:"Finalizar", x:"Envolve {7} sem triturar e leva ao frigorífico.", s:1800}
  ],
  notas: ["Atum em azeite tem mais sabor do que em água. Para mais leve, troca parte da maionese por iogurte grego."]
},
{
  id: "panquecas-de-cebola",
  titulo: "Panquecas de Cebola",
  cozinha: "Portuguesa",
  tipo: "Entrada",
  resumo: "Rodelas finas de cebola numa massa leve, fritas até ficarem estaladiças, com molho de iogurte e cebolinho.",
  doses: 4,
  tempo: "45 min",
  origem: "Ideia vista nas redes, organizada aqui",
  feita: false,
  ingredientes: [
    {q:3,u:"un",n:"cebolas grandes"},
    {q:120,u:"g",n:"farinha de trigo"},
    {q:1,u:"un",n:"ovo",np:"ovos"},
    {q:1,u:"cc",n:"sal"},
    {q:1,u:"cc",n:"fermento em pó"},
    {q:1,u:"pitada",n:"pimenta preta moída"},
    {q:4,u:"cs",n:"óleo para fritar"},
    {q:100,u:"g",n:"iogurte grego (molho)"},
    {q:1,u:"cs",n:"cebolinho picado (molho)"}
  ],
  passos: [
    {t:"Demolhar", x:"Corta {0} em rodelas de 3 a 4 mm e deixa em água fria. Tira a pungência.", s:900},
    {t:"Escorrer e salgar", x:"Seca bem, polvilha com metade do sal e deixa repousar. Volta a secar.", s:600},
    {t:"Massa", x:"Mistura {1}, {4}, o resto do sal e {5}. Junta {2} até ficar uma pasta espessa e envolve as rodelas."},
    {t:"Fritar", x:"Aquece {6} em lume médio-alto. Põe montinhos de 2 ou 3 rodelas, achata e frita 3 a 4 min de cada lado.", s:210},
    {t:"Servir", x:"Escorre em papel. Mistura {7} com {8} para o molho e serve logo, ainda estaladiças."}
  ],
  notas: ["Uma pitada de colorau fumado ou parmesão ralado na massa ficam bem."]
},
{
  id: "pannacotta-de-pessego",
  titulo: "Pannacotta de Pêssego com Puré de Pêssego",
  cozinha: "Italiana",
  tipo: "Sobremesa",
  resumo: "Pannacotta leve perfumada com pêssego e coberta com puré fresco da mesma fruta. Faz-se de véspera.",
  doses: 6,
  tempo: "30 min + 4 h de frio",
  origem: "Criada aqui no caderno, julho de 2026",
  feita: false,
  ingredientes: [
    {q:400,u:"ml",n:"natas para bater (35% gordura)",grupo:"Pannacotta"},
    {q:100,u:"ml",n:"leite gordo",grupo:"Pannacotta"},
    {q:60,u:"g",n:"açúcar",grupo:"Pannacotta"},
    {q:5,u:"folha",n:"gelatina",grupo:"Pannacotta"},
    {q:3,u:"un",n:"pêssegos maduros, descascados, em pedaços",grupo:"Pannacotta"},
    {q:1,u:"cc",n:"extrato de baunilha",grupo:"Pannacotta"},
    {q:3,u:"un",n:"pêssegos maduros, descascados",grupo:"Puré"},
    {q:30,u:"g",n:"açúcar",grupo:"Puré"},
    {q:1,u:"cc",n:"sumo de limão",grupo:"Puré"}
  ],
  passos: [
    {t:"Gelatina", x:"Demolha {3} em água fria até ficarem moles.", s:300},
    {t:"Pêssego", x:"Num tacho pequeno, {4}, {2} e {1} em lume médio até o pêssego amolecer.", s:480},
    {t:"Triturar", x:"Tritura até ficar liso. Para uma pannacotta bem lisa, passa por um passador fino."},
    {t:"Natas", x:"Junta {0} e aquece em lume brando, sem ferver."},
    {t:"Gelatina", x:"Escorre a gelatina e junta-a à mistura quente, a mexer até dissolver. Junta {5}."},
    {t:"Frio", x:"Divide por 6 taças, deixa arrefecer e leva ao frigorífico, idealmente de véspera.", s:14400},
    {t:"Puré", x:"Tritura {6} com {7} e {8}. Prova e acerta o açúcar."},
    {t:"Servir", x:"Cobre cada pannacotta com o puré na hora de servir."}
  ],
  notas: [
    "Pêssegos pouco doces? Usa pêssego em calda, escorrido.",
    "Para desenformar, unta as formas com um pouco de óleo neutro."
  ]
},
{
  id: "pannacotta-classica",
  titulo: "Pannacotta Clássica",
  cozinha: "Italiana",
  tipo: "Sobremesa",
  resumo: "Só natas, açúcar, baunilha e gelatina. Simples, e a textura sedosa é tudo.",
  doses: 6,
  tempo: "15 min + 4 h de frio",
  origem: "Criada aqui no caderno, julho de 2026",
  feita: false,
  ingredientes: [
    {q:500,u:"ml",n:"natas para bater (35% gordura)"},
    {q:70,u:"g",n:"açúcar"},
    {q:5,u:"folha",n:"gelatina"},
    {q:1,u:"vagem",n:"baunilha (ou 2 colheres de chá de extrato)"}
  ],
  passos: [
    {t:"Gelatina", x:"Demolha {2} em água fria até ficarem moles.", s:300},
    {t:"Baunilha", x:"Abre {3} ao comprido e raspa as sementes. Junta tudo a {0} e {1} num tacho."},
    {t:"Aquecer", x:"Lume médio-baixo, a mexer, até o açúcar dissolver e sair vapor. Não deixes ferver.", s:300},
    {t:"Gelatina", x:"Fora do lume, tira a vagem e junta a gelatina escorrida, a mexer até dissolver."},
    {t:"Distribuir", x:"Divide por 6 taças e deixa arrefecer à temperatura ambiente.", s:1200},
    {t:"Frio", x:"Frigorífico até estar firme mas a tremer, idealmente de véspera.", s:14400}
  ],
  porque: ["A tradicional é só com natas, sem leite: é isso que lhe dá riqueza e a textura sedosa."],
  notas: ["Para desenformar, passa uma faca fina à volta e vira sobre o prato."]
},
{
  id: "omelete-no-microondas",
  titulo: "Omelete no Micro-ondas (José Andrés)",
  cozinha: "Espanhola",
  tipo: "Prato rápido",
  resumo: "Dois ingredientes e um minuto de micro-ondas. A maionese deixa o ovo fofo, como num restaurante.",
  doses: 1,
  tempo: "3 min",
  origem: "Chef José Andrés",
  feita: true,
  ingredientes: [
    {q:1,u:"un",n:"ovo",np:"ovos"},
    {q:1,u:"cs",n:"maionese"},
    {q:5,u:"g",n:"manteiga (para untar)"}
  ],
  passos: [
    {t:"Untar", x:"Unta uma tigela pequena de micro-ondas com {2}."},
    {t:"Misturar", x:"Parte {0} para a tigela, junta {1} e mistura até ficar sem grumos."},
    {t:"Raspar as bordas", x:"Puxa para dentro o que ficou nas bordas, para não queimar."},
    {t:"Micro-ondas", x:"Potência máxima. Num micro-ondas potente, espreita aos 40 segundos: quer-se fofa, não borrachenta.", s:60}
  ],
  notas: ["Tira quando a superfície estiver firme mas ainda húmida por dentro. Cebolinho ou queijo ralado no fim."]
},
{
  id: "mojito-classico",
  titulo: "Mojito Clássico",
  cozinha: "Bebidas",
  tipo: "Cocktail",
  resumo: "Refrescante, com o corpo extra do Havana Club Especial envelhecido.",
  doses: 1,
  tempo: "5 min",
  origem: "Criada aqui no caderno, setembro de 2026",
  feita: false,
  ingredientes: [
    {q:10,u:"folha",n:"hortelã"},
    {q:2,u:"cc",n:"açúcar branco"},
    {q:1,u:"un",n:"lima, em quatro gomos",np:"limas, em quatro gomos"},
    {q:50,u:"ml",n:"rum Havana Club Especial"},
    {q:100,u:"ml",n:"água com gás"},
    {q:150,u:"g",n:"gelo picado"}
  ],
  passos: [
    {t:"Macerar", x:"No fundo do copo, {0}, {1} e {2}. Esmaga com suavidade, só para soltar os óleos e o sumo. Esmagada a mais, a hortelã amarga."},
    {t:"Rum", x:"Junta {3} e mexe para dissolver o açúcar."},
    {t:"Gelo e gás", x:"Enche com {5} e completa com {4}. Mexe uma vez de baixo para cima."},
    {t:"Servir", x:"Um raminho de hortelã e palhinha. Serve logo."}
  ],
  notas: ["Com rum envelhecido fica mais encorpado e com um toque de baunilha. Para o clássico cubano, 40 ml de rum."]
},
{
  id: "marinada-limao-mel-ervas",
  titulo: "Marinada de Limão, Mel e Ervas",
  cozinha: "Portuguesa",
  tipo: "Marinada",
  resumo: "Azeite, limão, alho, tomilho e mel, para frango grelhado ou assado com boa caramelização.",
  doses: 4,
  tempo: "10 min + 2 h a marinar",
  origem: "Criada aqui no caderno, setembro de 2026",
  feita: false,
  ingredientes: [
    {q:60,u:"ml",n:"azeite"},
    {q:45,u:"ml",n:"sumo de limão"},
    {q:2,u:"cs",n:"mel"},
    {q:3,u:"dente",n:"alho, picados"},
    {q:1,u:"cs",n:"tomilho fresco picado"},
    {q:1,u:"cc",n:"raspa de limão"},
    {q:1,u:"cc",n:"sal"},
    {q:1,u:"pitada",n:"pimenta preta moída"}
  ],
  passos: [
    {t:"Líquidos", x:"Mistura {0}, {1} e {2} até o mel dissolver. Mel muito espesso? Uns segundos no micro-ondas."},
    {t:"Aromáticos", x:"Junta {3}, {4} e {5}. Tempera com {6} e {7}."},
    {t:"Marinar", x:"Frango num saco ou caixa, bem coberto pela marinada, no frigorífico.", s:7200},
    {t:"Cozinhar", x:"Grelha, assa ou salteia. Guarda um pouco de marinada limpa (que não tocou no frango cru) para pincelar só nos últimos 8 a 10 minutos."}
  ],
  porque: ["O mel carameliza depressa e queima antes de o frango estar cozinhado por dentro: por isso entra só no fim."],
  notas: ["Peito: 2 a 4 h. Coxas e pernas aguentam até 12 h, porque resistem melhor à acidez do limão."]
},
{
  id: "manteiga-de-alho-e-ervas",
  titulo: "Manteiga de Alho e Ervas",
  cozinha: "Francesa",
  tipo: "Petisco",
  resumo: "A clássica manteiga composta: vai bem com tudo, de tostinhas a um bife.",
  doses: 8,
  tempo: "10 min + 1 h de frio",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:125,u:"g",n:"manteiga sem sal, à temperatura ambiente"},
    {q:3,u:"dente",n:"alho"},
    {q:2,u:"cs",n:"salsa picada"},
    {q:1,u:"cs",n:"cebolinho picado"},
    {q:1,u:"cc",n:"sumo de limão"},
    {q:1,u:"pitada",n:"sal"},
    {q:1,u:"pitada",n:"pimenta preta moída"}
  ],
  passos: [
    {t:"Alho", x:"Esmaga {1} com uma pitada de sal grosso e pica muito fino. Para mais suave, salteia 1 a 2 min em azeite."},
    {t:"Misturar", x:"Amassa {0} com um garfo, com o alho, {2}, {3}, {4}, {5} e {6}, até ficar homogéneo."},
    {t:"Enrolar", x:"Enrola em película aderente em forma de rolo, torce as pontas e leva ao frigorífico.", s:3600}
  ],
  notas: ["1 semana no frigorífico, 2 meses no congelador. O cebolinho do jardim serve na perfeição."]
},
{
  id: "manteiga-de-anchova-e-limao",
  titulo: "Manteiga de Anchova e Limão",
  cozinha: "Francesa",
  tipo: "Petisco",
  resumo: "Umami intenso, a mais elegante das manteigas compostas.",
  doses: 8,
  tempo: "10 min + 1 h de frio",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:125,u:"g",n:"manteiga sem sal, à temperatura ambiente"},
    {q:4,u:"un",n:"filetes de anchova em azeite, escorridos"},
    {q:1,u:"cc",n:"raspa de limão"},
    {q:1,u:"cc",n:"sumo de limão"},
    {q:1,u:"dente",n:"alho"},
    {q:1,u:"pitada",n:"pimenta preta moída"},
    {q:1,u:"cs",n:"salsa picada (opcional)"}
  ],
  passos: [
    {t:"Anchova e alho", x:"Pica muito fino {1} e {4}. A anchova já traz sal suficiente."},
    {t:"Misturar", x:"Amassa {0} com a anchova, o alho, {2}, {3}, {5} e {6}."},
    {t:"Enrolar", x:"Enrola em película em forma de rolo e leva ao frigorífico.", s:3600}
  ],
  notas: ["Em tostinhas com tomate-cereja por cima. Sabe a umami, não a peixe."]
},
{
  id: "manteiga-de-queijo-azul-e-nozes",
  titulo: "Manteiga de Queijo Azul e Nozes",
  cozinha: "Francesa",
  tipo: "Petisco",
  resumo: "Intensa e cremosa, para os mais aventureiros.",
  doses: 8,
  tempo: "10 min + 1 h de frio",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:100,u:"g",n:"manteiga sem sal, à temperatura ambiente"},
    {q:50,u:"g",n:"queijo azul (gorgonzola ou roquefort)"},
    {q:30,u:"g",n:"nozes"},
    {q:1,u:"cc",n:"mel"},
    {q:1,u:"pitada",n:"pimenta preta moída"},
    {q:1,u:"cc",n:"folhas de tomilho fresco"}
  ],
  passos: [
    {t:"Tostar as nozes", x:"Tosta {2} numa frigideira seca em lume médio, a mexer sempre. Deixa arrefecer e pica grosseiramente.", s:210},
    {t:"Misturar", x:"Amassa {0} com {1} esfarelado, {3}, {4} e {5}. Pode ficar com pedacinhos de queijo. As nozes entram no fim."},
    {t:"Enrolar", x:"Enrola em película e leva ao frigorífico.", s:3600}
  ],
  notas: ["Ainda melhor com uma fatia de pera ou figo por cima da tostinha."]
},
{
  id: "lulas-recheadas-a-transmontana",
  titulo: "Lulas Recheadas à Transmontana",
  cozinha: "Portuguesa",
  tipo: "Prato principal",
  resumo: "Recheio de linguiça e chouriço, cozinhadas num molho de tomate com vinho tinto.",
  doses: 4,
  tempo: "1 h 15 min",
  origem: "Criada aqui no caderno, maio de 2026",
  feita: false,
  ingredientes: [
    {q:8,u:"un",n:"lulas médias limpas, com o corpo inteiro"},
    {q:150,u:"g",n:"linguiça em cubinhos"},
    {q:80,u:"g",n:"chouriço de carne em cubinhos"},
    {q:2,u:"un",n:"cebolas picadas finas"},
    {q:4,u:"dente",n:"alho, picados"},
    {q:400,u:"g",n:"tomate pelado em lata"},
    {q:150,u:"ml",n:"vinho tinto encorpado"},
    {q:1,u:"un",n:"ovo batido",np:"ovos batidos"},
    {q:4,u:"cs",n:"pão ralado (seco, usado tal como vem)"},
    {q:3,u:"cs",n:"salsa picada"},
    {q:5,u:"cs",n:"azeite"},
    {q:1,u:"folha",n:"louro"},
    {q:1,u:"cc",n:"colorau"},
    {q:null,u:"",n:"sal e pimenta preta"}
  ],
  passos: [
    {t:"Lulas", x:"Separa os tentáculos de {0} e pica-os. Guarda os corpos inteiros. Seca tudo bem."},
    {t:"Recheio", x:"Em 2 colheres de azeite, metade da cebola 3 min, metade do alho 1 min. Junta {1} e {2} até dourarem e largarem gordura, depois os tentáculos 2 a 3 min."},
    {t:"Ligar o recheio", x:"Fora do lume, junta {8}, a salsa e {12}. Deixa arrefecer 5 minutos, junta {7} e tempera.", s:300},
    {t:"Rechear", x:"Enche cada lula até 3 partes em 4 (o ovo incha a cozinhar) e fecha com um palito."},
    {t:"Molho", x:"No tacho, o resto do azeite e da cebola até dourar bem. Junta o resto do alho e {11}. Junta {6} e reduz a metade. Junta {5} esmagado e apura.", s:600},
    {t:"Cozinhar as lulas", x:"Lulas no molho, tampa e lume muito brando, a borbulhar devagar, nunca a ferver. Vira a meio.", s:1650},
    {t:"Servir", x:"Tira o louro e os palitos. Salsa por cima, arroz de tomate ou batata cozida, e pão para o molho."}
  ],
  porque: ["O ovo liga o recheio e dá-lhe uma textura compacta.", "O colorau é o que dá o toque transmontano."],
  notas: ["Um tinto de Trás-os-Montes ou do Douro barato é perfeito para o molho.", "Lulas, não potas: as potas são mais densas e fibrosas."]
},
{
  id: "linguine-de-salmao-com-limao",
  titulo: "Linguine de Salmão com Limão e Alcaparras",
  cozinha: "Italiana",
  tipo: "Massa",
  resumo: "Leve e cítrico, sem natas, pronto em 20 minutos.",
  doses: 2,
  tempo: "20 min",
  origem: "Criada aqui no caderno, abril de 2026",
  feita: false,
  ingredientes: [
    {q:200,u:"g",n:"linguine"},
    {q:300,u:"g",n:"lombos de salmão fresco"},
    {q:2,u:"un",n:"limões (sumo e raspa)"},
    {q:3,u:"dente",n:"alho, às lâminas"},
    {q:2,u:"cs",n:"alcaparras escorridas"},
    {q:4,u:"cs",n:"azeite virgem extra"},
    {q:15,u:"g",n:"salsa picada"},
    {q:1,u:"pitada",n:"malagueta seca (opcional)"},
    {q:null,u:"",n:"sal e pimenta preta"},
    {q:30,u:"g",n:"parmesão ralado (opcional)"}
  ],
  passos: [
    {t:"Massa", x:"Coze {0} em água com sal até al dente. Guarda uma chávena da água, sem falta.", s:600},
    {t:"Salmão", x:"Tempera {1} com sal, pimenta e um fio de azeite. 3 a 4 min de cada lado numa antiaderente quente. Desfaz em lascas.", s:210},
    {t:"Alho e alcaparras", x:"Na mesma frigideira, lume médio-baixo: {5} e {3} até dourar levemente. Junta {4} e {7} e frita 1 minuto."},
    {t:"Molho de limão", x:"Junta o sumo e a raspa de {2} e meia chávena da água da massa. Deixa borbulhar para emulsionar.", s:90},
    {t:"Juntar", x:"Junta a massa e envolve com pinças, com mais água se for preciso. Junta o salmão."},
    {t:"Servir", x:"Desliga, junta {6}, acerta sal e pimenta e serve logo. {9} se quiseres."}
  ],
  porque: ["O amido da água da massa é que faz um molho sedoso sem natas."],
  notas: ["Com salmão fumado: salta o passo do peixe e junta-o no fim só para aquecer."]
},
{
  id: "limao-cheong",
  titulo: "Limão Cheong",
  cozinha: "Coreana",
  tipo: "Xarope",
  resumo: "A versão com limão e lima do yuja cheong, para fazer limonada coreana com água com gás.",
  doses: 4,
  tempo: "20 min + 1 dia + 3 dias no frigorífico",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:4,u:"un",n:"limões médios"},
    {q:2,u:"un",n:"limas"},
    {q:300,u:"g",n:"açúcar branco"},
    {q:2,u:"cs",n:"mel (opcional)"}
  ],
  passos: [
    {t:"Lavar a casca", x:"Esfrega {0} e {1} com esponja e detergente ou sal grosso. A casca vai para o xarope."},
    {t:"Cortar", x:"Rodelas de 3 a 4 mm, com casca. Tira todos os caroços: amargam."},
    {t:"Camadas", x:"Num frasco esterilizado, alterna rodelas com {2} (e {3}). Começa e acaba com açúcar."},
    {t:"Primeiro dia", x:"Frasco fechado à temperatura ambiente.", s:86400},
    {t:"Frigorífico", x:"Mexe bem e passa para o frigorífico. Pronto em 3 a 4 dias, muito melhor ao fim de uma semana."},
    {t:"Limonada", x:"Por copo: 2 a 3 colheres de sopa de xarope (com rodelas, se quiseres), gelo e água com gás."}
  ],
  notas: [
    "Aguenta 2 a 3 meses no frigorífico.",
    "Uma colher de chá de raspa de toranja aproxima-o do yuzu.",
    "No inverno, com água quente, como chá."
  ]
},
{
  id: "licor-de-cereja",
  titulo: "Licor de Cereja Caseiro",
  cozinha: "Bebidas",
  tipo: "Licor",
  resumo: "Mais doce e suave do que a ginjinha. Feito com cerejas de Armamar.",
  doses: 1,
  tempo: "2 meses",
  origem: "Criada aqui no caderno, maio de 2026",
  feita: true,
  ingredientes: [
    {q:500,u:"g",n:"cerejas doces, lavadas e sem pé"},
    {q:700,u:"ml",n:"aguardente vínica (ou bagaço)"},
    {q:220,u:"g",n:"açúcar"},
    {q:1,u:"pau",n:"canela"},
    {q:3,u:"un",n:"cravinhos"},
    {q:1,u:"un",n:"casca de limão (só a parte amarela)",np:"cascas de limão (só a parte amarela)"}
  ],
  passos: [
    {t:"Cerejas", x:"Lava {0}. O caroço fica: dá profundidade. Frasco hermético de pelo menos 1,5 l."},
    {t:"Juntar", x:"Cerejas, {3}, {4} e {5} no frasco, e {1} por cima. O açúcar ainda não."},
    {t:"Maceração", x:"Sítio escuro e fresco durante 30 dias, a agitar uma vez por semana."},
    {t:"Açúcar", x:"Junta {2}, mexe e espera mais 15 dias, a agitar de vez em quando."},
    {t:"Coar e engarrafar", x:"Coa por um passador fino ou gaze, prova e acerta o doce. Mais 15 dias na garrafa antes de beber."}
  ],
  notas: [
    "Menos açúcar do que a ginjinha (220 g em vez de 300 g) porque a cereja já é doce.",
    "Na primeira vez ajustaste o doce depois de provar: prova sempre antes de engarrafar."
  ]
},
{
  id: "ginjinha",
  titulo: "Ginjinha",
  cozinha: "Bebidas",
  tipo: "Licor",
  resumo: "O licor tradicional de ginja. Simples e paciente.",
  doses: 1,
  tempo: "2 meses (melhor 3 a 4)",
  origem: "Criada aqui no caderno, maio de 2026",
  feita: false,
  ingredientes: [
    {q:500,u:"g",n:"ginjas, lavadas e sem pé"},
    {q:700,u:"ml",n:"aguardente vínica (ou bagaço)"},
    {q:300,u:"g",n:"açúcar"},
    {q:1,u:"pau",n:"canela"},
    {q:3,u:"un",n:"cravinhos"}
  ],
  passos: [
    {t:"Ginjas", x:"Lava {0} e deixa o caroço: dá amargor e profundidade. Frasco hermético de pelo menos 1,5 l."},
    {t:"Juntar", x:"Ginjas, {3} e {4} no frasco, e {1} por cima. Sem açúcar."},
    {t:"Maceração", x:"Sítio escuro e fresco, pelo menos 30 dias, a agitar uma vez por semana."},
    {t:"Açúcar", x:"Junta {2}, mexe e espera mais 15 dias, a agitar."},
    {t:"Coar e engarrafar", x:"Coa, prova e acerta o doce (mais açúcar dissolvido num pouco de aguardente). Mais 15 dias na garrafa."}
  ],
  notas: [
    "Vínica é mais suave; bagaço mais rústico. Álcool puro perde carácter.",
    "300 g de açúcar dá meio-seco; até 400 g para mais doce.",
    "Uma ou duas ginjas no fundo do copo, como em Óbidos."
  ]
},
{
  id: "japchae",
  titulo: "Japchae",
  cozinha: "Coreana",
  tipo: "Prato principal",
  resumo: "Massa de batata-doce salteada com carne, legumes e cogumelos, em molho de soja e sésamo.",
  doses: 4,
  tempo: "40 min",
  origem: "Publicação do Facebook, organizada aqui",
  feita: false,
  ingredientes: [
    {q:300,u:"g",n:"massa de batata-doce seca (glass noodles)"},
    {q:300,u:"g",n:"porco, vaca ou frango em tiras"},
    {q:3,u:"un",n:"ovos (opcional)"},
    {q:170,u:"g",n:"espinafres baby"},
    {q:1,u:"un",n:"cenoura média ripada",np:"cenouras médias ripadas"},
    {q:1,u:"un",n:"cebola média laminada",np:"cebolas médias laminadas"},
    {q:100,u:"g",n:"cogumelos shiitake laminados"},
    {q:2,u:"cs",n:"óleo vegetal"},
    {q:null,u:"",n:"sal fino"},
    {q:2,u:"un",n:"cebolinhas picadas (opcional)"},
    {q:1,u:"cs",n:"sésamo branco torrado (opcional)"},
    {q:6,u:"cs",n:"molho de soja",grupo:"Molho"},
    {q:3,u:"cs",n:"óleo de sésamo",grupo:"Molho"},
    {q:3,u:"cs",n:"açúcar",grupo:"Molho"},
    {q:3,u:"dente",n:"alho, picados",grupo:"Molho"},
    {q:1,u:"pitada",n:"pimenta preta",grupo:"Molho"}
  ],
  passos: [
    {t:"Molho", x:"Mistura {11}, {12}, {13}, {14} e {15}. Reserva."},
    {t:"Massa", x:"Coze {0} conforme a embalagem, escorre, passa por água fria e corta com uma tesoura.", s:420},
    {t:"Omelete", x:"Bate {2} com uma pitada de sal e faz uma omelete fina. Arrefece e corta em tiras.", s:180},
    {t:"Carne", x:"Wok em lume alto com um fio de óleo: {1} até cozinhar. Sal e reserva.", s:300},
    {t:"Legumes", x:"Na mesma wok, {5} até ficar translúcida, depois {4} e {6} 2 a 3 min, e {3} só até murchar. Sal e reserva."},
    {t:"Juntar", x:"Tudo na wok com o molho, em lume médio, até a massa o absorver.", s:150},
    {t:"Finalizar", x:"Acerta soja, sésamo ou pimenta. {9} e {10} por cima."}
  ],
  notas: ["Legumes à vontade (pimento, brócolos). Camarão ou tofu em vez de carne. Come-se morno ou à temperatura ambiente."]
},
{
  id: "japchae-legumes-separados",
  titulo: "Japchae com Legumes Separados",
  cozinha: "Coreana",
  tipo: "Prato principal",
  resumo: "Cada legume salteado à parte para ficar no ponto, espinafres escaldados e fruta ralada no molho em vez de tanto açúcar.",
  doses: 4,
  tempo: "50 min",
  origem: "Variação do japchae, organizada aqui",
  feita: false,
  ingredientes: [
    {q:300,u:"g",n:"massa de batata-doce seca (glass noodles)"},
    {q:300,u:"g",n:"porco, vaca ou frango em tiras"},
    {q:3,u:"un",n:"ovos (opcional)"},
    {q:170,u:"g",n:"espinafres baby"},
    {q:1,u:"un",n:"cenoura média em palitos finos",np:"cenouras médias em palitos finos"},
    {q:1,u:"un",n:"cebola média laminada",np:"cebolas médias laminadas"},
    {q:100,u:"g",n:"cogumelos shiitake laminados"},
    {q:3,u:"cs",n:"óleo vegetal"},
    {q:null,u:"",n:"sal fino"},
    {q:2,u:"un",n:"cebolinhas picadas (opcional)"},
    {q:1,u:"cs",n:"sésamo branco torrado (opcional)"},
    {q:1,u:"cs",n:"óleo de sésamo para a massa"},
    {q:5,u:"cs",n:"molho de soja",grupo:"Molho"},
    {q:3,u:"cs",n:"óleo de sésamo",grupo:"Molho"},
    {q:1,u:"cs",n:"açúcar",grupo:"Molho"},
    {q:3,u:"dente",n:"alho, picados",grupo:"Molho"},
    {q:1,u:"pitada",n:"pimenta preta",grupo:"Molho"},
    {q:1,u:"un",n:"pera ou maçã ralada",grupo:"Molho",np:"peras ou maçãs raladas"}
  ],
  passos: [
    {t:"Molho", x:"Mistura {12}, {13}, {14}, {15}, {16} e {17}. A fruta dá um doce mais natural."},
    {t:"Massa", x:"Coze {0}, escorre e, ainda quente, tempera com {11} e uma colher de sopa do molho. Corta com tesoura.", s:420},
    {t:"Omelete", x:"Omelete fina com {2} e uma pitada de sal; corta em tiras.", s:180},
    {t:"Espinafres", x:"Escalda {3} 10 segundos, passa por água fria e espreme bem.", s:10},
    {t:"Cenoura", x:"Wok com um fio de óleo: {4} sozinha, com sal, até ficar tenra mas estaladiça.", s:120},
    {t:"Cebola", x:"{5} sozinha, com sal, até ficar translúcida."},
    {t:"Cogumelos", x:"{6} sozinhos, com sal, até dourarem."},
    {t:"Carne", x:"{1} até cozinhar, com sal.", s:300},
    {t:"Juntar", x:"Tudo na wok com o resto do molho, em lume médio, só para juntar os sabores.", s:120},
    {t:"Finalizar", x:"Acerta e põe {9} e {10} por cima."}
  ],
  porque: ["Cada legume tem o seu tempo: separados, nenhum fica cru nem mole."],
  notas: ["Na indução não há wok hei verdadeiro, mas no japchae isso pesa pouco."]
},
{
  id: "guacamole",
  titulo: "Guacamole Tradicional",
  cozinha: "Mexicana",
  tipo: "Petisco",
  resumo: "O clássico mexicano. Bons abacates e não exagerar.",
  doses: 4,
  tempo: "15 min",
  origem: "Criada aqui no caderno, maio de 2026",
  feita: false,
  ingredientes: [
    {q:3,u:"un",n:"abacates maduros"},
    {q:1,u:"un",n:"lima (sumo)",np:"limas (sumo)"},
    {q:1,u:"un",n:"cebola branca pequena (usa metade), picada muito fina",np:"cebolas brancas pequenas (usa metade), picadas muito finas"},
    {q:1,u:"un",n:"tomate romano sem sementes, picado",np:"tomates romanos sem sementes, picados"},
    {q:1,u:"un",n:"jalapeño sem sementes, picado",np:"jalapeños sem sementes, picados"},
    {q:2,u:"cs",n:"coentros picados"},
    {q:3,u:"g",n:"sal"}
  ],
  passos: [
    {t:"Cebola", x:"Pica {2} muito fina. Para mais suave, 5 minutos em água fria e escorre."},
    {t:"Abacates", x:"Abre {0}, tira o caroço e a polpa com uma colher. Maduros cedem à pressão do dedo."},
    {t:"Esmagar", x:"Com um garfo, até ficar rústico. Não é para ficar uma pasta lisa."},
    {t:"Temperar", x:"Junta {6}, {1}, a cebola, {3}, {4} e {5}. Envolve, prova e acerta sal e lima."},
    {t:"Repouso", x:"Película encostada à superfície e 10 minutos antes de servir.", s:600}
  ],
  porque: ["O caroço lá dentro é mito: o que impede o escurecimento é a película colada à superfície, sem ar."],
  notas: ["Sem jalapeño fica suave; com alho esmagado, mais intenso. Com nachos, tacos ou pita torrada."]
},
{
  id: "gnocchi-pesto-vermelho",
  titulo: "Gnocchi com Pesto Vermelho de Pinhão e Amêndoa",
  cozinha: "Italiana",
  tipo: "Massa",
  resumo: "Pesto rosso de tomate seco e pinhão com amêndoa para textura, e gnocchi dourados na frigideira.",
  doses: 4,
  tempo: "25 min",
  origem: "Criada aqui no caderno, novembro de 2026",
  feita: true,
  vinho: "Giroflé branco, bem fresco (uns 8 °C).",
  ingredientes: [
    {q:35,u:"g",n:"pinhões",grupo:"Pesto vermelho"},
    {q:15,u:"g",n:"amêndoa torrada",grupo:"Pesto vermelho"},
    {q:100,u:"g",n:"tomate seco em azeite, escorrido (guarda o azeite)",grupo:"Pesto vermelho"},
    {q:50,u:"g",n:"parmesão ralado (e mais para servir)",grupo:"Pesto vermelho"},
    {q:1,u:"dente",n:"alho médio, sem o germe",grupo:"Pesto vermelho"},
    {q:15,u:"g",n:"folhas de manjericão",grupo:"Pesto vermelho"},
    {q:100,u:"ml",n:"azeite (pode ser parte do do tomate)",grupo:"Pesto vermelho"},
    {q:1,u:"cs",n:"sumo de limão",grupo:"Pesto vermelho"},
    {q:1,u:"pitada",n:"piri-piri (opcional)",grupo:"Pesto vermelho"},
    {q:1000,u:"g",n:"gnocchi de batata (2 pacotes)",grupo:"Gnocchi"},
    {q:20,u:"g",n:"manteiga",grupo:"Gnocchi"},
    {q:2,u:"cs",n:"azeite",grupo:"Gnocchi"},
    {q:1,u:"cs",n:"sal grosso para a água",grupo:"Gnocchi"}
  ],
  passos: [
    {t:"Pinhão", x:"Tosta {0} em frigideira seca, lume médio-baixo, a mexer sempre, até dourado claro. Tira logo para um prato.", s:180},
    {t:"Amêndoa", x:"Tritura {1} com {4} em impulsos curtos, até migalha grossa."},
    {t:"Pesto", x:"Junta o pinhão, {2}, {3}, {5}, {7} e {8}. Tritura em impulsos enquanto juntas {6} em fio, até ficar uma pasta brilhante. Prova antes de pôr sal."},
    {t:"Reservar", x:"Numa taça, coberto com um fio de azeite, à temperatura ambiente."},
    {t:"Preparar", x:"Água a ferver com {12} e, ao mesmo tempo, a frigideira a aquecer. Pesto, manteiga e uma caneca à mão."},
    {t:"Cozer", x:"{9} em duas levas. Quando sobem, mais 30 segundos e fora. Guarda uma chávena de água.", s:30},
    {t:"Secar", x:"Espalha-os num tabuleiro a largar o vapor.", s:90},
    {t:"Dourar", x:"Frigideira bem quente com {10} e {11}. Gnocchi numa só camada, 2 min sem mexer até se soltarem, vira e mais 1 min.", s:120},
    {t:"Envolver", x:"Fora do lume: o pesto e 3 a 4 colheres de sopa da água da cozedura. Envolve bem."},
    {t:"Servir", x:"Logo, com parmesão, manjericão e uns pinhões por cima."}
  ],
  porque: [
    "A amêndoa triturada primeiro, sozinha, fica em migalha e dá textura.",
    "Gnocchi húmidos colam: secos e com gordura suficiente, ganham crosta e soltam-se.",
    "O pesto não vai ao lume: o parmesão cola e o açúcar do tomate queima.",
    "O amido da água emulsiona com o azeite e o pesto agarra-se em vez de ficar oleoso."
  ],
  notas: [
    "1.ª vez (15 nov 2026): ótimo, o pesto come-se à colher.",
    "Com 3 alhos pequenos ficou alho a mais: basta 1 dente médio.",
    "O pesto ficou seco, por isso o azeite subiu de 80 para 100 ml.",
    "Pesto: 3 a 4 dias no frigorífico com azeite por cima, ou 3 meses congelado em cuvetes."
  ]
},
{
  id: "fiori-di-zucca-fritti",
  titulo: "Fiori di Zucca Fritti",
  cozinha: "Italiana",
  tipo: "Entrada",
  resumo: "Flores de courgete recheadas com ricotta e anchova, num polme leve e estaladiço. Clássico romano.",
  doses: 4,
  tempo: "40 min",
  origem: "Criada aqui no caderno, junho de 2026",
  feita: false,
  ingredientes: [
    {q:12,u:"un",n:"flores de courgete (masculinas, grandes)"},
    {q:150,u:"g",n:"ricotta"},
    {q:4,u:"un",n:"filetes de anchova em azeite"},
    {q:1,u:"pitada",n:"sal"},
    {q:1,u:"pitada",n:"pimenta preta moída"},
    {q:120,u:"g",n:"farinha de trigo",grupo:"Polme"},
    {q:200,u:"ml",n:"água com gás bem fria",grupo:"Polme"},
    {q:1,u:"pitada",n:"sal",grupo:"Polme"},
    {q:500,u:"ml",n:"óleo de girassol para fritar",grupo:"Polme"}
  ],
  passos: [
    {t:"Flores", x:"Abre com cuidado {0} e tira o pistilo sem rasgar. Passa por água fria, seca com papel e deixa abertas uns minutos."},
    {t:"Recheio", x:"Mistura {1} com {3} e {4}. Corta cada filete de anchova em 3. Uma colher de chá de ricotta e um pedaço de anchova por flor; fecha as pétalas a enrolar."},
    {t:"Polme", x:"Junta {6} a {5} aos poucos, com um garfo, sem bater de mais (uns grumos são bem-vindos). Junta {7}. Deve escorrer como iogurte líquido. Vai ao frigorífico.", s:300},
    {t:"Óleo", x:"Aquece {8} a 175 °C. Sem termómetro: um palito deve borbulhar logo à volta.", s:240},
    {t:"Fritar", x:"Pega cada flor pelo pé, passa no polme frio e frita 3 a 4 de cada vez, a virar a meio.", s:180},
    {t:"Servir", x:"Escorre em papel e serve logo, com flor de sal por cima."}
  ],
  porque: ["Polme frio com gás, pouco batido, em óleo quente: é o choque de temperatura que o torna estaladiço."],
  notas: ["Sem anchova fica mais suave; raspa de limão ou hortelã na ricotta dão frescura.", "Aparecem no verão em mercados; se tens courgetes no jardim, tens flores."]
},
{
  id: "farinheira-a-bras",
  titulo: "Farinheira à Brás",
  cozinha: "Portuguesa",
  tipo: "Prato principal",
  resumo: "O Brás de sempre, mas com farinheira: mais fumado e mais rico.",
  doses: 4,
  tempo: "25 min",
  origem: "Criada aqui no caderno, julho de 2026",
  feita: false,
  ingredientes: [
    {q:2,u:"un",n:"farinheiras"},
    {q:200,u:"g",n:"batata palha de pacote"},
    {q:6,u:"un",n:"ovos grandes"},
    {q:1,u:"un",n:"cebola grande em meias-luas finas",np:"cebolas grandes em meias-luas finas"},
    {q:2,u:"dente",n:"alho, picados"},
    {q:3,u:"cs",n:"azeite"},
    {q:12,u:"un",n:"azeitonas pretas"},
    {q:2,u:"cs",n:"salsa picada"},
    {q:1,u:"pitada",n:"pimenta preta moída"}
  ],
  passos: [
    {t:"Farinheira", x:"Tira a pele a {0} e desfaz. Frigideira larga, lume médio, sem gordura (ela solta a sua), até estar cozinhada e em pedacinhos. Retira e deixa só um fio de gordura.", s:300},
    {t:"Cebola e alho", x:"{5} e {3} em lume médio até ficar translúcida. {4} nos últimos 2 minutos.", s:300},
    {t:"Juntar", x:"Volta a farinheira à frigideira e aquece tudo junto em lume baixo.", s:90},
    {t:"Ovos", x:"Bate {2} com {8}. Sem sal: a farinheira já tem."},
    {t:"Ligar", x:"Lume bem baixo. Junta {1}, mistura e deita logo os ovos. Mexe sem parar até ficarem cremosos e ligarem tudo.", s:120},
    {t:"Servir", x:"Tira do lume ainda cremoso. Prova e só então acerta o sal. {7} e {6} por cima."}
  ],
  notas: ["Guarda um punhado de batata palha para pôr por cima no prato, se gostares estaladiço."]
},
{
  id: "crumble-de-maca",
  titulo: "Crumble de Maçã à Jamie Oliver",
  cozinha: "Inglesa",
  tipo: "Sobremesa",
  resumo: "Maçã com canela e raspa de limão, e uma cobertura estaladiça com aveia e amêndoa laminada.",
  doses: 6,
  tempo: "1 h",
  origem: "Inspirada no Jamie Oliver",
  feita: false,
  ingredientes: [
    {q:6,u:"un",n:"maçãs Royal Gala ou Golden, descascadas, em pedaços",grupo:"Fruta"},
    {q:50,u:"g",n:"açúcar amarelo",grupo:"Fruta"},
    {q:1,u:"cc",n:"canela em pó",grupo:"Fruta"},
    {q:1,u:"un",n:"limão (raspa)",grupo:"Fruta",np:"limões (raspa)"},
    {q:20,u:"g",n:"manteiga fria em cubos",grupo:"Fruta"},
    {q:150,u:"g",n:"farinha de trigo",grupo:"Cobertura"},
    {q:100,u:"g",n:"manteiga fria em cubos",grupo:"Cobertura"},
    {q:100,u:"g",n:"açúcar amarelo",grupo:"Cobertura"},
    {q:50,u:"g",n:"flocos de aveia",grupo:"Cobertura"},
    {q:30,u:"g",n:"amêndoa laminada",grupo:"Cobertura"},
    {q:1,u:"pitada",n:"sal fino",grupo:"Cobertura"}
  ],
  passos: [
    {t:"Forno", x:"Pré-aquece a 190 °C, calor em cima e em baixo."},
    {t:"Fruta", x:"Mistura {0} com {1}, {2} e a raspa de {3}. Espalha num tabuleiro e põe {4} por cima."},
    {t:"Farofa", x:"Esfrega {5} com {6} com as pontas dos dedos até parecer pão ralado grosso."},
    {t:"Cobertura", x:"Junta {7}, {8}, {9} e {10}. Mistura sem apertar, para ficarem grumos."},
    {t:"Cobrir", x:"Espalha sobre a fruta sem calcar."},
    {t:"Forno", x:"Até a cobertura dourar e a fruta borbulhar nas bordas.", s:2250},
    {t:"Repousar", x:"5 minutos fora do forno antes de servir.", s:300}
  ],
  notas: ["Quente, com gelado de baunilha ou natas batidas.", "A farofa pode ficar feita no frigorífico até ir ao forno."]
},
{
  id: "costeletas-de-porco-cebola-maca",
  titulo: "Costeletas de Porco com Cebola e Maçã",
  cozinha: "Americana",
  tipo: "Prato principal",
  resumo: "Costeletas sem osso seladas e acabadas numa frigideira só, com cebola e maçã num molho ligeiro.",
  doses: 4,
  tempo: "30 min",
  origem: "Reconstruída a partir de um vídeo do Facebook (Bob Morano); pode não ser igual ao original",
  feita: false,
  ingredientes: [
    {q:4,u:"un",n:"costeletas de porco sem osso"},
    {q:1,u:"cc",n:"sal"},
    {q:1,u:"cc",n:"pimenta preta moída"},
    {q:2,u:"cs",n:"óleo de girassol ou amendoim"},
    {q:2,u:"cs",n:"manteiga"},
    {q:1,u:"un",n:"cebola grande em meias-luas",np:"cebolas grandes em meias-luas"},
    {q:2,u:"un",n:"maçãs (Golden ou Fuji), sem caroço, às fatias"},
    {q:150,u:"ml",n:"caldo de galinha"},
    {q:1,u:"cs",n:"vinagre de sidra"},
    {q:1,u:"cs",n:"açúcar amarelo"},
    {q:1,u:"cc",n:"tomilho fresco ou seco"}
  ],
  passos: [
    {t:"Selar", x:"Tempera {0} com {1} e {2}. {3} em lume médio-alto e sela 3 a 4 min de cada lado até dourarem. Reserva tapadas.", s:210},
    {t:"Cebola e maçã", x:"Na mesma frigideira, {4}, {5} e {6}, até a cebola amolecer e a maçã dourar.", s:300},
    {t:"Molho", x:"Junta {7}, {8}, {9} e {10}. Raspa o fundo e deixa ferver.", s:60},
    {t:"Acabar", x:"Costeletas de volta, por cima da cebola e da maçã. Lume baixo, tapa, até estarem no ponto.", s:240},
    {t:"Servir", x:"Repousa 2 a 3 minutos e serve com a cebola, a maçã e o molho por cima."}
  ],
  porque: ["O óleo aguenta mais calor do que o azeite: sela sem fumo nem amargo."]
},
{
  id: "chilli-con-carne",
  titulo: "Chilli con Carne",
  cozinha: "Mexicana",
  tipo: "Prato principal",
  resumo: "Rico e fumado, com carne estufada devagar em tomate e especiarias e um pouco de chocolate negro.",
  doses: 4,
  tempo: "1 h 15 min",
  origem: "Criada aqui no caderno, maio de 2026",
  feita: false,
  ingredientes: [
    {q:500,u:"g",n:"carne de vaca picada"},
    {q:400,u:"g",n:"feijão encarnado cozido, escorrido"},
    {q:400,u:"g",n:"tomate pelado em lata"},
    {q:2,u:"cs",n:"concentrado de tomate"},
    {q:1,u:"un",n:"cebola grande, picada",np:"cebolas grandes, picadas"},
    {q:3,u:"dente",n:"alho, picados"},
    {q:1,u:"un",n:"pimento vermelho em cubos",np:"pimentos vermelhos em cubos"},
    {q:200,u:"ml",n:"caldo de carne"},
    {q:2,u:"cs",n:"azeite"},
    {q:2,u:"cc",n:"chilli em pó"},
    {q:1,u:"cc",n:"cominhos em pó"},
    {q:1,u:"cc",n:"colorau fumado"},
    {q:1,u:"cc",n:"orégãos secos"},
    {q:20,u:"g",n:"chocolate negro (70% ou mais)"},
    {q:null,u:"",n:"sal e pimenta preta"}
  ],
  passos: [
    {t:"Base", x:"{8} em lume médio-alto. {4} e {6} até amolecerem; {5} mais 1 minuto.", s:360},
    {t:"Carne", x:"Lume alto. {0}, a partir com a colher e sem mexer muito, até dourar bem.", s:330},
    {t:"Especiarias", x:"Lume médio. {9}, {10}, {11} e {12}. Mexe e deixa tostar.", s:90},
    {t:"Molho", x:"Junta {3}, {2} (parte-o com a colher) e {7}. Raspa o fundo e tempera."},
    {t:"Estufar", x:"Lume mínimo, meio tapado, a mexer de vez em quando, até engrossar bem.", s:2400},
    {t:"Feijão e chocolate", x:"Junta {1} e {13}. Mais 10 minutos destapado. Acerta sal e picante.", s:600},
    {t:"Servir", x:"Com arroz branco, nachos ou pão de milho. Natas azedas, coentros e cheddar por cima."}
  ],
  porque: ["O chocolate negro dá profundidade sem saber a doce."],
  notas: ["Melhor no dia seguinte e congela bem. Mais picante: malagueta fresca com as especiarias."]
},
{
  id: "cheesecake-chocolate-proteico",
  titulo: "Cheesecake de Chocolate Proteico",
  cozinha: "Americana",
  tipo: "Sobremesa",
  resumo: "Tudo na liquidificadora, o forno faz o resto. Denso, achocolatado e com muita proteína.",
  doses: 6,
  tempo: "15 min + 50 min de forno + 9 h de frio",
  origem: "@thechefoutwest",
  feita: false,
  ingredientes: [
    {q:220,u:"g",n:"queijo cottage"},
    {q:200,u:"g",n:"iogurte grego natural"},
    {q:2,u:"un",n:"ovos grandes"},
    {q:50,u:"g",n:"cacau em pó sem açúcar"},
    {q:160,u:"g",n:"mel ou xarope de ácer"},
    {q:50,u:"g",n:"farinha de aveia ou de amêndoa"},
    {q:2,u:"cc",n:"extrato de baunilha"}
  ],
  passos: [
    {t:"Forno", x:"165 °C, sem ventoinha se der. Forra com papel vegetal uma forma redonda de 15 cm."},
    {t:"Triturar", x:"Na liquidificadora: {0}, {1}, {2}, {3}, {4}, {5} e {6}. Bate até ficar completamente liso, a raspar as paredes."},
    {t:"Verter", x:"Verte na forma, alisa e dá umas pancadinhas na bancada para soltar bolhas."},
    {t:"Cozer", x:"Bordas firmes, centro ainda a tremer.", s:2850},
    {t:"Arrefecer", x:"À temperatura ambiente antes do frigorífico.", s:3600},
    {t:"Frigorífico", x:"Pelo menos 8 horas, idealmente de véspera.", s:28800}
  ],
  porque: ["É o frio que lhe dá a textura de cheesecake."],
  notas: [
    "Forma de 20 cm: fica mais baixo, começa a ver aos 35 min.",
    "Com amêndoa fica mais húmido; com aveia, mais firme.",
    "Bolo inteiro: cerca de 950 kcal e 75 g de proteína."
  ]
},
{
  id: "caril-de-frango-leite-de-coco",
  titulo: "Caril de Frango com Leite de Coco",
  cozinha: "Indiana",
  tipo: "Prato principal",
  resumo: "Cremoso e aromático: cebola, alho, gengibre e especiarias, cozinhado em leite de coco.",
  doses: 4,
  tempo: "40 min",
  origem: "Criada aqui no caderno, agosto de 2026",
  feita: false,
  ingredientes: [
    {q:700,u:"g",n:"peito ou coxa de frango em cubos"},
    {q:1,u:"un",n:"cebola picada",np:"cebolas picadas"},
    {q:3,u:"dente",n:"alho, picados"},
    {q:15,u:"g",n:"gengibre fresco ralado"},
    {q:2,u:"cs",n:"caril em pó (ou pasta de caril)"},
    {q:1,u:"cc",n:"cominhos"},
    {q:1,u:"cc",n:"curcuma"},
    {q:1,u:"cc",n:"colorau"},
    {q:400,u:"ml",n:"leite de coco"},
    {q:200,u:"g",n:"tomate pelado picado (ou polpa)"},
    {q:100,u:"ml",n:"caldo de galinha ou água"},
    {q:2,u:"cs",n:"azeite ou óleo"},
    {q:1,u:"cc",n:"sal"},
    {q:10,u:"g",n:"coentros frescos, para servir"},
    {q:1,u:"un",n:"limão (sumo)",np:"limões (sumo)"}
  ],
  passos: [
    {t:"Base", x:"{11} em lume médio, {1} até translúcida. Junta {2} e {3} e mexe 1 minuto.", s:300},
    {t:"Especiarias", x:"{4}, {5}, {6} e {7}, a mexer, sem queimar.", s:60},
    {t:"Frango", x:"Junta {0} e envolve nas especiarias.", s:210},
    {t:"Cozinhar", x:"Junta {9}, {8} e {10}, tempera com {12}. Ferve, baixa o lume e cozinha meio tapado até o frango estar macio.", s:1200},
    {t:"Servir", x:"Acerta o sal, {14} e {13} por cima."}
  ],
  notas: ["Com arroz basmati ou naan. Picante: malagueta no passo das especiarias. Vegetariano: grão e batata-doce."]
},
{
  id: "caril-de-frango-com-cajus",
  titulo: "Caril de Frango com Cajus",
  cozinha: "Indiana",
  tipo: "Prato principal",
  resumo: "Cremoso sem natas, graças aos cajus triturados no molho, e com cajus tostados por cima.",
  doses: 4,
  tempo: "45 min",
  origem: "Criada aqui no caderno, maio de 2026",
  feita: false,
  ingredientes: [
    {q:700,u:"g",n:"peito de frango em cubos"},
    {q:400,u:"ml",n:"leite de coco"},
    {q:400,u:"g",n:"tomate pelado em lata"},
    {q:1,u:"un",n:"cebola grande, picada",np:"cebolas grandes, picadas"},
    {q:3,u:"dente",n:"alho, picados"},
    {q:1,u:"cc",n:"gengibre em pó"},
    {q:2,u:"cs",n:"pasta de caril (Madras ou outra)"},
    {q:1,u:"cc",n:"caril em pó"},
    {q:1,u:"cc",n:"cominhos em pó"},
    {q:2,u:"cs",n:"azeite"},
    {q:75,u:"g",n:"cajus crus (para o molho)"},
    {q:50,u:"g",n:"cajus inteiros (para tostar)"},
    {q:null,u:"",n:"sal, pimenta preta e coentros frescos"}
  ],
  passos: [
    {t:"Demolhar", x:"{10} em água quente enquanto preparas o resto.", s:600},
    {t:"Tostar", x:"{11} em frigideira seca, lume médio, a mexer, até dourarem. Reserva.", s:150},
    {t:"Base", x:"{9} em lume médio-alto, {3} até translúcida, depois {4}.", s:360},
    {t:"Especiarias", x:"{6}, {7}, {8} e {5}, a mexer sem queimar.", s:60},
    {t:"Pasta de caju", x:"Escorre os cajus demolhados e tritura com 100 ml de água até ficar liso."},
    {t:"Frango e tomate", x:"Junta {0} e envolve. Junta {2} partido e a pasta de caju.", s:300},
    {t:"Cozinhar", x:"Junta {1}, tempera e cozinha destapado em lume médio-baixo até engrossar.", s:1200},
    {t:"Servir", x:"Com arroz basmati ou naan, os cajus tostados e coentros por cima."}
  ],
  notas: [
    "A pasta de caril manda no picante: começa com 1 colher se quiseres suave.",
    "Coxas desossadas ficam mais suculentas. O gengibre em pó é forte, não exageres.",
    "Ainda melhor no dia seguinte."
  ]
},
{
  id: "cannoli-de-florentinas",
  titulo: "Cannoli de Florentinas",
  cozinha: "Italiana",
  tipo: "Sobremesa",
  resumo: "Conchas finas de florentina (mel e caramelo) recheadas com ricotta, laranja e pepitas de chocolate. Sem fritar.",
  doses: 30,
  tempo: "1 h 30 min",
  origem: "crowdedkitchen.com",
  feita: false,
  ingredientes: [
    {q:55,u:"g",n:"manteiga sem sal",grupo:"Conchas"},
    {q:50,u:"g",n:"açúcar mascavado claro",grupo:"Conchas"},
    {q:3,u:"cs",n:"mel",grupo:"Conchas"},
    {q:30,u:"g",n:"farinha de trigo T55",grupo:"Conchas"},
    {q:1,u:"pitada",n:"sal",grupo:"Conchas"},
    {q:1,u:"ccafe",n:"extrato de baunilha",grupo:"Conchas"},
    {q:500,u:"g",n:"ricotta bem escorrida",grupo:"Recheio"},
    {q:120,u:"g",n:"açúcar em pó",grupo:"Recheio"},
    {q:1,u:"cc",n:"extrato de baunilha",grupo:"Recheio"},
    {q:1,u:"cc",n:"raspa de laranja (opcional)",grupo:"Recheio"},
    {q:60,u:"g",n:"mini pepitas de chocolate",grupo:"Recheio"},
    {q:30,u:"g",n:"mini pepitas de chocolate",grupo:"Decorar"},
    {q:30,u:"g",n:"pistácios picados finos",grupo:"Decorar"}
  ],
  passos: [
    {t:"Escorrer a ricotta", x:"Espalha {6} fina entre folhas de papel de cozinha e pressiona. Troca o papel a meio. Ricotta húmida amolece as conchas.", s:1800},
    {t:"Forno", x:"190 °C e dois tabuleiros com papel vegetal."},
    {t:"Base", x:"Num tacho em lume médio, {0}, {1} e {2}, a mexer com a vara até ficar bem ligado."},
    {t:"Secos", x:"Fora do lume, junta {3}, {4} e {5} até não haver grumos."},
    {t:"Arrefecer a massa", x:"Opcional: congelador, para ser mais fácil fazer bolinhas.", s:1200},
    {t:"Tabuleiro", x:"Bolinhas de 4 g (colher de chá mal cheia), a 8 cm umas das outras. Espalham muito."},
    {t:"Cozer", x:"Até ficarem douradas. Desliza o papel logo para uma grelha.", s:420},
    {t:"Enrolar", x:"Ao fim de 30 segundos, enrola cada uma num cabo de colher de pau. Se endurecerem, 15 a 20 segundos no forno.", s:30},
    {t:"Recheio", x:"Mistura a ricotta com {7}, {8}, {9} e {10}."},
    {t:"Rechear", x:"Saco de pasteleiro com bico redondo: enche metade por um lado, vira e enche o outro."},
    {t:"Decorar", x:"Pontas em {11} ou {12}. Serve logo."}
  ],
  notas: [
    "Recheados, aguentam poucas horas: recheia mesmo antes de servir.",
    "Conchas vazias: 3 dias fora, semanas no frigorífico, 3 meses congeladas.",
    "Recheio: até 5 dias no frigorífico."
  ]
},
{
  id: "bolo-de-chocolate-humido",
  titulo: "Bolo de Chocolate Húmido com Ganache",
  cozinha: "Americana",
  tipo: "Bolo",
  resumo: "Fofo e húmido, com café quente na massa e cobertura de ganache.",
  doses: 8,
  tempo: "1 h 15 min",
  origem: "Criada aqui no caderno, setembro de 2026",
  feita: false,
  ingredientes: [
    {q:250,u:"g",n:"farinha"},
    {q:300,u:"g",n:"açúcar"},
    {q:75,u:"g",n:"cacau em pó"},
    {q:1,u:"cc",n:"bicarbonato de sódio"},
    {q:2,u:"cc",n:"fermento em pó"},
    {q:1,u:"pitada",n:"sal"},
    {q:2,u:"un",n:"ovos grandes"},
    {q:250,u:"ml",n:"leite"},
    {q:120,u:"ml",n:"óleo vegetal"},
    {q:250,u:"ml",n:"café quente"},
    {q:2,u:"cc",n:"extrato de baunilha"},
    {q:200,u:"g",n:"chocolate negro",grupo:"Ganache"},
    {q:200,u:"ml",n:"natas",grupo:"Ganache"}
  ],
  passos: [
    {t:"Forno", x:"175 °C. Forma redonda de 22 cm, untada e forrada."},
    {t:"Secos", x:"Peneira e mistura {0}, {1}, {2}, {3}, {4} e {5}."},
    {t:"Líquidos", x:"Junta {6}, {7}, {8} e {10} e bate até ficar homogéneo."},
    {t:"Café", x:"Junta {9} devagar, sempre a mexer. A massa fica muito líquida: é isso que a torna húmida."},
    {t:"Forno", x:"Verte na forma e coze.", s:2400},
    {t:"Verificar", x:"O palito deve sair quase limpo, com umas migalhas húmidas. Uns minutos na forma e desenforma numa grelha."},
    {t:"Ganache", x:"Aquece {12} até quase ferver, verte sobre {11} picado, espera 2 minutos e mexe até ficar liso.", s:120},
    {t:"Cobrir", x:"Com o bolo frio, verte a ganache por cima e deixa escorrer. Deixa assentar.", s:900}
  ],
  porque: ["O café realça o chocolate sem se notar. Água quente também serve."],
  notas: ["Bem tapado, aguenta 3 dias."]
},
{
  id: "bolo-de-chocolate-simples",
  titulo: "Bolo de Chocolate Húmido Simples",
  cozinha: "Americana",
  tipo: "Bolo",
  resumo: "O mesmo bolo húmido, com água quente e sem cobertura.",
  doses: 8,
  tempo: "1 h",
  origem: "Criada aqui no caderno, setembro de 2026",
  feita: false,
  ingredientes: [
    {q:250,u:"g",n:"farinha"},
    {q:300,u:"g",n:"açúcar"},
    {q:75,u:"g",n:"cacau em pó"},
    {q:1,u:"cc",n:"bicarbonato de sódio"},
    {q:2,u:"cc",n:"fermento em pó"},
    {q:1,u:"pitada",n:"sal"},
    {q:2,u:"un",n:"ovos grandes"},
    {q:250,u:"ml",n:"leite"},
    {q:120,u:"ml",n:"óleo vegetal"},
    {q:250,u:"ml",n:"água quente"},
    {q:2,u:"cc",n:"extrato de baunilha"}
  ],
  passos: [
    {t:"Forno", x:"175 °C. Forma redonda de 22 cm, untada e forrada."},
    {t:"Secos", x:"Peneira e mistura {0}, {1}, {2}, {3}, {4} e {5}."},
    {t:"Líquidos", x:"Junta {6}, {7}, {8} e {10} e bate até ficar homogéneo."},
    {t:"Água quente", x:"Junta {9} devagar, sempre a mexer. A massa fica muito líquida, é normal."},
    {t:"Forno", x:"Verte na forma e coze.", s:2400},
    {t:"Verificar", x:"Palito quase limpo, com migalhas húmidas. Desenforma numa grelha."}
  ],
  porque: ["A água quente dissolve o cacau e mantém o bolo húmido."],
  notas: ["Bem tapado, 3 dias. Açúcar em pó por cima antes de servir."]
},
{
  id: "bolo-de-cenoura-paulinha",
  titulo: "Bolo de Cenoura da Paulinha",
  cozinha: "Portuguesa",
  tipo: "Bolo",
  resumo: "Fofo e húmido, feito com a varinha mágica.",
  doses: 10,
  tempo: "15 min + 40 min de forno",
  origem: "Paulinha, do café do estúdio. Forma com buraco de 24 cm.",
  feita: false,
  ingredientes: [
    {q:240,u:"ml",n:"óleo (1 chávena)"},
    {q:400,u:"g",n:"açúcar (2 chávenas)"},
    {q:360,u:"g",n:"farinha (3 chávenas)"},
    {q:2,u:"un",n:"cenouras grandes, raspadas"},
    {q:5,u:"un",n:"ovos"},
    {q:1,u:"cs",n:"fermento em pó (falta confirmar com a Paulinha)"}
  ],
  passos: [
    {t:"Forno", x:"180 °C. Unta e enfarinha a forma."},
    {t:"Varinha", x:"Tritura {3}, {4}, {0} e {1} até ficar um creme liso."},
    {t:"Farinha", x:"Junta {2} misturada com {5}, aos poucos, só até não haver grumos."},
    {t:"Forno", x:"Até o palito sair seco.", s:2400},
    {t:"Desenformar", x:"Deixa arrefecer antes de desenformar.", s:600}
  ],
  notas: ["O original vem em chávenas (de chá, uns 240 ml); as gramas são aproximadas."]
},
{
  id: "bolo-de-cenoura-leve",
  titulo: "Bolo de Cenoura Leve",
  cozinha: "Americana",
  tipo: "Bolo",
  resumo: "Com cottage e farinha de aveia, cobertura de queijo creme e iogurte grego. Dá 9 quadrados.",
  doses: 9,
  tempo: "45 min + 1 h a arrefecer",
  origem: "Madelaine Rascan, Studio Era",
  feita: false,
  ingredientes: [
    {q:300,u:"g",n:"cottage magro",grupo:"Bolo"},
    {q:2,u:"un",n:"ovos grandes",grupo:"Bolo"},
    {q:150,u:"g",n:"claras (4 a 5)",grupo:"Bolo"},
    {q:200,u:"g",n:"cenoura ralada fina",grupo:"Bolo"},
    {q:100,u:"g",n:"farinha de aveia",grupo:"Bolo"},
    {q:2,u:"cc",n:"fermento em pó",grupo:"Bolo"},
    {q:2,u:"cc",n:"extrato de baunilha",grupo:"Bolo"},
    {q:3,u:"cc",n:"canela em pó",grupo:"Bolo"},
    {q:1,u:"ccafe",n:"gengibre em pó",grupo:"Bolo"},
    {q:1,u:"pitada",n:"noz-moscada",grupo:"Bolo"},
    {q:1,u:"pitada",n:"sal",grupo:"Bolo"},
    {q:null,u:"",n:"adoçante a gosto",grupo:"Bolo"},
    {q:150,u:"g",n:"queijo creme light",grupo:"Cobertura"},
    {q:200,u:"g",n:"iogurte grego natural 0%",grupo:"Cobertura"},
    {q:1,u:"cc",n:"extrato de baunilha",grupo:"Cobertura"},
    {q:1,u:"pitada",n:"sal",grupo:"Cobertura"}
  ],
  passos: [
    {t:"Forno", x:"175 °C. Unta levemente uma forma quadrada de 23 cm."},
    {t:"Triturar", x:"Tritura {0}, {1}, {2}, {4}, {5}, {6}, {7}, {8}, {9}, {10} e adoçante até ficar homogéneo."},
    {t:"Cenoura", x:"Envolve {3} à mão, sem triturar."},
    {t:"Forno", x:"Espalha na forma. Começa a ver aos 25 min com um palito.", s:1800},
    {t:"Arrefecer", x:"Por completo antes da cobertura.", s:3600},
    {t:"Cobertura", x:"Mistura {12}, {13}, {14}, {15} e adoçante. Prova e acerta o doce."},
    {t:"Cortar", x:"Cobre o bolo frio e corta em 9 quadrados."}
  ],
  notas: ["Por quadrado: cerca de 160 kcal e 13 g de proteína."]
},
{
  id: "batatas-assadas-kenji",
  titulo: "Batatas Assadas no Forno (Kenji López-Alt)",
  cozinha: "Americana",
  tipo: "Acompanhamento",
  resumo: "Cozidas em água alcalina e sacudidas até criar uma pasta à superfície, que fica ultra-estaladiça no forno.",
  doses: 4,
  tempo: "1 h 30 min",
  origem: "J. Kenji López-Alt",
  feita: true,
  ingredientes: [
    {q:2000,u:"g",n:"batatas (Agria ou Yukon Gold), descascadas, em quartos grandes"},
    {q:25,u:"g",n:"sal grosso (para a água)"},
    {q:4,u:"g",n:"bicarbonato de sódio"},
    {q:75,u:"ml",n:"azeite (ou gordura de pato)"},
    {q:3,u:"dente",n:"alho, picados finos"},
    {q:1,u:"cs",n:"alecrim fresco picado"},
    {q:1,u:"cs",n:"salsa picada"},
    {q:1,u:"pitada",n:"pimenta preta moída"}
  ],
  passos: [
    {t:"Forno", x:"Grelha ao centro, 230 °C (200 °C com ventoinha)."},
    {t:"Azeite aromático", x:"{3} em lume médio com {4}, {5} e {7}, a mexer até o alho começar a dourar. Coa logo para uma tigela grande. Guarda o alho e o alecrim à parte.", s:180},
    {t:"Cozer", x:"Ferve 2 l de água com {1} e {2} (borbulha muito, é normal). Junta {0} e coze até a faca entrar com pouca resistência.", s:600},
    {t:"Sacudir", x:"Escorre, deixa 30 segundos a largar vapor e passa para a tigela do azeite. Mais um pouco de sal e sacode com força até as batatas ficarem cobertas de uma pasta."},
    {t:"Forno, 1.ª fase", x:"Num tabuleiro grande sem sobrepor. Não mexas.", s:1200},
    {t:"Forno, 2.ª fase", x:"Solta-as com uma espátula fina e vira. Continua, a virar 2 ou 3 vezes, até estarem douradas de todos os lados.", s:2100},
    {t:"Servir", x:"Envolve com o alho e o alecrim guardados e {6}. Acerta o sal e serve logo."}
  ],
  porque: ["O bicarbonato torna a água alcalina e desfaz a pectina da superfície: é essa pasta que fica estaladiça."],
  notas: ["Batata farinhenta (Agria). As de cozer são aguadas demais."]
},
{
  id: "batatas-a-murro",
  titulo: "Batatas a Murro",
  cozinha: "Portuguesa",
  tipo: "Acompanhamento",
  resumo: "Batatas novas cozidas, esmagadas e assadas até estalarem, com molho de ervas e limão.",
  doses: 4,
  tempo: "1 h",
  origem: "Receita trazida pelo João, organizada aqui",
  feita: false,
  ingredientes: [
    {q:1000,u:"g",n:"batata nova média"},
    {q:15,u:"g",n:"sal marinho (para a água)"},
    {q:30,u:"ml",n:"azeite virgem extra (para regar)"},
    {q:15,u:"ml",n:"sumo de limão",grupo:"Molho"},
    {q:125,u:"ml",n:"azeite virgem extra",grupo:"Molho"},
    {q:15,u:"g",n:"salsa picada",grupo:"Molho"},
    {q:1,u:"un",n:"chalota picada fina",grupo:"Molho",np:"chalotas picadas finas"},
    {q:1,u:"dente",n:"alho esmagado",grupo:"Molho"},
    {q:3,u:"g",n:"flor de sal",grupo:"Molho"},
    {q:1,u:"pitada",n:"pimenta preta moída na hora",grupo:"Molho"}
  ],
  passos: [
    {t:"Forno", x:"Pré-aquece a 190 °C."},
    {t:"Molho", x:"Mistura {3}, {4}, {5}, {6}, {7}, {8} e {9}. Reserva."},
    {t:"Batatas", x:"Lava {0} e corta ao meio as maiores, para cozerem por igual."},
    {t:"Cozer", x:"Água fria com {1}, lume alto até ferver, depois médio-alto até estarem bem macias.", s:1200},
    {t:"Esmagar", x:"Escorre para um tabuleiro com papel vegetal, rega com {2} e achata cada uma com o fundo de um copo untado, sem as desfazer."},
    {t:"Temperar", x:"Mais um fio de azeite nas rachas e sal marinho."},
    {t:"Assar", x:"Até estarem douradas e estaladiças; vira-as aos dois terços do tempo.", s:1800},
    {t:"Servir", x:"Rega com o molho e serve logo."}
  ],
  notas: ["Com a pele seguram melhor ao esmagar.", "O molho pode ficar feito antes, à temperatura ambiente."]
},
{
  id: "bacalhau-a-bras-com-chourico",
  titulo: "Bacalhau à Brás com Chouriço",
  cozinha: "Portuguesa",
  tipo: "Prato principal",
  resumo: "O clássico com um toque fumado de chouriço bem picadinho.",
  doses: 4,
  tempo: "30 min",
  origem: "Criada aqui no caderno, setembro de 2026",
  feita: false,
  ingredientes: [
    {q:400,u:"g",n:"bacalhau demolhado e desfiado"},
    {q:500,u:"g",n:"batata palha"},
    {q:60,u:"g",n:"chouriço picado bem miúdo"},
    {q:1,u:"un",n:"cebola grande em meias-luas finas",np:"cebolas grandes em meias-luas finas"},
    {q:2,u:"dente",n:"alho, picados"},
    {q:6,u:"un",n:"ovos grandes"},
    {q:3,u:"cs",n:"azeite"},
    {q:2,u:"cs",n:"salsa picada"},
    {q:12,u:"un",n:"azeitonas pretas"},
    {q:1,u:"pitada",n:"pimenta preta moída"}
  ],
  passos: [
    {t:"Chouriço", x:"{6} em lume médio e {2} até largar a gordura e ficar estaladiço.", s:180},
    {t:"Cebola e alho", x:"{3} na gordura do chouriço até amolecer. {4} nos últimos 2 minutos.", s:420},
    {t:"Bacalhau", x:"Junta {0} e deixa apurar em lume médio-baixo, a mexer com cuidado.", s:240},
    {t:"Ovos", x:"Bate {5} com {9}. Sem sal: o chouriço e o bacalhau já têm."},
    {t:"Batata palha", x:"Lume no mínimo. Junta {1} e envolve."},
    {t:"Ligar", x:"Verte os ovos e envolve com colher de pau só até ficarem cremosos. Tira antes de secarem.", s:120},
    {t:"Provar", x:"Só agora prova e acerta o sal, se for preciso."},
    {t:"Servir", x:"Logo, com {7} e {8}."}
  ],
  notas: ["Mais suave: só 40 g de chouriço.", "Batata palha mesmo no fim, para não amolecer."]
},
{
  id: "caipirinha",
  titulo: "Caipirinha",
  cozinha: "Bebidas",
  tipo: "Cocktail",
  resumo: "Cachaça, lima e açúcar, bem batidos com gelo.",
  doses: 1,
  tempo: "5 min",
  origem: "Criada aqui no caderno, julho de 2026",
  feita: false,
  ingredientes: [
    {q:1,u:"un",n:"lima em quartos",np:"limas em quartos"},
    {q:2,u:"cc",n:"açúcar branco"},
    {q:60,u:"ml",n:"cachaça"},
    {q:150,u:"g",n:"gelo picado"}
  ],
  passos: [
    {t:"Lima", x:"Lava bem {0} e corta em quartos. Tira o miolo branco do centro para ficar menos amarga."},
    {t:"Macerar", x:"Num copo baixo, a lima e {1}. Esmaga bem com um pilão, para soltar o sumo e os óleos da casca.", s:30},
    {t:"Cachaça e gelo", x:"Junta {2} e {3}."},
    {t:"Servir", x:"Mexe até o copo ficar gelado por fora. Com palhinha."}
  ],
  notas: ["Caipiroska com vodka, saquerinha com saké. Lima muito ácida? Acerta o açúcar, sem exagerar."]
},
{
  id: "licor-de-tangerina",
  titulo: "Licor de Tangerina",
  cozinha: "Bebidas",
  tipo: "Licor",
  resumo: "Cascas de tangerina em aguardente forte, adoçado com calda em ponto de cabelo. Receita antiga escrita à máquina.",
  doses: 1,
  tempo: "1 mês de infusão",
  origem: "Receita antiga escrita à máquina. Em infusão desde novembro de 2026.",
  feita: true,
  ingredientes: [
    {q:1,u:"l",n:"aguardente forte"},
    {q:11,u:"un",n:"tangerinas (só as cascas, sem o branco)"},
    {q:500,u:"g",n:"açúcar"},
    {q:250,u:"ml",n:"água (calda)"}
  ],
  passos: [
    {t:"Cascas", x:"Tira as cascas de {1} sem a parte branca, que amarga com um mês de infusão. Junta-as a {0}."},
    {t:"Calda", x:"{2} e {3} ao lume. Mexe só até dissolver e depois deixa ferver sem mexer (uns 105 °C).", s:390},
    {t:"Ponto de cabelo", x:"Uma gota arrefecida entre o polegar e o indicador faz um fio muito fino que parte logo."},
    {t:"Arrefecer", x:"Deixa a calda chegar à temperatura ambiente antes de a juntar, senão perde-se álcool e aroma."},
    {t:"Infusão", x:"Cerca de um mês."}
  ],
  notas: [
    "O original diz só «meio quilo de açúcar em ponto», sem água: a água e o ponto foram acrescentados aqui.",
    "No fim, afina com mais aguardente ou mais calda."
  ]
},
{
  id: "bolo-do-tecto-tia-judite",
  titulo: "Bolo do Tecto da Tia Judite",
  cozinha: "Portuguesa",
  tipo: "Bolo",
  resumo: "Camadas de pão de ló com creme de manteiga e creme de chocolate, cobertas de amêndoa torrada. Receita de família.",
  doses: 10,
  tempo: "2 h",
  origem: "Tia Judite, folha manuscrita (o título é difícil de ler)",
  feita: false,
  ingredientes: [
    {q:6,u:"un",n:"ovos",grupo:"Pão de ló (quantidades de base, não vêm no original)"},
    {q:180,u:"g",n:"açúcar",grupo:"Pão de ló (quantidades de base, não vêm no original)"},
    {q:120,u:"g",n:"farinha",grupo:"Pão de ló (quantidades de base, não vêm no original)"},
    {q:250,u:"ml",n:"leite",grupo:"Creme de manteiga"},
    {q:1,u:"cs",n:"maizena",grupo:"Creme de manteiga"},
    {q:3,u:"cs",n:"açúcar",grupo:"Creme de manteiga"},
    {q:1,u:"un",n:"casca de limão",grupo:"Creme de manteiga",np:"cascas de limão"},
    {q:125,u:"g",n:"manteiga amolecida",grupo:"Creme de manteiga"},
    {q:250,u:"ml",n:"leite",grupo:"Creme de chocolate"},
    {q:1,u:"cs",n:"farinha",grupo:"Creme de chocolate"},
    {q:3,u:"cs",n:"açúcar",grupo:"Creme de chocolate"},
    {q:2,u:"cs",n:"chocolate em pó",grupo:"Creme de chocolate"},
    {q:100,u:"g",n:"amêndoas peladas",grupo:"Cobertura"}
  ],
  passos: [
    {t:"Pão de ló", x:"Bate {0} com {1} até ficarem fofos e esbranquiçados. Envolve {2} com cuidado."},
    {t:"Forno", x:"Num tabuleiro com papel vegetal, 180 °C. Arrefece e corta em 3 retângulos iguais.", s:1200},
    {t:"Creme de manteiga", x:"{3} com {4}, {5} e {6} ao lume, a mexer até engrossar. Tira a casca e deixa arrefecer. Bate {7} à parte e junta-lhe o creme aos poucos."},
    {t:"Creme de chocolate", x:"Mistura {9}, {11} e {10}, junta {8} e leva ao lume a mexer até engrossar. Deixa arrefecer."},
    {t:"Amêndoa", x:"Pica {12} e torra no forno até dourar."},
    {t:"Montar", x:"Alterna camadas de bolo e creme. Cobre com creme e cola as amêndoas por fora."}
  ],
  notas: [
    "O texto fala em «triângulos» no início e «retângulos» no fim; retângulos faz mais sentido.",
    "Não diz se o creme de chocolate leva manteiga: 60 g batida torna-o mais rico.",
    "O açúcar dos cremes é aproximado: o original diz só «açúcar» e «algum açúcar»."
  ]
}
];
