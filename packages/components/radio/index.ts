import _Radio from './src/radio.vue';
import _RadioGroup from './src/radio-group.vue';
import { withInstall, withNoopInstall } from 'atomu-utils';

const Radio = withInstall(_Radio, {
  _RadioGroup
});

export default Radio;
export const RadioGroup = withNoopInstall(_RadioGroup);

export * from './src/radio';
export * from './src/radio-group';
declare module 'vue' {
  export interface GlobalComponents {
    ARadio: typeof Radio;
    ARadioGroup: typeof RadioGroup;
  }
}
