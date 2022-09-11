import { ExtractPropTypes, PropType } from 'vue';

export const alertProps = {
  type: {
    type: String as PropType<'success' | 'info' | 'warning' | 'danger'>,
    default: 'info'
  },
  title: {
    type: String
  },
  simple: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: true
  }
} as const;

export type AlertProps = ExtractPropTypes<typeof alertProps>;
