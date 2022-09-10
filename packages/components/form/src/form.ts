import { ExtractPropTypes, PropType } from 'vue';

export const formProps = {
  model: Object,
  rules: Object
} as const;

export type FormProps = ExtractPropTypes<typeof formProps>;
