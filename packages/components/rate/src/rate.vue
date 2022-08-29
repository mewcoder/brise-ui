<template>
  <div class="a-rate">
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
import { ref } from "vue";
import { rateProps } from "./types";

const props = defineProps(rateProps);
const emit = defineEmits(["update:modelValue"]);

let currentValue = ref(props.modelValue);

const setCurrentValue = (val: number) => {
  currentValue.value = val;
};

const resetCurrentValue = () => {
  currentValue.value = props.modelValue;
};

const selectValue = (val: number) => {
  emit("update:modelValue", val);
};
</script>

<script lang="ts">
export default {
  name: "ARate",
  inheritAttrs: false,
};
</script>
