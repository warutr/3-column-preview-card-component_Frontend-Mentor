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
        primary: {
          Bright_orange: "hsl(31, 77%, 52%)",
          Dark_cyan: "hsl(184, 100%, 22%)",
          Very_dark_cyan: "hsl(179, 100%, 13%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
