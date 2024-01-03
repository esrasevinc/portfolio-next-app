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
        dark: '#181818'
      },

      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      
    },
    
  },
  plugins: [],
}
export default config
