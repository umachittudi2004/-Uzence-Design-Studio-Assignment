
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        spin: { to: { transform: 'rotate(360deg)' } }
      },
      animation: {
        spin: 'spin 1s linear infinite'
      }
    },
  },
  plugins: [],
}
