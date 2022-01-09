module.exports = {
  purge: {
    content: ['./**/*.html', './**/*.js']
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      'serif': ['Nunito', 'ui-serif'],
      'display': ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
