/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},

     fontSize: {
      H2 : ['40px','48px'],
      H3 : ['32px','40px'],
      H4 : ['24px','28px'],
      B1 : ['20px', '24px'],
      B2 : ['18px','20px'],
      BML : ['18px','20px'],
      C : ['14px','18px'],
      N : ['18px','20px'],
      BM : ['14px','18px'],
      h2 : ['32px','36px'],
      h3 : ['20px','24px'],
      h4 : ['18px','18px'],
      b1 : ['14px','18px'],
      b2 : ['12px','14px'],
      bml : ['14px','16px'],
      c : ['10px','12px'],
      n : ['14px','24px'],
      bm : ['12px','14px'],
      },

    colors: {
       'color-primary': '#EAEAEA',
       'color-secondary': '#D6D6D6',
       'color-tertiary': '#A3A3A3',
     },

    fontFamily: {
      normal : ['San-Francisco','san']
    }
  },
  plugins: [],
};
