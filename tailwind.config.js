// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        courier: ['Courier Prime', 'monospace'], 
        lora: ['Lora Variable', 'serif'],
        inter: ['"Inter Variable"', 'sans-serif'], 

      },
    },
  },
  plugins: [],
}

