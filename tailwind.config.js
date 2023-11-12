/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#435261',
        secondary: '#8676b6',
        link: '#2d6fb1',
      },
    },
  },
  plugins: [],
}