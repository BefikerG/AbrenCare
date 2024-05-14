/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
            "./src/**/*.html", 
            "./src/**/*.js"
  ],        
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', visibility: 'hidden' },
          '100%': { opacity: '1', visibility: 'visible' },
        },
        fadeOut: {
          '0%': { opacity: '1', visibility: 'visible' },
          '100%': { opacity: '0', visibility: 'hidden' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        fadeOut: 'fadeOut 1s ease-out forwards',
      },
    },
  },
  plugins: [],
});