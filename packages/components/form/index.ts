import _Form from "./src/form.vue";
import { withInstall } from "atoms-ui-utils";

const Form = withInstall(_Form);

export default Form;

export * from "./src/api";

declare module "vue" {
  export interface GlobalComponents {
    AForm: typeof Form;
  }
}
