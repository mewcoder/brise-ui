import { ExtractPropTypes } from "vue";

export const buttonProps = {
  color: String,
} as const;

export type buttonProps = ExtractPropTypes<typeof buttonProps>;
