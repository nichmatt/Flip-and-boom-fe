/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinX: "spinX 2000ms infinite linear"
      },
      keyframes: {
        spinX: {
					"100%": {
						"transform": "rotateX(360deg)",
					},
				},
      }
    },
    fontFamily: {
      basefont: ["Roboto", "sans-serif"],
      basefonttitle: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
