import _Breadcrumb from "./src/breadcrumb.vue";
import { withInstall } from "brise-utils";

const Breadcrumb = withInstall(_Breadcrumb);

export default Breadcrumb;

export * from "./src/breadcrumb";

declare module "vue" {
  export interface GlobalComponents {
    ABreadcrumb: typeof Breadcrumb;
  }
}
