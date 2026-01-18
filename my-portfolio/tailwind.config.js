// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   // App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // Pages Router (if used)
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bottle-green': {
          DEFAULT: '#006A4E',
          dark: '#004B3A',
          hover: '#007F5C',
          light: '#E6F2EE',
        },
      },
    },
  },
};
