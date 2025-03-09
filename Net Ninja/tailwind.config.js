/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',  // Include all HTML files in public
    './src/**/*.{html,js,ts,jsx,tsx}' // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily:{
        body:['Nunito']
      }

    },
  },
  plugins: [],
}
