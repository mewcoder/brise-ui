import type { Plugin } from "vue";

export type SFCWithInstall<T> = T & Plugin;

export function withInstall<T>(comp: T, extra?: any) {
  (comp as SFCWithInstall<T>).install = function (app) {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp);
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (comp as any)[key] = comp;
    }
  }
  return comp as SFCWithInstall<T>;
}
