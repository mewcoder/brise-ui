import { ExtractPropTypes, PropType } from "vue";

export const collapseProps = {
  modelValue: {
    type: Array as PropType<string[] | number[]>,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;

export const collapseItemProps = {
  title: {
    type: String,
    default: "",
  },
  name: {
    type: [String, Number] as PropType<string | number>,
    default: "",
  },
} as const;

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;
