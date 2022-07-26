import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import unocss from "unocss/vite";
import { presetUno } from "unocss";
import transformerDirective from "@unocss/transformer-directives";

// https://vitejs.dev/config/
export default defineConfig({
  root: "playground",
  plugins: [
    vue(),
    unocss({ presets: [presetUno()], transformers: [transformerDirective()] }),
  ],
});
