import { ExtractPropTypes, PropType } from "vue";

export const buttonProps = {
  type: {
    type: String as PropType<
      "default" | "primary" | "success" | "warning" | "danger"
    >,
    default: "default",
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
