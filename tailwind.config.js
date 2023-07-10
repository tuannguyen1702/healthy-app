module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#fff',
        'primary-300': '#FFCC21',
        'primary-400': '#FF963C',
        'primary-500': '#EA6C00',
        'secondary-300': '#8FE9D0',
        'gray-400': '#777777',
        'dark-500': '#414141',
        'dark-600': '#2E2E2E'
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(5deg, #FFCC21, #FF963C)',
      },
      height: {
        '312': '312px'
      },
      width: {
        'ar': '540px'
      },
    },
  },
  plugins: [],
}