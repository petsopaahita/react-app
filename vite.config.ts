// filepath: /c:/Users/ACER/react-app/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-app/", // Add this line
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
