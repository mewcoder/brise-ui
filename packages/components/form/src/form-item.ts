import { ExtractPropTypes, PropType } from 'vue';

export const formItemProps = {
  label: String,
  prop: String
} as const;

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
