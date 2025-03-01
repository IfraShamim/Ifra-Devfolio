/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], 
        poppins: ["Poppins",'sans-serif'],
        cursvie: ['Cedarville Cursive','sans-serif']
      },
      colors: {
        primaryColor: "var(--primary-color)",
        textColor: "var(--text-color)",
        lightTextColor: "var(--light-text-color)", 
      },
    },
  },
  plugins: [],
}
