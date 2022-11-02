const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
      },

      lineHeight: {
        3: '12px',
        3.5: '14px',
        4: '16px',
        4.5: '18px',
        5: '20px',
        6: '24px',
        7: '28px',
        9: '36px',
        10: '40px',
        11: '48px',
        12: '108px',
        13: '148px',
      },

      colors: {
        'color-primary': '#EAEAEA',
        'color-secondary': '#D6D6D6',
        'color-tertiary': '#A3A3A3',
        'color-back': '#202020',
      },

      // Noto: ['Noto Sans', 'sans-serif'],
      fontFamily: {
        Noto: ['Noto Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
