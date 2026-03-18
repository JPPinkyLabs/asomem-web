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
        rosa: {
          light: "#F5D0E0",
          DEFAULT: "#E8A0BF",
          dark: "#C77A9F",
        },
        lila: {
          light: "#EDD6F5",
          DEFAULT: "#DEB6E8",
          dark: "#B886C8",
        },
        azul: {
          light: "#D0E8F5",
          DEFAULT: "#A7C7E7",
          dark: "#7AA0C0",
        },
        menta: {
          light: "#D5EDE3",
          DEFAULT: "#B5D8C7",
          dark: "#8AB5A0",
        },
        durazno: {
          light: "#FAE8DE",
          DEFAULT: "#F5D5C8",
          dark: "#D0A898",
        },
        texto: {
          primary: "#3D2C3E",
          secondary: "#6A5A6C",
          muted: "#9A8A9C",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #FFF5F8 0%, #FDE8F0 30%, #F0E6F6 60%, #E8F4FD 100%)",
        "cta-gradient": "linear-gradient(135deg, #E8A0BF 0%, #DEB6E8 50%, #A7C7E7 100%)",
        "rosa-lila": "linear-gradient(135deg, #E8A0BF 0%, #DEB6E8 100%)",
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
