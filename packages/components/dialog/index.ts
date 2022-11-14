import _Dialog from "./src/dialog.vue";
import { withInstall } from "brise-utils";

const Dialog = withInstall(_Dialog);

export default Dialog;

export * from "./src/dialog";

declare module "vue" {
  export interface GlobalComponents {
    ADialog: typeof Dialog;
  }
}
