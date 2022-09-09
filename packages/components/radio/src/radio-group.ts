import { ExtractPropTypes, PropType } from 'vue';

export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
