/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Aurore: "La Belle Aurore",
      },
      colors: {
        primary: "#ffd700",
      },
    },
  },
  plugins: [],
};
