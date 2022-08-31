import { ExtractPropTypes, PropType } from "vue";

export const dropdownProps = {
  modelValue: {
    type: Number,
    default: 0,
  },
} as const;

export const dropdownItemProps = {
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
