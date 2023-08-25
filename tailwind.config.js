/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      basefont: ["Roboto", "sans-serif"],
      basefonttitle: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
