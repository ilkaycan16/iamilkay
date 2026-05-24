import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#020617",
        panel: "#07111f",
        line: "rgba(148, 163, 184, .16)",
        platinum: "#f8fafc",
        muted: "#94a3b8",
        signal: "#67e8f9",
        market: "#34d399",
        sovereign: "#f8d27c"
      },
      boxShadow: {
        premium: "0 34px 120px rgba(0,0,0,.42)",
        glow: "0 0 90px rgba(56,189,248,.22)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
