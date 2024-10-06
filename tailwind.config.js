/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0C1429",
        gold: "#FFD700",
        lightGold: "#FFBF00",
      },
      fontSize: {
        tiny: "0.625rem",
        huge: "2.5rem",
      },
    },
  },
  plugins: [],
};
