// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ajusta esta ruta según la estructura de tu proyecto
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
