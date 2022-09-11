import { ExtractPropTypes, PropType } from 'vue';

export const messageProps = {
  type: {
    type: String as PropType<'success' | 'info' | 'warning' | 'danger'>,
    default: 'info'
  },
  message: {
    type: String
  },
  closable: {
    type: Boolean,
    default: true
  }
} as const;

export type MessageProps = ExtractPropTypes<typeof messageProps>;
