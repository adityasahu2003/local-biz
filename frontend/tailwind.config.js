/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          darkgreen: "#006d60",
          mediumgreen:"#0d9682"
      },
      secondary:{
      
      }

      }
      ,
     
    },
  },
  plugins: [],
}

