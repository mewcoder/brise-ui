<template>
  <label class="a-checkbox" :class="{ 'is-checked': isChecked }">
    <input
      class="a-checkbox__input"
      type="checkbox"
      :value="label"
      v-model="modelValue"
    />
    <span class="a-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, computed, inject } from "vue";
import { checkboxProps, CheckboxProps } from "./types";

const props: any = defineProps(checkboxProps);

const checkboxGroup: any = inject("checkboxGroup", undefined);

const modelValue = computed<CheckboxProps[]>({
  get() {
    return checkboxGroup!.modelValue;
  },
  set(val) {
    checkboxGroup!.handleChange(val);
  },
});

const isChecked = () => {
  return modelValue.value.includes(props.label);
};
</script>

<script lang="ts">
export default {
  name: "ACheckbox",
  inheritAttrs: false,
};
</script>
