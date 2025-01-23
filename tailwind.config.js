/** @type {import('tailwindcss').Config} */
export default {  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      animation: {
        'wiggle': 'wiggle 3s linear infinite',
      }
    },
  },
  plugins: [],
};
