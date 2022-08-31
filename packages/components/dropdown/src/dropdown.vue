<template>
  <div class="dropdown" ref="dropdownRef">
    <div
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click="toggleOpen"
    >
      {{ modelValue }}
    </div>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { dropdownProps } from "./types";
import useClickOutside from "./useClickOutside";

defineProps(dropdownProps);
const emit = defineEmits(["update:modelValue", "change"]);

const isOpen = ref(true);
const dropdownRef = ref<null | HTMLElement>(null);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
const isClickOutside = useClickOutside(dropdownRef);

watch(isClickOutside, () => {
  if (isOpen.value && isClickOutside.value) {
    isOpen.value = false;
  }
});
</script>

<script lang="ts">
export default {
  name: "ADropdown",
  inheritAttrs: false,
};
</script>
