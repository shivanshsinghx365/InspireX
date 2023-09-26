/** @type {import('tailwindcss').Config} */

module.exports = {
  
  
  content: ["./dist/*.html"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
      }
    },
  },
  plugins: [],
}