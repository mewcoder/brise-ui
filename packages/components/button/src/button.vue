<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { buttonProps } from "./api";

const props = defineProps(buttonProps);

const buttonClass = computed(() => ({
  "a-button": true,
  [`a-button--${props.type}`]: true,
  "a-button--disabled": props.disabled,
}));
</script>

<script lang="ts">
export default {
  name: "a-button",
};
</script>
