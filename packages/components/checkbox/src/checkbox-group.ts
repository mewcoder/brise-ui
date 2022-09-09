import { ExtractPropTypes, PropType } from 'vue';

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<string[] | number[]>,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
