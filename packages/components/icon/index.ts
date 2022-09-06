import _Icon from "./src/icon.vue";
import { withInstall } from "atomu-utils";

const Icon = withInstall(_Icon);

export default Icon;

export * from "./src/api";

declare module "vue" {
  export interface GlobalComponents {
    AIcon: typeof Icon;
  }
}
