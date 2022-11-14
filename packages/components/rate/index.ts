import _Rate from "./src/rate.vue";
import { withInstall } from "brise-utils";

const Rate = withInstall(_Rate);

export default Rate;

export * from "./src/rate";

declare module "vue" {
  export interface GlobalComponents {
    ARate: typeof Rate;
  }
}
