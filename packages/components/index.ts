import type { App } from "vue";
export * from "./icon";
export * from "./button";
import Icon from "./icon";
import Button from "./button";
import Input from "./input";
import Form from "./form";
import Rate from "./rate";
import Dialog from "./dialog";
import Switch from "./switch";
import Radio from "./radio";
import Checkbox from "./checkbox";
import Collapse from "./collapse";
import Tree from "./tree";
import Dropdown from "./dropdown";

const plugins = [
  Icon,
  Button,
  Input,
  Rate,
  Dialog,
  Switch,
  Radio,
  Checkbox,
  Collapse,
  Tree,
  Dropdown,
  Form,
];

export function installComponents(app: App) {
  plugins.forEach((plugin) => app.use(plugin));
}
