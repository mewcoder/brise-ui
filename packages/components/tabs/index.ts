import _Tabs from './src/tabs.vue';
import _TabPane from './src/tab-pane.vue';
import { withInstall, withNoopInstall } from 'atomu-utils';

const Tabs = withInstall(_Tabs, {
  _TabPane
});

export default Tabs;
export const TabPane = withNoopInstall(_TabPane);

export * from './src/tabs';
export * from './src/tab-pane';

declare module 'vue' {
  export interface GlobalComponents {
    ATabs: typeof Tabs;
    TabPane: typeof TabPane;
  }
}
