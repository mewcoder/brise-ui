<template>
  <div class="a-breadcrumb">
    <span v-for="(item, index) in value" :key="index" class="a-breadcrumb__item">
      <ChevronRightIcon v-if="index > 0" />
      <!-- <ArrowLeftIcon v-if="index === 0" /> -->
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { breadcrumbProps } from './breadcrumb';
import { ArrowLeftIcon, ChevronRightIcon } from 'brise-icons';

const props = defineProps(breadcrumbProps);
// const emit = defineEmits(['update:modelValue', 'change']);

// let currentValue = ref(props.value);
</script>

<script lang="ts">
export default {
  name: 'ABreadcrumb',
  inheritAttrs: false
};
</script>
