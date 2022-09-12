<template>
  <transition name="alert-fade">
    <div v-if="visible" :class="classObj">
      <InformationCircleIcon v-if="type === 'info'" class="a-alert__icon" />
      <CheckCircleIcon v-if="type === 'success'" class="a-alert__icon" />
      <ExclamationCircleIcon v-if="type === 'warning'" class="a-alert__icon" />
      <XCircleIcon v-if="type === 'danger'" class="a-alert__icon" />
      <slot>
        <p class="a-alert__content">{{ title }}</p>
      </slot>
      <XIcon v-if="closable" class="a-alert__close" @click="handleClose" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { alertProps } from './alert';
import {
  XIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon
} from 'atomu-icons';

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
