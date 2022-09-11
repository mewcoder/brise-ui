<template>
  <div v-if="visible" :class="classObj">
    <slot>
      <p class="a-alert__content">{{ title }}</p>
    </slot>
    <AIconClose v-if="closable" class="a-alert__close" @click="handleClose" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { alertProps } from './alert';
import { AIconClose } from '../../inner';

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
