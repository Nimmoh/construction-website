module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f4",
          100: "#dcf2e4", 
          200: "#bce5cd",
          300: "#8dd1a8",
          400: "#56b47c",
          500: "#2d7a4f",
          600: "#1f5d3a",
          700: "#1a4a2f",
          800: "#163b27",
          900: "#143122",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa", 
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        }
      }
    },
  },
  plugins: [],
};
