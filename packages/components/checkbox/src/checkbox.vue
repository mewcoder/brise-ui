<template>
  <span class="a-checkbox" :class="{ 'is-checked': isChecked, 'is-disabled': disabled }">
    <input
      class="a-checkbox__inner"
      type="checkbox"
      :id="label + ''"
      :value="label"
      :disabled="disabled"
      v-model="modelValue"
    />
    <label :for="label + ''" class="a-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </label>
  </span>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { checkboxProps, CheckboxProps } from './checkbox';

const props: any = defineProps(checkboxProps);

const checkboxGroup: any = inject('checkboxGroup', undefined);

const disabled = computed(() => {
  return checkboxGroup.disabled || props.disabled;
});

const modelValue = computed<CheckboxProps[]>({
  get() {
    return checkboxGroup!.modelValue;
  },
  set(val) {
    checkboxGroup!.handleChange(val);
  }
});

const isChecked = () => {
  return modelValue.value.includes(props.label);
};
</script>

<script lang="ts">
export default {
  name: 'ACheckbox',
  inheritAttrs: false
};
</script>
