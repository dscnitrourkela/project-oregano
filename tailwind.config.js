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
        21: 'repeat(21, minmax(0, 1fr))',
      },
      spacing: {
        100: '41rem',
        420: '420px',
        360: '360px',
        315: '315px',
        270: '270px',
      },
      colors: {
        'color-primary': 'var(--text-color-primary)',
        'color-secondary': 'var(--text-color-secondary)',
        'background-dark': 'var(--background-dark)',
        'background-darker': 'var(--background-darker)',
        secondary: '#17171D',
        'purple-light': '#B6BAEA',
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      
      mid: { max: '850px' },
      // => @media (max-width:850px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      mobile: { max: '360px' },
      // => @media (max-width:850px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
