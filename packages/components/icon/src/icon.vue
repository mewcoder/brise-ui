<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { createNamespace } from "atoms-ui-utils";
import { iconProps } from "./icon";
const bem = createNamespace("icon");
const props = defineProps(iconProps);

const style = computed(() => {
  if (!props.size && !props.color) return {};
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>
<script lang="ts">
export default {
  name: "a-icon",
};
</script>
