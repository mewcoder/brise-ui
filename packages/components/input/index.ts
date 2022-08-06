import _Input from "./src/input.vue";
import { withInstall } from "atoms-ui-utils";

const Input = withInstall(_Input);

export default Input;

export * from "./src/api";

declare module "vue" {
  export interface GlobalComponents {
    AInput: typeof Input;
  }
}
