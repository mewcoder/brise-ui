<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
import { dropdownItemProps } from "./types";

defineProps(dropdownItemProps);
</script>

<script lang="ts">
export default {
  name: "ADropdownItem",
  inheritAttrs: false,
};
</script>
<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
