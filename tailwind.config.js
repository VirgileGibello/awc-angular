/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@agence-adeliom/awc/dist/tailwind')],
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

