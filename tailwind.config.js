/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          "primary":          "#00c9a7",
          "secondary":        "#0a2540",
          "accent":           "#ff6b35",
          "neutral":          "#112240",
          "base-100":         "#060f1e",
          "base-200":         "#0d1f35",
          "base-300":         "#112240",
          "base-content":     "#e2e8f0",
          "info":             "#4facfe",
          "success":          "#00c9a7",
          "warning":          "#ffce56",
          "error":            "#ff6b35",
        },
      },
      {
        light: {
          "primary":          "#009e83",
          "secondary":        "#e2f0ee",
          "accent":           "#d4521e",
          "neutral":          "#f0f4f8",
          "base-100":         "#f0f4f8",
          "base-200":         "#ffffff",
          "base-300":         "#ffffff",
          "base-content":     "#1e293b",
          "info":             "#2d7ade",
          "success":          "#009e83",
          "warning":          "#b38900",
          "error":            "#d4521e",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
};
