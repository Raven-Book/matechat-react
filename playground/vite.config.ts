import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { createLogger, defineConfig } from "vite";

// Suppress warnings from Rolldown Vite
// This is due to compatibility issues with Vite and Rolldown Vite.
const logger = createLogger();
logger.warn = () => {};

export default defineConfig({
  root: "./playground",
  plugins: [react(), tailwindcss()],
  customLogger: logger,
});
