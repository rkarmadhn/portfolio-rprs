import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "./src/config/**",
      "shared/*",
    ],
    dir: "test",
    globals: "true",
    coverage: {
      provider: "istanbul",
    }
  },
});
