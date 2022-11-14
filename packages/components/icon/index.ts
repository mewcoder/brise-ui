import _Icon from "./src/icon.vue";
import { withInstall } from "brise-utils";

const Icon = withInstall(_Icon);

export default Icon;

export * from "./src/icon";

declare module "vue" {
  export interface GlobalComponents {
    AIcon: typeof Icon;
  }
}
