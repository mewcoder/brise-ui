import _Form from './src/form.vue';
import _FormItem from './src/form-item.vue';
import { withInstall, withNoopInstall } from 'brise-utils';

const Form = withInstall(_Form, {
  _FormItem
});

export default Form;
export const FormItem = withNoopInstall(_FormItem);

export * from './src/form';
export * from './src/form-item';

declare module 'vue' {
  export interface GlobalComponents {
    AForm: typeof Form;
    AFormItem: typeof FormItem;
  }
}
