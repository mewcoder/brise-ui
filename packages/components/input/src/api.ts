import { ExtractPropTypes, PropType } from "vue";

export const inputProps = {
  modelValue: [Number, String] as PropType<number | string>,
  disabled: {
    type:Boolean,
    default:false
  },
} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;
