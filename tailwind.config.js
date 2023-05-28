/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        change: "transparent",
        ghost: {
          // 50: "#7A0031",
          // 100: "#8A0037",
          // 200: "#AD0045",
          // 300: "#D10054",
          // 400: "#F50062",
          // 500: "#FF1A75",
          // 600: "#E0005A",
          // 700: "#A80043",
          // 800: "#70002D",
          // 900: "#380016",
          // 950: "#1F000C",

          '50': '#eefbea',
          '100': '#d9f5d2',
          '200': '#b4ecaa',
          '300': '#86df77',
          '400': '#5dce4d',
          '500': '#3eb32f',
          '600': '#27801e',
          '700': '#246d1e',
          '800': '#21571d',
          '900': '#1f4a1d',
          '950': '#0c280b',
        },
        main: {
          '50': '#eff7fe',
          '100': '#e1f1fe',
          '200': '#c9e3fc',
          '300': '#a9d0f8',
          '400': '#86b2f3',
          '500': '#6995eb',
          '600': '#4d72de',
          '700': '#3f5ec3',
          '800': '#354f9e',
          '900': '#32477d',
          '950': '#101628',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: "" },
            "code::after": { content: "" },
          },
        },
      },
    },
  },

  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
