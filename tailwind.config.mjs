/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        '3xl': '1536px',
      }
    },
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '992px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1536px',
        '4xl': '1848px',
      },
      colors: {
        'primary': "#ff014f",

        'white': "#ffffff",
        'light': "#c4cfde",

        'bg-dark': "#212428",
        'dark-primary': "#1e2024",
        'dark-secondary': "#23272b",

        'shadow-color-1': "#1c1e22",
        'shadow-color-2': "#262a2e",

      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(145deg, #1e2024, #23272b)',
        'gradient-secondary': 'linear-gradient(to right bottom, #212428, #16181c)',
      },
      boxShadow: {
        'shadow-primary': "10px 10px 19px #1c1e22, -10px -10px 19px #2d3136",
      },

      fontFamily: {
        'Poppins': "'Poppins', sans-serif",
        'Roboto': "'Roboto', sans-serif",
        'Montserrat': "'Montserrat', sans-serif",
        'Edu-AU': "'Edu AU VIC WA NT Arrows', serif",
      },
      animation: {
        'loading': 'loading 1s infinite alternate',
        'exit': 'exit-animation 0.5s forwards',
        'wave': 'wave 2s linear infinite',
        'pulsate': 'pulsate 3s infinite alternate ease-in-out',
        'stroke': 'stroke 4s',
        'slide-up': 'slideUp 0.45s ease-out',
        'slide-down': 'slideDown 0.45s ease-out',
      },
      keyframes: {
        'loading': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'exit-animation': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.5)' },
        },
        'wave': {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
        },
        'pulsate': {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.2',
            'stroke-width': '1',
            'stroke-dasharray': '0 0',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.4',
            'stroke-width': '2',
            'stroke-dasharray': '100% 0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0.2',
            'stroke-width': '1',
            'stroke-dasharray': '0 50%',
          },
        },
        'stroke': {
          '0%': {
            'stroke-dashoffset': '25%',
            'stroke-dasharray': '0 50%',
            'stroke-width': '1',
          },
          '100%': {
            'stroke-dashoffset': '100%',
            'stroke-dasharray': '100% 0',
            'stroke-width': '2',
          },
        },
        'shake': {
          '0%': { transform: 'translate(2px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slideDown': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      }
    },
  },
  plugins: [],
};

export default config;
