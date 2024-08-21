/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'main': ["DM Sans", 'sans-serif'],
    },
    extend: {

    },
    plugins: [
      require('@tailwindcss/typography'),
    ]
  },
};
