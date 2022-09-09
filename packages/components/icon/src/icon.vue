<template>
  <i class="a-icon" :style="styleObj">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { iconProps } from './icon';

const props = defineProps(iconProps);

const styleObj = computed(() => (props.color ? { color: props.color } : {}));
</script>
<script lang="ts">
export default {
  name: 'a-icon',
  inheritAttrs: false
};
</script>
