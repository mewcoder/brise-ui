<template>
  <input
    :class="inputClass"
    :disabled="disabled"
    :value="modelValue"
    :placeholder="placeholder"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"
    @change="handleChange"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
  />
</template>

<script setup lang="ts">
import { ref, computed, inject } from "vue";
import { inputProps } from "./types";

const props = defineProps(inputProps);

const emit = defineEmits(["update:modelValue", "blur", "focus", "change"]);

const formItem: any = inject("form-item");

const inputClass = computed(() => ({
  "a-input": true,
  "a-input--disabled": props.disabled,
}));

const isComposing = ref(false);

// handlers
const handleInput = (e: Event) => {
  if (isComposing.value) return;
  let { value } = e.target as HTMLInputElement;
  emit("update:modelValue", value);
};

const handleChange = (e: Event) => {
  emit("change", e);
  formItem?.validate?.("change");
};

const handleFocus = (e: FocusEvent) => {
  emit("focus", e);
};

const handleBlur = (e: FocusEvent) => {
  emit("blur", e);
  formItem?.validate?.("blur");
};

const handleCompositionStart = () => {
  isComposing.value = true;
};

const handleCompositionEnd = (e: CompositionEvent) => {
  if (isComposing.value) {
    isComposing.value = false;
    handleInput(e);
  }
};
</script>

<script lang="ts">
export default {
  name: "AInput",
  inheritAttrs: false,
};
</script>
