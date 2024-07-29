import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        expandWidth: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        expandWidth: "expandWidth 1s ease-in-out forwards",
        "slide-left": "slide-left 8s linear infinite",
        slideUp: "slideUp 1s ease-out forwards",
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors: {
        brOrange: "#EC7700",
      },
    },
  },
  plugins: [],
};
export default config;
