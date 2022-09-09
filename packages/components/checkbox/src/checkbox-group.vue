<template>
  <div class="a-check-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs, reactive } from 'vue';
import { checkboxGroupProps, CheckboxGroupProps } from './checkbox-group';

const props = defineProps(checkboxGroupProps);
const emit = defineEmits(['update:modelValue']);

const handleChange = (value: CheckboxGroupProps['modelValue']) => {
  emit('update:modelValue', value);
};

provide('checkboxGroup', reactive({ handleChange, ...toRefs(props) }));
</script>

<script lang="ts">
export default {
  name: 'ACheckboxGroup',
  inheritAttrs: false
};
</script>
