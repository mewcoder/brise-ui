import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; 
import { resolve } from "path";
import path from "path";
import { fileURLToPath } from "url";
import unocss from "unocss/vite";
import { presetUno } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import { defaultTheme } from "brise-theme/preset.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  root: "playground",
  plugins: [
    vue(),
    vueJsx(),
    unocss({
      presets: [presetUno(), defaultTheme()],
      transformers: [transformerDirective()],
    }),
  ],

  build: {
    outDir: resolve(__dirname, "packages/theme"),
    // https://cn.vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: resolve(__dirname, "packages/theme/index.ts"),
      formats: ["es"],
    },
  },
});
