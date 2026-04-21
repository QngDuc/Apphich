import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Netflix Brand Colors
        netflix: {
          red: "#e50914",
          "red-dark": "#b81d13",
          "red-darker": "#831010",
          black: "#141414",
          "black-light": "#1f1f1f",
          "black-lighter": "#2a2a2a",
          "black-dark": "#0d0d0d",
          gray: {
            light: "#e5e5e5",
            medium: "#b3b3b3",
            dark: "#808080",
          },
          gold: "#ffd700",
        },
      },
      backgroundColor: {
        netflix: "#141414",
        "netflix-card": "#2a2a2a",
      },
      textColor: {
        netflix: "#e5e5e5",
        "netflix-secondary": "#b3b3b3",
      },
      backgroundImage: {
        "netflix-gradient": "linear-gradient(135deg, #e50914 0%, #b81d13 100%)",
        "netflix-overlay": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.9) 100%)",
      },
      boxShadow: {
        "netflix-sm": "0 1px 2px rgba(0, 0, 0, 0.5)",
        "netflix-md": "0 4px 6px rgba(0, 0, 0, 0.6)",
        "netflix-lg": "0 10px 25px rgba(0, 0, 0, 0.8)",
        "netflix-xl": "0 20px 40px rgba(0, 0, 0, 0.9)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in",
        "fade-out": "fadeOut 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
