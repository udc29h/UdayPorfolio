/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-white': '#ffffff',
        'custom-pink': '#ff69b4',
      },
      opacity: {
        '70': '0.7',
        '40': '0.4',
      },
    },
  },
  plugins: [],
}
