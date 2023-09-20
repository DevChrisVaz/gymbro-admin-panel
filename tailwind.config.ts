import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': {
        '100': '#93dfc0',
        '200': '#77d6b0',
        '300': '#5ccea1',
        '400': '#41c691',
        '500': '#27be82',
        '600': '#21a671',
        '700': '#1d8f61',
        '800': '#187751',
        '900': '#135f41',
      },
      'white': '#FFFFFF',
      'light-green': '#7CD8B3',
      'dark-green': '#26BE81',
      'dark-gray': '#111111'
    },
    extend: {
      textColor: {
        'primary': '#27be82',
      },
      backgroundColor: {
        'primary': '#27be82',
        'dark': '#111111',
        'light': '#FFFFFF'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(135deg, #7CD8B3 0%, #26BE81 100%)'
      }
    },
  },
  plugins: [

  ],
  darkMode: 'class'
}
export default config
