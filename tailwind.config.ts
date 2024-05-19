import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        "bottom-10p": "center bottom 30%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-section-bg": "url(/hero-section-background.jpg)",
      },
      boxShadow: {
        "3xl": "0 10px 30px -5px rgba(255, 255, 255, 0.3)",
      },
      colors: {
        color: {
          1: "#8DD1F4",
          2: "#547B8F",
          3: "#2FB3F5",
          4: "#49555C",
          5: "#293033",
        },
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".h1": {
          "@apply uppercase tracking-wide font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
      });
    }),
  ],
};
export default config;
