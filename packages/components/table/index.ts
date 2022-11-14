import _Table from "./src/rate.vue";
import { withInstall } from "brise-utils";

const Table = withInstall(_Table);

export default Table;

export * from "./src/table";

declare module "vue" {
  export interface GlobalComponents {
    ATable: typeof Table;
  }
}
