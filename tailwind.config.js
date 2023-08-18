/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkGray: '#333333',
        medGray: '#bdbdbd',
        containerBgGray: '#fcfcfc',
        lightGray: '#f6f6f6',
        semiGray: '#efefef',
        hoverGray: '#D1D1D1',
        succes: '#40B453',
        error: '#EE2130',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      letterSpacing: {
        verywide: '0.2rem',
      },
      maxHeight: {
        180: '45rem',
      },
      fontSize: {
        '10xl': ['10rem', '10rem'],
      },
    },
  },
  plugins: [],
};
