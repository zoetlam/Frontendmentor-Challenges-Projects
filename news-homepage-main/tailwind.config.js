/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", 
    "./**/*.{html,js}",
    "./assets/css/*.{css,html}" // Path to your CSS and any other files where Tailwind classes might appear
  ],// Adjust based on your folder structure
  theme: {
    extend: {},
  },
  plugins: [],
}

