<template>
  <input
    :class="classList"
    :disabled="disabled"
    :value="modelValue"
    @input="handleInput"
    @blur="handleBlur"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
  />
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { inputProps } from "./api";
const props = defineProps(inputProps);

const formItem: any = inject("form-item");

const classList = ref(["a-input"]);
if (props.disabled) {
  classList.value.push("a-input--disabled");
}
const emit = defineEmits(["update:modelValue", "blur"]);

const isComposing = ref(false);

const handleInput = (e: Event) => {
  if (isComposing.value) return;
  let { value } = e.target as HTMLInputElement;
  emit("update:modelValue", value);
};

const handleBlur = (event: FocusEvent) => {
  emit("blur", event);
  formItem?.validate?.("blur");
};
const handleCompositionStart = () => {
  isComposing.value = true;
};
const handleCompositionEnd = (e: Event) => {
  if (isComposing.value) {
    isComposing.value = false;
    handleInput(e);
  }
};
</script>

<script lang="ts">
export default {
  name: "a-input",
};
</script>
