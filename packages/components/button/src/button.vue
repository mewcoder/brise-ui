<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <button class="a-btn" :class="[`a-btn-${type}`]"><slot></slot></button>
</template>

<script lang="ts">
export default {
  name: "a-button",
};
</script>
