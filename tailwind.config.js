/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading: "clamp(16px,1.5vw,18px)",
      },
    },
  },
  plugins: [],
};
