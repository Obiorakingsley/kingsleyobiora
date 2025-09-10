import { plugin } from "postcss";
import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Aurore: "La Belle Aurore",
      },
      colors: {
        primary: "#ffd900d9",
        color: "#06162e",
      },
    },
  },
  plugins: [],
};
