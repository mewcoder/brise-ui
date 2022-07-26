import { createApp } from "vue";
import App from "./App.vue";
import { installComponents } from "atoms-ui-vue";

const app = createApp(App);

installComponents(app);

app.mount("#app");
