import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          '50': '#E6E6E6',
          '100': '#CCCCCC',
          '200': '#B3B3B3',
          '300': '#999999',
          '400': '#808080',
          '500': '#666666',
          '600': '#4D4D4D',
          '700': '#333333',
          '800': '#1A1A1A',
          '900': '#000000',
        },
        white: {
          '50': '#FFFFFF',
          '100': '#F2F2F2',
          '200': '#E6E6E6',
          '300': '#CCCCCC',
          '400': '#B3B3B3',
          '500': '#999999',
          '600': '#808080',
          '700': '#666666',
          '800': '#4D4D4D',
          '900': '#333333',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
};
export default config;
