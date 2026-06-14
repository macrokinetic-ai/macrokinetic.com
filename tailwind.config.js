/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial pure-white system
        canvas: "#FFFFFF",
        paper: "#FAFAFA",
        ink: "#111111",
        graphite: "#3A3A3A",
        muted: "#6B6B6B",
        faint: "#9A9A9A",
        // Brand accents (sourced from the MacroKinetic wordmark)
        macro: "#15A04A", // green — "MACRO"
        kinetic: "#E2231A", // red — "KINETIC"
        // Hairline reference token
        hairline: "rgba(17,17,17,0.10)",
        "hairline-strong": "rgba(17,17,17,0.18)",
      },
      borderWidth: {
        // Japanese minimalist hairline grid
        hair: "0.5px",
        "1.5": "1.5px",
      },
      borderColor: {
        DEFAULT: "rgba(17,17,17,0.10)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Inter",
          "Arial",
          "sans-serif",
        ],
        serif: ["ui-serif", "Georgia", "Times New Roman", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        editorial: "0.02em",
        tracked: "0.18em",
        wide2: "0.32em",
      },
      maxWidth: {
        editorial: "1400px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
