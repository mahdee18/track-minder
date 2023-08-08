module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'rubik': ['Rubik Gemstones', 'cursive'],
        'lexend': ['Lexend', 'sans-serif'],
        'rosarivo': ['Rosarivo', 'serif']
      },
      colors: {
        'primary': '#275A53',
        'secondary': '#71C2B7',
        'tertiary': '#F6EFEB',
        'light': '#F7F7FC',
        'dark': '#1D1C1F',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}