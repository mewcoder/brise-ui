<template>
  <transition name="dialog-fade">
    <!-- 对话框的遮罩 .self代表只有点击自己才触发 -->
    <div class="a-dialog__wrapper" v-show="modelValue" @click.self="handleClose">
      <div class="a-dialog" :style="{ width, marginTop: top }">
        <div class="a-dialog__header">
          <slot name="title">
            <span class="a-dialog__title">{{ title }}</span>
          </slot>
          <button class="a-dialog__close" @click="handleClose"><XMarkIcon /></button>
        </div>
        <div class="a-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="a-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { dialogProps } from './dialog';
import { XMarkIcon } from '@heroicons/vue/24/solid';

defineProps(dialogProps);
const emit = defineEmits(['update:modelValue']);

const handleClose = () => {
  emit('update:modelValue', false);
};
</script>

<script lang="ts">
export default {
  name: 'ADialog',
  inheritAttrs: false
};
</script>
