import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			// Everforest
			"background-color": "#1e2326",
			"primary-color": "#3c4841",
			"primary-dark-color": "#272e33",
			"primary-light-color": "#9DA9A0",
			// "primary-light-color": "#DBBC7F",
			"foreground-color": "#d3c6aa",
		},
		extend: {
			backgroundImage: {
				hero: "url('/hero_background.jpeg')",
			},
			screens: {
				md: "768px",
				lg: "992px",
				xl: "1200px",
			},
		},
	},
	plugins: [],
};
export default config;
