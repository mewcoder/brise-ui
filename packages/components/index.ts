import type { App } from "vue";
export * from "./icon";
export * from "./button";
import Icon from "./icon";
import Button from "./button";

const plugins = [Icon, Button];

export function installComponents(app: App) {
  plugins.forEach((plugin) => app.use(plugin));
}
