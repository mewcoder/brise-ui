import DefaultTheme from "vitepress/theme";
// import "uno.css";
import { installComponents } from "atoms-ui-vue/index";
import "atoms-ui-theme/index";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    installComponents(app);
  },
};
