const colors = require("tailwindcss/colors")

module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {},

    colors: {
      primary: {
        300: "rgb(252,144,104)", 
        500: "rgb(255,81,81)",
        700: "rgb(255,63,38)",
      },

      white: "rgb(255,255,255)",
      gray: colors.gray
    },

    
  },

  plugins: [],
};

