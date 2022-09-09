<template>
  <div class="a-rate" :class="{ 'is-disabled': disabled }">
    <span
      v-for="(item, index) in 5"
      :key="index"
      class="a-rate__item"
      :class="'a-rate__item--' + (currentValue >= item ? 'on' : 'off')"
      @mousemove="setCurrentValue(item)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 576 512"
      >
        <path
          d="M259.3 17.8L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { rateProps } from './rate';

const props = defineProps(rateProps);
const emit = defineEmits(['update:modelValue', 'change']);

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
