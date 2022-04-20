module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'normal': ['Rubik', 'sans-serif'],
        'glitch': ['"Rubik Glitch"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'bounceIn': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
        'bounceOut': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDelay: {
        '800': '800ms',
      },
    },
  },
  plugins: [],
}