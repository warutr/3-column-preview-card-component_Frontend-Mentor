import { Big_Shoulders_Display } from "next/font/google";
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
      colors: {
          brightOrange: "hsl(31, 77%, 52%)",
          darkCyan: "hsl(184, 100%, 22%)",
          veryDarkCyan: "hsl(179, 100%, 13%)",
          transparentWhite: 'hsl(var(--color-transparentWhite))',
          veryLightGray: 'hsl(var(--color-veryLightGray))',
      },
    },
  },
  plugins: [],
};
export default config;
