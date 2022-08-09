/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      stoke: ['"Stoke"', 'serif'],
      'special-elite': ['"Special Elite"', 'cursive'],
      'space-mono': ['"Space Mono"', 'monospace'],
    },
    extend: {
      colors: {
        jet: '#333030',
        celeste: '#a2f0f4',
        'yellow-orange': '#f4ac45',
      },
    },
  },
  plugins: [],
};
