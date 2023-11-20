// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
      extend: {
        keyframes: {
          colorChange: {
            '0%': { color: '#313866' },
            '10%': { color: '#504099' },
            '30%': { color: '#9838D1' },
            '50%': { color: '#F440D2' },
            '70%': { color: '#9838D1' },
            '90%': { color: '#504099' },
            '100%': { color: '#313866' },
          },
        },
        animation: {
          colorChange: 'colorChange 3s linear infinite',
        },
      },
    },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};

export default config;
