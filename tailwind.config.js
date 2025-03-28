/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.{liquid,json}',
    './templates/customers/*.liquid',
	'./src/**/*.{js,ts,jsx,tsx,css}', // 加入 src 內所有 JS、TS、CSS 檔案
  ], // Look into layout folder, and find file ends with .liquid

  theme: {
    extend: {},
  },
  plugins: [],
};
