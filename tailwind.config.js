/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto San"', ...defaultTheme.fontFamily.sans],
      },

      // animation: {
      //   scaleup: 'scaleup 20s infinite',
      // },
      // keyframes: {
      //   scaleup: {
      //     '0%': {
      //       transform: 'scale(1)',
      //     },

      //     '100%': {
      //       transform: 'scale(1.2)',
      //     },
      //   },
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
