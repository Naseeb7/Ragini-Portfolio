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
        cherry: {
          '50': '#FFF5F7',
          '100': '#FCE7F3',
          '200': '#F8CCE4',
          '300': '#F3A8D4',
          '400': '#EE7DBF',
          '500': '#E85CAE',
          '600': '#DD4298',
          '700': '#D12781',
          '800': '#B5146B',
          '900': '#940554',
        },
        // Deep plum tones
        plum: {
          '50': '#F4EFF8',
          '100': '#DED0E3',
          '200': '#C5A6C9',
          '300': '#A77EA8',
          '400': '#8A5788',
          '500': '#6C3F6B',
          '600': '#512D53',
          '700': '#3A213C',
          '800': '#241629',
          '900': '#100B15',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
    },
  },
  plugins: [],
};
export default config;
