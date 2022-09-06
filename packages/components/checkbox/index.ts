import _Checkbox from "./src/checkbox.vue";
import _CheckboxGroup from "./src/checkbox-group.vue";
import { withInstall } from "atomu-utils";

const Checkbox = withInstall(_Checkbox, {
   _CheckboxGroup,
});


export default Checkbox;
export * from "./src/types";

declare module "vue" {
  export interface GlobalComponents {
    ACheckBox: typeof Checkbox;
  }
}
