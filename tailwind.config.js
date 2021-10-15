const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      center: true,
    },
    extend: {
      gridColumn: {
        'span-15': 'span 15 / span 15',
      },
      gridTemplateColumns: {
        track: 'repeat(auto-fit, minmax(300px, 1fr))',
        logo: 'repeat(auto-fit, minmax(50px, 1fr))',
      },
      spacing: {
        100: '41rem',
        92: '22rem',
        '1/10': '10%',
        '2/10': '20%',
        '4/10': '40%',
        '28/100': '28%',
        '60/100': '60%',
        '70/100': '70%',
        '8/10': '80%',
      },
      colors: {
        'color-primary': 'var(--text-color-primary)',
        'color-secondary': 'var(--text-color-secondary)',
        'background-dark': 'var(--background-dark)',
        'background-darker': 'var(--background-darker)',
        secondary: '#17171D',
        'purple-light': '#B6BAEA',
        date: '#E78967',
        'b-blue': '#71A0CE',
        'b-green': '#8FA963',
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      mid: { max: '1150px' },
      // => @media (max-width: 1150px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '760px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      sxm: { max: '600px' },
      // => @media {max-width: 600px}{...}

      '2xsm': { max: '500px' },
      // => @media {max-width: 500px}{...}

      '3xsm': { max: '400px' },
      // => @media {max-width: 500px}{...}
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
