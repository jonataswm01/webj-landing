import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#0A0E14",
        dark: "#151922",
        gray: "#242933",
        "gray-light": "#3D4452",
        electric: "#00FF87",
        "electric-dim": "#00CC6D",
        white: "#FFFFFF",
        ghost: "#A0A7B8",
      },
      fontFamily: {
        titulo: ["var(--font-orbitron)", "system-ui", "sans-serif"],
        texto: ["var(--font-sora)", "sans-serif"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 255, 135, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 255, 135, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
