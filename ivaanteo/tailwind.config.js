/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'], // Custom font for titles
        body: ['Futura', 'Jost', 'sans-serif'], // Default for body text
      },
    },
  },
  plugins: [],
}

