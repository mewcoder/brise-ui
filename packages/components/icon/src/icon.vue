<template>
  <i class="a-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { iconProps } from "./api";

const props = defineProps(iconProps);

const style = computed(() => {
  return {
    ...(props.size ? { "font-size": `${props.size}px` } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>
<script lang="ts">
export default {
  name: "a-icon",
};
</script>
