
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'milky': '#0e0d0d70',
        'white': '#FFFFFF',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#9b1f90',
        'green': '#90A88A',
        'yellow': '#ffc82c',
        'orange': '#dd7d2e',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'red': '#FF0000',
        'black': '#070707',
        'milky2': '#0e0d0dbd',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        roboto: ['Roboto', 'sans'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '.9rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
      },
      
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        dropShadow: {
          'top': '0px 5px 20px rgba(0,0,0,25)',
          'bott': '0px 5px 20px rgba(0,0,0,25)',
      },
      backgroundImage: {
        'movies': "url('./assets/movies.jpg')",

      }
      }
    }
  }
  plugins: []
