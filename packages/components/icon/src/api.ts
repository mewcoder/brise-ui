import { ExtractPropTypes, PropType } from "vue";

export const iconProps = {
  color:String,
  size: { type: [Number, String] as PropType<number | string>, default: "16" },
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
