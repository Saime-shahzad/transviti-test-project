
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}" ,

  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '320px', 'max': '540px'},
        'min-sm': {'min': '540px', 'max': '640px'},
        'mid-xs': {'min': '540px', 'max': '768px'},
        'large-xs': {'min': '768px', 'max': '960px'},
        'mid-xl': {'min': '1170px'},
        'xxl': {'min': '1300px'},
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        
        '2xl': '1.6rem', // extra large
        'xxs': '0.7rem', // extra small 
      },
      colors: {
        primary: "#316CE2",
        white: "#FFFFFF",
        bodyColor: "#E7EBFD",
        redColor: "#FF5959",
      },
      letterSpacing: {
        'extra-wide': '0.2em',
        'super-wide': '0.4em',
      },
      zIndex: {
        '900': '900',
        '1200': '1200',
      }
    },

  },
 
  plugins: [],
});

