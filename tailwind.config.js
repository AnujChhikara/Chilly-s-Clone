/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        first:
          "url('https://pbs.twimg.com/media/Ex9Qt87XEAAk2KB?format=jpg&name=small')",
        second:
          "url('https://pbs.twimg.com/media/Ewifrs-WgAkzrz5?format=jpg&name=small')",

        third:
          "url('https://pbs.twimg.com/media/ErjNGdMXcAg1ZYE?format=jpg&name=small')",

        fourth:
          "url('https://pbs.twimg.com/media/ErJdLW6XAAAPQft?format=jpg&name=small')",
      },
      screens: {
        sm: "300px",

        md: "720px",

        lg: "1440px",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        Sans: ["Source Sans Pro", "sans-serif"],
        merri: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
