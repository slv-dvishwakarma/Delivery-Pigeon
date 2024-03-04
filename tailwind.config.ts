import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
      },
      screens: {
        sm: '600px',
        md: '768px',
        lg: '1140px',
        xl: '1440px',
      },
      colors: {
        "light-black" : "#363636",
        "paragraph-color": "#787878",
        "normal-light": "#cfcfcf",
        "bg-color": "#FCFCFC",
        "theme-primary": "#005AAB",
        "bredcrumb-color": "#cfcfcf"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
