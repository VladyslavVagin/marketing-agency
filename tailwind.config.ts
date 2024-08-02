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
        accent: "#583EBC",
        blackLight: "#333333",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        paytoneOne: ["var(--font-paytone-one)", ...fontFamily.sans],
      },
      fontSize: {
        logo: ["40px", "48px"],
      }
    },
  },
  plugins: [],
};
export default config;
