export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'manrope': ["Manrope", 'serif']
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}