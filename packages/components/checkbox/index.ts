import _Checkbox from './src/checkbox.vue';
import _CheckboxGroup from './src/checkbox-group.vue';
import { withInstall, withNoopInstall } from 'atomu-utils';

const Checkbox = withInstall(_Checkbox, {
  _CheckboxGroup
});

export default Checkbox;
export const CheckboxGroup = withNoopInstall(_CheckboxGroup);

export * from './src/checkbox';
export * from './src/checkbox-group';
declare module 'vue' {
  export interface GlobalComponents {
    ACheckbox: typeof Checkbox;
    ACheckboxGroup: typeof CheckboxGroup;
  }
}
