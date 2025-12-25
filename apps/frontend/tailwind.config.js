/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#4a8ca6',
          700: '#254856',
        },
      },
      textColor: {
        blue: '#8eadb1',
      },
      backgroundColor: {
        blue: '#8eadb1',
      },
    },
  },
  plugins: [],
};
