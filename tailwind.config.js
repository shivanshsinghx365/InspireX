/** @type {import('tailwindcss').Config} */

module.exports = {
  
  
  content: ["./dist/*.html"],
  darkMode:'class',
  theme: {
    screens: {
      'x-sm': '240px',
      // => @media (min-width: 640px) { ... }

      'sm': '620px',
      // => @media (min-width: 768px) { ... }

      'md':'650px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
      }
      
    },
  },
  plugins: [],
}
