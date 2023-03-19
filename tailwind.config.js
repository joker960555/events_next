/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: { 0.5: '0.12rem' },
			minHeight: {
				'1/2': '50vh',
			},
			height: {
				'1/10': '10%',
				'2/10': '20%',
				'7/10': '70%',
				'9/10': '90%',
				112: '28rem',
			},
			width: {
				'4/7': '57%',
				'5/11': '45.5%',
				'9/10': '90%',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
			},
			gridTemplateRows: {
				7: '7',
			},
		},
	},
	variants: {
		extend: {
			lineClamp: ['hover'],
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
