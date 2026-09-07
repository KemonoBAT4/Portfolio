/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#12141B",
        surface: "#1B1E28",
        "surface-hover": "#232838",
        border: "#2A2F3D",
        text: "#E7E9EE",
        muted: "#8B90A3",
        accent: "#F2A93B",
        "accent-soft": "rgba(242, 169, 59, 0.12)",
        accent2: "#6EE7C8",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
