<template>
  <transition name="alert-fade">
    <div v-if="visible" :class="classObj">
      <CheckCircleIcon class="w-5 h-5"/>
      <slot>
        <p class="a-alert__content">{{ title }}</p>
      </slot>
      <AIconClose v-if="closable" class="a-alert__close" @click="handleClose" /></div
  ></transition>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { alertProps } from './alert';
import { AIconClose } from '../../inner';
import { CheckCircleIcon } from '@heroicons/vue/20/solid';

const props = defineProps(alertProps);

const classObj = computed(() => ({
  'a-alert': true,
  [`a-alert--${props.type}`]: true,
  'is-simple': props.simple
}));

const visible = ref(true);

const handleClose = () => {
  visible.value = false;
};
</script>

<script lang="ts">
export default {
  name: 'a-alert'
};
</script>
