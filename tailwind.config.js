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
        100: "#EFFDF8",
        300: "#C4EFE0",
        500: "#95DAC1",
        700: "#67BD9F",
        900: "#419E7D",
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
