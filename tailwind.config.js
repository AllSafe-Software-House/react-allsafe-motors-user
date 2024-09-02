/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'main': ["DM Sans", 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [require('daisyui')],
};
