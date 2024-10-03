/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybg: "#F6F5F2",
        primarybtn: "#EB292C",
        primaryText: "#1f2937",
        secondaryText: "#9ca3af",
      },
    },
  },
  plugins: [],
};
