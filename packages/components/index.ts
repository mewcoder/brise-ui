export * from "./icon";
import { App } from "vue";
import Icon from "./icon";

const plugins = [Icon];

export function installComponents(app: App) {
  plugins.forEach((plugin) => app.use(plugin));
}
