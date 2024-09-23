/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hv': { 'raw': '(width: 1080px) and (height: 1920px)' },
      },
    },
  },
  plugins: [],
}

