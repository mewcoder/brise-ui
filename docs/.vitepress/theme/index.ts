import DefaultTheme from "vitepress/theme";
import { installComponents } from "brise-vue";
import "./custom.css";
import "brise-theme";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    installComponents(app);
  },
};
