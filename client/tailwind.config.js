/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'}
      }
    },
    letterSpacing: {
      wide: '0.03em',
      wider: '0.2em',
      widest: '0.27em',
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
