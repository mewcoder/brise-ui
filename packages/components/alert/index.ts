import _Alert from "./src/alert.vue";
import { withInstall } from "brise-utils";

const Alert = withInstall(_Alert);

export default Alert;

export * from "./src/alert";

declare module "vue" {
  export interface GlobalComponents {
    AAlert: typeof Alert;
  }
}
