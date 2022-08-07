<template>
  <form class="a-form">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { reactive, provide, ref } from "vue";
import { formProps } from "./api";
import { eventBus } from "atoms-ui-utils";
const props = defineProps(formProps);

const fields = ref<string[]>([]);

eventBus.$on("on-form-item-add", (field: string) => {
  if (field) {
    fields.value.push(field);
  }
});

eventBus.$on("on-form-removeField", (field: string) => {
  if (field.prop) {
    fields.value.splice(fields.value.indexOf(field), 1);
  }
});

provide(
  "form",
  reactive({
    resetField,
    validate,
  })
);

const resetField = () => {
  fields.value.forEach((field) => {
    field.resetField();
  });
};
// 公开方法：全部校验数据，支持 Promise
const validate = (callback) => {
  return new Promise((resolve) => {
    let valid = true;
    let count = 0;
    fields.value.forEach((field) => {
      field.validate("", (errors) => {
        if (errors) {
          valid = false;
        }
        if (++count === fields.value.length) {
          // 全部完成
          resolve(valid);
          if (typeof callback === "function") {
            callback(valid);
          }
        }
      });
    });
  });
};
</script>

<script lang="ts">
export default {
  name: "AForm",
};
</script>
