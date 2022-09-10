import _Modal from "./src/modal.vue";
import { withInstall } from "atomu-utils";

const Modal = withInstall(_Modal);

export default Modal;

export * from "./src/modal";

declare module "vue" {
  export interface GlobalComponents {
    AModal: typeof Modal;
  }
}
