/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      stoke: ['"Stoke"', 'serif'],
      'special-elite': ['"Special Elite"', 'cursive'],
    },
    extend: {
      colors: {
        jet: '#333030',
        celester: '#a2f0f4',
      },
    },
  },
  plugins: [],
};
