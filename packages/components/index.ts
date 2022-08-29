import type { App } from "vue";
export * from "./icon";
export * from "./button";
import Icon from "./icon";
import Button from "./button";
import Input from "./input";
import Form from "./form";
import Rate from "./rate";
import Modal from "./modal";
import Switch from "./switch";
import Radio from "./radio";

const plugins = [Icon, Button, Input, Rate, Modal, Switch, Radio, ...Form];

export function installComponents(app: App) {
  plugins.forEach((plugin) => app.use(plugin));
}
