import { ExtractPropTypes, PropType } from 'vue';

export const tabsProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type TabsProps = ExtractPropTypes<typeof tabsProps>;
