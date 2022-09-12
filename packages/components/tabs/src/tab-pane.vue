<template>
  <transition name="tabs-fade">
    <div v-show="modelValue === props.name" class="a-tabs__content">
      <slot></slot></div
  ></transition>
</template>

<script setup lang="ts">
import { ref, computed, inject, getCurrentInstance, onMounted, onUnmounted } from 'vue';
import { tabPaneProps, TabPaneProps } from './tab-pane';

const props = defineProps(tabPaneProps);

const tabs: any = inject('tabs', undefined);

const modelValue = computed<TabPaneProps['label']>({
  get() {
    return tabs!.modelValue;
  },
  set(val) {
    tabs!.handleChange(val);
  }
});

onMounted(() => {
  tabs.registerPane(props.name, props.label);
});

onUnmounted(() => {
  tabs.unregisterPane(props.name);
});
</script>

<script lang="ts">
export default {
  name: 'ATabPane',
  inheritAttrs: false
};
</script>
