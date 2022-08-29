<template>
  <!-- 对话框的遮罩 .self代表只有点击自己才触发 -->
  <transition name="dialog-fade">
    <div class="a-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="a-dialog" :style="{ width, marginTop: top }">
        <div class="a-dialog__header">
          <slot name="title">
            <span class="a-dialog__title">{{ title }}</span>
          </slot>
          <button class="a-dialog__headerbtn" @click="handleClose">x</button>
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
import { ref, computed } from "vue";
import { modalProps } from "./types";

const props = defineProps(modalProps);
const emit = defineEmits(["update:modelValue"]);

let visible = computed(() => {
  return props.modelValue;
});

const handleClose = () => {
  emit("update:modelValue", false);
};
</script>

<script lang="ts">
export default {
  name: "AModal",
  inheritAttrs: false,
};
</script>
