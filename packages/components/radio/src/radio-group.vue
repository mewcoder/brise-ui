<template>
  <div :class="classObj">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, computed, toRefs, reactive } from 'vue';
import { radioGroupProps, RadioGroupProps } from './radio-group';

const props = defineProps(radioGroupProps);
const emit = defineEmits(['update:modelValue', 'change']);

const classObj = computed(() => ({
  'a-radio-group': true,
  'is-disabled': props.disabled
}));

const handleChange = (value: RadioGroupProps['modelValue']) => {
  emit('update:modelValue', value);
  emit('change', value);
};

provide('radioGroup', reactive({ handleChange, ...toRefs(props) }));
</script>

<script lang="ts">
export default {
  name: 'ARadioGroup',
  inheritAttrs: false
};
</script>
