import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //setting an alias, makes it easier to import from components like app.jsx
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
