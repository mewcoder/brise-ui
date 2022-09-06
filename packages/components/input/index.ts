import _Input from "./src/input.vue";
import { withInstall } from "atomu-utils";

const Input = withInstall(_Input);

export default Input;

export * from "./src/types";

declare module "vue" {
  export interface GlobalComponents {
    AInput: typeof Input;
  }
}
