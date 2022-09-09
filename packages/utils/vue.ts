import type { Plugin } from 'vue';
import { NOOP } from '@vue/shared';

export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

export const withNoopInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = NOOP;

  return component as SFCWithInstall<T>;
};

// export function withInstall<T>(comp: T, extra?: any) {
//   (comp as SFCWithInstall<T>).install = function (app) {
//     const { name } = comp as unknown as { name: string };
//     app.component(name, comp);
//   };

//   if (extra) {
//     for (const [key, comp] of Object.entries(extra)) {
//       (comp as any)[key] = comp;
//     }
//   }
//   return comp as SFCWithInstall<T>;
// }
