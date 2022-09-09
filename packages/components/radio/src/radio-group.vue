<template>
  <div class="a-radio-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs, reactive } from "vue";
import { RadioGroupProps } from "./types";
import { radioGroupProps } from "./types";
const props = defineProps(radioGroupProps);
const emit = defineEmits(["update:modelValue", "change"]);

const handleChange = (value: RadioGroupProps["modelValue"]) => {
  emit("update:modelValue", value);
  emit("change", value);
};

provide("radioGroup", reactive({ handleChange, ...toRefs(props) }));
</script>

<script lang="ts">
export default {
  name: "ARadioGroup",
  inheritAttrs: false,
};
</script>
