/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {fontFamily: {
      courier: ['Courier Prime', 'monospace'], 
      lora: ['Lora Variable', 'serif'],
      inter: ['"Inter Variable"', 'sans-serif'], 
      vcr: ['"VCR OSD Mono"', 'monospace'],

    },},
  },
  plugins: [],
};
