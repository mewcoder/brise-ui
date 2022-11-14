import _Input from "./src/input.vue";
import { withInstall } from "brise-utils";

const Input = withInstall(_Input);

export default Input;

export * from "./src/input";

declare module "vue" {
  export interface GlobalComponents {
    AInput: typeof Input;
  }
}
