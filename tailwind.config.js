module.exports = {
  content: ["./layouts/**/*.{html,js}", "../../layouts/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'serif': ["Cormorant Garamond", 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times'],

    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
