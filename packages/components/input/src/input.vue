<template>
  <input
    :class="classList"
    :disabled="disabled"
    :value="modelValue"
    @input="handleInput"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { inputProps } from "./api";
const props = defineProps(inputProps);
const classList = ref(["a-input"]);
if (props.disabled) {
  classList.value.push("a-input--disabled");
}
const emit = defineEmits(["update:modelValue"]);

const handleInput = (e: Event) => {
  if (isComposing.value) return;
  let { value } = e.target as HTMLInputElement;
  console.log(value);
  emit("update:modelValue", value);
};

const isComposing = ref(false);
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
