import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1A16",       // deep pine-black, primary dark surface
        parchment: "#F7F2E7", // warm cream section background
        gilt: "#C9A24B",      // gold accent (signature)
        giltDeep: "#8E6E2B",  // deep gold for hover/borders
        moss: "#1E2E27",      // secondary dark surface (cards on ink)
        clay: "#7A5B3A",      // warm neutral for text on parchment
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
