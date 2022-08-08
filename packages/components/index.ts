import type { App } from "vue";
export * from "./icon";
export * from "./button";
import Icon from "./icon";
import Button from "./button";
import Input from "./input";
import Form from "./form";

const plugins = [Icon, Button, Input, ...Form];

export function installComponents(app: App) {
  plugins.forEach((plugin) => app.use(plugin));
}
