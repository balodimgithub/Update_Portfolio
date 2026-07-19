/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#F6F3EC",
        paper: "#FBF9F4",
        ink: "#11201A",
        ledger: {
          50: "#EAF4ED",
          100: "#CFE8D6",
          200: "#A8D8B6",
          300: "#79C091",
          400: "#4DA86E",
          500: "#2F8C54",
          600: "#1F7A4D",
          700: "#15603C",
          800: "#0E3B2E",
          900: "#0A2A21",
        },
        glow: "#A8E6B5",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(168, 230, 181, 0.55)",
        glowSoft: "0 0 14px rgba(31, 122, 77, 0.35)",
      },
      keyframes: {
        pulseLine: {
          "0%, 100%": { opacity: 0.4, transform: "scaleX(0.92)" },
          "50%": { opacity: 1, transform: "scaleX(1)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulseLine: "pulseLine 2.4s ease-in-out infinite",
        floatUp: "floatUp 5s ease-in-out infinite",
        ticker: "ticker 24s linear infinite",
      },
    },
  },
  plugins: [],
};
