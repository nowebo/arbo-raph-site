/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          arbo: '#4a7c3f',
          dark: '#2d5a27',
          light: '#6aab5e',
          bg: '#f4f9f2',
        },
        orange: {
          arbo: '#e07b2a',
        },
      },
    },
  },
  plugins: [],
}
