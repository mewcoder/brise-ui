<template>
  <span class="a-radio" :class="{ 'is-checked': label === modelValue, 'is-disabled': disabled }">
    <input
      class="a-radio__inner"
      type="radio"
      :id="label + ''"
      :value="label"
      :disabled="disabled"
      v-model="modelValue"
    />
    <label :for="label + ''" class="a-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </label>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import { radioProps, RadioProps } from './radio';

const props = defineProps(radioProps);

const radioGroup: any = inject('radioGroup', undefined);

const disabled = computed(() => {
  return radioGroup.disabled || props.disabled;
});

const modelValue = computed<RadioProps['label']>({
  get() {
    return radioGroup!.modelValue;
  },
  set(val) {
    radioGroup!.handleChange(val);
  }
});
</script>

<script lang="ts">
export default {
  name: 'ARadio',
  inheritAttrs: false
};
</script>
