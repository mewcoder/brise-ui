import _Modal from "./src/modal.vue";
import { withInstall } from "atoms-ui-utils";

const Modal = withInstall(_Modal);

export default Modal;

export * from "./src/types";

declare module "vue" {
  export interface GlobalComponents {
    AModal: typeof Modal;
  }
}
