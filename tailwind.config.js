/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        royal: {
          DEFAULT: "#4361EE",
          50: "#EBEFFD",
          100: "#D9DFFC",
          200: "#B3BFF8",
          300: "#8EA0F5",
          400: "#6880F1",
          500: "#4361EE",
          600: "#1539E4",
          700: "#102CB1",
          800: "#0B1F7D",
          900: "#07124A",
        },
        gem: {
          DEFAULT: "#480CA8",
          50: "#A776F5",
          100: "#9B63F4",
          200: "#823DF1",
          300: "#6A17EE",
          400: "#580FCE",
          500: "#480CA8",
          600: "#320874",
          700: "#1B053F",
          800: "#05010B",
          900: "#000000",
        },
        gold: {
          DEFAULT: "#FFD400",
          50: "#FFF3B8",
          100: "#FFF0A3",
          200: "#FFE97A",
          300: "#FFE252",
          400: "#FFDB29",
          500: "#FFD400",
          600: "#C7A500",
          700: "#8F7700",
          800: "#574800",
          900: "#1F1900",
        },
      },
    },
  },
  plugins: [],
};
