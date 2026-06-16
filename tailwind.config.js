/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: {
          DEFAULT: '#D4462C',
          dark: '#B83A24',
        },
        accent: '#E8B4A8',
        background: '#FAFAF7',
        surface: '#F0EDE8',
        text: '#1A1A1A',
        muted: '#6B6B6B',
        border: '#E0DDD8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
      },
      lineHeight: {
        'tight': '1.1',
        'relaxed': '1.7',
      },
    },
  },
  plugins: [],
}
