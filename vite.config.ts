import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      quoteStyle: "double",
    }),
    react({ babel: { plugins: [["babel-plugin-react-compiler"]] } }),
    tailwindcss(),
  ],
  base: "/pokedex",
  resolve: { alias: { "@": "/src" } },
});
