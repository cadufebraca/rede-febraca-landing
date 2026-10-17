# Rede FEBRACA – Landing page de afiliação

Landing page que convida ONGs de proteção animal a se cadastrarem como afiliadas da **Rede FEBRACA** – Federação Brasileira da Causa Animal.

> Vamos juntos transformar a Causa Animal.

## Tecnologia

- HTML em um único `index.html`
- Tailwind CSS v3, compilado pelo CLI em `dist/style.css` (minificado, sem CDN)
- JavaScript puro e mínimo: menu do celular, padrão de quadradinhos do topo e animação de rolagem da seção Benefícios
- Fontes do Google Fonts: Anton, Barlow Condensed e Barlow

## Estrutura

```
index.html                  Página (todas as seções)
dist/style.css              CSS compilado – é este que vai para a hospedagem
src/input.css               CSS de origem (Tailwind + componentes)
tailwind.config.js          Cores e fontes oficiais do manual da marca
logo-febraca.png            Logo positivo (fundo claro)
logo-febraca-negativo.png   Logo negativo (fundo escuro)
package.json                Scripts de build
```

## Como editar e gerar o CSS

Requer Node.js 18 ou superior.

```bash
npm install
npm run build   # gera dist/style.css minificado
npm run dev     # recompila automaticamente enquanto você edita
```

## Como ver localmente

```bash
npx http-server -p 5173
```

Depois acesse http://localhost:5173.

## Arquivos para a hospedagem

Envie apenas: `index.html`, `dist/style.css`, `logo-febraca.png` e `logo-febraca-negativo.png`.

## Acessibilidade

- Link "Pular para o conteúdo" e foco visível na navegação por teclado
- Textos alternativos nos logos
- Botões com no mínimo 44px de altura
- Respeita a opção "reduzir animações" do sistema

---

© 2026 FEBRACA – Federação Brasileira da Causa Animal. Todos os direitos reservados.
