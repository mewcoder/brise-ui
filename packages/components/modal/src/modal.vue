<template>
  <!-- 对话框的遮罩 .self代表只有点击自己才触发 -->
  <div class="a-dialog__wrapper" v-show="modelValue" @click.self="handleClose">
    <div class="a-dialog" :style="{ width, marginTop: top }">
      <div class="a-dialog__header">
        <slot name="title">
          <span class="a-dialog__title">{{ title }}</span>
        </slot>
        <button class="a-dialog__close" @click="handleClose"><AIconClose /></button>
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
</template>

<script setup lang="ts">
import { modalProps } from './modal';
import { AIconClose } from '../../inner';

defineProps(modalProps);
const emit = defineEmits(['update:modelValue']);

const handleClose = () => {
  emit('update:modelValue', false);
};
</script>

<script lang="ts">
export default {
  name: 'AModal',
  inheritAttrs: false
};
</script>
