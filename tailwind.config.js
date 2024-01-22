/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@agence-adeliom/awc/tailwind')],
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

