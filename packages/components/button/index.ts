import _Button from "./src/button.vue";
import { withInstall } from "atomu-utils";

const Button = withInstall(_Button);

export default Button;

export * from "./src/api";

declare module "vue" {
  export interface GlobalComponents {
    AButton: typeof Button;
  }
}
