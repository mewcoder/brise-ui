import { defineConfig } from "vite";
import unocss from "unocss/vite";
import { presetUno } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import { defaultTheme } from "atomu-theme/preset.mjs";
import vueJsx from "@vitejs/plugin-vue-jsx"; 
export default defineConfig({
  root: "playground",
  plugins: [
    vueJsx(),
    unocss({
      presets: [presetUno(), defaultTheme()],
      transformers: [transformerDirective()],
    }),
  ],
});
