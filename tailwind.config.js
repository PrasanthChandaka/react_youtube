/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading: "clamp(14px,1.5vw,17px)",
        para: "clamp(14px,1.5vw,17px)",
      },
    },
  },
  plugins: [],
};
