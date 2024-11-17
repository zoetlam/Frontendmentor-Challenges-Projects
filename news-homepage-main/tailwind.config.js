/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", 
    "./**/*.{html,js}",
    "./assets/css/*.{css,html}" // Path to your CSS and any other files where Tailwind classes might appear
  ],// Adjust based on your folder structure
  theme: {
    extend: {
      colors:{
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'dark-blue': 'hsl(240, 100%, 5%)'
      },
      fontFamily:{
        'inter': ["Inter"]
      },
      fontSize:{
        'big': '2rem'
      }
    },
  },
  plugins: [],
}

