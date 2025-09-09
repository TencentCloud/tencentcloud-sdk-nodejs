import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/common/**/*.test.ts"],
    environment: "node",
    alias: {
      'common': new URL('./src/common', import.meta.url).pathname
    },
  },
});
