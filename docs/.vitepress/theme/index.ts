import DefaultTheme from "vitepress/theme";
import { installComponents } from "atoms-ui-vue";
import "atoms-ui-theme/style.css";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    installComponents(app);
  },
};
