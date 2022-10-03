/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgCol: "#181719",
        textcol: "#828282",
        footertext: "#A9A9A9",
      },
      fontFamily: {
        crimsonPro: ["Crimson-pro", "serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        regular: "500",
      },
    },
  },
  plugins: [],
};
