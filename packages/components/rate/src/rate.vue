<template>
  <div :class="classObj">
    <span
      v-for="(item, index) in 5"
      :key="index"
      class="a-rate__item"
      :class="'a-rate__item--' + (currentValue >= item ? 'on' : 'off')"
      @mousemove="setCurrentValue(item)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      &#9733;
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { rateProps } from './rate';

const props = defineProps(rateProps);
const emit = defineEmits(['update:modelValue', 'change']);

const classObj = computed(() => ({
  'a-rate': true,
  'a-rate--disabled': props.disabled
}));

let currentValue = ref(props.modelValue);

const setCurrentValue = (val: number) => {
  if (props.disabled) return;
  currentValue.value = val;
};

const resetCurrentValue = () => {
  if (props.disabled) return;
  currentValue.value = props.modelValue;
};

const selectValue = (val: number) => {
  if (props.disabled) return;
  emit('update:modelValue', val);
  emit('change', val);
};
</script>

<script lang="ts">
export default {
  name: 'ARate',
  inheritAttrs: false
};
</script>
