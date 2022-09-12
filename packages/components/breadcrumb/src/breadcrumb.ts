import { ExtractPropTypes, PropType } from 'vue';

export const breadcrumbProps = {
  value: {
    type: Array as PropType<string[]>,
    default: () => []
  }
} as const;

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
