/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#010851",
        "secondary":"#9A7AF1",
        "tartiary":"#707070",
        "pink":"#EE9AE5"
      },
      boxShadow:{
        '3xl':'0 35px 60px -15px rgba(0,0,0,0.3)'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}

