<template>
  <div class="a-tabs">
    <div class="a-tabs__nav">
      <span
        class="a-tabs__item"
        v-for="key in Object.keys(panes)"
        :key="key"
        :class="{ 'is-checked': key === modelValue, 'is-disabled': disabled }"
        @click="handleChange(key)"
      >
        {{ panes[key] }}
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs, reactive, onMounted } from 'vue';
import { tabsProps, TabsProps } from './tabs';

const props = defineProps(tabsProps);
const emit = defineEmits(['update:modelValue', 'change']);

const handleChange = (value: TabsProps['modelValue']) => {
  emit('update:modelValue', value);
  emit('change', value);
};

const panes: any = reactive({});

const registerPane = (name: TabsProps['modelValue'], label: string) => (panes[name] = label);
const unregisterPane = (name: TabsProps['modelValue']) => delete panes[name];

provide('tabs', reactive({ handleChange, registerPane, unregisterPane, ...toRefs(props) }));

onMounted(() => {
  console.log(panes);
});
</script>

<script lang="ts">
export default {
  name: 'ATabs',
  inheritAttrs: false
};
</script>
