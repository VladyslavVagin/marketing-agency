import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#2F4858",
        accent: "#33658A",
        blackLight: "##2F4858",
        yellowIcon: "#F6AE2D",
        grayText: "rgba(51, 51, 51, 0.5)",
        lightBlue: "#86BBD8"
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        paytoneOne: ["var(--font-paytone-one)", ...fontFamily.sans],
      },
      fontSize: {
        logo: ["40px", "48px"],
        titleMain: ["56px", "64px"],
        notFound: ["186px", "200px"],
      },
      transformOrigin: {
        "50": "50% 50%",
      },
      keyframes: {
        "stroke-offset": {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "stroke-offset": "stroke-offset 0.35s linear",
      },
    },
  },
  plugins: [],
};
export default config;
