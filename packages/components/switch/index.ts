import _Switch from "./src/switch.vue";
import { withInstall } from "atoms-ui-utils";

const Switch = withInstall(_Switch);

export default Switch;

export * from "./src/types";

declare module "vue" {
  export interface GlobalComponents {
    ASwitch: typeof Switch;
  }
}
