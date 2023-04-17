const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          black: "#212b36",
          dark: "#090E34",
          "dark-700": "#090e34b3",
          primary: "#3056D3",
          secondary: "#13C296",
          "body-color": "#637381",
          warning: "#FBBF24",
          stone: colors.warmGray,
          sky: colors.lightBlue,
          neutral: colors.trueGray,
          gray: colors.coolGray,
          slate: colors.blueGray,
        },
      spacing: {
        '2/3': '66.666667%',
      },
    },
  },
  variants: {
    display:['group-hover'],
    extend: {},
  },
  plugins: [],

};
