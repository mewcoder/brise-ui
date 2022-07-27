import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import unocss from "unocss/vite";
import { presetUno } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import { resolve } from "path";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  root: "playground",
  plugins: [
    vue(),
    unocss({ presets: [presetUno()], transformers: [transformerDirective()] }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "packages/theme/index.ts"),

      name: "index",
      formats: ["es"],
      // the proper extensions will be added
      fileName: "theme",
    },
  },
});
