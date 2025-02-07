/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{html,js}", "./assets/css/*.{css,html}"],
  theme: {
    extend: {
      fontFamily:{
        mainFont: ["PlusJakartaSans", 'serif']
      },
      colors:{
        "main-lime": "hsl(61, 70%, 52%)",
        "lime-light": "hsl(61, 70%, 52%,0.1)",
        "slate-300": "hsl(203, 41%, 72%)",
        "slate-500": "hsl(200, 26%, 54%)",
        "slate-700": "hsl(200, 24%, 40%)",
        "slate-900": "hsl(202, 55%, 16%)",
      }
    },
    
  },
  plugins: [],
}

