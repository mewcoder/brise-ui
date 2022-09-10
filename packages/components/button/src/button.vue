<template>
  <button :class="classObj">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { buttonProps } from './button';

const props = defineProps(buttonProps);

const classObj = computed(() => ({
  'a-button': true,
  [`a-button--${props.type}`]: true,
  'is-disabled': props.disabled,
  'is-round': props.round
}));
</script>

<script lang="ts">
export default {
  name: 'a-button',
  // inheritAttrs: false
};
</script>
