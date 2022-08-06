<template>
  <button :class="classList">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { buttonProps } from "./api";
const props = defineProps(buttonProps);
const classList = ref(["a-button", `a-button--${props.type}`]);
</script>

<script lang="ts">
export default {
  name: "a-button",
};
</script>
