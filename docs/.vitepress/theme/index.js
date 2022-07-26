import DefaultTheme from "vitepress/theme";

import { installComponents } from "atoms-ui-vue";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    installComponents(app);
  },
};
