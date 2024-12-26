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
      },
      boxShadow: {
        'shadow-primary': "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
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
            opacity: '0.8',
            'stroke-width': '1',
            'stroke-dasharray': '0 0',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '1',
            'stroke-width': '2',
            'stroke-dasharray': '100% 0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0.8',
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
      }
    },
  },
  plugins: [],
};

export default config;
