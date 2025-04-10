// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1e2a38",
        accent: "#00c3ff",
        highlight: "#00ffcc",
        card: "#2a3a4e",
      },
    },
  },
  plugins: [],
};
