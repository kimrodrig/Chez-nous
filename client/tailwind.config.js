/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
    letterSpacing: {
      widest: '0.27em'
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
