/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				spinX: "spinX 2000ms infinite linear",
				lumayan: "lumayan 888ms infinite ease-in-out",
				lumayan2: "lumayan2 888ms infinite ease-in-out",
				lumayan3: "lumayan3 1888ms infinite ease-in-out",
				lumayan4: "lumayan4 1888ms infinite ease-in-out",
			},
			keyframes: {
				spinX: {
					"100%": {
						transform: "rotateX(360deg)",
					},
				},
				lumayan: {
					"50%": {
						"outline-color": "#5e986f",
						"outline-offset": "4px",
					},
					"100%": {
						"outline-color": "#FFF",
					},
				},
				lumayan2: {
					"50%": {
						"outline-color": "rgb(202 138 4)",
						"outline-offset": "4px",
					},
					"100%": {
						"outline-color": "#FFF",
					},
				},
				lumayan3: {
					"50%": {
						"outline-color": "#5e986f",
					},
					"100%": {
						"outline-color": "#FFF",
					},
				},
				lumayan4: {
					"50%": {
						"outline-color": "rgb(202 138 4)",
					},
					"100%": {
						"outline-color": "#FFF",
					},
				},
			},
		},
		fontFamily: {
			basefont: ["Roboto", "sans-serif"],
			basefonttitle: ["Roboto", "sans-serif"],
		},
	},
	plugins: [],
};
