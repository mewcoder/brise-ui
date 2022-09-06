import _Collapse from "./src/collapse.vue";
import CollapseItem from "./src/collapse-item.vue";
import { withInstall } from "atomu-utils";

const Collapse = withInstall(_Collapse, { CollapseItem });

export default Collapse;

export * from "./src/types";

declare module "vue" {
  export interface GlobalComponents {
    ACollapse: typeof Collapse;
  }
}
