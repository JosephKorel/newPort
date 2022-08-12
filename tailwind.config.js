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
      },
    },
  },
  plugins: [],
};
