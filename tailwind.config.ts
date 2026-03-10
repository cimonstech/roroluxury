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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "roro-white": "#F5F0E8",
        "roro-black": "#0A0805",
        "roro-grey": "#8A8680",
        "roro-gold": "#C9A84C",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)"],
        syncopate: ["var(--font-syncopate)"],
        jost: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
export default config;
