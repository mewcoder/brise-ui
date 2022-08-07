import { ExtractPropTypes, PropType } from "vue";

export const formProps = {
  model: Object,
  rules: Object,
} as const;

export const formItemProps = {
  label: String,
  prop: String,
} as const;

export type FormProps = ExtractPropTypes<typeof formProps>;

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
