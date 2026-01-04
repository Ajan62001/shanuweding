export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        amber: {
          50: '#fdfaf3',
          100: '#fbf5e6',
          200: '#f6e6c5',
          300: '#f0d29d',
          400: '#e8b86e',
          500: '#e09f45',
          600: '#d4862f',
          700: '#b06626',
          800: '#8f5024', // Primary text color
          900: '#764121',
          950: '#4a2613',
        }
      }
    },
  },
  plugins: [],
}
