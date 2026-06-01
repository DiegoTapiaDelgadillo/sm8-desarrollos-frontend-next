import tailwindcssAnimated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./page/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimated],
};
