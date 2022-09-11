import { ExtractPropTypes, PropType } from 'vue';

export const checkboxProps = {
  modelValue: {
    type: Array as PropType<string[] | number[]>,
    default: () => []
  },
  label: {
    type: [String, Number] as PropType<string | number>
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
