import _Radio from "./src/radio.vue";
import _RadioGroup from "./src/radio-group.vue";
import { withInstall } from "atoms-ui-utils";

const Radio = withInstall(_Radio, {
   _RadioGroup,
});


export default Radio;
export * from "./src/types";

declare module "vue" {
  export interface GlobalComponents {
    ARadio: typeof Radio;
  }
}
