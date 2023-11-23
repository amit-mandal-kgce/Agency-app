/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#22d3ee",
      },
      container: {
        center: true,
        padding: "15px",
      }
    },
  },
  plugins: [],
};

