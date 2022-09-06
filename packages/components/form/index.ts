import _Form from "./src/form.vue";
import _FormItem from "./src/form-item.vue";
import { withInstall } from "atomu-utils";

const Form = withInstall(_Form);
const FormItem = withInstall(_FormItem);

export default [Form, FormItem];

export * from "./src/api";

declare module "vue" {
  export interface GlobalComponents {
    AForm: typeof Form;
  }
}
