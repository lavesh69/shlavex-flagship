import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#F4F4F4",
        shlavex: {
          void: "#050505",
          dark: "#0B0B0B",
          graphite: "#151515",
          surface: "#1A1A1A",
          border: "rgba(255, 255, 255, 0.12)",
          "border-subtle": "rgba(255, 255, 255, 0.06)",
          text: "#F4F4F4",
          muted: "#B4AEA4",
          dim: "#7C776F",
          silver: "#D4D0C8",
          champagne: "#E8E2D5",
          accent: "#ECE7DE",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cinzel", "Cormorant Garamond", "Didot", "Bodoni MT", "Georgia", "serif"],
        editorial: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        widest: "0.25em",
        mega: "0.35em",
        ultra: "0.45em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
