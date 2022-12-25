/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        'mainFont': ['DM Sans', 'sans-serif'],
        'baseFont': ['GeneralSans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
