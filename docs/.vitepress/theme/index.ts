import DefaultTheme from "vitepress/theme";
import { installComponents } from "atomu-vue";
import "./custom.css";
import "atomu-theme";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    installComponents(app);
  },
};
