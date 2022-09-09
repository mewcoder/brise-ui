<template>
  <div
    class="a-switch"
    :class="{ 'is-checked': modelValue, 'is-disabled': disabled }"
    @click="handleClick"
  >
    <input ref="input" class="a-switch__input" type="checkbox" />
    <span class="a-switch__core">
      <span class="a-switch__button"></span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { switchProps } from './swtich';

const props = defineProps(switchProps);
const emit = defineEmits(['update:modelValue', 'change']);

const input = ref<HTMLInputElement>();

onMounted(() => {
  input.value!.checked = props.modelValue;
});

const handleClick = () => {
  if (props.disabled) return;
  emit('update:modelValue', !props.modelValue);
  emit('change', !props.modelValue);
};
</script>

<script lang="ts">
export default {
  name: 'ASwitch',
  inheritAttrs: false
};
</script>
