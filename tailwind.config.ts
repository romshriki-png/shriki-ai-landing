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
        bg: "#080C1F",
        navy: "#0B0F2E",
        navy2: "#141937",
        navy3: "#1B2147",
        teal: {
          DEFAULT: "#00C2C2",
          dark: "#00A5A5",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        scan: "scan 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        scan: {
          "0%": { top: "0%", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.6" },
          "100%": { top: "100%", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
