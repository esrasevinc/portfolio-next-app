import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },

      colors: {
        light: '#f5f5f5',
        dark: '#121212'
      },

      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      
    },
    screens: {
      '2xl': {max: "1535px"},
      xl: {max: "1279"},
      lg: {max: "1023px"},
      md: {max: "767px"}, 
      sm: {max: "639px"}, 
      xs: {max: "479px"}
    }
  },
  plugins: [],
}
export default config
