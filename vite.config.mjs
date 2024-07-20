import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/thetrotfreak.github.io/", // Replace with your GitHub repository name
});
