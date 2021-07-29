const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: '0px',
      180: '180px',
    },
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
        footer: 'repeat(3, minmax(270px, 1fr))',
        footerMid: 'repeat(auto-fit, minmax(270px, 1fr))',
        footerMd: 'repeat(auto-fit, minmax(270px, 400px))',
      },
      spacing: {
        100: '41rem',
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

      mid: { max: '1150px' },
      // => @media (max-width: 1150px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
