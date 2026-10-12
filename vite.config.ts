import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rolldownOptions: {
      external: (id) =>
        /^(vue|quasar|vitepress)(\/|$)/.test(id) ||
        id.startsWith("node:") ||
        id === "@localSearchIndex" ||
        id === "@siteData",
    },
  },
});
