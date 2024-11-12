/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", 
    "./**/*.{html,js}",
    "./assets/css/*.{css,html}" // Path to your CSS and any other files where Tailwind classes might appear
  ],// Adjust based on your folder structure
  theme: {
    extend: {
      fontFamily:{
        "josefin": ["Josefin Sans"],
      },
      colors:{
        'pink-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)',
        'dark-red': 'hsl(0, 6%, 24%)',
        'linear-pink': 'hsl(0, 80%, 86%)',
        'linear-red': 'hsl(0, 74%, 74%)',
      }
    },
  },
  plugins: [],
}

