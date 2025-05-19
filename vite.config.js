import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    open: true,
  },
test: {
  environment: 'jsdom',
  globals: true,
 setupFiles: 'src/setupTests/setupTests.js',
}

});
