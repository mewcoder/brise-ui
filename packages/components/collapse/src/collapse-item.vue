<template>
  <div class="a-collapse-item">
    <div class="a-collapse-item__header" @click="handleHeaderClick">
      <span> {{ title }}</span>
      <ChevronDownIcon v-if="isActive" />
      <ChevronRightIcon v-else />
    </div>
    <transition name="collapse-fade">
      <div v-show="isActive" class="a-collapse-item__content">
        <slot /></div
    ></transition>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, computed } from 'vue';
import { collapseItemProps } from './types';
import { ChevronDownIcon, ChevronRightIcon } from 'brise-icons';

const props = defineProps(collapseItemProps);
const emit = defineEmits(['update:modelValue', 'change']);

const isClick = ref(false);

const collapse: any = inject('collapse');

const isActive = computed(() => collapse?.activeNames.value.includes(props.name));

const handleHeaderClick = () => {
  collapse?.setAcitve(props.name);
  isClick.value = true;
};
</script>

<script lang="ts">
export default {
  name: 'ACollapseItem',
  inheritAttrs: false
};
</script>
