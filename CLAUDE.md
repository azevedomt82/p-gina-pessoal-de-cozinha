# Caderno de Receitas do João

Site estático (PWA) publicado no GitHub Pages a partir do ramo `main`, pasta raiz. Sem build.

- `receitas.js` — todas as receitas (`window.RECEITAS`). O formato está explicado no topo do ficheiro.
- `index.html` — a app toda (lista, separadores por cozinha, «Já fiz», porções, temporizadores, modo cozinha).
- `sw.js` — funcionamento offline (rede primeiro, cache como reserva). Mudar `CACHE` só se for preciso forçar limpeza.

## Regras para receitas
- Português europeu, registo informal.
- Medidas em gramas, ml ou colheres; nada de medidas americanas; números inteiros, sem frações.
- Cada receita: `cozinha` (Italiana, Grega, Portuguesa…), `feita: true` só se o João disse que já a fez.
- Nos passos, `{n}` mostra o ingrediente n já com a quantidade ajustada às porções.
- As receitas-fonte em Markdown estão no projeto Culinária do claude.ai (`receitas/*.md`).

## Atualizar
Editar `receitas.js`, verificar com `node --check receitas.js` e fazer commit para `main`. O Pages publica sozinho.
