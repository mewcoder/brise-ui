import { ExtractPropTypes, PropType } from 'vue';

export const iconProps = {
  color: String
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
