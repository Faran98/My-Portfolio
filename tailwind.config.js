/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to top right, rgba(255, 165, 0, 0) 45%, rgba(255, 165, 0, 1) 100%)',
    },
    colors: {
      'nav-color': 'rgb(146, 78, 209)', 
      'nav-white':'rgb(0,0,0,0)',
      'nav-black':'rgb(0,0,0)',
    },
  },
  plugins: [],
  
}

