import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react({
      babel: { plugins: [["babel-plugin-react-compiler", { target: "19" }]] },
    }),
    tailwindcss(),
  ],
  base: "/pokedex",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
