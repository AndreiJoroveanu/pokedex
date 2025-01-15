/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:is(.system *) }",
      "&:is(.dark *)",
    ],
  ],
};
