/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Poppins', 'system-ui', 'sans-serif'], // Modern, stylish fonts
      },
      colors: {
        primary: '#4F46E5', // Elegant blue shade
        secondary: '#9333EA', // Vivid purple accent
        background: '#111827', // Dark background for a premium feel
        card: '#1F2937', // Softer dark for card backgrounds
        textLight: '#E5E7EB', // Light text for dark mode
        textDark: '#1F2937', // Dark text for light mode
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for a clean UI
        deep: '0 10px 15px rgba(0, 0, 0, 0.3)', // Deeper shadow for strong elements
      },
      borderRadius: {
        xl: '1rem', // Smooth rounded corners
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Better text styles
    require('@tailwindcss/forms'), // Pre-styled form elements
    require('@tailwindcss/aspect-ratio'), // Better image/video handling
  ],
};
