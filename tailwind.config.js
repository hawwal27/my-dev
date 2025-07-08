/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: {
          600: "#D97706",
          700: "#B45309",
        },
      },
      backgroundImage: {
        // Custom named gradient or fallback patterns if needed
        'hero-gradient': "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
      },
    },
  },
  plugins: [],
};
