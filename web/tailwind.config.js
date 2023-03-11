/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        uospurple: "#3b1d8f",
        "uospurple-light": "#5c2e9f",
        "uospurple-dark": "#2a0e7f",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
