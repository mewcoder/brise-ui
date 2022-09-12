import { ExtractPropTypes, PropType } from 'vue';

export const tableProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type TableProps = ExtractPropTypes<typeof tableProps>;
