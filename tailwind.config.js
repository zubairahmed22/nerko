/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '320px','max': '566px'},
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

