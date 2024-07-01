/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen: '#00ff00',
        customLightGray: '#cccccc',
        cutomWhite: '#ffffff',
        googleRed: '#DB4437',
        facebookBlue: '#1877F2'
      }
    },
  },
  plugins: [],
}

