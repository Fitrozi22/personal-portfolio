/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
          dark: '#1b1b2b',
          light: '#f5f5f4',
          primary: '#863E99',
          primaryDark: '#58E6D9',
        },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
      backgroundImage: {
        cicuralLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
        cicuralDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b2b 5px, #1b1b2b 100px)',
        cicuralDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b2b 5px, #1b1b2b 80px)',
        cicuralLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px)',
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}

