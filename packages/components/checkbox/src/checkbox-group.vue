<template>
  <div class="a-checkbox-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs, reactive } from "vue";
import { checkboxGroupProps } from "./types";
import { CheckboxGroupProps } from "./types";
const props = defineProps(checkboxGroupProps);
const emit = defineEmits(["update:modelValue"]);

const handleChange = (value: CheckboxGroupProps["modelValue"]) => {
  emit("update:modelValue", value);
};

provide("checkboxGroup", reactive({ handleChange, ...toRefs(props) }));
</script>

<script lang="ts">
export default {
  name: "ACheckboxGroup",
  inheritAttrs: false,
};
</script>
