import { defineConfig } from "vite";
import unocss from "unocss/vite";
import { presetUno } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import { defaultTheme } from "atomu-theme/preset.mjs";
export default defineConfig({
  root: "playground",
  plugins: [
    unocss({
      presets: [presetUno(), defaultTheme()],
      transformers: [transformerDirective()],
    }),
  ],
});
