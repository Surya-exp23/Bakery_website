/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // adjust if your HTML is inside folders
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}