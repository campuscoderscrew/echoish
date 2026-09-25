import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves this repo at /echoish/. If the site moves to its own
  // domain (or the repo is renamed), build with VITE_BASE=/ (or the new path).
  // main.tsx reads this through import.meta.env.BASE_URL, so routing follows.
  base: process.env.VITE_BASE ?? "/echoish/",
  resolve: {
    alias: {
      "@assets": path.resolve(import.meta.dirname, "./src/assets"),
    },
  },
});
