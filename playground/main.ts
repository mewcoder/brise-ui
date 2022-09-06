import { createApp } from "vue";
import App from "./App.vue";

import { installComponents } from "atomu-vue";
import 'atomu-theme'

const app = createApp(App);

installComponents(app);

app.mount("#app");
