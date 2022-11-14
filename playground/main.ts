import { createApp } from "vue";
import App from "./App.vue";

import { installComponents } from "brise-vue";
import 'brise-theme'

const app = createApp(App);

installComponents(app);

app.mount("#app");
