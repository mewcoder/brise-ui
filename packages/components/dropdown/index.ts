import _Dropdown from "./src/dropdown.vue";
import DropdownItem from "./src/dropdown-item.vue";
import { withInstall } from "atoms-ui-utils";

const Dropdown = withInstall(_Dropdown, { DropdownItem });

export default Dropdown;

export * from "./src/types";

declare module "vue" {
  export interface GlobalComponents {
    ADropdown: typeof Dropdown;
  }
}
