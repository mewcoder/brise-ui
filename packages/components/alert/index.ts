import _Rate from "./src/rate.vue";
import { withInstall } from "atoms-ui-utils";

const Rate = withInstall(_Rate);

export default Rate;

export * from "./src/types";

declare module "vue" {
  export interface GlobalComponents {
    ARate: typeof Rate;
  }
}
