/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, rgba(255, 165, 0, 0) 45%, rgba(255, 165, 0, 1) 100%)',
      },
      colors: {
        'custom-green': '#00ff99',
      },
    },
  },
  plugins: [],
}

