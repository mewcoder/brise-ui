<template>
  <transition name="message-fade">
    <div v-if="visible" :class="classObj">
      <slot>
        <p class="a-message__content">{{ message }}</p>
      </slot>
      <XIcon v-if="closable" class="a-message__close" @click="handleClose" /></div
  ></transition>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { messageProps } from './message';
import { XIcon } from 'brise-icons';

const props = defineProps(messageProps);

const classObj = computed(() => ({
  'a-message': true,
  [`a-message--${props.type}`]: true,
  'is-simple': props.simple
}));

const visible = ref(true);

const handleClose = () => {
  visible.value = false;
};
</script>

<script lang="ts">
export default {
  name: 'a-message'
};
</script>
