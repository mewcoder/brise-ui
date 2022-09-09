import { ExtractPropTypes, PropType } from 'vue';

export const inputProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String
  }
} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;
