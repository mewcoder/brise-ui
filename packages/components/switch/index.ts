import _Switch from "./src/switch.vue";
import { withInstall } from "atomu-utils";

const Switch = withInstall(_Switch);

export default Switch;

export * from "./src/swtich";

declare module "vue" {
  export interface GlobalComponents {
    ASwitch: typeof Switch;
  }
}
