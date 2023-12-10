/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "food-image":
          "url('../src/img/lampos-aritonang-24gR_9lCdes-unsplash 1.svg')",
      },
      colors: {
        yellow: "#FFD15B",
      },
      fontFamily: {
        manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
        anton: ['"Anton"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xl: "3rem",
      },
    },
  },
  plugins: [],
};
