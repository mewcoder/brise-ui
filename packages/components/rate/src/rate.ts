import { ExtractPropTypes, PropType } from 'vue';

export const rateProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type RateProps = ExtractPropTypes<typeof rateProps>;
