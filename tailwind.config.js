/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        grayText: '#8f979b',
        main: '#17c8ca',
        bgGray: '#f7f7f6cc',
        blackText: '#414141',
        accent: '#909191'
    },
    },
    screens: {
      sm: '480px',
      md: '640px',
      lg: '768px',
      xl: '960px',
      '2xl': '1024px',
      '3xl': '1136px', 
      '4xl': '1263px',
      '5xl': '1440px',
    },
  },
  plugins: [],
}