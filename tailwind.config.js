/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-primary':'#01051e',
        'color-primary-light':'#020726',
        'color-primary-dark':'#010417',
        'color-secondary':'#ff7d3b',
        'color-gray':'#333',
        'color-gray-light':'#d1d5db',
        'color-white':'#fff',
        'color-blob':'#A427DF',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%', 
          md: '740px', 
          lg: '960px', 
          xl: '1120px', 
        },
      },
      fontFamily: {
        'myfont-body': ['Poppins', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

