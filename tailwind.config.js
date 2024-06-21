/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GratelosDisplay: ['GratelosDisplay', 'sans-serif'],
        Skia_normal: ['Skia_normal', 'sans-serif'],
        Skia: ['Skia', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}

