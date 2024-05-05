/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        tomato: "#ff6257",
        darkSlateGray: "#242742",
        charcoalGray: "#36384e",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        mobile: 'url("./assets/images/illustration-sign-up-mobile.svg")',
        desktop: 'url("./assets/images/illustration-sign-up-desktop.svg")',
      },
    },
  },
  plugins: [],
};
