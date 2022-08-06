import { createApp } from "vue";
import App from "./App.vue";

import { installComponents } from "atoms-ui-vue";
import 'atoms-ui-theme'

const app = createApp(App);

installComponents(app);

app.mount("#app");
