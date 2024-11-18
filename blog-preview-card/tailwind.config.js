/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{html,js}", "./assets/css/*.{css,html}"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#F4D04E",
        "gray-950": "#111111",
        "gray-500": "#6B6B6B",
      },
      fontFamily: {
        figtree: ["Figtree"],
      },
      spacing: {
        '5-125': "5.125rem",
      },
    },
  },
  plugins: [],
};
