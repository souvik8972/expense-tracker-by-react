/** @type {import('tailwindcss').Config} **/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        "light-purple": "#B3AFE9",
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#050C9C',
        "lightblue": "#4B70F5",
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'cus-white': "#f3e8ff"

      },
      fontFamily: {
        marcellus: ['Marcellus', 'serif'],
        Rubik: ['Rubik', 'sans-serif'], // Add custom font family
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
      }
    },
  },
  plugins: [],
}