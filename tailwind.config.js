/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
  ], // Look into layout folder, and find file ends with .liquid

  theme: {
    extend: {},
  },
  plugins: [],
};
