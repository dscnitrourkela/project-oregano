/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        track: 'repeat(auto-fit, minmax(300px, 1fr))',
        logo: 'repeat(auto-fit, minmax(50px, 1fr))',
        schedule: 'repeat(4, minmax(500px, 1fr))',
      },
      fontSize: {
        xm: ['10px', '12px'],
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '3.5xl': '32px',
        '4xl': '36px',
        '4.5xl': '40px',
        '11xl': '86px',
        '12xl': '120px',
        '13xl': '48px',
        '14xl': '64px',
        '15xl': '80px',
      },
      padding: {
        side: '21.33px',
      },
      lineHeight: {
        3: '12px',
        3.5: '14px',
        4: '16px',
        4.5: '18px',
        5: '20px',
        5.5: '22px',
        6: '24px',
        7: '28px',
        9: '36px',
        10: '40px',
        11: '48px',
        12: '108px',
        13: '148px',
        14: '64px',
        15: '96px',
      },
      colors: {
        'background-primary': '#0E0812',
        'primary-pink': {
          50: '#FF8CD9',
          100: '#FF65CD',
          200: '#FF3FC0',
          300: '#CC329A',
        },
        'primary-purple': {
          50: '#C48DFF',
          100: '#B067FF',
          200: '#9C41FF',
          300: '#7D34CC',
        },
        'primary-blue ': {
          50: '#67E9FF',
          100: '35E1FF',
          200: '#02DAFF',
          300: '#02AECC',
        },
        'primary-green': {
          50: '#72F7BF',
          100: '#43F4AA',
          200: '#14F195',
          300: '#10C177',
        },
        'neutral-white': {
          50: '#FFFFFF',
          100: '#EDEDED',
          200: '#D9D9D9',
          300: '#C3C3C3',
          400: '#A1A1A1',
          500: '#858585',
          600: '#545454',
          700: '#9FA3A9',
        },
        'neutral-yellow': {
          50: '#FEE27F',
          100: '#FED954',
          200: '#FECF29',
          300: '#E5BA25',
        },
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
      },
      // Inter: ['inter', 'sans-serif'],
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
        Prompt: ['Prompt', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        wide: '0.25em',
        wider: '0.51em',
        widest: '0.62em',
      },
    },
  },
  plugins: [],
};
