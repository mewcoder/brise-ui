<template>
  <div class="a-collapse"><slot /></div>
</template>

<script setup lang="ts">
import { ref, computed, provide } from "vue";
import { collapseProps } from "./types";

const props = defineProps(collapseProps);
const emit = defineEmits(["update:modelValue", "change"]);

const activeNames: any = computed(() => {
  return props.modelValue;
});

const setAcitve = (name: string | number) => {
  const index = activeNames.value.indexOf(name);
  if (index > -1) {
    activeNames.value.splice(index, 1);
  } else {
    activeNames.value.push(name);
  }
};

provide("collapse", {
  activeNames,
  setAcitve,
});
</script>

<script lang="ts">
export default {
  name: "ACollapse",
  inheritAttrs: false,
};
</script>
