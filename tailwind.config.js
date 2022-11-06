/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
  
  ],
  theme: {
    extend: {
      rounded:{
        '4xl': '50px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}