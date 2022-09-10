import { ExtractPropTypes, PropType } from 'vue';

export const modalProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String
  },
  width: {
    type: String,
    default: '50vw'
  },
  top: {
    type: String,
    default: '15vh'
  }
} as const;

export type ModalProps = ExtractPropTypes<typeof modalProps>;
