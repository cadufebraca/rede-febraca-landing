/** @type {import('tailwindcss').Config} */
// Configuração do Tailwind com as cores e fontes oficiais do manual da marca FEBRACA.
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy: '#212B5E',      // fundo do topo
        royal: '#263882',     // títulos, ícones, seção de resultados
        laranja: '#F79A22',   // botões, destaques, chamada final
        preto: '#0B0D14',     // rodapé
        branco: '#FFFFFF',
        creme: '#F5F0E8',     // fundo alternado entre seções
        texto: '#3A4470',     // texto corrido
        azulclaro: '#AEB7D9', // peças do padrão e detalhes
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],                       // títulos (sempre em caixa alta)
        condensed: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'], // subtítulos, botões, menu e números
        sans: ['Barlow', 'system-ui', 'sans-serif'],                       // textos corridos
      },
    },
  },
  plugins: [],
};
