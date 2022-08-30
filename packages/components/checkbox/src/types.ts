import { ExtractPropTypes, PropType } from "vue";

export const checkboxProps = {
  label: {
    type: [String, Number] as PropType<string | number>,
  },
} as const;

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<string[] | number[]>,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
