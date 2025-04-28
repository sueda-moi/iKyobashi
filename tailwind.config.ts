import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',  //  >= 640px
      md: '768px',  //  >= 768px
      lg: '1024px', //  >= 1024px
      xl: '1280px', //  >= 1280px
    },
  },
  plugins: [],
};

export default config;
