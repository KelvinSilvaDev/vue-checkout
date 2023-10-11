/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6905",
        secondary: "#004E71",
      },
      fontFamily: {
        inter: ['Inter', 'sans'], // 'Inter' deve corresponder ao nome da fonte
        segoe: ['Segoe UI', 'sans'],
      },  
    },
    // fontFamily: {
    //   Roboto: ["Roboto, sans-serif"],
    // },
    container: {
      padding: "3rem",
      center: true,
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    // },
  },
  plugins: [],
};
