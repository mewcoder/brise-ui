import { ExtractPropTypes, PropType } from 'vue';

export const checkboxProps = {
  label: {
    type: [String, Number] as PropType<string | number>
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
