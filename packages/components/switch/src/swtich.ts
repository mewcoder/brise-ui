import { ExtractPropTypes, PropType } from 'vue';

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type SwitchProps = ExtractPropTypes<typeof switchProps>;
