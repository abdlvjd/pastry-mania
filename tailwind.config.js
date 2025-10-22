/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E89AB5',
          teal: '#7DCCC8',
          dark: '#6b1b3a',
        },
      },
    },
  },
  plugins: [],
};
