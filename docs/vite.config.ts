import { defineConfig } from "vite";
import unocss from "unocss/vite";
import { presetUno } from "unocss";
import transformerDirective from "@unocss/transformer-directives";

export default defineConfig({
  root: "playground",
  plugins: [
    unocss({ presets: [presetUno()], transformers: [transformerDirective()] }),
  ],
});
