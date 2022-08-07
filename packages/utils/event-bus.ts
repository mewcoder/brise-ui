import emitter from "tiny-emitter/instance";

export const eventBus = {
  $on: (...args: any) => emitter.on(...args),
  $once: (...args: any) => emitter.once(...args),
  $off: (...args: any) => emitter.off(...args),
  $emit: (...args: any) => emitter.emit(...args),
};
