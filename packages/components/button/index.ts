import _Button from './src/button.vue';
import { withInstall } from 'brise-utils';

const Button = withInstall(_Button);

export default Button;

export * from './src/button';

declare module 'vue' {
  export interface GlobalComponents {
    AButton: typeof Button;
  }
}
