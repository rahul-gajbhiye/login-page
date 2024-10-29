// tailwind.config.js
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
	  extend: {
        backgroundImage: {
			'custom-image': "url('/src/assets/chat.jpg')",
		},

	  },
	},
	plugins: [],
};
  