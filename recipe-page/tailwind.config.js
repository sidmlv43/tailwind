/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        nutmeg: "hsl(14, 45%, 36%)",
        darkRaspberry: "hsl(332, 51%, 32%)",
        roseWhite: "hsl(330, 100%, 98%)",
        eggShell: "hsl(30, 54%, 90%)",
        lightGray: "hsl(30, 18%, 87%)",
        wengeBrown: "hsl(30, 10%, 34%)",
        darkCharcoal: "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        serif: ["Young Serif", "serif"],
      },
    },
  },
  plugins: [],
};
