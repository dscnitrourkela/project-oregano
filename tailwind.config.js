/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        proza: 'var(--ProzaLibre)',
        inter: 'var(--Inter)',
        prompt: 'var(--Prompt)',
        dmsans: 'var(--DM_Sans)',
        satoshi: 'var(--Satoshi)',
      },
    },
  },
  plugins: [],
};
