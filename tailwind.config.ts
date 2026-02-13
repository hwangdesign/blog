import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      spacing: {
        18: "4.5rem", /* 72px - 8배수 */
        22: "5.5rem", /* 88px - 8배수 */
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans-kr)", "IBM Plex Sans KR", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-sans-kr)", "IBM Plex Sans KR", "monospace"],
      },
      fontSize: {
        xs: ["var(--text-xs)", { lineHeight: "1.5" }],
        caption: ["var(--text-caption)", { lineHeight: "1.5" }],
        sm: ["var(--text-sm)", { lineHeight: "1.5" }],
        base: ["var(--text-base)", { lineHeight: "1.5" }],
        lead: ["var(--text-lead)", { lineHeight: "1.33" }],
        lg: ["var(--text-lg)", { lineHeight: "1.33" }],
        xl: ["var(--text-xl)", { lineHeight: "1.25", letterSpacing: "-1px" }],
        "2xl": ["var(--text-2xl)", { lineHeight: "1.25", letterSpacing: "-1px" }],
        "3xl": ["var(--text-3xl)", { lineHeight: "1.22", letterSpacing: "-1px" }],
        "4xl": ["var(--text-4xl)", { lineHeight: "1.17", letterSpacing: "-1px" }],
        "5xl": ["var(--text-5xl)", { lineHeight: "1.13", letterSpacing: "-1px" }],
      },
      colors: {
        brand: {
          green: "#76FF03",
          "green-dark": "#76FF03",
          "green-darker": "#76FF03",
        },
      },
    },
  },
  plugins: [],
};
export default config;
