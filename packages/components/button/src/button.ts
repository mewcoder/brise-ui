import { ExtractPropTypes, PropType } from 'vue';

export const buttonProps = {
  type: {
    type: String as PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
