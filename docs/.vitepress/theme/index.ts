import DefaultTheme from "vitepress/theme";
import { installComponents } from "atomu-vue";
import "atomu-theme";
import "./custom.css";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    installComponents(app);
  },
};
