/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontfamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
      },
      backgroundImage: {
        galaxy: "url('/Fundo.jpg')",
        'nlw-gradient' : 'linear-gradient(89.86deg, #9572FC 37.08%, #43E7AD 60.35%, #E1D55D 0.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    },
  },
  plugins: [],
}