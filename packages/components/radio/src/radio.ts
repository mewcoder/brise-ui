import { ExtractPropTypes, PropType } from 'vue';

export const radioProps = {
  label: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type RadioProps = ExtractPropTypes<typeof radioProps>;
