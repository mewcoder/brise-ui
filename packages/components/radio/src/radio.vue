<template>
  <label class="a-radio" :class="{ 'is-checked': label === modelValue }">
    <input
      class="a-radio__input"
      type="radio"
      :value="label"
      v-model="modelValue"
    />
    <span class="a-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, computed, inject } from "vue";
import { radioProps, RadioProps } from "./types";

const props = defineProps(radioProps);
const radioRef = ref<HTMLInputElement>();

const radioGroup: any = inject("radioGroup", undefined);

const modelValue = computed<RadioProps["label"]>({
  get() {
    return radioGroup!.modelValue;
  },
  set(val) {
    radioGroup!.handleChange(val);
  },
});
</script>

<script lang="ts">
export default {
  name: "ARadio",
  inheritAttrs: false,
};
</script>
