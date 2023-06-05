/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				fontBold: ['Poppins Semi-Bold', 'sans-serif'],
				fontRegular: ['Poppins Regular', 'sans-serif'],
				fontMedium: ['Poppins Medium', 'sans-serif'],
			},
			colors: {
				primary: '#27272A',
				secondary: '##B91C1C',
				tertiary: '#ffffff',
			},
		},
	},
	plugins: [],
};
