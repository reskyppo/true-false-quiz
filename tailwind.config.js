const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        100: "#C9C6E6",
        300: "#9A95CA",
        500: "#6F69AC",
        700: "#4D4691",
        900: "#332C77",
      },
      secondary: {
        100: "#FFA269",
        300: "#FD883F",
        500: "#F56309",
        700: "#BE4A02",
        900: "#963900",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.purple,
      pink: colors.pink,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
