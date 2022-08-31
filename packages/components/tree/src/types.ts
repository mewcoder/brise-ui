import { ExtractPropTypes, PropType } from "vue";

export const treeProps = {
  data: {
    type: Array,
    default: () => [],
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
} as const;

export const nodeProps = {
  data: {
    type: Object,
    default: () => ({}),
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
} as const;


export type TreeProps = ExtractPropTypes<typeof treeProps>;
