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
      },
    },
  },
  plugins: [],
};

export default config;
