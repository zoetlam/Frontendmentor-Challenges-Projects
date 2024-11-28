/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{html,js}", "./assets/css/*.{css,html}"],
  theme: {
    extend: {
      colors: {
        "pale-cyan": "hsl(193, 100%, 96%)",
        "dark-cyan": "hsl(192, 100%, 9%)",
        "grayish-blue": "hsl(208, 11%, 55%)",
        "primary-pink":  "hsl(322, 100%, 66%)",
      }
    },
    fontFamily:{
      opensans: ["Open Sans"],
    },
  },
  plugins: [],
}

