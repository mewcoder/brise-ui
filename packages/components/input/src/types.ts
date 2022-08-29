import { ExtractPropTypes, PropType } from "vue";

export const inputProps = {
  modelValue: {
    type: [Number, String] as PropType<number | string>,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
  },
} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;
