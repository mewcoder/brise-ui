<template>
  <div class="a-radio-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import { RadioGroupProps } from "./types";

const emit = defineEmits(["update:modelValue"]);

const handleChange = (value: RadioGroupProps["modelValue"]) => {
  emit("update:modelValue", value);
};

provide("radio-group", { handleChange });
</script>

<script lang="ts">
export default {
  name: "ARadioGroup",
  inheritAttrs: false,
};
</script>
