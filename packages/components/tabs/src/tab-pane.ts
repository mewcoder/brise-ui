import { ExtractPropTypes, PropType } from 'vue';

export const tabPaneProps = {
  name: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  label: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  }
} as const;

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;
