/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        nav: "#525aa0",
        section3: "#202229",
        darkGray: '#0C0C0C',
        darkerGray: '#202229',
        footerCustom: "#525AA0",
        button: '#292B34'
      },
      fontFamily: ['Switzer']
    },
  },
  plugins: [],
}