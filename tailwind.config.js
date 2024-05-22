/** @type {import('tailwindcss').Config} */
import colors from "./src/data/colors.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", 'sans-serif'],
        mulish: ["Mulish", 'sans-serif']
      },
      colors: colors,
      backgroundImage: {
        'hero-pattern': "url('./assets/images/HeroImage.png')",
      },
      gridTemplateColumns: {
        'auto-fill-271': 'repeat(auto-fill, minmax(271px, 1fr))',
      },
      screens: {
        sm: '425px'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.cut-multiline': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

